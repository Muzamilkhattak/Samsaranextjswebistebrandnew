"use client";
import React from 'react';
import Link from 'next/link';

export default function GlowSociety() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{__html: `

				.glow-grid {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 30px;
					margin-bottom: 40px;
				}
				@media (max-width: 840px) {
					.glow-grid { grid-template-columns: 1fr; }
				}
				.glow-card {
					background: #ffffff;
					border: 1px solid #ebd9c8;
					border-radius: 16px;
					padding: 40px 35px;
					box-shadow: 0 10px 35px rgba(0, 68, 56, 0.06);
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}
				.glow-card:hover {
					transform: translateY(-3px);
					box-shadow: 0 15px 40px rgba(0, 68, 56, 0.1);
				}
				.glow-card__title {
					font-family: 'novecento-sans', sans-serif !important;
					font-size: 24px;
					color: #004438;
					text-transform: uppercase;
					margin-bottom: 20px;
					padding-bottom: 12px;
					border-bottom: 2px solid #b5a596;
					letter-spacing: 1px;
				}
				.glow-list {
					list-style: none;
					padding: 0;
					margin: 0;
				}
				.glow-list li {
					font-family: 'proxima-nova', sans-serif;
					font-size: 16px;
					color: #333333;
					margin-bottom: 14px;
					padding-left: 28px;
					position: relative;
					line-height: 1.6;
				}
				.glow-list li::before {
					content: "✓";
					position: absolute;
					left: 0;
					color: #004438;
					font-weight: 700;
					font-size: 18px;
				}
				.perks-grid {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 20px;
					margin-top: 20px;
				}
				@media (max-width: 900px) {
					.perks-grid { grid-template-columns: repeat(2, 1fr); }
				}
				@media (max-width: 600px) {
					.perks-grid { grid-template-columns: 1fr; }
				}
				.perk-box {
					background: #fbf9f6;
					border: 1px solid #ebd9c8;
					border-radius: 12px;
					padding: 22px 18px;
					text-align: center;
					font-family: 'proxima-nova', sans-serif;
					font-size: 15px;
					font-weight: 600;
					color: #004438;
					display: flex;
					align-items: center;
					justify-content: center;
					min-height: 90px;
					line-height: 1.4;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
				}
			
      `}} />
      <div>
  <section className="pv100">
    <div className="container" style={{maxWidth: 1100}}>
      
      <div className="text-center mb60">
        <img alt="Samsara Aesthetics & Wellness" className="animate fadeUp mb25" src="/assets/img/icon.svg" />
        <h2 className="title-lg title-green-bg animate fadeIn uppercase" style={{fontFamily: '"novecento-sans", sans-serif'}}>Glow Society Membership</h2>
        <div className="mt20">
          <span style={{display: 'inline-block', background: '#b5a596', color: '#ffffff', fontFamily: '"novecento-sans", sans-serif', fontWeight: 700, fontSize: 28, padding: '10px 35px', borderRadius: 50, boxShadow: '0 4px 15px rgba(0, 68, 56, 0.15)'}}>$229 / MONTH</span>
        </div>
        <p className="subhead accent-color animate strikethrough mt25">Be Your Best. Inside &amp; Out.</p>
      </div>
      <div className="glow-grid">
        <div className="glow-card animate fadeIn">
          <h3 className="glow-card__title">Exclusive Neurotoxin Pricing</h3>
          <ul className="glow-list">
            <li><strong>Botox:</strong> $12 / unit</li>
            <li><strong>Xeomin:</strong> $8 / unit</li>
            <li><strong>Jeuveau:</strong> $40 OFF your treatment every 90 days</li>
          </ul>
        </div>
        <div className="glow-card animate fadeIn">
          <h3 className="glow-card__title">Member Discounts &amp; Birthday Gift</h3>
          <ul className="glow-list">
            <li><strong>10% OFF</strong> Dermal Fillers</li>
            <li><strong>10% OFF</strong> SkinCeuticals® Skincare Products</li>
            <li><strong>10% OFF</strong> Vitamin &amp; Peptide Therapy</li>
            <li><strong>Birthday Gift:</strong> Complimentary 15 Units of Neurotoxin</li>
          </ul>
        </div>
      </div>
      <div className="glow-card animate fadeIn mb40" style={{background: '#ffffff'}}>
        <h3 className="glow-card__title">Monthly Member Perk</h3>
        <p style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 16, color: '#555555', marginBottom: 20}}>Choose <strong>ONE</strong> complimentary service each month:</p>
        <div className="perks-grid">
          <div className="perk-box">Signature Hydrafacial® &amp; 15-Minute Red Light Therapy</div>
          <div className="perk-box">Traditional Facial with Dermaplaning</div>
          <div className="perk-box">(2) 60-Minute Swedish Massage</div>
          <div className="perk-box">30-Minute Forma Skin Tightening Facial</div>
          <div className="perk-box">30-Minute IPL Photofacial<br /><span style={{fontSize: 12, fontWeight: 400, color: '#777'}}>(if Fitzpatrick skin type qualifies)</span></div>
          <div className="perk-box">30-Minute Evolve Body Contouring Session<br /><span style={{fontSize: 12, fontWeight: 400, color: '#777'}}>(1 treatment area)</span></div>
        </div>
      </div>
      <div className="glow-card animate fadeIn mb40">
        <h3 className="glow-card__title">Additional Member Benefits</h3>
        <ul className="glow-list">
          <li>Priority Scheduling for all your aesthetic &amp; wellness appointments.</li>
          <li>Early Access to Promotions &amp; New Treatment Launches.</li>
          <li>Complimentary Skin Consultation &amp; Personalized Treatment Plan Review.</li>
        </ul>
      </div>
      <div className="glow-card animate fadeIn mb50" style={{background: '#fbf9f6', borderColor: '#b5a596'}}>
        <h3 className="glow-card__title" style={{color: '#004438'}}>Membership Details</h3>
        <ul className="glow-list">
          <li>$229 monthly membership with automatic payment required.</li>
          <li>A valid credit card must be kept on file for all members.</li>
          <li>6-month minimum commitment.</li>
          <li>30-day written notice is required prior to cancellation.</li>
          <li>Membership benefits are non-transferable and cannot be combined with any other promotions, discounts, or special offers.</li>
          <li>Unused monthly benefits do not roll over.</li>
        </ul>
      </div>
      <div className="text-center mt50">
        <h3 style={{fontFamily: '"novecento-sans", sans-serif !important', fontSize: 26, color: '#004438', textTransform: 'uppercase', marginBottom: 20}}>BE YOUR BEST. INSIDE &amp; OUT.</h3>
        <a className="button" href="/contact/" style={{borderRadius: 50, padding: '18px 45px', background: '#004438', color: '#ffffff'}}>Join Glow Society Today</a>
      </div>
    </div>
  </section>
  <section className="pv75 bg-image animate zoomOutBg" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)' } as React.CSSProperties}>
    <div className="container ps75">
      <div className="mw1600">
        <div className="inline-schedule-consult">
          <div className="flexy gap100 block-desktop is-vcentered">
            <div className="flexy-item animate fadeIn text-center">
              <h2 className="ipj-link mb20 title-md white uppercase" data-ipj="Consultation" id="ipj-consult">
                Your Transformation Begins Here</h2>
              <p className="lead accent-color mb20">Discuss Flexible<br /> Payment Options</p>
              <p className="white mw600">Ask our team about payment planning so your treatment path can align
                with both your goals and your budget.</p>
            </div>
            <div className="flexy-item animate fadeIn">
              <div className="contact-form">
                <form action="https://formspree.io/f/mldenkyz" aria-label="Contact Form" className="form" method="POST" name="contactForm" noValidate>
                  <div className="input-wrap text is-one-third">
                    <input aria-label="Full Name" aria-required="true" name="FullName" placeholder="Full Name*" required type="text" />
                  </div>
                  <div className="input-wrap text is-one-third">
                    <input aria-label="Phone Number" aria-required="true" name="Phone" pattern="[\+]?[0-9]{0,2}[\-\s\.]?[\(]?[0-9]{3}[\)]?[\-\s\.]?[0-9]{3}[\-\s\.]?[0-9]{4,6}" placeholder="Phone Number*" required type="tel" />
                  </div>
                  <div className="input-wrap text is-one-third">
                    <input aria-label="Email Address" aria-required="true" name="Email" placeholder="Email Address*" required type="email" />
                  </div>
                  <div className="input-wrap is-one-third">
                    <span className="select">
                      <select  aria-label="Procedure of Interest" aria-required="true" id="Schedule" name="ProcedureOfInterest" required defaultValue="">
                        <option disabled  value="">Procedure of Interest*</option>
                        <option value="Injectables">Injectables</option>
                        <option value="Dermal Fillers and Neuromodulators">Dermal Fillers and
                          Neuromodulators</option>
                        <option value="PRP/PRF Treatments">PRP/PRF Treatments</option>
                        <option value="Laser and Energy Treatments">Laser and Energy Treatments
                        </option>
                        <option value="Plasma Skin Tightening">Plasma Skin Tightening</option>
                        <option value="IPL">IPL</option>
                        <option value="Morpheus8">Morpheus8</option>
                        <option value="Laser Hair Removal ">Laser Hair Removal </option>
                        <option value="Forma">Forma</option>
                        <option value="Wellness">Wellness</option>
                        <option value="Physician Guided Weight Loss Therapy">Physician Guided
                          Weight Loss Therapy</option>
                        <option value="Massage Therapy">Massage Therapy</option>
                        <option value="IV Hydration">IV Hydration</option>
                        <option value="Injectables for Wellness">Injectables for Wellness
                        </option>
                        <option value="Lymphatic Drainage ">Lymphatic Drainage </option>
                        <option value="Life Coaching and Mental Wellness">Life Coaching and
                          Mental Wellness</option>
                        <option value="Skincare">Skincare</option>
                        <option value="Chemical Peels">Chemical Peels</option>
                        <option value="HydraFacials">HydraFacials</option>
                      </select>
                    </span>
                  </div>
                  <div className="input-wrap is-one-third">
                    <span className="select">
                      <select  aria-label="How Did You Hear Of Us*" id="HearOfUs" name="HearOfUs" required defaultValue="">
                        <option disabled  value="">How Did You Hear of Us?*</option>
                        <option value="Website">Website</option>
                        <option value="Friend">Friend</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Previous Patient">Previous Patient</option>
                        <option value="Other">Other</option>
                      </select>
                    </span>
                  </div>
                  <div className="input-wrap is-one-third">
                    <span className="select">
                      <select  aria-label="Best Time To Reach You" id="BestTime" name="BestTime" required defaultValue="">
                        <option disabled  value="">Best Time To Reach You*</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                      </select>
                    </span>
                  </div>
                  <div className="input-wrap text is-full">
                    <textarea aria-label="Message" data-hj-whitelist id="Message" maxLength={280} name="Message" placeholder="How can we assist your aesthetic needs?" required type="text" defaultValue={""} />
                  </div>
                  <div className="input-wrap is-full checkbox mb10" style={{paddingTop: 0}}>
                    <input aria-label="Yes Opt-in to Text" name="TextOptin" placeholder="Yes Opt-in to Text" type="checkbox" defaultValue="Yes Opt-in to Text" />
                    <p className="optin-terms">By checking this box you agree to receive SMS messages
                      from Samsara Aesthetics &amp; Wellness regarding appointments and specials.
                      Standard messaging rates may apply. For more details, read our <a href="/privacy-policy/">Privacy Policy</a>.</p>
                  </div>
                  <div className="input-wrap text is-full" style={{display: 'none'}}>
                    <input aria-hidden="true" aria-label="Zip Code (Do Not Fill Out)" name="ZipCode" placeholder="Zip Code*" type="text" />
                  </div>
                  <div className="input-wrap">
                    <button aria-label="Submit Form" className="button light box-shadow-smooth mb0" type="submit">Submit <img alt="right arrow" src="/assets/img/_defaults/arrow-right-highlight.svg" title="Submit Form" /></button>
                  </div>
                  <div className="input-wrap">
                    <span className="title-sm text-center consult-phone">
                      <a aria-label="Call Samsara Aesthetics & Wellness" className="tel-link" href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}>(954) 688-7255</a>
                    </span>
                  </div>
                  <input name="gtagevent" type="hidden" defaultValue="contact_form" />
                  <input name="LeadSource" type="hidden" defaultValue="Organic" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </main>
  );
}
