const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      processDir(fullPath);
    } else if (file.name.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Fix <option value disabled ...> where value has no =""
      // E.g. <option value disabled ...> or <option value >
      const fixedOption = content.replace(/<option\b([^>]*?)\bvalue(?!\s*=)([^>]*?)>/g, (match, before, after) => {
        changed = true;
        return `<option${before}value=""${after}>`;
      });
      content = fixedOption;

      // Fix textarea type="text" or type="anything"
      const fixedTextarea = content.replace(/<textarea\b([^>]*?)\btype=["'][^"']*["']([^>]*?)>/g, (match, before, after) => {
        changed = true;
        return `<textarea${before}${after}>`;
      });
      content = fixedTextarea;

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed:', fullPath);
      }
    }
  }
}

processDir('./app');
