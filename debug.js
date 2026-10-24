const fs = require('fs');
let html = fs.readFileSync('../samsaraweb  sep 8 changes/index.html', 'utf8');
let regex = /<a([^>]*)href=\"(\/[^\"]*)\"([^>]*)>([\s\S]*?)<\/a>/g;
let match;
let links = [];
while ((match = regex.exec(html)) !== null) {
    links.push({
        href: match[2],
        full: match[0],
        before: match[1],
        after: match[3],
        content: match[4]
    });
}
console.log(`Total internal links in index.html: ${links.length}`);
// Let's print out the first 40 links to see if they match the 31 links in page.tsx
links.forEach((l, i) => {
    if (i > 10 && i < 50) {
        console.log(`Link ${i}: ${l.href}`);
    }
});
