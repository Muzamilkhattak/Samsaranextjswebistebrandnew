"use client";
import React from 'react';
import Link from 'next/link';

export default function Hydrafacial() {
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
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">HydraFacial</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Rejuvenate, Naturally You</h3>
              <p className="mb35 animate fadeIn">Deep, effective skincare doesn't have to mean downtime.
                HydraFacial at Samsara Aesthetics &amp; Wellness in Plantation, FL, combines cleansing,
                exfoliation, extraction, hydration, and antioxidant protection into a single treatment
                session, delivering immediate, visible results for radiant, healthy skin.</p>
              <p className="mb35 animate fadeIn">Our skincare professionals take a personalized approach to
                every treatment. Through thoughtful assessment and customized serums, we create an
                experience designed to help you look refreshed, revitalized, and completely like
                yourself.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="HydraFacial Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/HydraFacial.webp" />
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
            <img alt="HydraFacial Results" src="/assets/img/services page images/before and after results HydraFacial.webp" style={{width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="mb75 pt75" style={{backgroundColor: '#f7f5f2'}}>
    <div className="container">
      <div className="mw1200">
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center mt25">
            <div style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">HydraFacial</h3>
              <h2 className="title-md accent-color uppercase mb15">What Is a HydraFacial?</h2>
              <p style={{marginBottom: 15}}>The HydraFacial is a cutting-edge skincare treatment
                designed to cleanse, exfoliate, and hydrate your skin, delivering immediate and visible
                results. This non-invasive procedure combines the benefits of cleansing, exfoliation,
                extraction, hydration, and antioxidant protection in a single treatment session.
                HydraFacials are suitable for all skin types and address various skin care concerns,
                including fine lines, wrinkles, uneven texture, and congested pores. With no downtime
                required, you can enjoy a radiant complexion and improved skin health immediately after
                each HydraFacial session.</p>
            </div>
            <div style={{flex: '0.8'}}><img alt="What Is a HydraFacial?" src="/assets/img/services page images/what is HydraFacial.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} /></div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center mt25">
            <div style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">Cleanse, Hydrate, Rejuvenate</h3>
              <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of a HydraFacial?
              </h2>
              <p style={{marginBottom: 15}}>A HydraFacial offers a wealth of benefits for your skin's
                health and appearance. Depending on your individual needs and the provider's assessment,
                a HydraFacial can help:</p>
              <ul style={{listStyleType: 'disc', marginLeft: 20, marginBottom: 20, color: '#555', fontFamily: '"proxima-nova", sans-serif', lineHeight: '1.65', fontSize: 16}}>
                <li style={{marginBottom: 10}}><strong>Deeply Cleanse</strong> — Clear away impurities
                  and unclog pores, helping to prevent acne and breakouts.</li>
                <li style={{marginBottom: 10}}><strong>Exfoliate</strong> — Remove dead skin cells to
                  reveal a smoother, brighter complexion.</li>
                <li style={{marginBottom: 10}}><strong>Hydrate</strong> — Infuse the skin with
                  nourishing serums, promoting a healthy, plump texture and reducing the appearance of
                  fine lines and wrinkles.</li>
                <li style={{marginBottom: 10}}><strong>Stimulate Collagen Production</strong> —
                  Support essential collagen for maintaining youthful skin.</li>
                <li style={{marginBottom: 10}}><strong>Address a Range of Concerns</strong> — Suitable
                  for all skin types, from uneven skin tone to sun damage.</li>
              </ul>
              <p style={{marginBottom: 15}}>The treatment is gentle, with no discomfort or downtime,
                making it suitable for busy individuals seeking a comprehensive skincare solution.</p>
            </div>
            <div style={{flex: '0.8'}}><img alt="Benefits of a HydraFacial" src="/assets/img/services page images/benefits of HydraFacial.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} /></div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Customized Solutions for Everyone</h3>
          <h2 className="title-md accent-color uppercase mb15">Your HydraFacial Consultation</h2>
          <p style={{marginBottom: 15}}>Every successful HydraFacial treatment begins with understanding
            your unique skin concerns and goals. During your consultation at Samsara Aesthetics &amp;
            Wellness, our experienced skincare professionals will discuss your medical history, skincare
            routine, and any specific issues you'd like to address.</p>
          <p style={{marginBottom: 15}}>Our team will then tailor a HydraFacial treatment plan specifically
            for you, ensuring that it addresses your individual needs. Whether you're targeting acne, fine
            lines, uneven tone, or simply want to rejuvenate your complexion, your consultation is designed
            to create a customized approach to meet your skincare goals.</p>
          <div className="mt25"><a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a></div>
        </div>
        <div className="mb50 animate fadeIn mt50">
          <h3 className="title-sm highlight-color mb5 uppercase">Revitalize Your Skin</h3>
          <h2 className="title-md accent-color uppercase mb15">Your HydraFacial Procedure</h2>
          <p style={{marginBottom: 15}}>The HydraFacial procedure at Samsara Aesthetics &amp; Wellness is a
            soothing and rejuvenating experience designed to leave your skin feeling refreshed and
            revitalized. During your HydraFacial, patients can expect:</p>
          <ul style={{listStyleType: 'disc', marginLeft: 20, marginBottom: 20, color: '#555', fontFamily: '"proxima-nova", sans-serif', lineHeight: '1.65', fontSize: 16}}>
            <li style={{marginBottom: 10}}><strong>Cleansing and Exfoliation:</strong> We start by gently
              cleansing your skin. The HydraFacial device loosens and exfoliates the outer layer to remove
              dead skin cells.</li>
            <li style={{marginBottom: 10}}><strong>Extraction:</strong> The HydraFacial device uses gentle
              suction to clear out pores and remove impurities like blackheads and whiteheads.</li>
            <li style={{marginBottom: 10}}><strong>Hydration:</strong> Your skin is infused with
              nourishing serums that contain antioxidants, peptides, and hyaluronic acid to promote
              hydration and a youthful glow.</li>
            <li style={{marginBottom: 10}}><strong>Protection:</strong> To finish, we apply a protective
              serum and sunscreen to shield your skin from environmental damage.</li>
          </ul>
          <p style={{marginBottom: 15}}>The procedure is non-invasive and painless, typically taking around
            30 minutes. You'll leave our facility with immediate improvements in skin texture, tone, and
            overall appearance.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Maintain Your Glowing Complexion</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p style={{marginBottom: 15}}>One of the notable advantages of a HydraFacial is that it requires
            minimal to no downtime. You can return to your daily activities right after the treatment.
            However, to maintain your results and promote long-term skin health, it's essential to follow a
            good skincare routine at home, including regular cleansing, moisturizing, and applying sunscreen
            to protect your newly refreshed skin from UV damage.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Achieving Peak Skin Hydration</h3>
          <h2 className="title-md accent-color uppercase mb15">HydraFacial Results</h2>
          <p style={{marginBottom: 15}}>After a HydraFacial at Samsara Aesthetics &amp; Wellness, you can
            expect to see and feel noticeable improvements in your skin. Many patients report a radiant,
            dewy complexion, improved texture, and diminished fine lines and wrinkles. Your skin will feel
            smoother, clearer, and more hydrated immediately after the treatment. These results often last
            for several weeks, making HydraFacials an excellent choice for regular skin care maintenance.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">HydraFacial<br /><span className="highlight-color">Frequently Asked Questions</span></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How often should I get a HydraFacial?</h3>
            </div>
            <div className="accordion__answer">
              <p>For optimal results, many skincare professionals recommend scheduling a HydraFacial once
                a month. However, your aesthetic specialist can help you create a personalized schedule
                based on your unique skin concerns and goals.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Are HydraFacials suitable for all skin types?</h3>
            </div>
            <div className="accordion__answer">
              <p>Yes! One of the biggest advantages of a HydraFacial is that it is highly customizable and
                safe for almost all skin types, including sensitive skin. The treatment can be tailored
                with specific serums to address your unique needs.</p>
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
