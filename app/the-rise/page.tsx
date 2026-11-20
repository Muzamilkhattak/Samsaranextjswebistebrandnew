"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function TheRise() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{__html: `

				.rise-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-bottom: 40px; }
				@media (max-width: 840px) { .rise-grid { grid-template-columns: 1fr; } }
				.rise-card { background: #ffffff; border: 1px solid #ebd9c8; border-radius: 16px; padding: 40px 35px; box-shadow: 0 10px 35px rgba(0, 68, 56, 0.06); transition: transform 0.3s ease; }
				.rise-card:hover { transform: translateY(-3px); }
				.rise-card__title { font-family: 'novecento-sans', sans-serif !important; font-size: 24px; color: #004438; text-transform: uppercase; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #b5a596; letter-spacing: 1px; }
				.rise-list { list-style: none; padding: 0; margin: 0; }
				.rise-list li { font-family: 'proxima-nova', sans-serif; font-size: 16px; color: #333333; margin-bottom: 14px; padding-left: 28px; position: relative; line-height: 1.6; }
				.rise-list li::before { content: "✓"; position: absolute; left: 0; color: #004438; font-weight: 700; font-size: 18px; }
			
      `}} />
      <div>
  <section className="pv100">
    <div className="container" style={{maxWidth: 1100}}>
      <div className="text-center mb60">
        <img alt="Samsara Aesthetics & Wellness" className="animate fadeUp mb25" src="/assets/img/icon.svg" />
        <h2 className="title-lg title-green-bg animate fadeIn uppercase" style={{fontFamily: '"novecento-sans", sans-serif'}}>The Rise Resident Membership</h2>
        <div className="mt20">
          <span style={{display: 'inline-block', background: '#b5a596', color: '#ffffff', fontFamily: '"novecento-sans", sans-serif', fontWeight: 700, fontSize: 28, padding: '10px 35px', borderRadius: 50, boxShadow: '0 4px 15px rgba(0, 68, 56, 0.15)'}}>$199 / MONTH</span>
        </div>
        <p style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 15, color: '#777', marginTop: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1}}>(Regular Membership Value: $249/Month)</p>
      </div>
      <div className="rise-grid">
        <div className="rise-card animate fadeIn">
          <h3 className="rise-card__title">Every Month Includes</h3>
          <p style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 15, fontWeight: 700, color: '#004438', textTransform: 'uppercase', marginBottom: 10}}>Choice of Monthly Service (Choose 1/mo):</p>
          <ul className="rise-list mb20">
            <li>Signature HydraFacial</li>
            <li>60-Minute Massage (Swedish, Deep Tissue, Hot Stone)</li>
            <li>30-Minute Forma</li>
          </ul>
          <ul className="rise-list">
            <li><strong>Free Vitamin Injection (1mL):</strong> 1 per month</li>
            <li><strong>Birthday Gift:</strong> 10 Units of Neurotoxin</li>
          </ul>
        </div>
        <div className="rise-card animate fadeIn">
          <h3 className="rise-card__title">Special Neurotoxin Pricing</h3>
          <ul className="rise-list">
            <li><strong>Botox:</strong> $12 / unit</li>
            <li><strong>Jeuveau:</strong> $40 OFF every 90 days</li>
            <li><strong>Xeomin:</strong> $8 / unit</li>
          </ul>
        </div>
      </div>
      <div className="rise-card animate fadeIn mb40">
        <h3 className="rise-card__title">Exclusive Package &amp; Product Discounts</h3>
        <div className="rise-grid" style={{marginBottom: 0, gap: 20}}>
          <div>
            <h4 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 18, color: '#004438', textTransform: 'uppercase', marginBottom: 12}}>15% OFF</h4>
            <ul className="rise-list">
              <li>Laser Hair Removal Packages</li>
              <li>IPL Photofacial Packages</li>
              <li>Body Contouring Packages</li>
              <li>IV Therapy</li>
            </ul>
          </div>
          <div>
            <h4 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 18, color: '#004438', textTransform: 'uppercase', marginBottom: 12}}>10% OFF</h4>
            <ul className="rise-list">
              <li>Microneedling Packages</li>
              <li>Medical-Grade Skincare</li>
            </ul>
          </div>
        </div>
        <div style={{borderTop: '1px solid #ebd9c8', paddingTop: 20, marginTop: 20}}>
          <h4 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 18, color: '#004438', textTransform: 'uppercase', marginBottom: 12}}>Priority Access &amp; Events</h4>
          <ul className="rise-list">
            <li><strong>Priority Booking:</strong> Get first access to appointments and special events.</li>
            <li><strong>Exclusive Member Pricing:</strong> Enjoy member savings during special events and promotions.</li>
          </ul>
        </div>
      </div>
      <div className="text-center mb40 p30" style={{background: '#fbf9f6', borderRadius: 16, border: '1px solid #ebd9c8'}}>
        <h3 style={{fontFamily: '"novecento-sans", sans-serif !important', fontSize: 24, color: '#004438', textTransform: 'uppercase', marginBottom: 10}}>YOU DESERVE TO FEEL CONFIDENT, RADIANT &amp; CARED FOR.</h3>
        <p style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 18, color: '#b5a596', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 0}}>Thank you for being part of The Rise Community.</p>
      </div>
      <div className="rise-card animate fadeIn mb50" style={{background: '#ffffff', borderColor: '#b5a596'}}>
        <h3 className="rise-card__title">Member Terms</h3>
        <ul className="rise-list">
          <li>Six-month commitment required</li>
          <li>Auto-renews monthly after initial commitment</li>
          <li>One treatment per month</li>
          <li>Unused monthly treatments expire after 30 days</li>
          <li>Membership benefits are non-transferable</li>
          <li>Cannot be combined with other promotions</li>
          <li>Prices and benefits subject to change</li>
        </ul>
      </div>
      <div className="text-center mt50">
        <h3 style={{fontFamily: '"novecento-sans", sans-serif !important', fontSize: 24, color: '#004438', textTransform: 'uppercase', marginBottom: 20}}>EXCLUSIVE. PERSONALIZED. ALWAYS YOU. ♥</h3>
        <a className="button" href="/contact/" style={{borderRadius: 50, padding: '18px 45px', background: '#004438', color: '#ffffff'}}>Join The Rise Membership</a>
      </div>
    </div>
  </section>
  <section className="pv75 bg-image animate zoomOutBg" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)' } as React.CSSProperties}>
    <div className="container ps75">
      <div className="mw1600">
        <div className="inline-schedule-consult">
          <div className="flexy gap100 block-desktop is-vcentered">
            <div className="flexy-item animate fadeIn text-center">
              <h2 className="ipj-link mb20 title-md white uppercase" data-ipj="Consultation" id="ipj-consult">
                Your Transformation Begins Here</h2>
              <p className="lead accent-color mb20">Discuss Flexible<br /> Payment Options</p>
              <p className="white mw600">Ask our team about payment planning so your treatment path can align
                with both your goals and your budget.</p>
            </div>
            <div className="flexy-item animate fadeIn">
              <ScheduleConsultForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </main>
  );
}
