"use client";

import React, { useState } from 'react';

interface LedgerItem {
  id: string;
  category: 'neurotoxin' | 'prf' | 'laser' | 'hydrafacial';
  title: string;
  beforeImg: string;
  afterImg: string;
  altBefore: string;
  altAfter: string;
  area: string;
  timeline: string;
  timelineCardValue: string;
  timelineCardArea: string;
  bookingUrl: string;
}

const LEDGER_ITEMS: LedgerItem[] = [
  {
    id: 'item-1',
    category: 'neurotoxin',
    title: 'Botox Before & After',
    beforeImg: '/assets/img/beforeandafterresults/Before1.webp',
    afterImg: '/assets/img/beforeandafterresults/After1.webp',
    altBefore: 'Before Botox Treatment',
    altAfter: 'After Botox Treatment',
    area: 'Glabella & Frontalis',
    timeline: '7–14 days',
    timelineCardValue: '7–14 days',
    timelineCardArea: 'Glabella & Frontalis',
    bookingUrl: 'https://samsaraaestheticswellness.myaestheticrecord.com/online-booking',
  },
  {
    id: 'item-2',
    category: 'prf',
    title: 'PRF Before & After',
    beforeImg: '/assets/img/beforeandafterresults/before2.webp',
    afterImg: '/assets/img/beforeandafterresults/after2.webp',
    altBefore: 'Before PRF Treatment',
    altAfter: 'After PRF Treatment',
    area: 'Undereyes',
    timeline: 'Immediately after',
    timelineCardValue: 'Immediately after',
    timelineCardArea: 'Undereyes',
    bookingUrl: 'https://samsaraaestheticswellness.myaestheticrecord.com/online-booking',
  },
  {
    id: 'item-3',
    category: 'laser',
    title: 'Laser Hair Removal Before & After',
    beforeImg: '/assets/img/beforeandafterresults/laser-hair-removal-before.webp',
    afterImg: '/assets/img/beforeandafterresults/laser-hair-removal-after.webp',
    altBefore: 'Before Laser Hair Removal',
    altAfter: 'After Laser Hair Removal',
    area: 'Underarms',
    timeline: 'Session 3 of 6',
    timelineCardValue: 'Session 3 of 6',
    timelineCardArea: 'Underarms',
    bookingUrl: 'https://samsaraaestheticswellness.myaestheticrecord.com/online-booking',
  },
  {
    id: 'item-4',
    category: 'neurotoxin',
    title: 'Jeuveau Before & After',
    beforeImg: '/assets/img/beforeandafterresults/Neurotoxin before 2.webp',
    afterImg: '/assets/img/beforeandafterresults/Neurotoxin after 2.webp',
    altBefore: 'Before Jeuveau Treatment',
    altAfter: 'After Jeuveau Treatment',
    area: 'Frontalis, Glabella, Crows Feet',
    timeline: '2–5 days',
    timelineCardValue: '2–5 days',
    timelineCardArea: 'Frontalis, Glabella, Crows Feet',
    bookingUrl: 'https://samsaraaestheticswellness.myaestheticrecord.com/online-booking',
  },
  {
    id: 'item-5',
    category: 'neurotoxin',
    title: 'Botox Before & After',
    beforeImg: '/assets/img/beforeandafterresults/Neurotoxin Before.webp',
    afterImg: '/assets/img/beforeandafterresults/Neurotoxin After.webp',
    altBefore: 'Before Botox Treatment',
    altAfter: 'After Botox Treatment',
    area: 'Frontalis & Glabella',
    timeline: 'Timeline - 2 weeks',
    timelineCardValue: 'Timeline - 2 weeks',
    timelineCardArea: 'Frontalis & Glabella',
    bookingUrl: 'https://samsaraaestheticswellness.myaestheticrecord.com/online-booking',
  },
  {
    id: 'item-6',
    category: 'prf',
    title: 'PRF Before & After',
    beforeImg: '/assets/img/beforeandafterresults/PRF_before.webp',
    afterImg: '/assets/img/beforeandafterresults/PRF_after.webp',
    altBefore: 'Before PRF Treatment',
    altAfter: 'After PRF Treatment',
    area: 'Under Eyes',
    timeline: 'Results immediately after',
    timelineCardValue: 'Results immediately after',
    timelineCardArea: 'Under Eyes',
    bookingUrl: 'https://samsaraaestheticswellness.myaestheticrecord.com/online-booking',
  },
  
  
  
 
];

