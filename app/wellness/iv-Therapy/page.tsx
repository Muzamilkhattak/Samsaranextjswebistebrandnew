"use client";
import React from 'react';
import Link from 'next/link';

export default function IvTherapy() {
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
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">IV Therapy</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Rejuvenate, Naturally You</h3>
              <p className="mb35 animate fadeIn">True beauty starts from within. While our aesthetic
                treatments enhance your natural glow, IV Therapy at Samsara Aesthetics &amp; Wellness in
                Plantation, FL, nurtures your inner well-being. By replenishing hydration, vitamins, and
                electrolytes directly into your bloodstream, we help fortify the vitality of your skin,
                hair, and nails from the inside out.</p>
              <p className="mb35 animate fadeIn">Our wellness experts take a personalized approach to every
                treatment. Through thoughtful assessment and customized IV solutions, we create an
                experience designed to help you feel refreshed, revitalized, and completely like
                yourself.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="IV Therapy Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/iv therapy.webp" />
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
            <img alt="IV Therapy Results" src="/assets/img/services page images/before and  after results of ivtherapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
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
              <h3 className="title-sm highlight-color mb5 uppercase">Understanding Your Wellness Goals</h3>
              <h2 className="title-md accent-color uppercase mb15">What Is IV Therapy?</h2>
              <p>Intravenous (IV) Therapy is a treatment designed to replenish fluids and essential
                vitamins in the body. Dehydration can lead to common issues like dry skin and fatigue,
                and in more serious cases, escalate to complications such as organ failure and
                seizures.<br /><br />At Samsara Aesthetics &amp; Wellness, we offer a selection of
                specialized IV Therapy treatments tailored to different wellness needs. By delivering
                nutrients and fluids directly into the bloodstream, IV Therapy bypasses the digestive
                system entirely, allowing for fast and effective absorption.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="What Is IV Therapy?" src="/assets/img/services page images/what is ivtherapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center mt25">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Rejuvenate, Recharge</h3>
              <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of IV Therapy?</h2>
              <p>IV Therapy offers a fast and effective way to restore essential nutrients and fluids to
                the body. Depending on your individual needs and the treatment selected, IV Therapy can
                help:<br /><br />
                <strong>Boost Energy Levels</strong> — Replenish nutrients directly into the bloodstream
                for a noticeable increase in vitality.<br /><br />
                <strong>Improve Skin Hydration</strong> — Enhance skin radiance and hydration from
                within.<br /><br />
                <strong>Enhance Immunity</strong> — Support the body's natural defenses for improved
                overall health.<br /><br />
                <strong>Accelerate Recovery</strong> — Aid faster recovery from physical strain,
                fatigue, or hangovers.<br /><br />
                <strong>Detoxify the Body</strong> — Help flush out toxins and restore balance.<br /><br />
                Our IV solutions are curated to provide these benefits while catering to your specific
                wellness needs.
              </p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Benefits of IV Therapy" src="/assets/img/services page images/benefits of iv therapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Understanding Your Wellness Goals</h3>
          <h2 className="title-md accent-color uppercase mb15">Your IV Therapy Consultation</h2>
          <p>Every successful IV Therapy treatment begins with understanding your unique needs, not simply
            addressing a single symptom.<br /><br />During your consultation at Samsara Aesthetics &amp;
            Wellness, our wellness experts will assess your lifestyle, wellness goals, and specific
            concerns. We'll work closely with you to determine the most suitable IV Therapy treatment
            tailored to your requirements.<br /><br />Whether you're seeking enhanced energy levels, improved
            skin health, or overall wellness, our team is dedicated to crafting a treatment plan that aligns
            with your objectives. Your consultation is also an opportunity to ask questions and understand
            what to expect from your treatment.</p>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">A Relaxing, Rejuvenating Experience</h3>
          <h2 className="title-md accent-color uppercase mb15">Your IV Therapy Procedure</h2>
          <p>Your IV Therapy experience is designed to be relaxing and rejuvenating from start to
            finish.<br /><br />Once your ideal treatment has been determined, you'll be comfortably seated in a
            serene environment. A skilled healthcare provider will insert a small, sterile catheter into
            your vein, typically in your arm, a process that is quick and virtually painless. The IV
            solution, customized to address your specific concerns, then flows directly into your
            bloodstream while you unwind, read, or simply enjoy the tranquil ambiance.<br /><br />The procedure
            usually takes around 30 to 45 minutes, and you should start feeling the benefits shortly
            thereafter. Our experienced team monitors your progress throughout the session, ensuring your
            safety and comfort at all times.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Simple Aftercare, Minimal Interruption</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>Following your IV Therapy session, there's typically no downtime, and you can return to your
            daily activities immediately.<br /><br />It's important to stay hydrated and maintain a healthy
            lifestyle to maximize the benefits of your treatment. Our team will provide personalized
            recommendations on staying well-hydrated and nourished between sessions.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Replenished, Recharged, Renewed</h3>
          <h2 className="title-md accent-color uppercase mb15">IV Therapy Results</h2>
          <p>After your IV Therapy treatment, you can expect to feel refreshed and re-energized almost
            immediately. Many clients notice improved skin complexion, enhanced hair and nail health, and
            increased vitality.<br /><br />The hydration and nutrient infusion can also lead to a heightened
            sense of well-being, mental clarity, and improved immune function.<br /><br />Over time, regular IV
            Therapy sessions can contribute to better overall health and wellness, helping you look and feel
            your best every day. We encourage periodic treatments to support your ongoing wellness journey
            and experience the long-lasting advantages it can bring.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">IV Therapy<br /><span className="highlight-color">Frequently Asked Questions</span><br /></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is IV Therapy treatment painful?</h3>
            </div>
            <div className="accordion__answer">
              <p>The process involves a small pinch when the needle is inserted, but most patients find
                the procedure to be virtually painless and very relaxing.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Are there any risks associated with IV Therapy?</h3>
            </div>
            <div className="accordion__answer">
              <p>IV Therapy is generally very safe when administered by trained medical professionals.
                Some patients may experience minor bruising or redness at the injection site, but
                serious complications are rare. Our team ensures the highest safety standards are
                followed during every treatment.</p>
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
