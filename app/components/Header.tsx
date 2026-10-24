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
        <div className="flexy">
          <div className="flexy flexd-clmn">
            <Link className="gold-gradient navbar-link mr50 uppercase" href="/booking/" onClick={closeMenu}>Book Now<img className="arrow-right gold-arrow" src="/assets/img/_defaults/arrow-right-gold-gradient.svg" alt="right arrow" /></Link>
            
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
      <button 
        className="takeover-close-btn" 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMenu(); }}
        aria-label="Close menu"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
        </svg>
      </button>
    </div>
    
    <div className="takeover-menu-container">
      <div className="mobile-contact">
        <Link href="/contact/">Appointment</Link>
        <a href="tel:(954) 688-7255" onClick={() => typeof window !== 'undefined' && (window as any).eval(`gtag('event', 'phone_number_click');`)}>(954) 688-7255</a>
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
            <li><Link href="/contact/">Consultation</Link></li>
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

  

  <div className="mobile-cta">
    <a href="tel:(954) 688-7255" onClick={() => typeof window !== 'undefined' && (window as any).eval(`gtag('event', 'phone_number_click');`)} aria-label="Call Samsara Aesthetics & Wellness on the phone today">(954) 688-7255</a>
    <Link href="/contact/"> Appointment</Link>
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

