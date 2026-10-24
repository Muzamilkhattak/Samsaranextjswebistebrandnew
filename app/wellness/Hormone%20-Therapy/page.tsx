"use client";
import React from 'react';
import Link from 'next/link';

export default function HormoneTherapy() {
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
          <div className="flexy-item animate fadeIn" data-ipj="Overview" id="hormone-therapy-overview">
            <div className="pv35-desktop">
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">Hormone Therapy</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore Balance. Reclaim Vitality.</h3>
              <p className="mb35 animate fadeIn">Hormones influence nearly every aspect of your health, from
                energy and metabolism to mood, sleep, and overall well-being. As hormone levels
                naturally change with age or other factors, many people begin to notice symptoms that
                affect their quality of life.</p>
              <p className="mb35 animate fadeIn">Hormone Therapy in Plantation, FL, at Samsara Aesthetics
                &amp; Wellness offers a personalized approach to restoring hormonal balance and
                supporting long-term wellness. Our experienced medical providers take the time to
                understand your symptoms, evaluate your health, and develop a treatment plan tailored
                specifically to your needs.</p>
              <p className="mb35 animate fadeIn">Whether you're experiencing fatigue, changes in mood,
                difficulty maintaining a healthy weight, or other hormone-related concerns, we're here
                to help you feel like yourself again.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="Hormone Therapy Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/Hormone Therapy.webp" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="mb0 pv100" style={{backgroundColor: '#f9f7f5'}}>
    <div className="container">
      <div className="mw1200">
        <div className="text-center mb50 animate fadeIn">
          <h2 className="title-lg uppercase mb15" data-ipj="Results" id="hormone-therapy-before-after" style={{fontFamily: '"novecento-sans", sans-serif', color: '#000'}}>See The Difference</h2>
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
            <img alt="Hormone Therapy Results" src="/assets/img/services page images/Hormone Therapy before and after results.webp" style={{width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
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
              <h3 className="title-sm highlight-color mb5 uppercase">Understanding Hormonal Balance</h3>
              <h2 className="title-md accent-color uppercase mb15">What Is Hormone Therapy?</h2>
              <p>Hormone Therapy is a medical treatment designed to help restore hormone levels when they
                become imbalanced or decline over time.<br /><br />Hormones act as chemical messengers
                throughout the body, helping regulate important functions including metabolism, energy
                production, sleep, mood, sexual wellness, muscle health, and overall physical
                function.<br /><br />Natural aging, lifestyle factors, certain medical conditions, and other
                changes may influence hormone production, leading to symptoms that affect daily
                life.<br /><br />Hormone Therapy aims to restore hormonal balance through a personalized
                treatment plan developed after a comprehensive medical evaluation. Every treatment plan
                is designed around the individual's health history, symptoms, and laboratory findings.
              </p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Hormone Therapy" src="/assets/img/services page images/what is Hormone Therapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center mt25">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">A Personalized Path to Wellness</h3>
              <h2 className="title-md accent-color uppercase mb15">How Does Hormone Therapy Work?</h2>
              <p>Hormone Therapy begins with understanding the underlying cause of your symptoms rather
                than simply treating the symptoms themselves.<br /><br />Your provider will review your
                medical history, discuss your concerns, and may recommend laboratory testing to evaluate
                your hormone levels.<br /><br />Based on these findings, a personalized treatment plan is
                developed to help restore hormonal balance while supporting your overall
                health.<br /><br />Throughout your treatment, your progress is closely monitored.
                Adjustments may be made as your body responds to therapy, helping ensure your treatment
                continues to align with your changing needs.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Hormone Therapy" src="/assets/img/services page images/Your Hormone Therapy Consultation.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Recognizing the Signs</h3>
          <h2 className="title-md accent-color uppercase mb15">What Can Hormone Therapy Help Support?</h2>
          <p>Hormone Therapy may be recommended for individuals experiencing symptoms related to hormonal
            changes or imbalance.<br /><br />Depending on your individual health needs, treatment may support
            healthy energy levels, mood, sleep quality, metabolism, body composition, mental clarity, sexual
            wellness, and overall quality of life.<br /><br />Because hormone-related symptoms can vary from
            person to person, every treatment plan is customized rather than following a standard
            approach.<br /><br />During your consultation, your provider will determine whether Hormone Therapy
            is appropriate based on your symptoms, medical history, and diagnostic evaluation.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Supporting Whole-Body Wellness</h3>
          <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of Hormone Therapy?</h2>
          <p>Hormone Therapy focuses on restoring balance throughout the body rather than addressing a single
            concern.<br /><br />Potential benefits may include improved energy, better sleep, enhanced mood,
            healthier metabolism, improved mental focus, support for healthy aging, and increased overall
            well-being.<br /><br />By creating a personalized treatment plan and monitoring your progress over
            time, your provider can make adjustments as needed to help optimize your results.<br /><br />Our
            goal is to help you feel healthier, stronger, and more like yourself while supporting your
            body's natural functions.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Creating Your Personalized Treatment Plan</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Hormone Therapy Consultation</h2>
          <p>Your journey begins with a comprehensive wellness consultation.<br /><br />During your appointment at
            Samsara Aesthetics &amp; Wellness, your provider will discuss your symptoms, health history,
            lifestyle, medications, and wellness goals.<br /><br />A detailed evaluation, including laboratory
            testing when appropriate, helps identify whether hormonal changes may be contributing to your
            symptoms.<br /><br />Once your results have been reviewed, your provider will explain your findings
            and discuss whether Hormone Therapy may be beneficial.<br /><br />Together, you will create a
            treatment plan designed specifically for your individual health needs and long-term wellness
            goals.</p>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Personalized Care Every Step of the Way</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Hormone Therapy Treatment</h2>
          <p>Hormone Therapy is never one-size-fits-all.<br /><br />Your treatment plan will be based on your
            individual hormone levels, medical history, symptoms, and overall health. Depending on your
            needs, your provider will recommend the most appropriate treatment approach and explain how your
            therapy will be administered.<br /><br />Regular follow-up appointments are an important part of
            treatment. These visits allow your provider to monitor your progress, review laboratory results
            when necessary, and make adjustments that help maintain hormonal balance over time.<br /><br />Our
            focus is on providing personalized medical care while supporting your long-term health and
            wellness.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Supporting Your Progress</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>Hormone Therapy generally does not require downtime, allowing most patients to continue their
            normal daily activities.<br /><br />Your provider will provide individualized guidance regarding
            your treatment schedule, follow-up appointments, healthy lifestyle habits, and any recommended
            laboratory monitoring.<br /><br />Maintaining balanced nutrition, regular exercise, quality sleep,
            and stress management can complement your treatment and support your overall
            wellness.<br /><br />Because your body's needs may change over time, ongoing communication with your
            provider plays an important role in achieving the best possible outcomes.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Feeling More Like Yourself</h3>
          <h2 className="title-md accent-color uppercase mb15">Hormone Therapy Results</h2>
          <p>Every patient's response to Hormone Therapy is unique.<br /><br />Some individuals begin noticing
            improvements within the first several weeks, while others experience gradual changes over a
            longer period as hormone levels stabilize.<br /><br />Depending on your treatment plan and
            individual response, you may notice improvements in energy, mood, sleep, mental clarity, and
            overall well-being.<br /><br />Regular monitoring allows your provider to evaluate your progress and
            make adjustments when needed to support long-term success.<br /><br />The goal of Hormone Therapy is
            not simply symptom management but helping restore balance so you can enjoy a healthier, more
            active lifestyle.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">Hormone Therapy<br /><span className="highlight-color">Frequently Asked Questions</span><br /></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">What is Hormone Therapy?</h3>
            </div>
            <div className="accordion__answer">
              <p>Hormone therapy is a medical treatment that restores or balances hormone levels when
                the body is no longer producing enough due to aging, menopause, or certain medical
                conditions. By replacing or optimizing specific hormones, it can help improve
                symptoms such as fatigue, hot flashes, low libido, mood changes, low energy levels,
                and reduced muscle or bone health while supporting overall well-being..</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Who is a candidate for Hormone Therapy?</h3>
            </div>
            <div className="accordion__answer">
              <p>Hormone therapy is a medical treatment that restores or balances hormone levels when the
                body is no longer producing enough due to aging, menopause, or certain medical
                conditions. By replacing or optimizing specific hormones, it can help improve symptoms
                such as fatigue, hot flashes, low libido, mood changes, low energy levels, and reduced
                muscle or bone health while supporting overall well-being.<br /><br />Individuals
                experiencing symptoms that may be related to hormonal changes, such as fatigue, mood
                changes, poor sleep, reduced energy, or changes in metabolism, may benefit from an
                evaluation. Your provider will determine whether Hormone Therapy is appropriate for your
                specific needs.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Will I need laboratory testing?</h3>
            </div>
            <div className="accordion__answer">
              <p>In many cases, laboratory testing is recommended before beginning treatment. Testing
                helps your provider evaluate hormone levels and develop an individualized treatment
                plan.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How soon will I notice results?</h3>
            </div>
            <div className="accordion__answer">
              <p>The timeline varies from person to person. Some patients notice gradual improvements
                within several weeks, while others experience continued progress over the following
                months depending on their treatment plan and individual response.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is Hormone Therapy safe?</h3>
            </div>
            <div className="accordion__answer">
              <p>When prescribed and monitored by qualified medical professionals, Hormone Therapy can be
                an effective part of a personalized wellness program. Your provider will carefully
                monitor your progress throughout treatment.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Will I need ongoing follow-up appointments?</h3>
            </div>
            <div className="accordion__answer">
              <p>Yes. Regular follow-up visits allow your provider to monitor your response to treatment,
                review laboratory results when needed, and adjust your therapy to support long-term
                wellness.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Can Hormone Therapy be combined with other wellness
                treatments?</h3>
            </div>
            <div className="accordion__answer">
              <p>Yes. Depending on your health goals, Hormone Therapy may be incorporated into a
                personalized wellness program alongside treatments such as Weight Loss Therapy, Peptide
                Therapy, Vitamin Therapy, or IV Therapy. Your provider will recommend the most
                appropriate combination for your needs.</p>
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
