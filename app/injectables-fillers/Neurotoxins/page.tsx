"use client";
import React from 'react';
import Link from 'next/link';

export default function Neurotoxins() {
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
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">Neurotoxin Treatments</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Refined Beauty, Naturally You</h3>
              <p className="mb35 animate fadeIn">Expression is part of what makes you uniquely you. Over time,
                however, repeated facial movements like smiling, squinting, and frowning can leave
                behind lines that remain even when your face is at rest. Neurotoxin treatments with
                Botox, Jeuveau, and Xeomin at Samsara Aesthetics &amp; Wellness in Plantation, FL, offer a
                non-surgical way to soften the appearance of expression lines while preserving the
                natural character of your face.</p>
              <p className="mb35 animate fadeIn">Our aesthetic specialists take a personalized approach to
                every treatment. Through thoughtful assessment and precise placement, we create results
                designed to help you look refreshed, relaxed, and still completely like yourself.</p>
              <div className="mt35 animate fadeIn">
                <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
              </div>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="Neurotoxin Treatments Plantation, FL" className="top box-shadow-smooth" src="/assets/img/feature/skin-treatments/01.jpg" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="mb0 pv100" style={{backgroundColor: '#f9f7f5'}}>
    <div className="container">
      <div className="mw1200">
        
        <div className="text-center mb50 animate fadeIn">
          <h2 className="title-lg uppercase mb15" data-ipj="Results" id="neurotoxin-before-after" style={{fontFamily: '"novecento-sans", sans-serif', color: '#000'}}>See The Difference</h2>
          
          <div className="results-tabs-container">
            <button className="results-tab-btn active" onClick={() => { if(typeof window !== 'undefined' && (window as any).switchResultsTab) (window as any).switchResultsTab('botox'); }}>Botox Comparison</button>
            <button className="results-tab-btn" onClick={() => { if(typeof window !== 'undefined' && (window as any).switchResultsTab) (window as any).switchResultsTab('xeomin'); }}>Xeomin Results</button>
          </div>
        </div>
        
        <div className="results-tab-content active animate fadeIn" id="botox-tab-content">
          
          <div className="ba-wrapper">
            <div className="ba-slider" id="ba-slider-botox">
              
              <div className="ba-after">
                <img alt="After Botox Treatment" src="/assets/img/botox-after.jpg" />
                <span className="ba-label ba-label-right">After</span>
              </div>
              
              <div className="ba-before" id="ba-before-clip-botox">
                <img alt="Before Botox Treatment" src="/assets/img/botox-before.jpg" />
                <span className="ba-label ba-label-left">Before</span>
              </div>
              
              <div className="ba-handle" id="ba-handle-botox">
                <div className="ba-handle-line" />
                <div className="ba-handle-circle">
                  <svg fill="none" height={22} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width={22}>
                    <path d="M5 12l-3 0m0 0l3-3m-3 3l3 3" />
                    <path d="M19 12l3 0m0 0l-3-3m3 3l-3 3" />
                  </svg>
                </div>
                <div className="ba-handle-line" />
              </div>
            </div>
            
            <p className="ba-hint">← Drag to compare →</p>
          </div>
        </div>
        
        <div className="results-tab-content animate fadeIn" id="xeomin-tab-content" style={{display: 'none'}}>
          <div className="xeomin-wrapper">
            <div className="xeomin-image-container">
              <img alt="Xeomin Treatment Results" src="/assets/img/Xeomin.jpeg" />
              <span className="ba-label ba-label-center">Xeomin Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style dangerouslySetInnerHTML={{__html: "\n\t\t\t/* Results tabs styling */\n\t\t\t.results-tabs-container {\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\tgap: 15px;\n\t\t\t\tmargin-top: 20px;\n\t\t\t\tbackground: rgba(0, 68, 56, 0.05);\n\t\t\t\tpadding: 6px;\n\t\t\t\tborder-radius: 40px;\n\t\t\t\tborder: 1px solid rgba(0, 68, 56, 0.1);\n\t\t\t}\n\n\t\t\t.results-tab-btn {\n\t\t\t\tfont-family: \"novecento-sans\", sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tletter-spacing: 0.1em;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tcolor: #004438;\n\t\t\t\tbackground: transparent;\n\t\t\t\tborder: none;\n\t\t\t\tpadding: 10px 24px;\n\t\t\t\tborder-radius: 30px;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttransition: all 0.3s ease;\n\t\t\t}\n\n\t\t\t.results-tab-btn:hover {\n\t\t\t\tcolor: #b5a596;\n\t\t\t}\n\n\t\t\t.results-tab-btn.active {\n\t\t\t\tbackground: #004438;\n\t\t\t\tcolor: white;\n\t\t\t\tbox-shadow: 0 4px 15px rgba(0, 68, 56, 0.2);\n\t\t\t}\n\n\t\t\t.results-tab-content {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.results-tab-content.active {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t/* Slider styling */\n\t\t\t.ba-wrapper {\n\t\t\t\tmax-width: 450px;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tuser-select: none;\n\t\t\t}\n\n\t\t\t.ba-slider {\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 100%;\n\t\t\t\taspect-ratio: 420 / 453;\n\t\t\t\toverflow: hidden;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\tbox-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n\t\t\t\tcursor: col-resize;\n\t\t\t}\n\n\t\t\t.ba-after,\n\t\t\t.ba-before {\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\n\t\t\t.ba-after img,\n\t\t\t.ba-before img {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tobject-fit: cover;\n\t\t\t\tdisplay: block;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t/* Before is clipped from the right */\n\t\t\t.ba-before {\n\t\t\t\tclip-path: inset(0 50% 0 0);\n\t\t\t\tz-index: 2;\n\t\t\t\ttransition: clip-path 0.02s linear;\n\t\t\t}\n\n\t\t\t.ba-label {\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 20px;\n\t\t\t\tfont-family: \"novecento-sans\", sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tletter-spacing: 0.1em;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tcolor: white;\n\t\t\t\tbackground: rgba(0, 0, 0, 0.45);\n\t\t\t\tpadding: 6px 18px;\n\t\t\t\tborder-radius: 30px;\n\t\t\t\tbackdrop-filter: blur(4px);\n\t\t\t}\n\n\t\t\t.ba-label-left {\n\t\t\t\tleft: 20px;\n\t\t\t}\n\n\t\t\t.ba-label-right {\n\t\t\t\tright: 20px;\n\t\t\t}\n\t\t\t\n\t\t\t.ba-label-center {\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t}\n\n\t\t\t/* Drag handle */\n\t\t\t.ba-handle {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\theight: 100%;\n\t\t\t\tz-index: 4;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tcursor: col-resize;\n\t\t\t\twidth: 4px;\n\t\t\t}\n\n\t\t\t.ba-handle-line {\n\t\t\t\tflex: 1;\n\t\t\t\twidth: 3px;\n\t\t\t\tbackground: white;\n\t\t\t\tbox-shadow: 0 0 8px rgba(0, 0, 0, 0.25);\n\t\t\t}\n\n\t\t\t.ba-handle-circle {\n\t\t\t\twidth: 52px;\n\t\t\t\theight: 52px;\n\t\t\t\tbackground: #004438;\n\t\t\t\tborder: 3px solid white;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\tbox-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n\t\t\t\ttransition: transform 0.2s ease, background 0.2s ease;\n\t\t\t}\n\n\t\t\t.ba-slider:active .ba-handle-circle,\n\t\t\t.ba-handle-circle.dragging {\n\t\t\t\ttransform: scale(1.1);\n\t\t\t\tbackground: #b5a596;\n\t\t\t}\n\n\t\t\t.ba-hint {\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-family: \"proxima-nova\", sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tcolor: #999;\n\t\t\t\tmargin-top: 18px;\n\t\t\t\tletter-spacing: 0.05em;\n\t\t\t}\n\n\t\t\t/* Xeomin image showcase */\n\t\t\t.xeomin-wrapper {\n\t\t\t\tmax-width: 450px;\n\t\t\t\tmargin: 0 auto;\n\t\t\t}\n\n\t\t\t.xeomin-image-container {\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 100%;\n\t\t\t\taspect-ratio: 420 / 453;\n\t\t\t\toverflow: hidden;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\tbox-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n\t\t\t}\n\n\t\t\t.xeomin-image-container img {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tobject-fit: cover;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t@media (max-width: 768px) {\n\t\t\t\t.ba-slider, .xeomin-image-container {\n\t\t\t\t\tborder-radius: 12px;\n\t\t\t\t}\n\t\t\t\t.results-tabs-container {\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tborder-radius: 20px;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmax-width: 300px;\n\t\t\t\t\tmargin: 20px auto 0 auto;\n\t\t\t\t}\n\t\t\t\t.results-tab-btn {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t}\n\t\t" }} />
    
  </section>
  
  <section className="mb75 pt75" style={{backgroundColor: '#f7f5f2'}}>
    <div className="container">
      <div className="mw1200">
        <div className="mb50 animate fadeIn">
          <div className="flexy gap50 block-mobile align-center">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h3 className="title-sm highlight-color mb5 uppercase">A Softer, More Refreshed Expression</h3>
              <h2 className="title-md accent-color uppercase mb15">What Are Neurotoxins?</h2>
              <p>Neurotoxins are injectable aesthetic treatments designed to temporarily relax targeted facial
                muscles responsible for dynamic wrinkles. Dynamic wrinkles develop from repeated expressions and
                commonly appear across the forehead, between the brows, and around the eyes. Botox, Jeuveau, and
                Xeomin work by reducing nerve signals to carefully selected muscles. As these muscles relax, the
                skin above them appears smoother and visible expression lines begin to soften. The goal is not
                to remove movement from your face. With careful treatment planning and precise injections,
                neurotoxins can create a rested, natural-looking appearance while allowing your expressions to
                remain authentic.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Neurotoxins" src="/assets/img/services page images/Neurotoxins.jpg" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Trusted Treatments, Personalized Results</h3>
          
          <div className="flexy gap50 block-mobile align-center mt25">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h2 className="title-md accent-color uppercase mb15">What Is Botox?</h2>
              <p>Botox is one of the most recognized neurotoxin treatments in aesthetic medicine. It is
                commonly used to soften forehead lines, frown lines between the eyebrows, and crow's
                feet around the eyes. The treatment works by temporarily relaxing specific muscles that
                repeatedly contract and contribute to visible wrinkles. Botox can help smooth these
                areas and create a more refreshed appearance without surgery or an extended recovery
                period. Because every face moves differently, Botox treatment at Samsara Aesthetics &amp;
                Wellness is customized according to your facial anatomy, muscle activity, and aesthetic
                goals.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Botox" src="/assets/img/services page images/botox.jfif" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
          
          <div className="flexy gap50 block-mobile align-center mt50">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h2 className="title-md accent-color uppercase mb15">What Is Jeuveau?</h2>
              <p>Jeuveau is a modern neurotoxin injectable designed to improve the appearance of
                expression-related wrinkles. It is particularly well known for treating frown lines
                between the eyebrows, though it may be used in other areas based on your personalized
                treatment plan. Sometimes referred to as a contemporary alternative within the
                neurotoxin category, Jeuveau works by temporarily reducing muscle activity in carefully
                selected areas. For patients seeking a smoother, more relaxed appearance, Jeuveau offers
                a minimally invasive treatment option with little interruption to a busy routine.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Jeuveau" src="/assets/img/services page images/Jeuveau.jpg" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
          
          <div className="flexy gap50 block-mobile align-center mt50">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h2 className="title-md accent-color uppercase mb15">What Is Xeomin?</h2>
              <p>Xeomin is a neurotoxin treatment used to soften dynamic facial lines caused by repeated
                muscle movement. Its purified formulation contains the active neurotoxin ingredient without
                certain accessory proteins found in some other formulations. Like Botox and Jeuveau, Xeomin
                temporarily relaxes targeted facial muscles to improve the appearance of expression lines.
                It may be an appropriate option for patients seeking a refined, natural-looking result.
                During your consultation, our aesthetic specialists can help determine whether Xeomin aligns
                with your facial anatomy, treatment history, and desired outcome.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Xeomin" src="/assets/img/services page images/Xeomin.jfif" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Refresh, Smooth, Rejuvenate</h3>
          <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of Neurotoxin Treatments?
          </h2>
          <p>Neurotoxin treatments offer a simple and effective approach to facial rejuvenation without the
            need for surgery. Botox, Jeuveau, and Xeomin can soften visible expression lines and help the
            face appear more rested and refreshed. These treatments may be used to improve the appearance of
            forehead lines, frown lines, and crow's feet. Depending on your individual needs and the
            provider's assessment, neurotoxins may also be used in other carefully selected treatment areas.
            The procedure is quick, treatment plans are highly customizable, and downtime is typically
            minimal. Most importantly, precise application allows us to focus on subtle enhancement rather
            than changing the features that make your face unique.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Understanding Your Expression</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Neurotoxin Consultation</h2>
          <p>Every successful neurotoxin treatment begins with understanding your face, not simply identifying
            a wrinkle. During your consultation at Samsara Aesthetics &amp; Wellness, our aesthetic specialists
            will discuss your concerns, treatment goals, and previous injectable experience. We will also
            evaluate your facial expressions and muscle movement to better understand how different areas of
            your face work together. Based on this assessment, we can recommend Botox, Jeuveau, or Xeomin
            and develop a personalized treatment plan designed around you. Your consultation is also an
            opportunity to ask questions, understand what to expect, and discuss the type of result you
            prefer. Whether you want a subtle refresh or more noticeable smoothing, your treatment plan will
            be approached with balance and precision in mind.</p>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Thoughtful Treatment, Precise Placement</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Neurotoxin Procedure</h2>
          <p>Neurotoxin injections are typically quick and minimally invasive. Before treatment, your
            practitioner will identify the precise areas where muscle activity is contributing to visible
            lines. Using a fine needle, small amounts of Botox, Jeuveau, or Xeomin are carefully injected
            into targeted muscles. Most patients describe the sensation as a brief pinch or mild pinprick.
            The treatment itself can often be completed in a short appointment. Because neurotoxin
            procedures do not require surgery or general anesthesia, many patients are able to return to
            their usual routine soon after leaving our Plantation practice.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Simple Aftercare, Minimal Interruption</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>Recovery following a neurotoxin treatment is generally minimal. Some patients may notice
            temporary redness, mild swelling, tenderness, or minor bruising around the injection sites.
            These effects typically improve on their own. Your practitioner will provide personalized
            aftercare instructions following your appointment. You may be advised to avoid rubbing or
            placing unnecessary pressure on the treated areas for a period of time. Following your aftercare
            guidance is important for supporting your treatment and achieving the best possible outcome.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Subtle Changes, Renewed Confidence</h3>
          <h2 className="title-md accent-color uppercase mb15">Neurotoxin Results</h2>
          <p>Results from Botox, Jeuveau, and Xeomin develop gradually as the targeted muscles begin to relax.
            You may start to notice visible changes within several days, with results continuing to develop
            over the following days or weeks depending on the treatment used and your individual response.
            As expression lines soften, the face can appear smoother, calmer, and more refreshed. The aim is
            a natural result that complements your features rather than creating an overtreated appearance.
            Neurotoxin results are temporary and may last for several months. Individual longevity can vary
            based on the treatment area, muscle activity, product used, and your body's response.
            Maintenance appointments can be discussed with your provider to help preserve your desired
            results.</p>
        </div>
      </div>
    </div>
  </section>
  
  <style dangerouslySetInnerHTML={{__html: "\n\t\t.faq-section .accordion {\n\t\t\tmax-width: 900px;\n\t\t\tmargin: 40px auto 0;\n\t\t}\n\t\t.faq-section .accordion__item {\n\t\t\tborder-bottom: 1px solid #e0d8d0;\n\t\t\tpadding: 22px 0;\n\t\t\ttransition: background-color 0.3s ease;\n\t\t}\n\t\t.faq-section .accordion__item:first-child {\n\t\t\tborder-top: 1px solid #e0d8d0;\n\t\t}\n\t\t.faq-section .accordion__question {\n\t\t\tcursor: pointer;\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t\tuser-select: none;\n\t\t\tpadding-right: 35px;\n\t\t}\n\t\t.faq-section .accordion__question h3 {\n\t\t\tmargin: 0;\n\t\t\tfont-family: 'novecento-sans', sans-serif;\n\t\t\tcolor: #004438;\n\t\t\tfont-size: 18px;\n\t\t\tletter-spacing: 0.05em;\n\t\t\ttransition: color 0.3s ease;\n\t\t}\n\t\t.faq-section .accordion__question:hover h3 {\n\t\t\tcolor: #b5a596;\n\t\t}\n\t\t.faq-section .accordion__question::after {\n\t\t\tcontent: \"+\";\n\t\t\tfont-size: 26px;\n\t\t\tfont-weight: 300;\n\t\t\tcolor: #004438;\n\t\t\ttransition: transform 0.35s ease, color 0.35s ease;\n\t\t\tposition: absolute;\n\t\t\tright: 5px;\n\t\t\ttop: 50%;\n\t\t\ttransform: translateY(-50%);\n\t\t\tline-height: 1;\n\t\t}\n\t\t.faq-section .accordion__item.open .accordion__question::after {\n\t\t\ttransform: translateY(-50%) rotate(45deg);\n\t\t\tcolor: #b5a596;\n\t\t}\n\t\t.faq-section .accordion__answer {\n\t\t\tmax-height: 0;\n\t\t\toverflow: hidden;\n\t\t\topacity: 0;\n\t\t\ttransition: max-height 0.4s cubic-bezier(0, 1, 0, 1), opacity 0.3s ease;\n\t\t}\n\t\t.faq-section .accordion__item.open .accordion__answer {\n\t\t\tmax-height: 500px;\n\t\t\topacity: 1;\n\t\t\ttransition: max-height 0.4s ease-in, opacity 0.3s ease 0.1s;\n\t\t}\n\t\t.faq-section .accordion__answer p {\n\t\t\tmargin: 0;\n\t\t\tpadding-top: 16px;\n\t\t\tcolor: #555;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 1.65;\n\t\t\tfont-family: 'proxima-nova', sans-serif;\n\t\t}\n\t" }} />
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">Neurotoxins: Botox, Jeuveau,
          and Xeomin<br /><span className="highlight-color">Frequently Asked Questions</span></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">What is the difference between Botox, Jeuveau, and Xeomin?</h3>
            </div>
            <div className="accordion__answer">
              <p>Botox, Jeuveau, and Xeomin are all neurotoxin injectables used to temporarily relax
                targeted muscles and soften dynamic wrinkles. Each product has differences in its
                formulation and may be recommended based on your facial anatomy, previous treatment
                experience, and aesthetic goals. Your provider can help determine which option is most
                appropriate for you.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How long do neurotoxin results last?</h3>
            </div>
            <div className="accordion__answer">
              <p>Results are temporary and commonly last for several months. The exact duration varies
                from person to person and can depend on the treatment area, muscle activity, dosage, and
                individual metabolism.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">When will I see results after Botox, Jeuveau, or Xeomin?</h3>
            </div>
            <div className="accordion__answer">
              <p>Many patients begin noticing changes within several days after treatment. Results may
                continue to develop over the following days or weeks. Your practitioner will explain the
                expected timeline for the specific neurotoxin used during your treatment.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Will neurotoxins make my face look frozen?</h3>
            </div>
            <div className="accordion__answer">
              <p>The goal of treatment at Samsara Aesthetics &amp; Wellness is to create balanced,
                natural-looking results. Precise placement and a personalized treatment plan can soften
                expression lines while preserving natural facial movement.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Is there downtime after neurotoxin injections?</h3>
            </div>
            <div className="accordion__answer">
              <p>Downtime is typically minimal. Temporary redness, swelling, tenderness, or bruising may
                occur around the injection sites. Many patients are able to return to their normal daily
                activities shortly after treatment.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">Can neurotoxins be combined with dermal fillers?</h3>
            </div>
            <div className="accordion__answer">
              <p>Yes. Depending on your aesthetic goals, neurotoxins and dermal fillers may be used as
                part of a more comprehensive facial rejuvenation plan. Neurotoxins address
                muscle-related expression lines, while fillers are commonly used to restore volume or
                enhance facial contours. Your provider can recommend an appropriate combination based on
                your needs.</p>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase">How do I know which neurotoxin is right for me?</h3>
            </div>
            <div className="accordion__answer">
              <p>The best option depends on your facial movement, treatment areas, aesthetic goals, and
                previous injectable experience. During your consultation, our aesthetic specialists will
                assess your needs and discuss whether Botox, Jeuveau, or Xeomin may be the right choice
                for your personalized treatment plan.</p>
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
