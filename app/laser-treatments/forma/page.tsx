"use client";
import React from 'react';
import Link from 'next/link';

export default function Forma() {
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
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">Forma Facial</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Rejuvenate, Naturally You</h3>
              <p className="mb35 animate fadeIn">A youthful, lifted appearance doesn't have to require surgery. Forma Facial at Samsara Aesthetics &amp; Wellness in Plantation, FL, uses radiofrequency technology to stimulate collagen production and tighten the skin, offering a natural, non-surgical alternative to a facelift.</p>
              <p className="mb35 animate fadeIn">Our aesthetic specialists take a personalized approach to every treatment. Through thoughtful assessment and precise application, we create results designed to help you look refreshed, revitalized, and completely like yourself.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="Forma Facial Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/forma.webp" />
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
            <img alt="Forma Facial Results" src="/assets/img/services page images/before and after results of forma.webp" style={{width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
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
              <h3 className="title-sm highlight-color mb5 uppercase">Forma Facial</h3>
              <h2 className="title-md accent-color uppercase mb15">What Is a Forma Facial?</h2>
              <p>A Forma Facial is an advanced non-surgical cosmetic procedure designed to rejuvenate and tighten the skin, providing a natural and youthful appearance. This innovative treatment employs radiofrequency (RF) technology to stimulate collagen production and improve skin elasticity, offering an effective alternative to more invasive procedures.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="What Is a Forma Facial?" src="/assets/img/services page images/what is forma.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center mt25">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">Firm, Tone, Rejuvenate</h3>
              <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of a Forma Facial?</h2>
              <p>A Forma Facial can effectively address a variety of skin concerns. Depending on your individual needs and the provider's assessment, a Forma Facial can help:</p><ul style={{listStyleType: 'disc', marginLeft: 20, marginBottom: 20, color: '#555', fontFamily: '"proxima-nova", sans-serif', lineHeight: '1.65', fontSize: 16}}><li style={{marginBottom: 10}}><strong>Reduce Fine Lines and Wrinkles</strong> — Stimulate collagen production for smoother, more youthful skin.</li><li style={{marginBottom: 10}}><strong>Improve Sagging Skin</strong> — Tighten and firm the skin for a more lifted appearance.</li><li style={{marginBottom: 10}}><strong>Even Out Skin Texture</strong> — Address uneven texture for a more refined complexion.</li><li style={{marginBottom: 10}}><strong>Deliver Gradual, Natural Results</strong> — Noticeable improvements appear over several weeks for a subtle transformation.</li><li style={{marginBottom: 10}}><strong>Extend Long-Lasting Benefits</strong> — Results can be maintained with regular maintenance sessions.</li></ul><p>The treatment is virtually painless and requires no downtime, making it a convenient, non-invasive option for facial rejuvenation.</p></div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Benefits of a Forma Facial" src="/assets/img/services page images/benefits of forma.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">The Ultimate Non-Surgical Facelift Alternative</h3><p>Every successful Forma Facial treatment begins with understanding your unique goals, not simply identifying an area of concern. During your consultation at Samsara Aesthetics &amp; Wellness, our team will answer any questions about the Forma Facial, explain the procedure, and provide recommendations based on your individual needs.</p><p style={{marginTop: 15}}>We're committed to ensuring you have a comfortable and informed experience every step of the way. By the end of your consultation, you'll clearly understand how the Forma Facial can benefit you and the expected outcomes.</p>
          <h2 className="title-md accent-color uppercase mb15">Your Forma Facial Consultation</h2>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">A Holistic Approach to Beauty</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Forma Facial Procedure</h2>
          <p>During a Forma Facial, a specialized device is gently applied to the target areas, delivering controlled RF energy into the skin's deeper layers. This process promotes collagen remodeling, resulting in firmer, smoother, and more radiant skin. The treatment is virtually painless and requires no downtime, making it a convenient option for those seeking a non-invasive approach to facial rejuvenation.</p></div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Reduce Wrinkles and Sagging Skin</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>Recovery and aftercare following a Forma Facial are virtually hassle-free. This non-surgical facelift alternative requires no downtime, allowing you to immediately return to your daily activities. You might experience mild redness or warmth, which typically subsides within a few hours. Protecting your skin from excessive sun exposure and maintaining a good skincare routine post-treatment is crucial for maximizing your results.</p></div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">A Natural &amp; Refreshed Appearance</h3>
          <h2 className="title-md accent-color uppercase mb15">Forma Facial Results</h2>
          <p>Over the following weeks after treatment, you'll notice a gradual improvement in skin texture, tone, and elasticity. Forma Facial results include reduced fine lines, enhanced skin firmness, and a more youthful appearance, revealing radiant, rejuvenated skin that reflects your inner beauty.</p></div>
      </div>
    </div>
  </section>
  
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">Forma Facial<br /><span className="highlight-color">Frequently Asked Questions</span></h2>
        <div className="accordion mt50 animate fadeIn"><div className="accordion__item"><div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}><h3 className="title-sm uppercase">Is Forma safe for all skin types?</h3></div><div className="accordion__answer"><p>Yes, Forma is suitable and safe for all skin types. It's a non-invasive treatment that effectively targets deeper layers of the skin without causing damage to the surface.</p></div></div><div className="accordion__item"><div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}><h3 className="title-sm uppercase">How long does a Forma Facial treatment session take?</h3></div><div className="accordion__answer"><p>A typical Forma Facial session takes about 30 to 45 minutes, making it an excellent "lunchtime" procedure with no downtime required.</p></div></div><div className="accordion__item"><div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}><h3 className="title-sm uppercase">How many Forma Facial sessions will I need to see optimal results?</h3></div><div className="accordion__answer"><p>While you may see some immediate skin tightening, we typically recommend a series of 6 sessions, scheduled once a week, to achieve the most optimal and long-lasting results.</p></div></div></div>
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
