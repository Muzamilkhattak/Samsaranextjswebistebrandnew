const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('htmltojsx');

const converter = new HTMLtoJSX({
  createClass: false
});

const srcHtmlPath = path.resolve('../samsaraweb  sep 8 changes/about/testimonials/index.html');
const rawHtml = fs.readFileSync(srcHtmlPath, 'utf8');

// Extract everything between header and footer
const bodyMatch = rawHtml.match(/<section class="header[^>]*>.*?<\/section>\s*(.*?)<section class="footer[^>]*>/s);
if (!bodyMatch) {
    console.error('Could not extract body for testimonials');
    process.exit(1);
}

let html = bodyMatch[1];

// Extract style block if any
let styleContent = '';
const styleRegex = /<style>([\s\S]*?)<\/style>/i;
const styleMatch = html.match(styleRegex);
if (styleMatch) {
    styleContent = styleMatch[1];
    html = html.replace(styleRegex, '');
}

// Convert to JSX
let jsx = converter.convert(html).trim();

// Fix some missing replacements from htmltojsx
jsx = jsx.replace(/lazy-style/g, 'style');

// Fix style string issues (e.g. style="--bgImage: url(...);")
jsx = jsx.replace(/style="--bgImage:\s*url\((.*?)\);"/g, `style={{ '--bgImage': 'url($1)' } as React.CSSProperties}`);

// Remove random {/***/} comments
jsx = jsx.replace(/\{\/\*.*?\*\/\}/gs, '');

// Fix onclick="gtag(...)"
jsx = jsx.replace(/onclick="gtag\('event',\s*'phone_number_click'\);"/g, 
    `onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}`);

// Generic fallback for any other onclick just in case
jsx = jsx.replace(/\s+onclick="/gi, ' onClick="');

// Fix <select> to have defaultValue=""
jsx = jsx.replace(/<select\b([^>]*)>/g, (match, p1) => {
    if (!p1.includes('defaultValue') && !p1.includes('value=')) {
        return `<select ${p1} defaultValue="">`;
    }
    return match;
});

// Remove 'selected' from <option>
jsx = jsx.replace(/<option([^>]*?)\bselected\b([^>]*)>/g, '<option$1$2>');

// Fix empty value attributes: <option disabled value> -> <option disabled value="">
jsx = jsx.replace(/<option([^>]*)value>/g, '<option$1value="">');

// Build final component
let pageContent = `"use client";\nimport React from 'react';\nimport Link from 'next/link';\n\nexport default function Testimonials() {\n  return (\n    <main>\n`;

if (styleContent) {
    const safeStyle = styleContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    pageContent += `      <style dangerouslySetInnerHTML={{__html: \`\n${safeStyle}\n      \`}} />\n`;
}

pageContent += `      ${jsx}\n    </main>\n  );\n}\n`;

// Write to app directory
const outDir = path.resolve('./app/about/testimonials');
if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'page.tsx'), pageContent, 'utf8');

console.log('Successfully recreated page: testimonials');
