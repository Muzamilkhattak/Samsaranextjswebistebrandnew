const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('htmltojsx');

const converter = new HTMLtoJSX({
  createClass: false
});

const pages = ['elite-society', 'glow-society', 'the-rise', 'weight-loss-membership'];

for (const page of pages) {
    const htmlPath = path.resolve(page + '.html');
    if (!fs.existsSync(htmlPath)) continue;
    
    let html = fs.readFileSync(htmlPath, 'utf8');
    
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

    // Fix some missing replacements from htmltojsx if any (like lazy-style)
    jsx = jsx.replace(/lazy-style/g, 'style');

    // Remove random {/***/} comments
    jsx = jsx.replace(/\{\/\*.*?\*\/\}/gs, '');

    // Create the Next.js page component
    const componentName = page.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    
    let pageContent = `"use client";\nimport React from 'react';\nimport Link from 'next/link';\n\nexport default function ${componentName}() {\n  return (\n    <main>\n`;
    
    if (styleContent) {
        pageContent += `      <style dangerouslySetInnerHTML={{__html: \`\n${styleContent.replace(/`/g, '\\`')}\n      \`}} />\n`;
    }
    
    pageContent += `      ${jsx}\n    </main>\n  );\n}\n`;
    
    // Write to app directory
    const outDir = path.resolve('./app/about', page); // User wants them in about? No, the original URL was `/elite-society/`, wait.
    // Let me check. The user says "as these pages folders exists in samsaraweb sep 8 changes folder".
    // In `samsaraweb sep 8 changes` they are in the root (`/elite-society`, not `/about/elite-society`).
    // Wait, let's look at `vip-membership` page links.
    // `<a class="membership-card__btn" href="/elite-society/">View Details</a>` - Yes, they are root pages.
    // I will write them to `./app/${page}/page.tsx`.

    const outDirRoot = path.resolve('./app', page);
    if (!fs.existsSync(outDirRoot)) {
        fs.mkdirSync(outDirRoot, { recursive: true });
    }
    fs.writeFileSync(path.join(outDirRoot, 'page.tsx'), pageContent, 'utf8');
    console.log('Migrated', page);
}
