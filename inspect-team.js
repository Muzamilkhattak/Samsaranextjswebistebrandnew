const fs = require('fs');
const path = require('path');

const teamMembers = [
  'dr-erika',
  'dr-Michelle',
  'dr-Sierra',
  'dr-tonimaguire',
  'dr-yves-jodesty',
  'mark-jodesty',
  'maureen-murphy',
  'shahmeer-alam'
];

const baseDir = path.resolve('./Samsara website sep live now/samsaraweb  sep 8 changes/about');

for (const member of teamMembers) {
  const filePath = path.join(baseDir, member, 'index.html');
  const content = fs.readFileSync(filePath, 'utf8');
  const bodyMatch = content.match(/<section class="header[^>]*>[\s\S]*?<\/section>\s*([\s\S]*?)<section class="footer[^>]*>/i);
  
  console.log('Member:', member);
  let body = bodyMatch[1];
  console.log('  Start:', body.trim().slice(0, 300));
  console.log('  End:', body.trim().slice(-300));
}
