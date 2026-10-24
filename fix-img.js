const fs = require('fs');
let page = fs.readFileSync('app/page.tsx', 'utf8');
page = page.replace(/<img className="fx" style=\{\{ opacity: 1, zIndex: 10 \}\} src="\/assets\/img\/masthead\/home\/01.jpg" alt="Med Spa Plantation, FL  Plantation" \/>/, '<img className="fx" style={{ opacity: 1, zIndex: 10, top: 0, left: 0 }} src="/assets/img/masthead/home/01.jpg" alt="Med Spa Plantation, FL  Plantation" />');
page = page.replace(/<img src="\/assets\/img\/masthead\/home\/02.jpg" alt="Med Spa Plantation, FL  Plantation" \/>/, '<img style={{ top: 0, left: 0 }} src="/assets/img/masthead/home/02.jpg" alt="Med Spa Plantation, FL  Plantation" />');
page = page.replace(/<img src="\/assets\/img\/masthead\/home\/03.jpg" alt="Med Spa Plantation, FL  Plantation" \/>/, '<img style={{ top: 0, left: 0 }} src="/assets/img/masthead/home/03.jpg" alt="Med Spa Plantation, FL  Plantation" />');
page = page.replace(/<img src="\/assets\/img\/masthead\/home\/04.jpg" alt="Med Spa Plantation, FL  Plantation" \/>/, '<img style={{ top: 0, left: 0 }} src="/assets/img/masthead/home/04.jpg" alt="Med Spa Plantation, FL  Plantation" />');
fs.writeFileSync('app/page.tsx', page);
