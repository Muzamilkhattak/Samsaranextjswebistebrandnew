const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('htmltojsx');

const converter = new HTMLtoJSX({
  createClass: false
});

const pagesToMigrate = [
    { category: 'wellness', folder: 'weight-loss-therapy' },
    { category: 'wellness', folder: 'Peptide-therapy' },
    { category: 'wellness', folder: 'Hormone -Therapy' },
    { category: 'wellness', folder: 'Vitamin-Therapy' },
    { category: 'wellness', folder: 'iv-Therapy' },
    { category: 'wellness', folder: 'massage-therapy' },
    { category: 'wellness', folder: 'Evolve-Body contouring' },
    { category: 'laser-treatments', folder: 'laser-hair-removal' },
    { category: 'laser-treatments', folder: 'morpheus8' },
    { category: 'laser-treatments', folder: 'ipl' },
    { category: 'laser-treatments', folder: 'forma' },
    { category: 'skin-treatments', folder: 'Traditional-Facial' },
    { category: 'skin-treatments', folder: 'hydrafacial' },
    { category: 'skin-treatments', folder: 'chemical-peels' },
    { category: 'skin-treatments', folder: 'Dermaplaning' },
    { category: 'skin-treatments', folder: 'Mirconeedling' },
    { category: 'injectables-fillers', folder: 'Neurotoxins' },
    { category: 'injectables-fillers', folder: 'Dermal-Fillers' },
    { category: 'injectables-fillers', folder: 'PRP' },
    { category: 'injectables-fillers', folder: 'PRF' },
    { category: 'injectables-fillers', folder: 'biostimulators' },
    { category: 'injectables-fillers', folder: 'Hair-Restoration' },
];

for (const { category, folder } of pagesToMigrate) {
    const srcHtmlPath = path.resolve('../samsaraweb  sep 8 changes', category, folder, 'index.html');
    if (!fs.existsSync(srcHtmlPath)) {
        console.error('Source not found:', srcHtmlPath);
        continue;
    }
    
    const rawHtml = fs.readFileSync(srcHtmlPath, 'utf8');
    
    // Extract everything between header and footer
    const bodyMatch = rawHtml.match(/<section class="header[^>]*>.*?<\/section>\s*(.*?)<section class="footer[^>]*>/s);
    if (!bodyMatch) {
        console.error(`Could not extract body for ${category}/${folder}`);
        continue;
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

    // Remove random {/***/} comments
    jsx = jsx.replace(/\{\/\*.*?\*\/\}/gs, '');

    // Safely fix style object keys created by htmltojsx for custom properties
    // (htmltojsx turns `style="--bgImage: url(...)"` into `style={{-bgimage: 'url(...)'}}`)
    jsx = jsx.replace(/\{\s*-bgimage:\s*([^,}]+)\s*\}/gi, "{{ '--bgImage': $1 } as React.CSSProperties}");
    jsx = jsx.replace(/\{\s*-bgimage:\s*([^,]+),\s*-bgposition:\s*([^}]+)\s*\}/gi, "{{ '--bgImage': $1, '--bgPosition': $2 } as React.CSSProperties}");

    // Fix lazy-style that were turned into strings (e.g. style="--bgImage: url(...);")
    // NOTE: Safely handling the string without causing regex duplication!
    jsx = jsx.replace(/style="--bgImage:\s*url\((.*?)\);"/g, `style={{ '--bgImage': 'url($1)' } as React.CSSProperties}`);

    // Fix onclick="gtag(...)"
    jsx = jsx.replace(/onclick="gtag\('event',\s*'([^']+)'\);"/gi, 
        `onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', '$1'); }}`);

    // Fix toggleAccordionItem
    jsx = jsx.replace(/onclick="toggleAccordionItem\(this\)"/gi, 
        `onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}`);

    // Generic fallback for any other onclick just in case
    jsx = jsx.replace(/\s+onclick="/gi, ' onClick="');

    // Fix onmouseover and onmouseout
    // Example: onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 6px 28px rgba(0,0,0,0.22)';"
    jsx = jsx.replace(/onmouseover="([^"]+)"/gi, (match, p1) => {
        let js = p1.replace(/this\.style\./g, 'e.currentTarget.style.');
        return `onMouseOver={(e) => { ${js} }}`;
    });
    jsx = jsx.replace(/onmouseout="([^"]+)"/gi, (match, p1) => {
        let js = p1.replace(/this\.style\./g, 'e.currentTarget.style.');
        return `onMouseOut={(e) => { ${js} }}`;
    });

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

    // Fix lazy-src to src
    jsx = jsx.replace(/lazy-src=/g, 'src=');

    // Create the Next.js page component
    // Sanitize component name to be valid JS identifier (remove spaces, hyphens)
    const sanitizeName = (str) => {
        return str.replace(/[^a-zA-Z0-9]/g, ' ')
                  .split(' ')
                  .filter(word => word.length > 0)
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join('');
    };
    
    const componentName = sanitizeName(folder);
    
    let pageContent = `"use client";\nimport React from 'react';\nimport Link from 'next/link';\n\nexport default function ${componentName}() {\n  return (\n    <main>\n`;
    
    if (styleContent) {
        const safeStyle = styleContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        pageContent += `      <style dangerouslySetInnerHTML={{__html: \`\n${safeStyle}\n      \`}} />\n`;
    }
    
    pageContent += `      ${jsx}\n    </main>\n  );\n}\n`;
    
    // Write to app directory
    const outDir = path.resolve('./app', category, folder);
    if (fs.existsSync(outDir)) {
        fs.rmSync(outDir, { recursive: true, force: true });
    }
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'page.tsx'), pageContent, 'utf8');
    
    console.log(`Successfully recreated page: ${category}/${folder}`);
}
