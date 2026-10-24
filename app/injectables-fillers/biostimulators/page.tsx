"use client";
import React from 'react';
import Link from 'next/link';

export default function Biostimulators() {
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
              <h2 className="title-lg accent-color uppercase mb35 animate fadeIn">Biostimulator Treatments</h2>
              <h3 className="title-sm highlight-color mb5 uppercase">Refined Beauty, Naturally You</h3>
              <p className="mb35 animate fadeIn">What if facial rejuvenation could work with your skin's natural processes rather than simply adding temporary volume? Biostimulators at Samsara Aesthetics &amp; Wellness in Plantation, FL, offer a gradual approach to restoring a smoother, firmer, and more refreshed appearance.</p>
              <p className="mb35 animate fadeIn">Designed to support your body's natural collagen production, biostimulator treatments can help improve visible signs of facial aging over time. Instead of creating an immediate or dramatic change, the treatment focuses on progressive improvement that develops naturally. Our aesthetic specialists create personalized treatment plans based on your facial structure, skin quality, and aesthetic goals, helping you achieve results that feel balanced, refined, and uniquely yours.</p>
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
              <h2 className="title-md accent-color uppercase mb15">What Are Biostimulators?</h2>
              <p>Biostimulators are injectable aesthetic treatments designed to encourage the body's natural production of collagen. Collagen is an essential protein that helps maintain the skin's structure, firmness, and youthful appearance. As we age, collagen production naturally decreases. This gradual decline can contribute to skin laxity, facial volume changes, fine lines, and a less defined appearance.</p><p>Unlike traditional dermal fillers, which are commonly used to add immediate volume, biostimulators work progressively. Once carefully injected into targeted areas, they support a natural regenerative response within the skin. Over time, new collagen development can help strengthen the skin's underlying structure and improve overall facial quality. The result is gradual rejuvenation designed to look natural and evolve with you.</p>
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
              <h2 className="title-md accent-color uppercase mb15">How Do Biostimulators Work?</h2>
              <p>Biostimulators are injectable treatments that stimulate your body’s natural collagen production to gradually restore volume, improve skin firmness, and enhance overall skin quality. Rather than simply filling wrinkles, they activate your body’s natural healing response, encouraging fibroblasts to produce new collagen that strengthens and supports the skin over time.</p><p>Results develop gradually over several weeks to months, providing long-lasting, natural-looking rejuvenation with a refreshed, youthful appearance.</p><p>The specific treatment approach, number of sessions, and areas addressed will depend on your individual needs and the recommendations of your aesthetic provider.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Botox" src="/assets/img/services page images/botox.jfif" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
          
          <div className="flexy gap50 block-mobile align-center mt50">
            <div className="flexy-item" style={{flex: '1.2'}}>
              <h2 className="title-md accent-color uppercase mb15">What Can Biostimulators Treat?</h2>
              <p>Biostimulators may be used to address a variety of concerns related to facial aging and declining collagen production. Treatment can help improve the appearance of skin laxity, facial volume changes, fine lines, wrinkles, and reduced facial definition.</p><p>Depending on the product selected and your personalized treatment plan, biostimulators may be used in areas such as the cheeks, temples, jawline, and other regions experiencing structural changes. Rather than focusing on one isolated wrinkle, biostimulator treatments can support broader facial rejuvenation by improving the foundation beneath the skin. During your consultation, our aesthetic specialists will assess your facial structure and skin quality to determine which areas may benefit from treatment.</p>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Jeuveau" src="/assets/img/services page images/Jeuveau.jpg" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
          
          <div className="flexy gap50 block-mobile align-center mt50">
            <div className="flexy-item" style={{flex: '1.2'}}>
            </div>
            <div className="flexy-item" style={{flex: '0.8'}}>
              <img alt="Xeomin" src="/assets/img/services page images/Xeomin.jfif" style={{width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover'}} />
            </div>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Refresh, Smooth, Rejuvenate</h3>
          <h2 className="title-md accent-color uppercase mb15">What Are the Benefits of Biostimulators?</h2>
          <p>One of the most appealing benefits of biostimulators is their ability to support natural-looking rejuvenation over time. Because the treatment encourages collagen production, changes develop gradually and blend naturally with your existing facial features. Biostimulators can help improve skin firmness, enhance facial structure, soften visible signs of aging, and support better overall skin quality.</p><p>The treatment is minimally invasive and typically requires little interruption to your daily routine. For patients who prefer progressive improvement rather than an immediate transformation, biostimulators offer a thoughtful approach to aesthetic rejuvenation. Results may also continue to evolve as collagen develops, helping the skin appear refreshed and supported from within.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Understanding Your Expression</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Biostimulator Consultation</h2>
          <p>No two faces age in exactly the same way. That's why your biostimulator treatment at Samsara Aesthetics &amp; Wellness begins with a personalized consultation. During your appointment, our aesthetic specialists will discuss the changes you have noticed, the areas you would like to improve, and the type of result you hope to achieve. We will evaluate your facial structure, skin quality, and areas of volume or collagen loss. Your medical and aesthetic treatment history may also be reviewed to help determine whether biostimulators are appropriate for you.</p><p>Based on this assessment, a personalized treatment plan can be developed around your individual needs. Your provider will explain the recommended treatment areas, expected timeline, and what you can realistically anticipate from your results.</p>
          <div className="mt25">
            <a className="button box-shadow-smooth" href="/booking/">Book Appointment <img alt="right arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
          </div>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Thoughtful Treatment, Precise Placement</h3>
          <h2 className="title-md accent-color uppercase mb15">Your Biostimulator Procedure</h2>
          <p>Biostimulator treatments are performed using carefully placed injections in targeted areas of the face. Before the procedure begins, your practitioner will identify the areas that can benefit from improved collagen support and structural rejuvenation. The selected biostimulator is then precisely administered according to your personalized treatment plan.</p><p>Patients may feel mild pressure, a brief pinch, or temporary discomfort during the injections. Treatment time can vary depending on the number of areas being addressed, but appointments are generally efficient and minimally invasive. Once the procedure is complete, your body's natural collagen-building process begins gradually. Your practitioner will provide guidance on what to expect as your results develop.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Simple Aftercare, Minimal Interruption</h3>
          <h2 className="title-md accent-color uppercase mb15">Recovery and Aftercare</h2>
          <p>Recovery after a biostimulator treatment is typically manageable. Mild swelling, redness, tenderness, or bruising may occur around the injection sites. These effects are generally temporary and gradually improve. Your aesthetic provider will give you specific aftercare instructions based on the biostimulator used and your individual treatment plan.</p><p>It is important to follow these recommendations carefully. Depending on your treatment, additional aftercare guidance may be provided to support proper healing and optimal results. Most patients can return to many of their usual daily activities shortly after their appointment.</p>
        </div>
        <div className="mb50 animate fadeIn">
          <h3 className="title-sm highlight-color mb5 uppercase">Subtle Changes, Renewed Confidence</h3>
          <h2 className="title-md accent-color uppercase mb15">Biostimulator Results</h2>
          <p>Biostimulator results develop differently from traditional injectable treatments. Rather than seeing the complete outcome immediately, improvements appear progressively as your body produces new collagen. Over the following weeks and months, you may notice changes in skin firmness, texture, facial support, and overall appearance.</p><p>The face can begin to look smoother and more refreshed while maintaining its natural characteristics. The timeline and longevity of results vary based on the biostimulator used, treatment areas, number of sessions, and your body's individual response.</p><p>Because collagen development is a gradual process, patience is an important part of the treatment journey. Your provider may recommend a series of treatments or future maintenance sessions based on your aesthetic goals.</p>
        </div>
      </div>
    </div>
  </section>
  
  <style dangerouslySetInnerHTML={{__html: "\n\t\t.faq-section .accordion {\n\t\t\tmax-width: 900px;\n\t\t\tmargin: 40px auto 0;\n\t\t}\n\t\t.faq-section .accordion__item {\n\t\t\tborder-bottom: 1px solid #e0d8d0;\n\t\t\tpadding: 22px 0;\n\t\t\ttransition: background-color 0.3s ease;\n\t\t}\n\t\t.faq-section .accordion__item:first-child {\n\t\t\tborder-top: 1px solid #e0d8d0;\n\t\t}\n\t\t.faq-section .accordion__question {\n\t\t\tcursor: pointer;\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t\tuser-select: none;\n\t\t\tpadding-right: 35px;\n\t\t}\n\t\t.faq-section .accordion__question h3 {\n\t\t\tmargin: 0;\n\t\t\tfont-family: 'novecento-sans', sans-serif;\n\t\t\tcolor: #004438;\n\t\t\tfont-size: 18px;\n\t\t\tletter-spacing: 0.05em;\n\t\t\ttransition: color 0.3s ease;\n\t\t}\n\t\t.faq-section .accordion__question:hover h3 {\n\t\t\tcolor: #b5a596;\n\t\t}\n\t\t.faq-section .accordion__question::after {\n\t\t\tcontent: \"+\";\n\t\t\tfont-size: 26px;\n\t\t\tfont-weight: 300;\n\t\t\tcolor: #004438;\n\t\t\ttransition: transform 0.35s ease, color 0.35s ease;\n\t\t\tposition: absolute;\n\t\t\tright: 5px;\n\t\t\ttop: 50%;\n\t\t\ttransform: translateY(-50%);\n\t\t\tline-height: 1;\n\t\t}\n\t\t.faq-section .accordion__item.open .accordion__question::after {\n\t\t\ttransform: translateY(-50%) rotate(45deg);\n\t\t\tcolor: #b5a596;\n\t\t}\n\t\t.faq-section .accordion__answer {\n\t\t\tmax-height: 0;\n\t\t\toverflow: hidden;\n\t\t\topacity: 0;\n\t\t\ttransition: max-height 0.4s cubic-bezier(0, 1, 0, 1), opacity 0.3s ease;\n\t\t}\n\t\t.faq-section .accordion__item.open .accordion__answer {\n\t\t\tmax-height: 500px;\n\t\t\topacity: 1;\n\t\t\ttransition: max-height 0.4s ease-in, opacity 0.3s ease 0.1s;\n\t\t}\n\t\t.faq-section .accordion__answer p {\n\t\t\tmargin: 0;\n\t\t\tpadding-top: 16px;\n\t\t\tcolor: #555;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 1.65;\n\t\t\tfont-family: 'proxima-nova', sans-serif;\n\t\t}\n\t" }} />
  <section className="pv100 faq-section mb75" id="faqs" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="mw1000">
        <h2 className="title-lg accent-color uppercase mb35 animate fadeIn text-center">Biostimulators<br /><span className="highlight-color">Frequently Asked Questions</span></h2>
        <div className="accordion mt50 animate fadeIn">
          <div className="accordion__item">
            <div className="accordion__question" onClick={(e) => { if(typeof window !== 'undefined' && (window as any).toggleAccordionItem) (window as any).toggleAccordionItem(e.currentTarget); }}>
              <h3 className="title-sm uppercase" />
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
