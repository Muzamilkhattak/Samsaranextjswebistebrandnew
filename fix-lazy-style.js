const fs = require('fs');
const path = require('path');

const pages = ['elite-society', 'glow-society', 'the-rise', 'weight-loss-membership'];

for (const page of pages) {
    const filePath = path.resolve('./app', page, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix style string caused by lazy-style replacement
    content = content.replace(/style="--bgImage:\s*url\((.*?)\);"/g, `style={{ '--bgImage': 'url($1)' } as React.CSSProperties}`);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed style object in', page);
}
