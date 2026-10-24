const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix onclick="something" -> onClick={() => { something }}
  // In JSX it might be onclick="gtag('event', 'phone_number_click');"
  content = content.replace(/onclick="([^"]+)"/g, (match, p1) => {
    return `onClick={() => typeof window !== 'undefined' && (window as any).eval(\`${p1.replace(/`/g, '\\`')}\`)}`;
  });

  // Fix selected={true} -> selected
  // Wait, React <option selected> is discouraged, it wants defaultValue on <select>
  // Let's just remove selected={true} to fix the type error, and add defaultValue to the select.
  // Actually, TS error: "Type 'true' is not assignable to type 'string | number | readonly string[] | undefined'."
  // This means it's likely a `value` attribute that got assigned `true`, OR `selected` which takes boolean in React?
  // Let's just blindly remove selected={true} because default value can be set on <select>
  content = content.replace(/selected=\{true\}/g, '');
  content = content.replace(/selected="selected"/g, '');

  // Fix textarea type="text"
  content = content.replace(/<textarea([^>]*)type="text"/g, '<textarea$1');

  fs.writeFileSync(filePath, content);
}

['app/components/Header.tsx', 'app/components/Footer.tsx', 'app/page.tsx'].forEach(file => {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
    console.log('Fixed', file);
  }
});
