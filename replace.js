const fs = require('fs');
let code = fs.readFileSync('app/components/Header.tsx', 'utf8');

// Replace <a href="/something"> with <Link href="/something">
// and </a> with </Link> ONLY for the replaced ones!
// We'll use a regex that finds the complete <a> tag and its contents IF it's an internal link.
// Regex: <a([^>]*)href="(/[^"]*)"([^>]*)>(.*?)<\/a>
// Replacement: <Link=""></Link>

code = code.replace(/<a([^>]*)href=\"(\/[^\"]*)\"([^>]*)>([\s\S]*?)<\/a>/g, '<Link=\"\"></Link>');

fs.writeFileSync('app/components/Header.tsx', code);
console.log('Successfully replaced all internal links in Header.tsx');
