"use client";
import React from 'react';
import Link from 'next/link';

interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
  alt: string;
}

// All images existing in samsara-nextjs/public/assets/img/beforeandafterresults
const RESULTS_PAIRS: BeforeAfterPair[] = [
  {
    id: 'neurotoxin-1',
    before: '/assets/img/beforeandafterresults/Neurotoxin Before.webp',
    after: '/assets/img/beforeandafterresults/Neurotoxin After.webp',
    alt: 'Neurotoxin Wrinkle Smoothing Result 1',
  },
  {
    id: 'neurotoxin-2',
    before: '/assets/img/beforeandafterresults/Neurotoxin before 2.webp',
    after: '/assets/img/beforeandafterresults/Neurotoxin after 2.webp',
    alt: 'Neurotoxin Wrinkle Smoothing Result 2',
  },

  {
    id: 'facial-glow-2',
    before: '/assets/img/beforeandafterresults/before3.webp',
    after: '/assets/img/beforeandafterresults/after3.webp',
    alt: 'Facial Rejuvenation & Skin Glow Result 2',
  },
  {
    id: 'prf-1',
    before: '/assets/img/beforeandafterresults/PRF before.webp',
    after: '/assets/img/beforeandafterresults/PRFafter.webp',
    alt: 'PRF Skin Restoration Result',
  },
  {
    id: 'laser-hair-removal',
    before: '/assets/img/beforeandafterresults/Laser hair removal  after.webp',
    after: '/assets/img/beforeandafterresults/Laser hair removal before.webp',
    alt: 'Laser Hair Removal Result',
  },
  {
    id: 'before-1',
    before: '/assets/img/beforeandafterresults/before2.webp',
    after: '/assets/img/beforeandafterresults/after2.webp',
    alt: 'Facial Rejuvenation & Skin Glow Result 1',
  },

];

export default function BeforeAndAfterResultsPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Mobile Sticky CTA */}
      <div className="mobile-cta">
        <a
          href="tel:(954) 688-7255"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'phone_number_click');
            }
          }}
          aria-label="Call Samsara Aesthetics & Wellness on the phone today"
        >
          (954) 688-7255
        </a>
        <Link href="/contact/"> Appointment</Link>
      </div>

      {/* Main Before & After Simple Gallery */}
      <section style={{ paddingTop: '140px', paddingBottom: '90px' }}>
        <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 20px' }}>
          <div className="text-center" style={{ maxWidth: '850px', margin: '0 auto 50px auto' }}>
            <h2
              className="title-md uppercase"
              style={{
                color: '#004438',
                fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
                marginTop: 0,
                marginBottom: '15px',
                fontWeight: 700,
              }}
            >
              Transformative Treatments
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#555555', margin: 0, lineHeight: 1.6 }}>
              View the incredible improvements our patients have achieved through our customized aesthetic treatments.
            </p>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
            .results-gallery-simple {
              display: grid;
              grid-template-columns: 1fr;
              gap: 40px;
              max-width: 1400px;
              margin: 0 auto;
            }
            @media (min-width: 1024px) {
              .results-gallery-simple {
                grid-template-columns: 1fr 1fr;
              }
            }
            .ba-pair {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              width: 100%;
              margin: 0 auto;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
              background-color: #000000;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .ba-pair:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 30px rgba(0, 68, 56, 0.15);
            }
            .ba-pair > div {
              flex: 1;
              min-width: 0;
              position: relative;
            }
            .ba-pair img {
              width: 100%;
              height: auto;
              display: block;
              border-radius: 0 !important;
            }
            .ba-label {
              position: absolute;
              top: 14px;
              left: 14px;
              background: rgba(0, 68, 56, 0.85);
              color: #ffffff;
              padding: 6px 16px;
              border-radius: 20px;
              font-size: 13px;
              font-weight: 700;
              font-family: var(--font-proxima-nova, sans-serif);
              text-transform: uppercase;
              letter-spacing: 1px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
              backdrop-filter: blur(4px);
              pointer-events: none;
            }
            @media (max-width: 600px) {
              .results-gallery-simple {
                gap: 24px;
              }
              .ba-label {
                top: 8px;
                left: 8px;
                padding: 4px 10px;
                font-size: 11px;
                border-radius: 14px;
              }
            }
          `}} />

          {/* Clean Side-by-Side Images */}
          <div className="results-gallery-simple">
            {RESULTS_PAIRS.map((item) => (
              <div key={item.id} className="ba-pair">
                <div>
                  <img
                    src={item.before}
                    alt={`Before Treatment - ${item.alt}`}
                    loading="lazy"
                  />
                  <span className="ba-label">Before</span>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.3)' }}>
                  <img
                    src={item.after}
                    alt={`After Treatment - ${item.alt}`}
                    loading="lazy"
                  />
                  <span className="ba-label">After</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
