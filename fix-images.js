const fs = require('fs');
const path = require('path');

function fixImages(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace lazy-src="...", mh-src="...", nav-src="..." with src="..."
  content = content.replace(/(lazy-src|mh-src|nav-src)="/g, 'src="');

  // Replace lazy-style="--bgImage: url(...);" with style={{ '--bgImage': 'url(...)' } as React.CSSProperties}
  content = content.replace(/lazy-style="--bgImage:\s*url\(([^)]+)\);?"/g, (match, url) => {
    return `style={{ '--bgImage': 'url(${url})' } as React.CSSProperties}`;
  });

  fs.writeFileSync(filePath, content);
}

['app/page.tsx', 'app/components/Header.tsx', 'app/components/Footer.tsx'].forEach(file => {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    fixImages(fullPath);
    console.log('Fixed images in', file);
  }
});
