"use client";
import React from 'react';
import Link from 'next/link';

export default function Mirconeedling() {
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
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">Microneedling</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Renew Your Skin from Within</h3>
              <p className="mb35 animate fadeIn">Healthy skin is constantly renewing itself, but factors like
                aging, sun exposure, acne, and everyday stress can slow that natural process. If your
                skin has lost its smooth texture, firmness, or youthful glow, microneedling may help
                stimulate natural renewal from within.</p>
              <p className="mb35 animate fadeIn">Microneedling (with or without PRP/VAMP) in Plantation, FL,
                at Samsara Aesthetics &amp; Wellness is a minimally invasive treatment designed to
                encourage collagen production and improve the overall appearance of your skin. Whether
                performed as a standalone treatment or enhanced with Platelet-Rich Plasma (PRP),
                microneedling can help address a variety of common skin concerns while supporting
                healthier, more radiant skin.</p>
              <p className="mb35 animate fadeIn">Every treatment is customized to your skin type, concerns,
                and aesthetic goals, allowing us to create results that look natural and develop
                gradually over time.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="Microneedling Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/Microneedling.jpeg" />
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
            <img alt="Microneedling Results" src="/assets/img/services page images/before and after results Microneedling.webp" style={{width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
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
              <h3 className="title-sm highlight-color mb5 uppercase">Stimulating Natural Skin Renewal</h3>
              <h2 className="title-md accent-color uppercase mb15">What Is Microneedling?</h2>
              <p style={{marginBottom: 15}}>Microneedling is a collagen induction therapy that uses a
                specialized device with fine, sterile needles to create controlled microchannels in the
                skin.</p>
              <p style={{marginBottom: 15}}>These tiny, carefully controlled micro-injuries trigger the
                body's natural healing response, encouraging the production of collagen and elastin, two
                essential proteins responsible for maintaining smooth, firm, and youthful-looking skin.
              </p>
              <p style={{marginBottom: 15}}>As the skin repairs itself, texture, tone, and overall
                quality may gradually improve.</p>
              <p style={{marginBottom: 15}}>For patients seeking enhanced skin rejuvenation,
                microneedling may also be combined with Platelet-Rich Plasma (PRP), a combination often
                referred to as VAMP. VAMP utilizes a small sample of your own blood, which is processed
                to concentrate growth factors before being applied to or introduced into the treated
                skin to support the natural healing process and supercharge collagen production.</p>
            </div>
            <div style={{flex: '0.8'}}><img alt="What Is Microneedling?" src="/assets/img/services page images/what is microneedling.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} /></div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">A Personalized Approach to Skin Rejuvenation</h3>
          <h2 className="title-md accent-color uppercase mb15">How Does Microneedling Work?</h2>
          <p style={{marginBottom: 15}}>Microneedling works by activating your skin's natural repair
            mechanisms.</p>
          <p style={{marginBottom: 15}}>The controlled microchannels created during treatment signal the
            body to begin producing fresh collagen and elastin. As these proteins develop over the following
            weeks and months, the skin can become smoother, firmer, and more even in appearance.</p>
          <p style={{marginBottom: 15}}>When PRP is included, the concentrated growth factors derived from
            your own blood are applied to the treated skin immediately after microneedling. These growth
            factors may further support the skin's natural healing and rejuvenation process.</p>
          <p style={{marginBottom: 15}}>Whether performed alone or with PRP, microneedling focuses on
            improving skin quality from within rather than masking surface concerns.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">More Than Surface Improvement</h3>
          <h2 className="title-md accent-color uppercase mb15">What Skin Concerns Can Microneedling Treat?</h2>
          <p style={{marginBottom: 15}}>Microneedling is a versatile treatment that may improve the
            appearance of several common skin concerns.</p>
          <p style={{marginBottom: 15}}>Patients often seek treatment for fine lines, wrinkles, acne scars,
            enlarged pores, uneven skin texture, mild skin laxity, and overall dullness.</p>
          <p style={{marginBottom: 15}}>The treatment may also help improve the appearance of certain types
            of pigmentation and support healthier-looking skin by encouraging natural collagen production.
          </p>
          <p style={{marginBottom: 15}}>During your consultation, our aesthetic specialists will evaluate
            your skin and determine whether microneedling alone or microneedling with PRP is the most
            appropriate option for your goals.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center mt25">
            <div style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">Healthier Skin Starts Beneath the Surface
              </h3>
              <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of Microneedling?
              </h2>
              <p style={{marginBottom: 15}}>Microneedling offers a natural approach to skin rejuvenation
                by stimulating your body's own collagen production.</p>
              <p style={{marginBottom: 15}}>PRP (Platelet-Rich Plasma) uses a concentrated portion of
                your own blood, rich in platelets and growth factors, to stimulate the body's natural
                healing and regeneration.</p>
              <p style={{marginBottom: 15}}>Benefits may include smoother skin texture, improved
                firmness, softer fine lines, reduced appearance of acne scars, refined pores, and a
                brighter overall complexion.</p>
              <p style={{marginBottom: 15}}>When combined with PRP, treatment may further support the
                skin's natural healing response and enhance overall rejuvenation.</p>
              <p style={{marginBottom: 15}}>Because collagen develops gradually, improvements appear
                naturally over time rather than creating an immediate or artificial-looking change.</p>
              <p style={{marginBottom: 15}}>The procedure is minimally invasive and can be incorporated
                into a long-term skincare plan focused on maintaining healthy, youthful-looking skin.
              </p>
            </div>
            <div style={{flex: '0.8'}}><img alt="Benefits of Microneedling" src="/assets/img/services page images/Microneedling with prp.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} /></div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Creating Your Personalized Treatment Plan</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Microneedling Consultation</h2>
          <p style={{marginBottom: 15}}>Every patient's skin tells a different story.</p>
          <p style={{marginBottom: 15}}>During your consultation at Samsara Aesthetics &amp; Wellness, we
            will discuss your skincare concerns, previous treatments, medical history, and the improvements
            you hope to achieve.</p>
          <p style={{marginBottom: 15}}>Your skin will be carefully evaluated to determine whether
            microneedling is appropriate and whether adding PRP may provide additional benefits based on
            your goals.</p>
          <p style={{marginBottom: 15}}>We will explain how the treatment works, what improvements you can
            realistically expect, and how many sessions may be recommended to achieve your desired results.
          </p>
          <p style={{marginBottom: 15}}>Our goal is to create a personalized treatment plan that supports
            healthy skin while aligning with your individual expectations.</p>
          <div className="mt25"><a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a></div>
        </div>
        <div className="mb50 animate fadeIn mt50">
          <h3 className="title-sm highlight-color mb5 uppercase">Precision Meets Natural Regeneration</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Microneedling Procedure</h2>
          <p style={{marginBottom: 15}}>Your appointment begins with cleansing the treatment area and
            preparing the skin. A topical numbing cream may be applied to help maximize your comfort during
            the procedure.</p>
          <p style={{marginBottom: 15}}>Using a professional microneedling device, your provider creates
            thousands of tiny, controlled microchannels in the skin. The treatment depth is carefully
            adjusted based on your skin type and individual concerns. If your treatment includes PRP, a
            small blood sample is collected and processed to concentrate the platelet-rich plasma. Once
            microneedling is complete, the PRP is applied to the treated area, allowing it to penetrate the
            skin through the microchannels to enhance your skin's natural healing and rejuvenation process.
          </p>
          <p style={{marginBottom: 15}}>Treatment time varies depending on the size of the area being
            treated, but most appointments are completed within approximately one hour.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Supporting Your Skin's Recovery</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p style={{marginBottom: 15}}>Following microneedling, your skin may appear red and feel similar
            to a mild sunburn. Temporary sensitivity, tightness, or slight swelling are also common and
            generally improve over the next several days.</p>
          <p style={{marginBottom: 15}}>Because your skin is actively healing, it is important to follow the
            aftercare instructions provided by your aesthetic specialist.</p>
          <p style={{marginBottom: 15}}>You may be advised to avoid direct sun exposure, excessive heat,
            vigorous exercise, and certain skincare products for a short period following treatment.</p>
          <p style={{marginBottom: 15}}>Keeping your skin hydrated and protected while it heals supports
            optimal recovery and helps maximize your results.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Gradual Improvements That Last</h3>
          <h2 className="title-md accent-color uppercase mb15">Microneedling Results</h2>
          <p style={{marginBottom: 15}}>Microneedling stimulates gradual skin renewal, so improvements
            continue to develop as collagen production increases.</p>
          <p style={{marginBottom: 15}}>Many patients notice smoother skin and a healthier glow within the
            first few weeks, while continued improvements in texture, firmness, and overall skin quality may
            become more noticeable over the following months.</p>
          <p style={{marginBottom: 15}}>Patients receiving microneedling with PRP may experience enhanced
            skin rejuvenation as the concentrated growth factors support the natural healing process.</p>
          <p style={{marginBottom: 15}}>The number of treatments needed depends on your skin concerns,
            treatment goals, and your body's response. Your provider may recommend a series of sessions to
            achieve optimal results, followed by maintenance treatments as appropriate.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">Microneedling (With or
          Without PRP/VAMP)<br /><span className="highlight-color">Frequently Asked Questions</span></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">What is the difference between microneedling and VAMP?</h3>
            </div>
            <div className="accordion__answer">
              <p>Microneedling uses fine needles to stimulate collagen production through controlled
                microchannels in the skin. VAMP combines microneedling with Platelet-Rich Plasma (PRP),
                which is prepared from your own blood and applied during treatment to support the skin's
                natural healing process.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is microneedling painful?</h3>
            </div>
            <div className="accordion__answer">
              <p>Most patients tolerate microneedling well. A topical numbing cream is typically applied
                before treatment to improve comfort. You may feel mild pressure or vibration during the
                procedure.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How many microneedling sessions will I need?</h3>
            </div>
            <div className="accordion__answer">
              <p>The number of treatments varies depending on your skin concerns and desired results. Some
                patients notice improvement after one session, while others benefit from a series of
                treatments for more comprehensive skin rejuvenation.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How long is the recovery after microneedling?</h3>
            </div>
            <div className="accordion__answer">
              <p>Most patients experience temporary redness and mild sensitivity for one to three days,
                although recovery can vary depending on the intensity of treatment and individual skin
                response.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">When will I see results?</h3>
            </div>
            <div className="accordion__answer">
              <p>Some improvements may be noticeable within a few weeks, but collagen production continues
                over time. Skin texture, firmness, and overall appearance often continue to improve for
                several months following treatment.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is microneedling safe for all skin types?</h3>
            </div>
            <div className="accordion__answer">
              <p>Microneedling is suitable for many skin types, but every patient should be individually
                evaluated. Your provider will determine whether the treatment is appropriate based on
                your skin condition, medical history, and treatment goals.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Can microneedling be combined with other treatments?</h3>
            </div>
            <div className="accordion__answer">
              <p>Yes. Microneedling may be incorporated into a personalized skincare plan and is commonly
                performed with PRP. Depending on your needs, your provider may recommend combining it
                with other treatments at appropriate intervals to help achieve your aesthetic goals.</p>
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
