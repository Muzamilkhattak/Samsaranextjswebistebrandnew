"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/booking' || pathname === '/thankyou' || pathname === '/thank-you' || pathname?.startsWith('/thankyou') || pathname?.startsWith('/thank-you')) return null;

  return (
    <>
      <section className="footer pt30 pb50">
  <div className="container padding-percentage text-center-touch animate fadeIn">
    <div className="flexy is-end mb30">
      <div className="flexy-item text-center is-visible-tablet">
        <Link href="/"><img src="/assets/img/logo-footer.svg" alt="Samsara Aesthetics & Wellness Logo" /></Link>
      </div>
      <div className="flexy-item">
        <a href="https://www.google.com/maps/place/331+N+University+Dr+m2+800,+Plantation,+FL+33324/@26.1246138,-80.2601013,17z/data=!3m1!4b1!4m5!3m4!1s0x88d907c8814f8a6d:0x690d01024a5d7341!8m2!3d26.124609!4d-80.257521?entry=ttu" target="_blank" rel="noopener" aria-label="Samsara Aesthetics & Wellness Google Maps Profile (Opens a new tab)">
          <p className="footer-address">
            331 N. University Dr, Suite M2-800 <br />
            Plantation FL 33324 </p>
        </a>
      </div>
      <div className="flexy-item text-center is-hidden-tablet">
        <Link href="/"><img src="/assets/img/logo-footer.svg" alt="Samsara Aesthetics & Wellness Logo" /></Link>
      </div>
      <div className="flexy-item">
        <p className="text-right-desktop footer-phone" style={{color: '#004438'}}>
          <a className="tel-link" href="tel:(954) 688-7255" onClick={() => typeof window !== 'undefined' && (window as any).eval(`gtag('event', 'phone_number_click');`)} aria-label="Call Samsara Aesthetics & Wellness">(954) 688-7255</a>
        </p><p className="text-right-desktop footer-address">
          Tue - Fri: 10:00am to 7:00pm<br /> Sat: 10:00am to 4:00pm </p>
        <p className="text-right-desktop footer-address">
          <a href="https://www.facebook.com/people/Samsara-Aesthetics-Wellness/61556682620428/" target="_blank" rel="noopener" className="social-link" data-tooltip="Visit Facebook"><img style={{filter: 'invert(22%) sepia(8%) saturate(7212%) hue-rotate(130deg) brightness(86%) contrast(101%)'}} src="/assets/img/_defaults/social-facebook.svg" alt="Facebook Logo" /></a>
          &nbsp;
          <a href="https://www.instagram.com/samsara__aesthetics/?fbclid=IwAR2AxsUxJnMaGaAko_yCzp9lx0SJg25wGKGFknX0fLeUJQggYGSn0M4CllY" target="_blank" rel="noopener" className="social-link" data-tooltip="Visit Instagram"><img style={{filter: 'invert(22%) sepia(8%) saturate(7212%) hue-rotate(130deg) brightness(86%) contrast(101%)'}} src="/assets/img/_defaults/social-instagram.svg" alt="Instagram Logo" /></a>
        </p>
      </div>
    </div>
    <div className="flexy is-vcentered">
      <div className="flexy-item is-35">
        <span className="ratingstars">
          <span className="ratings-number" style={{color: '#004438 !important', WebkitTextFillColor: '#004438 !important'}}>5.0</span>
          <div>
            <span className="ratings-stars">
              <img src="/assets/img/_defaults/icon-sharp-stars.png" alt="star" />
            </span>
            <span className="ratings-text">from 200+ Reviews</span>
          </div>
        </span>
      </div>
      <div className="flexy-item is-50 text-center">
        <p className="footer-links text-center">
          Samsara Aesthetics &amp; Wellness ©
          2024 <br /> All Rights Reserved &nbsp;&nbsp;|&nbsp;&nbsp; <Link href="/privacy-policy/">Privacy
            Policy</Link> &nbsp;&nbsp;|&nbsp;&nbsp; <Link href="/accessibility/">Accessibility</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp; <a href="https://www.samsaramedspa.com/sitemap.xml">Sitemap</a>
        </p>
      </div>
    </div>
  </div>
  <div className="disclaimer footer-links">
    <div>
      <strong>Accessibility:</strong> If you are visually impaired or have some other impairment and you wish
      to discuss potential accommodations related to using this website, please contact our office at
      <a className="tel-link" href="tel:(954) 688-7255" onClick={() => typeof window !== 'undefined' && (window as any).eval(`gtag('event', 'phone_number_click');`)} aria-label="Call Samsara Aesthetics & Wellness">(954) 688-7255</a>.
    </div>
  </div>
</section>
    </>
  );
}
