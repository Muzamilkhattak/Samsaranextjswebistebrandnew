const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

code = code.replace(/<a([^>]*)href=\"(\/[^\"]*)\"([^>]*)>([\s\S]*?)<\/a>/g, '<Link=\"\"></Link>');

if (!code.includes("from 'next/link'")) {
    code = code.replace(/\"use client\";\r?\n/, "\"use client\";\nimport Link from 'next/link';\n");
    // If there is no use client, just put it at the top
    if (!code.includes("import Link from 'next/link'")) {
        code = "import Link from 'next/link';\n" + code;
    }
}

fs.writeFileSync('app/page.tsx', code);
console.log('Successfully replaced all internal links in page.tsx');
