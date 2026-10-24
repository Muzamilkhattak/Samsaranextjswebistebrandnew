const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('htmltojsx');

const converter = new HTMLtoJSX({
  createClass: false
});

const teamMembers = [
  { folder: 'dr-erika', name: 'DrErika' },
  { folder: 'dr-Michelle', name: 'DrMichelle' },
  { folder: 'dr-Sierra', name: 'DrSierra' },
  { folder: 'dr-tonimaguire', name: 'DrToniMaguire' },
  { folder: 'dr-yves-jodesty', name: 'DrYvesJodesty' },
  { folder: 'mark-jodesty', name: 'MarkJodesty' },
  { folder: 'maureen-murphy', name: 'MaureenMurphy' },
  { folder: 'shahmeer-alam', name: 'ShahmeerAlam' }
];

const baseDir = path.resolve('./Samsara website sep live now/samsaraweb  sep 8 changes/about');

for (const { folder, name } of teamMembers) {
  const srcHtmlPath = path.join(baseDir, folder, 'index.html');
  if (!fs.existsSync(srcHtmlPath)) {
    console.error('Source not found:', srcHtmlPath);
    continue;
  }
  
  const rawHtml = fs.readFileSync(srcHtmlPath, 'utf8');
  
  // Extract title and description
  const titleMatch = rawHtml.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : `${folder} | Samsara Aesthetics & Wellness`;
  const descMatch = rawHtml.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const description = descMatch ? descMatch[1].trim() : `Learn more about our team at Samsara Aesthetics & Wellness in Plantation, FL.`;

  // Extract everything between header and footer
  const bodyMatch = rawHtml.match(/<section class="header[^>]*>.*?<\/section>\s*(.*?)<section class="footer[^>]*>/s);
  if (!bodyMatch) {
    console.error(`Could not extract body for ${folder}`);
    continue;
  }
  
  let html = bodyMatch[1];
  
  // Remove call-widget if already global or present
  // Keep the main content
  
  // Convert to JSX
  let jsx = converter.convert(html).trim();

  // Fix missing replacements
  jsx = jsx.replace(/lazy-style/g, 'style');
  jsx = jsx.replace(/lazy-src=/g, 'src=');
  jsx = jsx.replace(/\{\/\*.*?\*\/\}/gs, '');

  // Fix style object custom properties
  jsx = jsx.replace(/\{\s*-bgimage:\s*([^,}]+)\s*\}/gi, "{{ '--bgImage': $1 } as React.CSSProperties}");
  jsx = jsx.replace(/\{\s*-bgimage:\s*([^,]+),\s*-bgposition:\s*([^}]+)\s*\}/gi, "{{ '--bgImage': $1, '--bgPosition': $2 } as React.CSSProperties}");
  jsx = jsx.replace(/style="--bgImage:\s*url\((.*?)\);"/g, `style={{ '--bgImage': 'url($1)' } as React.CSSProperties}`);

  // Fix onclick
  jsx = jsx.replace(/onclick="gtag\('event',\s*'([^']+)'\);"/gi, 
      `onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', '$1'); }}`);
  jsx = jsx.replace(/onclick="toggleAccordionItem\(this\)"/gi, 
      `onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}`);
  jsx = jsx.replace(/onclick="([^"]+)"/gi, (match, p1) => {
      return `onClick={() => { if(typeof window !== 'undefined') { try { eval(\`${p1.replace(/`/g, '\\`')}\`); } catch(e){} } }}`;
  });

  // Fix onmouseover / onmouseout
  jsx = jsx.replace(/onmouseover="([^"]+)"/gi, (match, p1) => {
      let js = p1.replace(/this\.style\./g, 'e.currentTarget.style.');
      return `onMouseOver={(e) => { ${js} }}`;
  });
  jsx = jsx.replace(/onmouseout="([^"]+)"/gi, (match, p1) => {
      let js = p1.replace(/this\.style\./g, 'e.currentTarget.style.');
      return `onMouseOut={(e) => { ${js} }}`;
  });

  // Fix form controls
  jsx = jsx.replace(/<select\b([^>]*)>/g, (match, p1) => {
      if (!p1.includes('defaultValue') && !p1.includes('value=')) {
          return `<select ${p1} defaultValue="">`;
      }
      return match;
  });
  jsx = jsx.replace(/<option([^>]*?)\bselected\b([^>]*)>/g, '<option$1$2>');
  jsx = jsx.replace(/<option([^>]*)value>/g, '<option$1value="">');
  jsx = jsx.replace(/selected=\{true\}/g, '');
  jsx = jsx.replace(/<textarea([^>]*)type="text"/g, '<textarea$1');

  // Page content
  const pageContent = `"use client";
import React from 'react';
import Link from 'next/link';

export default function ${name}() {
  return (
    <main>
      ${jsx}
    </main>
  );
}
`;

  // Layout with metadata
  const layoutContent = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;

  // Write to app directory
  const outDir = path.resolve('./app/about', folder);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outDir, 'page.tsx'), pageContent, 'utf8');
  fs.writeFileSync(path.join(outDir, 'layout.tsx'), layoutContent, 'utf8');

  console.log(`Successfully migrated team member: ${folder}`);
}
