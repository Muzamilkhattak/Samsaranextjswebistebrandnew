const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const HTMLtoJSX = require('htmltojsx');

const srcFile = path.resolve('../samsaraweb  sep 8 changes/index.html');
const html = fs.readFileSync(srcFile, 'utf8');
const $ = cheerio.load(html);

const converter = new HTMLtoJSX({
  createClass: false
});

// Extract parts
const headerEl = $('section.header');
const mobileCtaEl = $('.mobile-cta');
const overlayEl = $('.overlay');
const modalEl = $('.modal');

const footerEl = $('section.footer');

// Build Header HTML
let headerHTML = $.html(headerEl) + '\n' + $.html(mobileCtaEl) + '\n' + $.html(overlayEl) + '\n' + $.html(modalEl);
// Build Footer HTML
let footerHTML = $.html(footerEl);

// Build Main HTML
// Remove everything that goes to header, footer or scripts
$('section.header').remove();
$('.mobile-cta').remove();
$('.overlay').remove();
$('.modal').remove();
$('section.footer').remove();
$('script').remove();
$('style').remove();
$('noscript').remove(); // if any

// We want the inner HTML of the body
let mainHTML = $('body').html();

// Convert to JSX
const headerJSX = converter.convert(headerHTML).replace(/\{\/\*.*?\*\/\}/gs, '').trim();
const footerJSX = converter.convert(footerHTML).replace(/\{\/\*.*?\*\/\}/gs, '').trim();
const mainJSX = converter.convert(mainHTML).replace(/\{\/\*.*?\*\/\}/gs, '').trim();

// Ensure components folder exists
const componentsDir = path.resolve('./app/components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Write Header.tsx
const headerTsxContent = `import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      ${headerJSX}
    </>
  );
}`;
fs.writeFileSync(path.join(componentsDir, 'Header.tsx'), headerTsxContent);

// Write Footer.tsx
const footerTsxContent = `import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      ${footerJSX}
    </>
  );
}`;
fs.writeFileSync(path.join(componentsDir, 'Footer.tsx'), footerTsxContent);

// Write page.tsx
const pageTsxContent = `import React from 'react';

export default function Home() {
  return (
    <main>
      ${mainJSX}
    </main>
  );
}`;
fs.writeFileSync(path.resolve('./app/page.tsx'), pageTsxContent);

console.log('Migration completed for Header, Footer, and page.tsx');
