"use client";
import React from 'react';
import Link from 'next/link';

export default function Prf() {
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
          <div className="flexy-item animate fadeIn" data-ipj="Overview" id="prf-overview">
            <div className="pv35-desktop">
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">PRF Treatments</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Rejuvenate, Naturally You</h3>
              <p className="mb35 animate fadeIn">Your skin and hair have a remarkable ability to heal and renew themselves — sometimes they just need a little help getting started. Platelet-Rich Fibrin (PRF) treatments at Samsara Aesthetics &amp; Wellness in Plantation, FL, harness your body's own healing power to stimulate fresh cell growth, encourage collagen production, and support natural hair regrowth, all without surgery or significant downtime.</p>
              <p className="mb35 animate fadeIn">Our aesthetic specialists take a personalized approach to every treatment. By drawing on your own concentrated platelets and fibrin matrix and applying them with precision, we create results designed to help you look refreshed, revitalized, and still completely like yourself.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="PRF Treatments Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/prf.webp" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="mb0 pv100" style={{backgroundColor: '#f9f7f5'}}>
    <div className="container">
      <div className="mw1200">
        <div className="text-center mb50 animate fadeIn">
          <h2 className="title-lg uppercase mb15" data-ipj="Results" id="prf-before-after" style={{fontFamily: '"novecento-sans", sans-serif', color: '#000'}}>See The Difference</h2>
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
            <img alt="PRF Treatment Results" src="/assets/img/services page images/prf before and after.webp" style={{width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
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
              <h2 className="title-md accent-color uppercase mb15">What Is PRF?</h2>
              <p>Platelet-Rich Fibrin (PRF) is an advanced aesthetic treatment that builds on the foundation of PRP, using your body's own natural healing abilities to revitalize skin and hair. Like PRP, the process begins with a small blood draw, similar to a routine blood test. That sample is then processed to concentrate the platelets, this time within a fibrin-rich matrix that allows growth factors to be released more gradually into the treated area. Once prepared, the PRF is carefully injected into the targeted area, where it stimulates fresh cell growth and encourages tissue renewal. Because PRF uses your own blood, it is a minimally invasive way to support the skin's natural rejuvenation process.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="What Is PRF" src="/assets/img/services page images/What Is PRF.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Restore, Rejuvenate, Accelerate</h3>
          <div className="flexy gap50 block-mobile align-center mt25">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of PRF Treatments?</h2>
              <p>PRF treatments offer a natural, minimally invasive approach to common aesthetic concerns. Depending on your individual needs and the provider's assessment, PRF can be used to:</p>
              <ul style={{listStyleType: 'disc', paddingLeft: 20, marginBottom: 20}}>
                <li><strong>Restore Hair</strong> — Stimulates hair follicles to promote regrowth and improve density for those experiencing thinning or hair loss.</li>
                <li><strong>Rejuvenate Skin</strong> — Enhances collagen production to reduce fine lines, wrinkles, and skin irregularities for a more youthful complexion.</li>
                <li><strong>Minimize Dark Circles</strong> — Improves under-eye skin texture and reduces the appearance of dark circles, helping you look refreshed.</li>
                <li><strong>Accelerate Healing</strong> — Supports faster recovery for injuries and surgical scars.</li>
                <li><strong>Boost Confidence</strong> — Delivers natural-looking results that help you feel your best.</li>
              </ul>
              <p>The procedure is quick, treatment plans are highly customizable, and downtime is typically minimal. Most importantly, precise application allows us to focus on supporting your body's own healing process rather than introducing anything artificial.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Benefits of PRF" src="/assets/img/services page images/Benefits of PRF.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Understanding Your Skin and Hair</h3>
          <h2 className="title-md accent-color uppercase mb15">Your PRF Consultation</h2>
          <p>Every successful PRF treatment begins with understanding your unique goals, not simply addressing a single concern. During your consultation at Samsara Aesthetics &amp; Wellness, our aesthetic specialists will discuss your concerns, treatment goals, and previous experience with aesthetic procedures. We will also evaluate the treatment area, whether that's assessing hair thinning patterns, skin texture, or under-eye concerns, to better understand what approach will serve you best.</p>
          <p>Based on this assessment, we can determine whether PRF aligns with your goals and develop a personalized treatment plan designed around you. Your consultation is also an opportunity to ask questions, understand what to expect, and discuss the type of results you're hoping to achieve. Whether you're focused on hair restoration, skin rejuvenation, or both, your treatment plan will be approached with care and precision in mind.</p>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Plasma, Precisely Applied</h3>
          <h2 className="title-md accent-color uppercase mb15">Your PRF Procedure</h2>
          <p>PRF treatments are minimally invasive and typically well-tolerated. The process starts with a blood draw, much like a routine blood test at your doctor's office. Your blood sample is then processed to separate out a concentration of platelets within a fibrin matrix. After thoroughly cleansing the treatment area, your practitioner skillfully injects the PRF solution into the targeted region. Most patients describe mild discomfort during the process, and our team ensures your comfort throughout. Treatments can typically be completed in under an hour, allowing you to resume your daily activities with minimal downtime.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Simple Aftercare, Minimal Interruption</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>Recovery following a PRF treatment is generally straightforward. Some patients may notice mild swelling, redness, or bruising at the injection sites. These effects are temporary and typically improve on their own. Your practitioner will provide personalized aftercare instructions following your appointment, which may include avoiding excessive sun exposure and rigorous exercise for a period of time. Following your aftercare guidance is important for supporting your results and ensuring a smooth recovery.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Renewed Confidence, Naturally</h3>
          <h2 className="title-md accent-color uppercase mb15">PRF Results</h2>
          <p>Results from PRF treatments develop gradually as your body's natural healing response takes effect, supported by the sustained release of growth factors from the fibrin matrix. Many patients begin to notice improvements within a few weeks, with results continuing to develop over the following weeks depending on the treatment area and your individual response. As your body rejuvenates the treated area, you may notice enhanced hair growth, smoother skin, and a refreshed overall appearance.</p>
          <p>PRF results can last for several months, and individual longevity can vary based on the treatment area, your body's response, and lifestyle factors. Periodic maintenance treatments can be discussed with your provider to help extend and preserve your results.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">PRF Treatments<br /><span className="highlight-color">Frequently Asked Questions</span></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Are PRF treatments safe?</h3>
            </div>
            <div className="accordion__answer">
              <p>Yes, PRF treatments are generally considered very safe. Because the treatment uses your body's own natural platelet-rich plasma and fibrin derived from a small blood draw, the risk of an allergic reaction or rejection is extremely low.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How long do the results of PRF treatments last?</h3>
            </div>
            <div className="accordion__answer">
              <p>The longevity of PRF results can vary depending on the treatment area, your body's individual response, and lifestyle factors. Generally, results can last anywhere from 12 to 18 months. Periodic maintenance sessions are often recommended to sustain optimal results.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is there downtime after PRF treatments?</h3>
            </div>
            <div className="accordion__answer">
              <p>Downtime after PRF is minimal. You may experience some mild redness, swelling, or pinpoint bruising at the injection sites, but these effects usually resolve quickly. Most patients are able to return to their normal daily activities right after their appointment.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Who is a suitable candidate for PRF treatments?</h3>
            </div>
            <div className="accordion__answer">
              <p>PRF is suitable for most healthy adults looking to improve skin texture, reduce fine lines, minimize dark circles, or stimulate hair growth. During your consultation, we will review your medical history and specific aesthetic goals to ensure PRF is the right choice for you.</p>
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
