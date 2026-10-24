const fs = require('fs');
const path = require('path');

const pages = ['elite-society', 'glow-society', 'the-rise', 'weight-loss-membership'];

for (const page of pages) {
    const filePath = path.resolve('./app', page, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix <select> to have defaultValue=""
    content = content.replace(/<select\b([^>]*)>/g, (match, p1) => {
        if (!p1.includes('defaultValue')) {
            return `<select ${p1} defaultValue="">`;
        }
        return match;
    });

    // Remove 'selected' from <option>
    content = content.replace(/<option([^>]*?)\bselected\b([^>]*)>/g, '<option$1$2>');

    // Sometimes htmltojsx outputs `value` without `=""`.
    // E.g. <option disabled value> -> <option disabled value="">
    content = content.replace(/<option disabled value>/g, '<option disabled value="">');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed React select/option warnings in', page);
}
