"use client";
import React from 'react';
import Link from 'next/link';

export default function Ipl() {
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
          <div className="flexy-item animate fadeIn" data-ipj="Overview" id="iv-therapy-overview">
            <div className="pv35-desktop">
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">IPL Photofacial</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Rejuvenate, Naturally You</h3>
              <p className="mb35 animate fadeIn">Sun damage, age spots, and uneven tone are a natural part of
                life, but they don't have to be permanent. IPL Photofacial at Samsara Aesthetics &amp;
                Wellness in Plantation, FL, uses advanced light technology to target pigmentation,
                redness, and texture concerns, revealing clearer, more radiant skin without surgery or
                significant downtime.</p>
              <p className="mb35 animate fadeIn">Our aesthetic specialists take a personalized approach to
                every treatment. Through thoughtful assessment and precise application, we create
                results designed to help you look refreshed, rejuvenated, and completely like yourself.
              </p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="IPL Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/ipl.webp" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="mb0 pv100" style={{backgroundColor: '#f9f7f5'}}>
    <div className="container">
      <div className="mw1200">
        <div className="text-center mb50 animate fadeIn">
          <h2 className="title-lg uppercase mb15" data-ipj="Results" id="iv-therapy-before-after" style={{fontFamily: '"novecento-sans", sans-serif', color: '#000'}}>See The Difference</h2>
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
            <img alt="IPL Results" src="/assets/img/services page images/before and after results ipl.webp" style={{width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
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
              <h3 className="title-sm highlight-color mb5 uppercase">See The Difference</h3>
              <h2 className="title-md accent-color uppercase mb15">What Is IPL Photofacial?</h2>
              <p>An IPL Photofacial is a non-invasive skin rejuvenation treatment that uses advanced light
                technology to address various skin concerns. It delivers high-intensity pulses of light
                to target specific skin issues without damaging surrounding tissues. Whether you're
                dealing with sunspots, rosacea, or uneven skin tone, IPL Photofacial can be tailored to
                your unique needs.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="What Is IPL?" src="/assets/img/services page images/what is ipl.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center mt25">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">Illuminate, Rejuvenate, Refine</h3>
              <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of IPL Photofacial?
              </h2>
              <p>IPL Photofacial offers a versatile approach to addressing common skin concerns. Depending
                on your individual needs and the provider's assessment, IPL Photofacial can help:</p>
              <ul style={{listStyleType: 'disc', marginLeft: 20, marginBottom: 20, color: '#555', fontFamily: '"proxima-nova", sans-serif', lineHeight: '1.65', fontSize: 16}}>
                <li style={{marginBottom: 10}}><strong>Stimulate Collagen Production</strong> — Result
                  in a smoother, more youthful-looking skin texture.</li>
                <li style={{marginBottom: 10}}><strong>Target Pigmentation</strong> — Effectively
                  address age spots, sun spots, and facial redness caused by rosacea.</li>
                <li style={{marginBottom: 10}}><strong>Minimize Enlarged Pores</strong> — Give your
                  skin a more refined and rejuvenated look.</li>
                <li style={{marginBottom: 10}}><strong>Even Out Skin Tone</strong> — Reduce the
                  appearance of uneven pigmentation for a more balanced complexion.</li>
                <li style={{marginBottom: 10}}><strong>Boost Confidence</strong> — Reveal clearer,
                  more radiant skin that helps you feel your best.</li>
              </ul>
              <p>The procedure is quick, treatment plans are highly customizable, and downtime is
                typically minimal.</p>
              <ul style={{listStyleType: 'disc', marginLeft: 20, marginBottom: 20, color: '#555', fontFamily: '"proxima-nova", sans-serif', lineHeight: '1.65', fontSize: 16}}>
                <li style={{marginBottom: 10}}><strong>Improve Elasticity</strong> — Stimulate
                  collagen production for a noticeable reduction in sagging skin.</li>
                <li style={{marginBottom: 10}}><strong>Define Contours</strong> — Achieve a more
                  sculpted facial or body appearance.</li>
                <li style={{marginBottom: 10}}><strong>Address Multiple Concerns</strong> — Treat fine
                  lines, wrinkles, acne scars, and stretch marks.</li>
                <li style={{marginBottom: 10}}><strong>Fit a Busy Schedule</strong> — Minimal downtime
                  allows a quick return to daily activities.</li>
                <li style={{marginBottom: 10}}><strong>Deliver Natural Results</strong> — Promote the
                  skin's own collagen production rather than introducing anything artificial.</li>
              </ul>
              <p>Morpheus8's combination of effectiveness and convenience makes it a top choice for those
                seeking a non-invasive approach to aesthetic enhancement.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Benefits of IPL" src="/assets/img/services page images/benefits of ipl.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Understanding Your Skin</h3>
          <h2 className="title-md accent-color uppercase mb15">Your IPL Photofacial Consultation</h2>
          <p>Every successful IPL Photofacial treatment begins with understanding your skin, not simply
            identifying a spot or area of concern. During your consultation at Samsara Aesthetics &amp;
            Wellness, our expert practitioners will assess your skin type, discuss your goals, and create a
            personalized treatment plan.</p>
          <p style={{marginTop: 15}}>We want to ensure your IPL experience is tailored to your unique needs,
            promoting the best possible results. Your consultation is also an opportunity to ask questions
            and understand what to expect from your treatment.</p>
          <p style={{marginTop: 15}}>During your consultation at Samsara Aesthetics &amp; Wellness, our
            expert team will evaluate your specific requirements and determine if Morpheus8 is the best
            option for you.</p>
          <p style={{marginTop: 15}}>During this personalized session, you'll have ample opportunity to
            discuss your expectations and ask any questions you may have. We are committed to ensuring you
            are fully informed and confident in your decision to move forward with treatment.</p>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Smooth, Healthy Skin</h3>
          <h2 className="title-md accent-color uppercase mb15">Your IPL Photofacial Procedure</h2>
          <p>Once your consultation is complete and your treatment plan is in place, you'll undergo the IPL
            Photofacial procedure. The process is relatively quick and virtually painless. A handheld device
            emits pulses of light onto the targeted areas, and you may feel a mild warming sensation. Most
            patients find the procedure comfortable and easily tolerable.</p>
          <p style={{marginTop: 15}}>Patients may feel a mild sensation, often described as warmth or slight
            pressure, as the device works. The procedure is well-tolerated by most patients and typically
            lasts between 30 minutes and an hour, depending on the treatment area. Afterward, patients can
            immediately return to their daily activities with minimal downtime.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Exude Youth</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>One of the remarkable aspects of IPL Photofacial is the minimal downtime it requires. You can
            typically resume your daily activities immediately after the procedure. However, it's essential
            to protect your skin from excessive sun exposure and follow any specific aftercare instructions
            provided by our experts to maximize the longevity of your results.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Clearer, More Radiant</h3>
          <h2 className="title-md accent-color uppercase mb15">IPL Photofacial Results</h2>
          <p>The results of IPL Photofacial treatments are often noticeable after just one session. However, a
            series of treatments may be recommended for optimal results. Over time, you'll experience
            smoother, clearer, and more radiant skin. Many clients report feeling a renewed sense of
            confidence as they see their skin concerns diminish.</p>
          <p style={{marginTop: 15}}>Morpheus8 offers a comfortable and effective path to skin rejuvenation,
            leaving patients with a revitalized and more radiant look.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">IV Therapy<br /><span className="highlight-color">Frequently Asked Questions</span></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is IV Therapy treatment painful?</h3>
            </div>
            <div className="accordion__answer">
              <p>The number of sessions depends on your individual goals and the condition being treated.
                Most patients achieve optimal results with a series of 3 to 5 treatments, spaced about 4
                weeks apart.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Are there any risks associated with IV Therapy?</h3>
            </div>
            <div className="accordion__answer">
              <p>IPL is generally suitable for lighter skin types, but a consultation is necessary to
                determine if it is the best treatment for your specific skin type and concerns.</p>
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
