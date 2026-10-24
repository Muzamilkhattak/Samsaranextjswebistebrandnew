const fs = require('fs');
const path = require('path');

const pages = ['elite-society', 'glow-society', 'the-rise', 'weight-loss-membership'];

for (const page of pages) {
    const filePath = path.resolve('./app', page, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix onclick="gtag('event', 'phone_number_click');"
    content = content.replace(/onclick="gtag\('event',\s*'phone_number_click'\);"/g, 
        `onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click') }}`);

    // Just in case there are other generic onclick attributes
    content = content.replace(/onclick=/g, 'onClick=');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed onclick React warnings in', page);
}
