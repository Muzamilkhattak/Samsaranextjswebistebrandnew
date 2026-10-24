"use client";
import React from 'react';
import Link from 'next/link';

export default function MassageTherapy() {
  return (
    <main>
      <div>
  <div className="mobile-cta">
    <a aria-label="Call Samsara Aesthetics & Wellness on the phone today" href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}>(954) 688-7255</a>
    <a href="/contact/"> Appointment</a>
  </div>
  <div className="overlay">
  </div>
  <div className="modal">
    <div className="modal-background" />
    <div className="modal-content">
    </div>
    <button aria-label="close" className="modal-close is-large" />
  </div>
  
  <section className="mb75 overview-section">
    <div className="container" style={{paddingTop: 25}}>
      <div className="mw1600">
        <div className="flexy gap100 block-desktop is-vcentered">
          <div className="flexy-item animate fadeIn" data-ipj="Overview" id="massage-therapy-overview">
            <div className="pv35-desktop">
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">Massage Therapy</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Rejuvenate, Naturally You</h3>
              <p className="mb35 animate fadeIn">Relaxation is more than a luxury, it's a vital part of overall well-being. Massage Therapy at Samsara Aesthetics &amp; Wellness in Plantation, FL, offers a natural, holistic way to release tension, ease pain, and restore balance to both body and mind.</p>
              <p className="mb35 animate fadeIn">Our skilled therapists take a personalized approach to every session. Through tailored techniques and thoughtful care, we create an experience designed to help you feel refreshed, revitalized, and completely like yourself.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="Massage Therapy Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/Massagetherapy.webp" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="mb0 pv100" style={{display: 'none !important'}}>
    <div className="container">
      <div className="mw1200">
        <div className="text-center mb50 animate fadeIn">
          <h2 className="title-lg uppercase mb15" data-ipj="Results" id="massage-therapy-before-after" style={{fontFamily: '"novecento-sans", sans-serif', color: '#000'}}>See The Difference</h2>
        </div>
        
        <div style={{display: 'none !important'}}>
          <div className="results-tabs-container">
            <button className="results-tab-btn active" />
            <button className="results-tab-btn" />
          </div>
          <div id="botox-tab-content" />
          <div id="xeomin-tab-content" />
          <div className="ba-slider" id="ba-slider-botox">
            <div className="ba-before" id="ba-before-clip-botox" />
            <div className="ba-handle" id="ba-handle-botox" />
          </div>
        </div>
        
        <div className="animate fadeIn" style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{maxWidth: 500, width: '100%', padding: '0 20px'}}>
            <img alt="Massage Therapy Results" src="/assets/img/services page images/benefits of massage therapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="mb75 pt75" style={{backgroundColor: '#f7f5f2'}}>
    <div className="container">
      <div className="mw1200">
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">Understanding the Healing Touch</h3>
              <h2 className="title-md accent-color uppercase mb15">What Is Massage Therapy?</h2>
              <p>Massage Therapy is a holistic practice that involves manipulating muscles, tendons, ligaments, and soft tissues to alleviate tension, reduce stress, and promote relaxation. It's a therapeutic approach that can address various health concerns, from easing chronic pain to improving circulation and enhancing overall wellness. Our massage therapists are dedicated to providing a customized experience tailored to your unique needs.<br /><br />We also offer post-surgical massage therapy, tailored specifically to aid in surgical recovery. Unlike a traditional massage, this approach targets the specific muscles affected by surgery, with sessions customized to support your healing journey.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="What Is Massage Therapy?" src="/assets/img/services page images/what is massage therapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center mt25">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Relax, Rejuvenate</h3>
              <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of Massage Therapy?</h2>
              <p>Massage Therapy offers a wealth of benefits for both physical and mental well-being. Depending on your individual needs and the techniques used, massage therapy can help:<br /><br />
                <strong>Reduce Stress</strong> — Aid in releasing endorphins and promoting relaxation to substantially reduce feelings of stress and anxiety.<br /><br />
                <strong>Relieve Muscle Tension and Pain</strong> — Effectively manage conditions like back pain, migraines, and arthritis.<br /><br />
                <strong>Improve Circulation</strong> — Enhance the delivery of oxygen and nutrients to muscles and tissues for improved overall health.<br /><br />
                <strong>Enhance Flexibility</strong> — Support joint mobility for a more active, pain-free lifestyle.<br /><br />
                <strong>Support Immune Function</strong> — Help the body defend against illness while promoting better sleep patterns.<br /><br />
                <strong>Boost Mood</strong> — Elevate emotional well-being and contribute to an improved quality of life.<br /><br />
                Whether for injury recovery, headache relief, or overall relaxation, massage therapy offers a holistic approach to improving both physical and mental health.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Benefits of Massage Therapy" src="/assets/img/services page images/benefits of massage therapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Understanding Your Wellness Goals</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Massage Therapy Consultation</h2>
          <p>Every successful massage therapy session begins with understanding your unique needs, not simply identifying an area of tension.<br /><br />During your consultation at Samsara Aesthetics &amp; Wellness, our experienced wellness experts will discuss any specific concerns or areas of focus you may have, ensuring your session is tailored to address your individual needs.<br /><br />Whether you're seeking relaxation, pain relief, or improved flexibility, our dedicated professionals will create a personalized plan to help you achieve your desired outcomes. Your consultation is also an opportunity to ask questions and discuss the type of experience you're hoping to have.</p>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">The Mind-Body Connection</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Massage Therapy Procedure</h2>
          <p>Your therapist will employ various massage techniques, such as Swedish, deep tissue, or hot stone, depending on your specific needs and preferences discussed during the consultation. These techniques are designed to alleviate muscle tension, reduce stress, improve circulation, and promote overall relaxation and well-being.<br /><br />For post-surgical massage therapy, your therapist will focus specifically on the areas identified during your consultation, ensuring you receive targeted relief and support throughout the session. Whether you're seeking relief from chronic pain, relaxation, or enhanced flexibility, our massage therapy procedures are tailored to meet your individual requirements, providing a rejuvenating and revitalizing experience.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Melts Away Muscle Tension</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>After your massage therapy session, it's essential to continue nurturing your well-being. Stay hydrated to help flush toxins from your body, and avoid strenuous physical activities immediately following your massage to allow your muscles to fully relax.<br /><br />Many patients find that integrating regular massages into their wellness routine enhances the long-term benefits. Our wellness experts can help determine the frequency and type of massage that best suits your needs.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Mental Wellness Through Massage</h3>
          <h2 className="title-md accent-color uppercase mb15">Massage Therapy Results</h2>
          <p>After a massage therapy session, many patients report feeling immediate relief from muscle tension, reduced stress, and improved overall well-being. Over time, regular massages can contribute to better flexibility, enhanced circulation, and a heightened sense of relaxation.<br /><br />Our wellness experts aim to create a customized experience that aligns with your specific goals, whether you seek relief from chronic pain or simply want to relax and rejuvenate. With consistent sessions, you can expect cumulative benefits that support your overall health and quality of life.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">Massage Therapy<br /><span className="highlight-color">Frequently Asked Questions</span><br /></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">What types of massage are available at Samsara Aesthetics &amp; Wellness?</h3>
            </div>
            <div className="accordion__answer">
              <p>We offer a variety of massage techniques including Swedish, deep tissue, hot stone, and specialized post-surgical massage therapy. Your therapist will recommend the best approach during your consultation based on your specific needs and wellness goals.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How often should I schedule a massage session?</h3>
            </div>
            <div className="accordion__answer">
              <p>The ideal frequency depends on your individual goals. For general relaxation and stress relief, a monthly massage is often recommended. If you're managing chronic pain or recovering from an injury, more frequent sessions may be beneficial. Our experts will help you create a personalized schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="cta-ready-section" style={{position: 'relative', overflow: 'visible', padding: '90px 20px', textAlign: 'center', backgroundImage: 'url("/assets/img/bg/marble-green-01.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
    
    <div style={{position: 'absolute', inset: 0, background: 'rgba(0, 30, 20, 0.52)', pointerEvents: 'none'}} />
    <div className="container" style={{position: 'relative', zIndex: 2, maxWidth: 1000, margin: '0 auto', overflow: 'visible', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingLeft: 20, paddingRight: 20}}>
      
      <div style={{width: 60, height: 2, background: 'linear-gradient(253deg, #613e19 13.22%, #e8b783 50.39%, #623f1b 82.95%)', margin: '0 auto 28px', borderRadius: 2}} />
      <h2 style={{fontFamily: '"manhattan", serif', fontWeight: 400, fontSize: 'clamp(20px, 5.5vw, 68px)', color: '#ffffff', margin: '0 0 20px', lineHeight: '1.15', letterSpacing: '0.01em', textAlign: 'center'}}>Ready to get started?</h2>
      <p style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.88)', maxWidth: 520, margin: '0 auto 38px', lineHeight: '1.7', fontWeight: 400, textAlign: 'center'}}>If you're looking to enhance your skin's health and appearance, consider visiting our clinic for a
        skin booster treatment.</p>
      <a aria-label="Book Now at Samsara Aesthetics & Wellness" className="button light box-shadow-smooth" href="/booking/" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'cta_book_now_click'); }} onMouseOut={(e) => { e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 6px 28px rgba(0,0,0,0.22)'; }} onMouseOver={(e) => { e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 12px 36px rgba(0,0,0,0.32)'; }} style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 15, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 48px', borderRadius: 50, display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: 'url("/assets/img/bg/marble-grey.jpg") center/cover', color: '#004438', border: 'none', transition: 'transform 0.35s ease, box-shadow 0.35s ease', boxShadow: '0 6px 28px rgba(0,0,0,0.22)'}}>
        Book Now
        <img alt="arrow right" src="/assets/img/_defaults/arrow-right-highlight.svg" style={{height: 14, transition: 'transform 0.35s ease'}} />
      </a>
      
      <div style={{width: 60, height: 2, background: 'linear-gradient(253deg, #613e19 13.22%, #e8b783 50.39%, #623f1b 82.95%)', margin: '38px auto 0', borderRadius: 2}} />
    </div>
  </section>
  
</div>
    </main>
  );
}
