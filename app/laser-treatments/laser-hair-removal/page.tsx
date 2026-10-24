"use client";
import React from 'react';
import Link from 'next/link';

export default function LaserHairRemoval() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{__html: `

		.overview-section {
			margin-top: 175px !important;
		}

		@media (min-width: 841px) {

			/* Reduce spacing between heading and paragraph on desktop */
			.overview-section .title-lg.mb35 {
				margin-bottom: 20px !important;
			}

			/* Reduce spacing between paragraph and highlights on desktop */
			.overview-section p.mb35 {
				margin-bottom: 20px !important;
			}

			/* Reduce spacing below highlights on desktop */
			.overview-section .flexy.mb50 {
				margin-bottom: 30px !important;
			}

			/* Reduce gap between h3 and p in highlights */
			.overview-section .flexy.gap50 .title-sm.mb5 {
				margin-bottom: 2px !important;
			}
		}

		@media (max-width: 840px) {
			.overview-section {
				margin-top: 135px !important;
			}

			/* Reverse order on mobile - show image first (top), then content (below) */
			.overview-section .flexy.block-desktop {
				display: flex !important;
				flex-direction: column-reverse !important;
			}

			.overview-section .flexy-item {
				width: 100% !important;
			}

			.overview-section .flexy-item.flexy-image {
				margin-bottom: 30px;
			}

			/* Reduce spacing between heading and content on mobile */
			.overview-section .title-lg.mb35 {
				margin-bottom: 15px !important;
			}

			/* Reduce spacing between paragraph and highlights on mobile */
			.overview-section p.mb35 {
				margin-bottom: 18px !important;
			}

			/* Reduce spacing below highlights on mobile */
			.overview-section .flexy.mb50 {
				margin-bottom: 25px !important;
			}

			/* Reduce gap between h3 and p in highlights */
			.overview-section .flexy.gap50 .title-sm.mb5 {
				margin-bottom: 2px !important;
			}
		}

		@media (max-width: 480px) {
			.overview-section {
				margin-top: 125px !important;
			}

			.overview-section .flexy-item.flexy-image {
				margin-bottom: 25px;
			}

			/* Even less spacing on small mobile */
			.overview-section .title-lg.mb35 {
				margin-bottom: 12px !important;
			}

			.overview-section p.mb35 {
				margin-bottom: 15px !important;
			}

			.overview-section .flexy.mb50 {
				margin-bottom: 20px !important;
			}

			/* Reduce gap between h3 and p in highlights */
			.overview-section .flexy.gap50 .title-sm.mb5 {
				margin-bottom: 1px !important;
			}
		}
	
      `}} />
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
          <div className="flexy-item animate fadeIn" data-ipj="Overview" id="neurotoxin-overview">
            <div className="pv35-desktop">
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">Laser Hair Removal</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Rejuvenate, Naturally You</h3>
              <p className="mb35 animate fadeIn">Say goodbye to the constant cycle of shaving and waxing. Laser Hair Removal at Samsara Aesthetics &amp; Wellness in Plantation, FL, uses state-of-the-art Triton technology to deliver smooth, long-lasting results, giving you the freedom of hair-free skin without the hassle of traditional methods.</p>
              <p className="mb35 animate fadeIn">Our team takes a personalized approach to every treatment. Through careful assessment and precise application, we create an experience designed to help you feel confident, comfortable, and completely like yourself.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="Laser Hair Removal Plantation, FL" className="top box-shadow-smooth" src="/assets/img/services page images/laserhairremoval.webp" />
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
              <h3 className="title-sm highlight-color mb5 uppercase">Restore, Reclaim, Renew</h3>
              <h2 className="title-md accent-color uppercase mb15">What Is Laser Hair Removal?</h2>
              <p>Laser Hair Removal is a popular cosmetic procedure that uses concentrated beams of light to target and remove unwanted hair. It's a safe and effective method for achieving long-lasting hair reduction. Unlike traditional methods like shaving or waxing, it provides a more permanent solution by targeting the hair follicles directly. One of the key advantages of this treatment is its precision, selectively targeting dark, coarse hairs while leaving the surrounding skin undamaged. This makes it suitable for various areas of the body, including the face, arms, legs, and more.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="What is Laser Hair Removal" src="/assets/img/services page images/what is laserhairremoval.webp" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Laser Hair Removal</h3>
          <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of Laser Hair Removal?</h2>
          <p>Laser Hair Removal offers a lasting solution to the frustration of regular shaving and waxing. Depending on your individual needs and treatment area, this treatment can help:</p>
          <ul style={{listStyleType: 'disc', marginLeft: 20, marginBottom: 20, color: '#555', fontFamily: '"proxima-nova", sans-serif', lineHeight: '1.65', fontSize: 16}}>
            <li style={{marginBottom: 10}}><strong>Save Time</strong> — Eliminate the need for frequent shaving or waxing sessions.</li>
            <li style={{marginBottom: 10}}><strong>Deliver Long-Lasting Results</strong> — Enjoy smooth, hair-free skin for an extended period.</li>
            <li style={{marginBottom: 10}}><strong>Provide a Comfortable Experience</strong> — Modern Triton technology makes the process virtually painless.</li>
            <li style={{marginBottom: 10}}><strong>Fit Your Routine</strong> — A quick procedure allows you to return to daily activities right after your session.</li>
            <li style={{marginBottom: 10}}><strong>Boost Confidence</strong> — Feel empowered with smooth, consistently maintained skin.</li>
          </ul>
          <p>The procedure is designed with your convenience and comfort in mind, offering a treatment plan tailored to your specific goals.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Understanding Your Skin</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Laser Hair Removal Consultation</h2>
          <p>Every successful Laser Hair Removal treatment begins with understanding your goals and skin type, not simply targeting unwanted hair. During your consultation at Samsara Aesthetics &amp; Wellness, our experienced team will discuss your goals, assess your skin type, and create a personalized treatment plan tailored to your needs.</p>
          <p style={{marginTop: 15}}>We ensure you are fully informed about the procedure, including what to expect, any potential side effects, and aftercare instructions. Your consultation is also an opportunity to ask questions and feel confident and empowered in your decision to move forward with treatment.</p>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Confidently Smooth</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Laser Hair Removal Procedure</h2>
          <p>When it's time for your session, you can relax knowing you're in capable hands. The Triton technology used at Samsara Aesthetics &amp; Wellness is highly advanced, ensuring both safety and efficacy. During the procedure, the laser emits pulses of light that are absorbed by the melanin in your hair follicles, damaging the follicles and inhibiting future hair growth. The sensation is often described as a mild pinch, and most patients find it quite tolerable. Multiple sessions may be required for the best results.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Shave Time</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>After your Laser Hair Removal session, it's essential to follow our aftercare instructions. While you can return to your daily activities immediately, you should avoid sun exposure and use sunscreen to protect your skin. Your skin may be slightly red or sensitive, but these effects are temporary and subside quickly.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Wax Off</h3>
          <h2 className="title-md accent-color uppercase mb15">Laser Hair Removal Results</h2>
          <p>As your treatments progress, you'll notice a considerable reduction in hair growth. The results are long-lasting, allowing you to enjoy smoother skin for an extended period. Imagine the freedom of not having to worry about shaving or waxing regularly, and reawaken the best version of yourself with Laser Hair Removal at Samsara Aesthetics &amp; Wellness.</p>
        </div>
      </div>
    </div>
  </section>
  
  <style dangerouslySetInnerHTML={{__html: "\n\t\t.faq-section .accordion {\n\t\t\tmax-width: 900px;\n\t\t\tmargin: 40px auto 0;\n\t\t}\n\t\t.faq-section .accordion__item {\n\t\t\tborder-bottom: 1px solid #e0d8d0;\n\t\t\tpadding: 22px 0;\n\t\t\ttransition: background-color 0.3s ease;\n\t\t}\n\t\t.faq-section .accordion__item:first-child {\n\t\t\tborder-top: 1px solid #e0d8d0;\n\t\t}\n\t\t.faq-section .accordion__question {\n\t\t\tcursor: pointer;\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t\tuser-select: none;\n\t\t\tpadding-right: 35px;\n\t\t}\n\t\t.faq-section .accordion__question h3 {\n\t\t\tmargin: 0;\n\t\t\tfont-family: 'novecento-sans', sans-serif;\n\t\t\tcolor: #004438;\n\t\t\tfont-size: 18px;\n\t\t\tletter-spacing: 0.05em;\n\t\t\ttransition: color 0.3s ease;\n\t\t}\n\t\t.faq-section .accordion__question:hover h3 {\n\t\t\tcolor: #b5a596;\n\t\t}\n\t\t.faq-section .accordion__question::after {\n\t\t\tcontent: \"+\";\n\t\t\tfont-size: 26px;\n\t\t\tfont-weight: 300;\n\t\t\tcolor: #004438;\n\t\t\ttransition: transform 0.35s ease, color 0.35s ease;\n\t\t\tposition: absolute;\n\t\t\tright: 5px;\n\t\t\ttop: 50%;\n\t\t\ttransform: translateY(-50%);\n\t\t\tline-height: 1;\n\t\t}\n\t\t.faq-section .accordion__item.open .accordion__question::after {\n\t\t\ttransform: translateY(-50%) rotate(45deg);\n\t\t\tcolor: #b5a596;\n\t\t}\n\t\t.faq-section .accordion__answer {\n\t\t\tmax-height: 0;\n\t\t\toverflow: hidden;\n\t\t\topacity: 0;\n\t\t\ttransition: max-height 0.4s cubic-bezier(0, 1, 0, 1), opacity 0.3s ease;\n\t\t}\n\t\t.faq-section .accordion__item.open .accordion__answer {\n\t\t\tmax-height: 500px;\n\t\t\topacity: 1;\n\t\t\ttransition: max-height 0.4s ease-in, opacity 0.3s ease 0.1s;\n\t\t}\n\t\t.faq-section .accordion__answer p {\n\t\t\tmargin: 0;\n\t\t\tpadding-top: 16px;\n\t\t\tcolor: #555;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 1.65;\n\t\t\tfont-family: 'proxima-nova', sans-serif;\n\t\t}\n\t" }} />
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">Laser Hair Removal<br /><span className="highlight-color">Frequently Asked Questions</span></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is Laser Hair Removal painful?</h3>
            </div>
            <div className="accordion__answer">
              <p>Modern Laser Hair Removal technology, like the Triton system we use, is designed for maximum comfort. Most patients describe the sensation as a mild pinch or snapping feeling, which is typically well-tolerated. The equipment also includes cooling mechanisms to soothe the skin during the procedure.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How many sessions are typically needed for optimal results?</h3>
            </div>
            <div className="accordion__answer">
              <p>Hair grows in cycles, and laser treatment is most effective during the active growth phase. Because of this, multiple sessions are required to target all hair follicles. Most patients achieve optimal results after 6 to 8 sessions, spaced several weeks apart depending on the treatment area.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is Laser Hair Removal safe for all skin types?</h3>
            </div>
            <div className="accordion__answer">
              <p>Yes, the advanced Triton technology used at our clinic features simultaneous emission of multiple wavelengths, making it safe and highly effective for a wide range of skin types and hair tones. During your consultation, we will assess your skin to ensure the safest approach.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is there any downtime after a Laser Hair Removal session?</h3>
            </div>
            <div className="accordion__answer">
              <p>There is virtually no downtime following a session. You can immediately return to your normal daily activities. You may experience some mild redness or sensitivity in the treated area, similar to a light sunburn, but this typically resolves within a few hours to a day.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Are the results of Laser Hair Removal permanent?</h3>
            </div>
            <div className="accordion__answer">
              <p>Laser Hair Removal provides long-lasting hair reduction. While it significantly reduces hair growth and many patients experience permanent hair loss in the treated areas, occasional maintenance sessions may be needed over time due to hormonal changes or natural hair cycles.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is Laser Hair Removal suitable for facial hair removal?</h3>
            </div>
            <div className="accordion__answer">
              <p>Absolutely. Laser Hair Removal is highly precise and is a safe, effective option for removing unwanted facial hair on the upper lip, chin, jawline, and sideburns without damaging the surrounding delicate skin.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <style dangerouslySetInnerHTML={{__html: "\n\t\t.cta-ready-section h2 {\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t@media (max-width: 768px) {\n\t\t\t.cta-ready-section h2 {\n\t\t\t\twhite-space: normal;\n\t\t\t}\n\t\t}\n\t" }} />
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
