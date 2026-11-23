"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleCategory = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveCategory(null);
    if (typeof document !== 'undefined') {
      document.body.classList.remove('open');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const nextState = !prev;
      if (typeof document !== 'undefined') {
        if (nextState) {
          document.body.classList.add('open');
        } else {
          document.body.classList.remove('open');
        }
      }
      return nextState;
    });
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      const el = document.querySelector('.mobile-bar-elevenlabs elevenlabs-convai') as any;
      if (el && el.shadowRoot) {
        if (!el.shadowRoot.getElementById('embedded-convai-style')) {
          const style = document.createElement('style');
          style.id = 'embedded-convai-style';
          style.textContent = `
            :host {
              position: relative !important;
              inset: auto !important;
              width: auto !important;
              height: 100% !important;
              display: flex !important;
              align-items: center !important;
            }
            .overlay {
              position: static !important;
              inset: auto !important;
              padding: 0 !important;
              display: flex !important;
              align-items: center !important;
              width: auto !important;
              height: 100% !important;
            }
            .overlay > div {
              position: relative !important;
              inset: auto !important;
              padding: 0 !important;
              width: auto !important;
              display: flex !important;
              align-items: center !important;
            }
            .bg-base.shadow-md {
              box-shadow: none !important;
              padding: 0 4px !important;
              min-height: 40px !important;
              height: 40px !important;
              width: auto !important;
              display: flex !important;
              align-items: center !important;
              border-radius: 9999px !important;
              border: none !important;
              background: transparent !important;
            }
            [class*="opacity-30"],
            a[href*="elevenlabs.io"],
            [class*="poweredBy"],
            [line-height\\:var\\(--el-overlay-padding\\)] {
              display: none !important;
            }
            .sheet {
              position: fixed !important;
              bottom: 74px !important;
              left: 12px !important;
              right: 12px !important;
              width: calc(100vw - 24px) !important;
              max-width: 420px !important;
              height: 75vh !important;
              max-height: 600px !important;
              margin: 0 auto !important;
              z-index: 999999 !important;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25) !important;
              border-radius: 20px !important;
            }
          `;
          el.shadowRoot.appendChild(style);
        }
        count++;
        if (count > 25) clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  if (pathname === '/booking' || pathname === '/thankyou' || pathname === '/thank-you' || pathname?.startsWith('/thankyou') || pathname?.startsWith('/thank-you')) return null;

  const handleMenuContainerClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    if (link && !link.closest('#adaWidget')) {
      closeMenu();
    }
  };

  return (
    <>
      <section className={`header ${isMenuOpen ? 'open' : ''}`}>
        <nav className="navbar container" role="navigation" aria-label="main navigation">
          <div className="navbar-links">
            <div className="navbar-link-container is-hidden-widescreen">
              <div className="flexy flexd-clmn">
                <p className="navbar-link uppercase"><a className="navbar-phone" onClick={() => typeof window !== 'undefined' && (window as any).eval(`gtag('event', 'phone_number_click');`)} aria-label="Call Samsara Aesthetics & Wellness on the phone today" href="tel:(954) 688-7255">(954) 688-7255</a>
                  <span className="navbar-seperator">|</span>
                  Plantation,
                  FL
                </p>
              </div>
            </div>
            <Link className="navbar-brand" href="/" onClick={closeMenu}>
              <img className="navbar__logo" src="/assets/img/logo-new.svg" alt="Samsara Aesthetics & Wellness Logo" />
            </Link>
            <a
              className="gift-cards-btn navbar-link uppercase"
              href="https://samsaraaestheticswellness.myaestheticrecord.com/online-booking/giftcards"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Purchase Gift Cards"
              onClick={closeMenu}
            >
              <svg className="gift-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 2.555C11.57 3.515 10.5 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .537.11 1.049.299 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 6.914 15.374 8.44 14.019 9H12.1c.44-1.207 1.631-5 3.4-5zM7 5.5C7 4.673 7.673 4 8.5 4c1.769 0 2.96 3.793 3.4 5H9.981C8.626 8.44 7 6.914 7 5.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm2-9h-7V9h7v2z" />
              </svg>
              Gift Cards
            </a>
            <div className="flexy">
              <div className="flexy flexd-clmn">
                <Link className="gold-gradient navbar-link mr50 uppercase" href="https://samsaraaestheticswellness.myaestheticrecord.com/online-booking" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Book Now<img className="arrow-right gold-arrow" src="/assets/img/_defaults/arrow-right-gold-gradient.svg" alt="right arrow" /></Link>

              </div>
              <div className="menu-button" aria-label="Menu Button" onClick={toggleMenu}>
                <div>
                  <span />
                  <span />
                  <span />
                </div>
                <label>Menu</label>
              </div>
            </div>
          </div>
        </nav>
      </section>

      {/* Custom Premium Takeover Menu */}
      <div className={`takeover-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} onClick={handleMenuContainerClick}>
        <div className="takeover-header">
          <Link href="/" className="takeover-logo">
            <img src="/assets/img/logo-new.svg" alt="Samsara Aesthetics & Wellness Logo" />
          </Link>
          <a
            href="https://glymedplus.com/store/samsaramedspa"
            target="_blank"
            rel="noopener noreferrer"
            className="takeover-glymed-btn"
            aria-label="Shop GlyMed+"
            onClick={closeMenu}
          >
            <svg className="shop-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
            </svg>
            Shop GlyMed+
          </a>
          <button
            className="takeover-close-btn"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMenu(); }}
            aria-label="Close menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
        </div>

        <div className="takeover-menu-container">
          <div className="mobile-contact">
            <Link href="https://samsaraaestheticswellness.myaestheticrecord.com/online-booking">Book Now</Link>
            <a href="tel:(954) 688-7255" onClick={() => typeof window !== 'undefined' && (window as any).eval(`gtag('event', 'phone_number_click');`)}>(954) 688-7255</a>
          </div>
          <div className="mobile-glymed-menu">
            <a
              href="https://glymedplus.com/store/samsaramedspa"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-glymed-link"
              onClick={closeMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
              </svg>
              Shop GlyMed+
            </a>
          </div>
          <div className="mobile-gift-card-menu">
            <a
              href="https://samsaraaestheticswellness.myaestheticrecord.com/online-booking/giftcards"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-gift-card-link"
              onClick={closeMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 2.555C11.57 3.515 10.5 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .537.11 1.049.299 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 6.914 15.374 8.44 14.019 9H12.1c.44-1.207 1.631-5 3.4-5zM7 5.5C7 4.673 7.673 4 8.5 4c1.769 0 2.96 3.793 3.4 5H9.981C8.626 8.44 7 6.914 7 5.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm2-9h-7V9h7v2z" />
              </svg>
              Gift Cards
            </a>
          </div>
          <div className="mobile-ba-menu">
            <Link
              href="/about/before-and-after/"
              className="mobile-ba-link"
              onClick={closeMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              Before &amp; After Results
            </Link>
          </div>
          <div className="takeover-menu-grid">

            {/* Column 1 - Wellness */}
            <div className={`takeover-menu-col ${activeCategory === 'wellness' ? 'is-active' : ''}`}>
              <h3 onClick={() => toggleCategory('wellness')}>
                <span>Wellness</span>
                <svg className="takeover-dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </h3>
              <ul>
                <li><Link href="/wellness/weight-loss-therapy/">Weight Loss Therapy</Link></li>
                <li><Link href="/wellness/Peptide-therapy/">Peptide Therapy</Link></li>
                <li><Link href="/wellness/Hormone -Therapy/">Hormone Therapy</Link></li>
                <li><Link href="/wellness/Vitamin-Therapy/">Vitamin Therapy</Link></li>
                <li><Link href="/wellness/iv-Therapy/">IV Therapy</Link></li>
                <li><Link href="/wellness/massage-therapy/">Massage Therapy</Link></li>
                <li><Link href="/wellness/Evolve-Body contouring/">Evolve Body Contouring</Link></li>
              </ul>
            </div>

            {/* Column 2 - Laser & Energy */}
            <div className={`takeover-menu-col ${activeCategory === 'laser' ? 'is-active' : ''}`}>
              <h3 onClick={() => toggleCategory('laser')}>
                <span>Laser & Energy</span>
                <svg className="takeover-dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </h3>
              <ul>
                <li><Link href="/laser-treatments/laser-hair-removal/">Laser Hair Removal</Link></li>
                <li><Link href="/laser-treatments/morpheus8/">Morpheus8</Link></li>
                <li><Link href="/laser-treatments/ipl/">IPL</Link></li>
                <li><Link href="/laser-treatments/forma/">Forma</Link></li>
              </ul>
            </div>

            {/* Column 3 - Skin Care */}
            <div className={`takeover-menu-col ${activeCategory === 'skincare' ? 'is-active' : ''}`}>
              <h3 onClick={() => toggleCategory('skincare')}>
                <span>Skin Care</span>
                <svg className="takeover-dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </h3>
              <ul>
                <li><Link href="/skin-treatments/Traditional-Facial/">Traditional Facial</Link></li>
                <li><Link href="/skin-treatments/hydrafacial/">Hydrafacial</Link></li>
                <li><Link href="/skin-treatments/chemical-peels/">Chemical Peels</Link></li>
                <li><Link href="/skin-treatments/Dermaplaning/">Dermaplaning</Link></li>
                <li><Link href="/skin-treatments/Mirconeedling/">Microneedling</Link></li>
              </ul>
            </div>

            {/* Column 4 - Injectables */}
            <div className={`takeover-menu-col ${activeCategory === 'injectables' ? 'is-active' : ''}`}>
              <h3 onClick={() => toggleCategory('injectables')}>
                <span>Injectables</span>
                <svg className="takeover-dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </h3>
              <ul>
                <li><Link href="/injectables-fillers/Neurotoxins/">Neurotoxins (Botox, Jeuveau, Xeomin)</Link></li>
                <li><Link href="/injectables-fillers/Dermal-Fillers/">Fillers</Link></li>
                <li><Link href="/injectables-fillers/PRP/">PRP</Link></li>
                <li><Link href="/injectables-fillers/PRF/">PRF</Link></li>
                <li><Link href="/injectables-fillers/biostimulators/">Biostimulators</Link></li>
                <li><Link href="/injectables-fillers/Hair-Restoration/">Hair Restoration</Link></li>
              </ul>
            </div>

            {/* Column 5 - About */}
            <div className={`takeover-menu-col ${activeCategory === 'about' ? 'is-active' : ''}`}>
              <h3 onClick={() => toggleCategory('about')}>
                <span>About</span>
                <svg className="takeover-dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </h3>
              <ul>
                <li><a href="https://samsaramedspa.com/">Home</a></li>
                <li><Link href="/about/">About Us</Link></li>
                <li><Link href="/about/before-and-after/">Before &amp; After Results</Link></li>
                <li><Link href="/about/meet-the-staff/">Meet the Staff</Link></li>
                <li><Link href="/about/payment-plans/">Payment Plans</Link></li>
                <li><Link href="/about/vip-membership/">VIP Membership</Link></li>
                <li><Link href="/about/testimonials/">Testimonials</Link></li>
                <li><Link href="/contact/">Contact</Link></li>
              </ul>
            </div>

          </div>
          <div className="menu-footer">
            <a id="adaWidget" className="menuAda" aria-label="Open accessibility menu" role="button">
              Accessibility <img src="https://cdn.userway.org/widgetapp/images/body_wh.svg" alt="Accessibility Widget" />
            </a>
          </div>
        </div>
      </div>



      {/* Mobile Floating Bottom Quick Actions Widget */}
      <div className="mobile-bottom-bar" role="navigation" aria-label="Quick Actions">
        <div className="mobile-bar-elevenlabs">
          <elevenlabs-convai agent-id="agent_1801m59qba7ffd4beafxmgjefdz4"></elevenlabs-convai>
        </div>

        <a
          href="https://samsaraaestheticswellness.myaestheticrecord.com/online-booking"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-book-btn"
          aria-label="Book Now"
        >
          Book Now
        </a>
      </div>
      <div className="overlay">
      </div>
      <div className="modal">
        <div className="modal-background" />
        <div className="modal-content">
        </div>
        <button className="modal-close is-large" aria-label="close" />
      </div>
    </>
  );
}