export default function BeforeAndAfterResultsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'neurotoxin' | 'prf' | 'laser' | 'hydrafacial'>('all');

  const filteredItems = activeFilter === 'all'
    ? LEDGER_ITEMS
    : LEDGER_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }} suppressHydrationWarning>
      {/* Masthead Banner */}
      <section
        className="ba-results-masthead bg-image flexy is-vcentered"
        style={{
          backgroundImage: "url('/assets/img/bg/marble-green-01.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: '350px',
          minHeight: '350px',
          maxHeight: '350px',
          marginBottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          paddingTop: '85px',
          paddingBottom: 0,
          paddingLeft: '20px',
          paddingRight: '20px',
          boxSizing: 'border-box',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          className="masthead__content text-center"
          style={{
            position: 'relative',
            left: 'auto',
            right: 'auto',
            top: 'auto',
            bottom: 'auto',
            transform: 'none',
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 5,
          }}
        >
          <h1
            className="animate fadeIn white title-lg uppercase"
            style={{
              width: '100%',
              margin: '0 auto',
              textAlign: 'center',
              color: '#ffffff',
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              display: 'block',
            }}
          >
            Real Results
            <br />
            <span
              className="block subhead white animate"
              style={{
                width: '100%',
                margin: '10px auto 0 auto',
                textAlign: 'center',
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 400,
                display: 'block',
                textTransform: 'none',
                color: '#ffffff',
                textShadow: '0 2px 6px rgba(0,0,0,0.3)',
              }}
            >
              Before &amp; After Gallery
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content & Tabs Section */}
      <section style={{ paddingTop: '20px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="mw1600 text-center" style={{ marginTop: 0, marginBottom: '40px', padding: '0 20px' }}>
            <h2
              className="title-md uppercase"
              style={{
                color: '#004438',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                marginTop: 0,
                marginBottom: '12px',
                fontFamily: "'novecento-sans', sans-serif",
                fontWeight: 300,
                letterSpacing: '0.05em',
              }}
            >
              Transformative Treatments
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                maxWidth: '780px',
                margin: '0 auto 18px',
                color: '#5a6e65',
                fontFamily: "'proxima-nova', sans-serif",
                lineHeight: 1.6,
              }}
            >
              Every treatment details what it is, how results unfold over time, and the real outcomes achieved by our patients.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="ledger-chips" role="tablist" aria-label="Filter treatments by category">
            <button
              type="button"
              className={`ledger-chip ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              role="tab"
              aria-selected={activeFilter === 'all'}
            >
              All Treatments
            </button>
            <button
              type="button"
              className={`ledger-chip ${activeFilter === 'neurotoxin' ? 'active' : ''}`}
              onClick={() => setActiveFilter('neurotoxin')}
              role="tab"
              aria-selected={activeFilter === 'neurotoxin'}
            >
              Botox &amp; Jeuveau
            </button>
            <button
              type="button"
              className={`ledger-chip ${activeFilter === 'prf' ? 'active' : ''}`}
              onClick={() => setActiveFilter('prf')}
              role="tab"
              aria-selected={activeFilter === 'prf'}
            >
              PRF Therapy
            </button>
            <button
              type="button"
              className={`ledger-chip ${activeFilter === 'laser' ? 'active' : ''}`}
              onClick={() => setActiveFilter('laser')}
              role="tab"
              aria-selected={activeFilter === 'laser'}
            >
              Laser
            </button>
            <button
              type="button"
              className={`ledger-chip ${activeFilter === 'hydrafacial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('hydrafacial')}
              role="tab"
              aria-selected={activeFilter === 'hydrafacial'}
            >
              HydraFacial
            </button>
          </div>

          {/* Ledger List */}
          <div className="ledger-list">
            {filteredItems.map((item, index) => (
              <article key={item.id} className="rowA" data-category={item.category}>
                <div className="ba-plain">
                  <div className="ba-photo-box">
                    <img
                      src={item.beforeImg}
                      alt={item.altBefore}
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <span className="ba-tag before-tag">Before</span>
                  </div>
                  <div className="ba-photo-box">
                    <img
                      src={item.afterImg}
                      alt={item.altAfter}
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <span className="ba-tag after-tag">After</span>
                  </div>
                </div>

                <div className="ledger-info">
                  <h2 className="ledger-title">{item.title}</h2>
                  <div className="ledger-meta-chips">
                    <span className="meta-chip">
                      <span className="meta-chip-label">Area:</span>
                      <span className="meta-chip-val">{item.area}</span>
                    </span>
                    <span className="meta-chip">
                      <span className="meta-chip-label">Timeline:</span>
                      <span className="meta-chip-val">{item.timeline}</span>
                    </span>
                  </div>
                  <a
                    href={item.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button box-shadow-smooth ledger-btn"
                  >
                    Book This Treatment <img className="arrow" src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right icon" />
                  </a>
                </div>

                <div className="ledger-timeline-col">
                  <div className="timeline-badge-card">
                    <div className="timeline-badge-header">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>Timeline</span>
                    </div>
                    <div className="timeline-badge-value">{item.timelineCardValue}</div>
                    <div className="timeline-badge-area">{item.timelineCardArea}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
