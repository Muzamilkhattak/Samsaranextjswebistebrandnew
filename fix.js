const fs = require('fs');

let html = fs.readFileSync('../samsaraweb  sep 8 changes/index.html', 'utf8');
let regex = /<a([^>]*)href=\"(\/[^\"]*)\"([^>]*)>([\s\S]*?)<\/a>/g;
let match;
let htmlLinks = [];
while ((match = regex.exec(html)) !== null) {
    let attrsBefore = match[1].replace(/class=/g, 'className=').replace(/style="([^"]*)"/g, (m, g1) => {
        // Very basic style object conversion for inline styles if needed
        return m; // We'll just leave it if it's complex, or we can just replace 'class='
    });
    let href = match[2];
    let attrsAfter = match[3].replace(/class=/g, 'className=');
    let content = match[4].replace(/class=/g, 'className=').replace(/<img([^>]*[^\/])>/g, '<img$1 />');
    
    let newLink = `<Link${attrsBefore}href="${href}"${attrsAfter}>${content}</Link>`;
    htmlLinks.push(newLink);
}

// The links in page.tsx correspond to htmlLinks starting from index 40
let replacementLinks = htmlLinks.slice(40);

let page = fs.readFileSync('app/page.tsx', 'utf8');
let i = 0;
page = page.replace(/<Link=\"\"><\/Link>/g, () => {
    return replacementLinks[i++];
});

fs.writeFileSync('app/page.tsx', page);
console.log(`Successfully replaced ${i} broken links in page.tsx!`);
