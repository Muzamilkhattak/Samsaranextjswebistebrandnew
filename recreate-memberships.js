const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('htmltojsx');

const converter = new HTMLtoJSX({
  createClass: false
});

const pages = ['elite-society', 'glow-society', 'the-rise', 'weight-loss-membership'];

// First, delete the old folders to ensure a clean state
pages.forEach(page => {
    const dir = path.resolve('./app', page);
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
        console.log('Removed old directory:', dir);
    }
});

for (const page of pages) {
    // Read original HTML directly from the source directory
    const srcHtmlPath = path.resolve('../samsaraweb  sep 8 changes', page, 'index.html');
    if (!fs.existsSync(srcHtmlPath)) {
        console.error('Source not found:', srcHtmlPath);
        continue;
    }
    
    const rawHtml = fs.readFileSync(srcHtmlPath, 'utf8');
    
    // Extract everything between header and footer
    const bodyMatch = rawHtml.match(/<section class="header[^>]*>.*?<\/section>\s*(.*?)<section class="footer[^>]*>/s);
    if (!bodyMatch) {
        console.error('Could not extract body for', page);
        continue;
    }
    
    let html = bodyMatch[1];
    
    // Extract style block if any
    let styleContent = '';
    const styleRegex = /<style>([\s\S]*?)<\/style>/i;
    const styleMatch = html.match(styleRegex);
    if (styleMatch) {
        styleContent = styleMatch[1];
        html = html.replace(styleRegex, ''); // Remove it from HTML before conversion
    }

    // Convert to JSX
    let jsx = converter.convert(html).trim();

    // Fix some missing replacements from htmltojsx
    jsx = jsx.replace(/lazy-style/g, 'style');

    // Remove random {/***/} comments
    jsx = jsx.replace(/\{\/\*.*?\*\/\}/gs, '');

    // Fix onclick="gtag('event', 'phone_number_click');"
    jsx = jsx.replace(/onclick="gtag\('event',\s*'phone_number_click'\);"/g, 
        `onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}`);

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

    // Create the Next.js page component
    const componentName = page.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    
    let pageContent = `"use client";\nimport React from 'react';\nimport Link from 'next/link';\n\nexport default function ${componentName}() {\n  return (\n    <main>\n`;
    
    if (styleContent) {
        // Safely escape backticks and dollar signs for template literal
        const safeStyle = styleContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        pageContent += `      <style dangerouslySetInnerHTML={{__html: \`\n${safeStyle}\n      \`}} />\n`;
    }
    
    pageContent += `      ${jsx}\n    </main>\n  );\n}\n`;
    
    // Write to app directory
    const outDir = path.resolve('./app', page);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'page.tsx'), pageContent, 'utf8');
    
    console.log('Successfully recreated page:', page);
}
