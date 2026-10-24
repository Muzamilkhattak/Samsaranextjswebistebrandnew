"use client";
import React from 'react';
import Link from 'next/link';

export default function PeptideTherapy() {
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
          <div className="flexy-item animate fadeIn" data-ipj="Overview" id="peptide-therapy-overview">
            <div className="pv35-desktop">
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">Peptide Therapy</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Optimize Your Health from Within</h3>
              <p className="mb35 animate fadeIn">Your body naturally produces peptides, small chains of amino acids that help regulate important functions such as metabolism, muscle recovery, energy, sleep, and overall wellness. As we age, peptide activity can change, which may contribute to reduced vitality and slower recovery. Peptide Therapy in Plantation, FL, at Samsara Aesthetics &amp; Wellness is a personalized wellness treatment designed to support your body's natural processes. By incorporating carefully selected peptides into your treatment plan, we can help optimize overall wellness while addressing your unique health and lifestyle goals.</p>
              <p className="mb35 animate fadeIn">Whether you're looking to support healthy aging, improve recovery, enhance performance, or simply feel your best, our experienced providers create individualized treatment plans focused on long-term wellness.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="Peptide Therapy Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/peptidetherapy.webp" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="mb0 pv100" style={{backgroundColor: '#f9f7f5'}}>
    <div className="container">
      <div className="mw1200">
        <div className="text-center mb50 animate fadeIn">
          <h2 className="title-lg uppercase mb15" data-ipj="Results" id="peptide-therapy-before-after" style={{fontFamily: '"novecento-sans", sans-serif', color: '#000'}}>See The Difference</h2>
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
            <img alt="Peptide Therapy Results" src="/assets/img/services page images/before and after results for peptide therapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
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
              <h3 className="title-sm highlight-color mb5 uppercase">Supporting Your Body's Natural Functions</h3>
              <h2 className="title-md accent-color uppercase mb15">What Is Peptide Therapy?</h2>
              <p>Peptide Therapy is an advanced wellness treatment that uses naturally occurring amino acid chains known as peptides to support communication between cells throughout the body.<br /><br />Peptides play an important role in many biological processes, including metabolism, tissue repair, hormone signaling, muscle recovery, immune function, and healthy aging.<br /><br />As peptide activity changes over time, some individuals may experience reduced energy, slower recovery, changes in body composition, or other age-related concerns.<br /><br />Peptide Therapy works by introducing carefully selected peptides based on your individual needs and wellness goals. The treatment is designed to complement your body's natural functions rather than replace them, helping support overall health and vitality.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Peptide Therapy" src="/assets/img/services page images/what is peptide therapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center mt25">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">Personalized Wellness at the Cellular Level</h3>
              <h2 className="title-md accent-color uppercase mb15">How Does Peptide Therapy Work?</h2>
              <p>Peptides act as signaling molecules that help guide specific functions within the body. Different peptides serve different purposes, which is why treatment plans are highly personalized.<br /><br />Following a comprehensive evaluation, your provider selects peptides that align with your health concerns and wellness objectives. Depending on your personalized plan, therapy may focus on supporting recovery, healthy aging, body composition, metabolic function, sleep quality, or overall vitality.<br /><br />Because peptide therapy works with your body's natural biological processes, improvements often develop gradually over time rather than immediately.<br /><br />Your treatment plan may also include lifestyle recommendations to help maximize your overall results.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Peptide Therapy" src="/assets/img/services page images/benefitsofpeptidetherapy.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">A Personalized Approach to Wellness</h3>
          <h2 className="title-md accent-color uppercase mb15">What Can Peptide Therapy Help Support?</h2>
          <p>Peptide Therapy may be incorporated into a comprehensive wellness plan for individuals seeking support in several areas of health.<br /><br />Depending on your personalized treatment plan, peptide therapy may help support healthy metabolism, exercise recovery, lean muscle development, healthy aging, sleep quality, energy levels, cognitive wellness, and overall vitality.<br /><br />Every patient's goals are different. During your consultation, your provider will determine whether peptide therapy is appropriate for your individual health concerns and develop a treatment strategy tailored specifically to you.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Wellness Designed Around You</h3>
          <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of Peptide Therapy?</h2>
          <p>Peptide Therapy offers a personalized approach to supporting overall wellness by working alongside your body's natural processes.<br /><br />Potential benefits may include improved energy, enhanced recovery after physical activity, support for healthy body composition, better sleep quality, healthy aging support, and improved overall well-being.<br /><br />Because treatment is individualized, your provider can adjust your plan according to your goals and progress over time.<br /><br />Rather than focusing on a single symptom, peptide therapy is intended to support your body's overall function and long-term wellness.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Building Your Personalized Wellness Plan</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Peptide Therapy Consultation</h2>
          <p>Your wellness journey begins with understanding your health goals.<br /><br />During your consultation at Samsara Aesthetics &amp; Wellness, your provider will review your medical history, lifestyle, current symptoms, and wellness objectives.<br /><br />Depending on your concerns, additional laboratory testing or health assessments may be recommended to better understand your body's needs before beginning therapy.<br /><br />Using this information, your provider will determine whether peptide therapy is appropriate and develop a customized treatment plan designed specifically for you.<br /><br />Your consultation is also an opportunity to discuss expectations, treatment timelines, and any questions you may have before starting therapy.</p>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Personalized Treatment for Whole-Body Wellness</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Peptide Therapy Procedure</h2>
          <p>Your treatment experience will vary depending on the specific peptides selected and your individualized wellness plan.<br /><br />Your provider will explain how your therapy will be administered and provide detailed instructions regarding your treatment schedule.<br /><br />Appointments are generally straightforward and designed to fit comfortably into your routine.<br /><br />Throughout your treatment, your progress will be monitored to evaluate your response and make adjustments when appropriate.<br /><br />Our goal is to provide safe, personalized care while supporting your overall health and wellness.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Supporting Your Wellness Journey</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>Most patients experience little to no downtime following peptide therapy.<br /><br />Your provider will discuss any recommendations specific to your treatment plan and provide guidance regarding activity, hydration, nutrition, and follow-up appointments.<br /><br />Maintaining a healthy lifestyle through balanced nutrition, regular physical activity, quality sleep, and stress management can help complement your peptide therapy results.<br /><br />Routine follow-up appointments allow your provider to monitor your progress and adjust your treatment as your wellness needs evolve.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Progress That Develops Naturally</h3>
          <h2 className="title-md accent-color uppercase mb15">Peptide Therapy Results</h2>
          <p>Peptide Therapy works with your body's natural biological processes, so improvements typically develop gradually.<br /><br />Some patients notice positive changes in energy, recovery, or overall wellness within the early stages of treatment, while others experience continued improvement over several weeks or months.<br /><br />Results vary based on the peptides selected, your overall health, treatment consistency, and individual response.<br /><br />Your provider will continue monitoring your progress and may adjust your treatment plan as your needs change over time.<br /><br />The goal is to help you achieve sustainable improvements in your health while supporting your body's natural ability to function at its best.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">Peptide Therapy<br /><span className="highlight-color">Frequently Asked Questions</span><br /></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">What is Peptide Therapy?</h3>
            </div>
            <div className="accordion__answer">
              <p>Peptide Therapy is a personalized wellness treatment that uses naturally occurring amino acid chains called peptides to support specific functions within the body. Different peptides are selected based on your individual health goals and treatment plan.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Who is a good candidate for Peptide Therapy?</h3>
            </div>
            <div className="accordion__answer">
              <p>Individuals seeking support for healthy aging, energy, recovery, body composition, sleep, or overall wellness may be candidates for peptide therapy. A consultation is necessary to determine whether treatment is appropriate for your needs.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How long does it take to see results?</h3>
            </div>
            <div className="accordion__answer">
              <p>Results vary from person to person. Some individuals notice gradual improvements within a few weeks, while others experience continued progress over several months depending on their treatment plan and individual response.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is Peptide Therapy safe?</h3>
            </div>
            <div className="accordion__answer">
              <p>When prescribed and monitored by qualified medical professionals, peptide therapy can be incorporated into a personalized wellness program. Your provider will determine whether treatment is appropriate based on your health history and goals.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is there any downtime after treatment?</h3>
            </div>
            <div className="accordion__answer">
              <p>Most patients experience little to no downtime and can return to their normal daily activities following treatment. Your provider will discuss any recommendations specific to your treatment plan.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Will I need multiple treatments?</h3>
            </div>
            <div className="accordion__answer">
              <p>Many peptide therapy programs involve ongoing treatment and periodic evaluations. Your provider will develop a schedule based on your health goals and monitor your progress throughout your wellness journey.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Can Peptide Therapy be combined with other wellness treatments?</h3>
            </div>
            <div className="accordion__answer">
              <p>Yes. Depending on your needs, peptide therapy may be incorporated into a broader wellness plan that includes treatments such as hormone therapy, weight loss therapy, IV therapy, or vitamin therapy. Your provider will recommend the most appropriate combination based on your individual goals.</p>
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
