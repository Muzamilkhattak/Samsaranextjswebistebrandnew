"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function VIPMembership() {
  return (
    <main>
      <section className="pv100 mb100 mt50">
        <div className="container">
          <div className="text-center mb60">
            <img alt="VIP Membership Plantation" className="animate fadeUp mb25" src="/assets/img/icon.svg" />
            <h2 className="title-lg animate fadeIn uppercase" style={{ color: '#004438' }}>Membership Plans</h2>
            <p className="subhead accent-color animate strikethrough mt15">Exclusive Aesthetic & Wellness Membership Options</p>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .membership-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 30px;
              margin-bottom: 50px;
            }

            @media (max-width: 840px) {
              .membership-grid {
                grid-template-columns: 1fr;
              }
            }

            .membership-card {
              background: #ffffff;
              border: 1px solid #ebd9c8;
              border-radius: 16px;
              padding: 40px 35px;
              box-shadow: 0 10px 35px rgba(0, 68, 56, 0.06);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .membership-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 15px 40px rgba(0, 68, 56, 0.12);
            }

            .membership-card__title {
              font-family: 'novecento-sans', sans-serif !important;
              font-size: 24px;
              color: #004438;
              text-transform: uppercase;
              margin-bottom: 12px;
            }

            .membership-card__price {
              font-family: 'novecento-sans', sans-serif !important;
              font-size: 32px;
              font-weight: 700;
              color: #b5a596;
              margin-bottom: 15px;
            }

            .membership-card__desc {
              font-family: 'proxima-nova', sans-serif;
              font-size: 16px;
              color: #555555;
              line-height: 1.6;
              margin-bottom: 25px;
            }

            .membership-card__btn {
              display: inline-block;
              background: #004438;
              color: #ffffff !important;
              font-family: 'proxima-nova', sans-serif;
              font-weight: 700;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 1px;
              padding: 14px 30px;
              border-radius: 50px;
              text-align: center;
              text-decoration: none;
              transition: background 0.3s ease;
            }

            .membership-card__btn:hover {
              background: #b5a596;
            }
          `}} />
          <div className="membership-grid">
            {/* CARD 1: ELITE SOCIETY */}
            <div className="membership-card animate fadeIn">
              <div>
                <h3 className="membership-card__title">Elite Society</h3>
                <div className="membership-card__price">$259 <span style={{ fontSize: '16px', fontWeight: 400, color: '#777' }}>/ month</span></div>
                <p className="membership-card__desc">Premium membership with exclusive treatment pricing, monthly complimentary luxury services, future enhancements, and massage upgrades.</p>
              </div>
              <Link className="membership-card__btn" href="/elite-society/">View Details</Link>
            </div>
            {/* CARD 2: GLOW SOCIETY */}
            <div className="membership-card animate fadeIn">
              <div>
                <h3 className="membership-card__title">Glow Society</h3>
                <div className="membership-card__price">$229 <span style={{ fontSize: '16px', fontWeight: 400, color: '#777' }}>/ month</span></div>
                <p className="membership-card__desc">Designed for ongoing radiance, skin health, and routine rejuvenation with preferred neurotoxin pricing and monthly treatment perks.</p>
              </div>
              <Link className="membership-card__btn" href="/glow-society/">View Details</Link>
            </div>
            {/* CARD 3: THE RISE */}
            <div className="membership-card animate fadeIn">
              <div>
                <h3 className="membership-card__title">The Rise &ndash; Resident Membership</h3>
                <div className="membership-card__price">$199 <span style={{ fontSize: '16px', fontWeight: 400, color: '#777' }}>/ month</span></div>
                <p className="membership-card__desc">An exclusive resident membership offering monthly treatments, free vitamin injections, special neurotoxin pricing, and priority booking.</p>
              </div>
              <Link className="membership-card__btn" href="/the-rise/">View Details</Link>
            </div>
            {/* CARD 4: WEIGHT LOSS MEMBERSHIP */}
            <div className="membership-card animate fadeIn">
              <div>
                <h3 className="membership-card__title">Weight Loss Membership</h3>
                <div className="membership-card__price"><span style={{ fontSize: '14px', fontWeight: 400, color: '#777' }}>Starting at</span> $350 <span style={{ fontSize: '16px', fontWeight: 400, color: '#777' }}>/ mo</span></div>
                <p className="membership-card__desc">Personalized physician-guided weight loss support with medication options (Semaglutide/Tirzepatide), medical supervision, and weekly injections.</p>
              </div>
              <Link className="membership-card__btn" href="/weight-loss-membership/">View Details</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pv75 bg-image animate zoomOutBg" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)' } as React.CSSProperties}>
        <div className="container ps75">
          <div className="mw1600">
            <div className="inline-schedule-consult">
              <div className="flexy gap100 block-desktop is-vcentered">
                <div className="flexy-item animate fadeIn text-center">
                  <h2 className="ipj-link mb20 title-md white uppercase" data-ipj="Consultation" id="ipj-consult">Your Transformation Begins Here</h2>
                  <p className="lead accent-color mb20">Discuss Flexible<br /> Payment Options</p>
                  <p className="white mw600">Ask our team about payment planning so your treatment path can align with both your goals and your budget.</p>
                </div>
                <div className="flexy-item animate fadeIn">
                  <ScheduleConsultForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
