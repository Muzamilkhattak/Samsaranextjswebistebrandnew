const fs = require('fs');

let html = fs.readFileSync('../samsaraweb  sep 8 changes/index.html', 'utf8');
let page = fs.readFileSync('app/page.tsx', 'utf8');

// Extract the <main> block from index.html
let mainMatch = html.match(/<main>([\s\S]*?)<\/main>/);
if (!mainMatch) {
    console.log('No <main> found in index.html');
    process.exit(1);
}
let mainHtml = mainMatch[1];

// Find all internal links in mainHtml
let regex = /<a([^>]*)href=\"(\/[^\"]*)\"([^>]*)>([\s\S]*?)<\/a>/g;
let links = [];
let match;
while ((match = regex.exec(mainHtml)) !== null) {
    let attrsBefore = match[1].replace(/class=/g, 'className=');
    let href = match[2];
    let attrsAfter = match[3].replace(/class=/g, 'className=');
    let content = match[4].replace(/class=/g, 'className=');
    
    // Fix <img> tags to be self-closing in content
    content = content.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
    
    // Convert to Next.js <Link>
    let newLink = `<Link${attrsBefore}href="${href}"${attrsAfter}>${content}</Link>`;
    links.push(newLink);
}

console.log(`Found ${links.length} links in index.html`);

// Replace <Link=""></Link> sequentially in page.tsx
let i = 0;
page = page.replace(/<Link=\"\"><\/Link>/g, () => {
    return links[i++];
});

fs.writeFileSync('app/page.tsx', page);
console.log(`Replaced ${i} links in page.tsx`);
