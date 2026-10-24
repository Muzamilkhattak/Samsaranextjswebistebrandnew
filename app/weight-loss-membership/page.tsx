"use client";
import React from 'react';
import Link from 'next/link';

export default function WeightLossMembership() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{__html: `

				.wl-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-bottom: 40px; }
				@media (max-width: 840px) { .wl-grid { grid-template-columns: 1fr; } }
				.wl-card { background: #ffffff; border: 1px solid #ebd9c8; border-radius: 16px; padding: 40px 35px; box-shadow: 0 10px 35px rgba(0, 68, 56, 0.06); transition: transform 0.3s ease; position: relative; }
				.wl-card:hover { transform: translateY(-3px); }
				.wl-card__title { font-family: 'novecento-sans', sans-serif !important; font-size: 24px; color: #004438; text-transform: uppercase; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #b5a596; letter-spacing: 1px; }
				.wl-list { list-style: none; padding: 0; margin: 0; }
				.wl-list li { font-family: 'proxima-nova', sans-serif; font-size: 16px; color: #333333; margin-bottom: 14px; padding-left: 28px; position: relative; line-height: 1.6; }
				.wl-list li::before { content: "✓"; position: absolute; left: 0; color: #004438; font-weight: 700; font-size: 18px; }
				.badge-popular { position: absolute; top: -15px; right: 30px; background: #004438; color: #ffffff; font-family: 'novecento-sans', sans-serif; font-weight: 700; font-size: 13px; padding: 6px 18px; border-radius: 20px; letter-spacing: 1px; box-shadow: 0 4px 12px rgba(0, 68, 56, 0.25); }
				.price-pill { display: inline-block; background: #fbf9f6; border: 1px solid #ebd9c8; border-radius: 12px; padding: 15px 22px; font-family: 'proxima-nova', sans-serif; width: 100%; margin-bottom: 15px; }
				.price-pill strong { font-family: 'novecento-sans', sans-serif; font-size: 22px; color: #004438; }
			
      `}} />
      <div>
  <section className="pv100">
    <div className="container" style={{maxWidth: 1100}}>
      <div className="text-center mb60">
        <img alt="Samsara Aesthetics & Wellness" className="animate fadeUp mb25" src="/assets/img/icon.svg" />
        <h2 className="title-lg title-green-bg animate fadeIn uppercase" style={{fontFamily: '"novecento-sans", sans-serif'}}>Physician Guided Weight Loss</h2>
        <p className="subhead accent-color animate strikethrough mt15">Transformative Results. Expert Medical Supervision.</p>
      </div>
      <div className="wl-card animate fadeIn mb40" style={{border: '2px solid #004438'}}>
        <div className="badge-popular">★ MOST POPULAR</div>
        <h3 className="wl-card__title">Weight Loss Membership</h3>
        <div className="wl-grid" style={{marginBottom: 25, gap: 20}}>
          <div className="price-pill">
            <span style={{fontSize: 14, color: '#666', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 4}}>Semaglutide Membership</span>
            <strong>$350 <span style={{fontSize: 15, fontWeight: 400, color: '#777'}}>/ month</span></strong>
          </div>
          <div className="price-pill">
            <span style={{fontSize: 14, color: '#666', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 4}}>Tirzepatide Membership</span>
            <strong>$500 <span style={{fontSize: 15, fontWeight: 400, color: '#777'}}>/ month</span></strong>
          </div>
        </div>
        <h4 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 18, color: '#004438', textTransform: 'uppercase', marginBottom: 15}}>Membership Includes:</h4>
        <ul className="wl-list mb30">
          <li>4 weekly injections</li>
          <li><strong>No initial consultation fee</strong> ($150 value)</li>
          <li>Medical supervision</li>
          <li>Dosage adjustments</li>
          <li>Prescription management for side effects</li>
          <li>Questions &amp; provider guidance</li>
          <li>Priority scheduling</li>
          <li>Telehealth or in-office follow-up guidance</li>
        </ul>
        <div style={{background: '#fbf9f6', border: '1px solid #ebd9c8', borderRadius: 12, padding: '20px 25px'}}>
          <h4 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 16, color: '#004438', textTransform: 'uppercase', marginBottom: 8}}>Cancellation Policy</h4>
          <p style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 15, color: '#555', lineHeight: '1.6', margin: 0}}>A 30-day written notice is required. If notice is not provided, the payment method on file will be charged for the following month's membership.</p>
        </div>
      </div>
      <div className="wl-card animate fadeIn mb40">
        <h3 className="wl-card__title">Pay-As-You-Go Program</h3>
        <div className="mb30" style={{background: '#fbf9f6', border: '1px solid #ebd9c8', borderRadius: 12, padding: '20px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
          <div>
            <h4 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 18, color: '#004438', textTransform: 'uppercase', marginBottom: 4}}>Initial Consultation</h4>
            <p style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 14, color: '#666', margin: 0}}>Comprehensive medical evaluation &amp; program onboarding</p>
          </div>
          <div style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 26, fontWeight: 700, color: '#004438'}}>$150</div>
        </div>
        <h4 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 18, color: '#004438', textTransform: 'uppercase', marginBottom: 15}}>Medication Pricing</h4>
        <div className="wl-grid" style={{gap: 20, marginBottom: 30}}>
          <div style={{background: '#ffffff', border: '1px solid #ebd9c8', borderRadius: 12, padding: '25px 20px'}}>
            <h5 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 17, color: '#004438', textTransform: 'uppercase', marginBottom: 12, borderBottom: '1px solid #ebd9c8', paddingBottom: 8}}>Semaglutide</h5>
            <p style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 16, color: '#333', marginBottom: 8}}>10 mg (1 mL) — <strong style={{color: '#004438'}}>$170</strong></p>
            <p style={{fontSize: 13, color: '#888', fontStyle: 'italic', margin: 0}}>*Prices may vary on vial size availability.</p>
          </div>
          <div style={{background: '#ffffff', border: '1px solid #ebd9c8', borderRadius: 12, padding: '25px 20px'}}>
            <h5 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 17, color: '#004438', textTransform: 'uppercase', marginBottom: 12, borderBottom: '1px solid #ebd9c8', paddingBottom: 8}}>Tirzepatide</h5>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, fontFamily: '"proxima-nova", sans-serif', fontSize: 15, color: '#333'}}>
              <li style={{marginBottom: 8}}>10 mg (1 mL) — <strong style={{color: '#004438'}}>$330</strong></li>
              <li style={{marginBottom: 8}}>40 mg (4 mL) — <strong style={{color: '#004438'}}>$500</strong></li>
              <li>60 mg (3 mL) — <strong style={{color: '#004438'}}>$700</strong></li>
            </ul>
          </div>
        </div>
        <div style={{borderTop: '1px solid #ebd9c8', paddingTop: 25}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: 15}}>
            <h4 style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 18, color: '#004438', textTransform: 'uppercase', margin: 0}}>Weight Loss Follow-Up</h4>
            <span style={{fontFamily: '"novecento-sans", sans-serif', fontSize: 24, fontWeight: 700, color: '#004438'}}>$75</span>
          </div>
          <p style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 15, fontWeight: 700, color: '#004438', textTransform: 'uppercase', marginBottom: 10}}>Includes:</p>
          <ul className="wl-list">
            <li>Progress evaluation</li>
            <li>Medical supervision</li>
            <li>Dosage adjustments (if medically appropriate)</li>
            <li>Prescription management for side effects</li>
            <li>Provider guidance</li>
            <li>In-person or telehealth follow-up</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt50 p40" style={{background: '#fbf9f6', borderRadius: 16, border: '1px solid #ebd9c8'}}>
        <h3 style={{fontFamily: '"novecento-sans", sans-serif !important', fontSize: 26, color: '#004438', textTransform: 'uppercase', marginBottom: 15}}>READY TO BEGIN YOUR JOURNEY?</h3>
        <div className="mb25">
          <a className="title-sm" href="tel:(954) 688-7255" style={{fontFamily: '"proxima-nova", sans-serif', fontSize: 22, fontWeight: 700, color: '#004438', textDecoration: 'none'}}>📞 (954) 688-7255</a>
        </div>
        <div className="mb20">
          <a className="button" href="/contact/" style={{borderRadius: 50, padding: '18px 45px', background: '#004438', color: '#ffffff'}}>Book Online Or Schedule Your Consultation Today</a>
        </div>
        <p style={{fontSize: 13, color: '#777', fontStyle: 'italic', margin: 0}}>Medication availability and pricing are subject to change.</p>
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
