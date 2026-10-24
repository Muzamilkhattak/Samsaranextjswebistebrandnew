const fs = require('fs');
const path = require('path');

const pages = ['elite-society', 'glow-society', 'the-rise', 'weight-loss-membership'];

for (const page of pages) {
    const filePath = path.resolve('./app', page, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix `<option disabled  value>` that has extra spaces or misses quotes
    content = content.replace(/<option([^>]*)value>/g, '<option$1value="">');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed empty value attributes in', page);
}
