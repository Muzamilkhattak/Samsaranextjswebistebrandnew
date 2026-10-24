"use client";
import React from 'react';
import Link from 'next/link';

export default function VIPMembership() {
  return (
    <main>
      <section className="pv100 mb100 mt50">
        <div className="container">
          <div className="text-center mb60">
            <img alt="VIP Membership Plantation" className="animate fadeUp mb25" src="/assets/img/icon.svg" />
            <h2 className="title-lg animate fadeIn uppercase" style={{ color: '#004438' }}>Membership Plans</h2>
            <p className="subhead accent-color animate strikethrough mt15">Exclusive Aesthetic & Wellness Membership Options</p>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .membership-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 30px;
              margin-bottom: 50px;
            }

            @media (max-width: 840px) {
              .membership-grid {
                grid-template-columns: 1fr;
              }
            }

            .membership-card {
              background: #ffffff;
              border: 1px solid #ebd9c8;
              border-radius: 16px;
              padding: 40px 35px;
              box-shadow: 0 10px 35px rgba(0, 68, 56, 0.06);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .membership-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 15px 40px rgba(0, 68, 56, 0.12);
            }

            .membership-card__title {
              font-family: 'novecento-sans', sans-serif !important;
              font-size: 24px;
              color: #004438;
              text-transform: uppercase;
              margin-bottom: 12px;
            }

            .membership-card__price {
              font-family: 'novecento-sans', sans-serif !important;
              font-size: 32px;
              font-weight: 700;
              color: #b5a596;
              margin-bottom: 15px;
            }

            .membership-card__desc {
              font-family: 'proxima-nova', sans-serif;
              font-size: 16px;
              color: #555555;
              line-height: 1.6;
              margin-bottom: 25px;
            }

            .membership-card__btn {
              display: inline-block;
              background: #004438;
              color: #ffffff !important;
              font-family: 'proxima-nova', sans-serif;
              font-weight: 700;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 1px;
              padding: 14px 30px;
              border-radius: 50px;
              text-align: center;
              text-decoration: none;
              transition: background 0.3s ease;
            }

            .membership-card__btn:hover {
              background: #b5a596;
            }
          `}} />
          <div className="membership-grid">
            {/* CARD 1: ELITE SOCIETY */}
            <div className="membership-card animate fadeIn">
              <div>
                <h3 className="membership-card__title">Elite Society</h3>
                <div className="membership-card__price">$259 <span style={{ fontSize: '16px', fontWeight: 400, color: '#777' }}>/ month</span></div>
                <p className="membership-card__desc">Premium membership with exclusive treatment pricing, monthly complimentary luxury services, future enhancements, and massage upgrades.</p>
              </div>
              <Link className="membership-card__btn" href="/elite-society/">View Details</Link>
            </div>
            {/* CARD 2: GLOW SOCIETY */}
            <div className="membership-card animate fadeIn">
              <div>
                <h3 className="membership-card__title">Glow Society</h3>
                <div className="membership-card__price">$229 <span style={{ fontSize: '16px', fontWeight: 400, color: '#777' }}>/ month</span></div>
                <p className="membership-card__desc">Designed for ongoing radiance, skin health, and routine rejuvenation with preferred neurotoxin pricing and monthly treatment perks.</p>
              </div>
              <Link className="membership-card__btn" href="/glow-society/">View Details</Link>
            </div>
            {/* CARD 3: THE RISE */}
            <div className="membership-card animate fadeIn">
              <div>
                <h3 className="membership-card__title">The Rise &ndash; Resident Membership</h3>
                <div className="membership-card__price">$199 <span style={{ fontSize: '16px', fontWeight: 400, color: '#777' }}>/ month</span></div>
                <p className="membership-card__desc">An exclusive resident membership offering monthly treatments, free vitamin injections, special neurotoxin pricing, and priority booking.</p>
              </div>
              <Link className="membership-card__btn" href="/the-rise/">View Details</Link>
            </div>
            {/* CARD 4: WEIGHT LOSS MEMBERSHIP */}
            <div className="membership-card animate fadeIn">
              <div>
                <h3 className="membership-card__title">Weight Loss Membership</h3>
                <div className="membership-card__price"><span style={{ fontSize: '14px', fontWeight: 400, color: '#777' }}>Starting at</span> $350 <span style={{ fontSize: '16px', fontWeight: 400, color: '#777' }}>/ mo</span></div>
                <p className="membership-card__desc">Personalized physician-guided weight loss support with medication options (Semaglutide/Tirzepatide), medical supervision, and weekly injections.</p>
              </div>
              <Link className="membership-card__btn" href="/weight-loss-membership/">View Details</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pv75 bg-image animate zoomOutBg" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)' } as React.CSSProperties}>
        <div className="container ps75">
          <div className="mw1600">
            <div className="inline-schedule-consult">
              <div className="flexy gap100 block-desktop is-vcentered">
                <div className="flexy-item animate fadeIn text-center">
                  <h2 className="ipj-link mb20 title-md white uppercase" data-ipj="Consultation" id="ipj-consult">Your Transformation Begins Here</h2>
                  <p className="lead accent-color mb20">Discuss Flexible<br /> Payment Options</p>
                  <p className="white mw600">Ask our team about payment planning so your treatment path can align with both your goals and your budget.</p>
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
                          <select aria-label="Procedure of Interest" aria-required="true" id="Schedule" name="ProcedureOfInterest" required defaultValue="">
                            <option disabled value="">Procedure of Interest*</option>
                            <option value="Injectables">Injectables</option>
                            <option value="Dermal Fillers and Neuromodulators">Dermal Fillers and Neuromodulators</option>
                            <option value="PRP/PRF Treatments">PRP/PRF Treatments</option>
                            <option value="Laser and Energy Treatments">Laser and Energy Treatments</option>
                            <option value="Plasma Skin Tightening">Plasma Skin Tightening</option>
                            <option value="IPL">IPL</option>
                            <option value="Morpheus8">Morpheus8</option>
                            <option value="Laser Hair Removal ">Laser Hair Removal </option>
                            <option value="Forma">Forma</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Physician Guided Weight Loss Therapy">Physician Guided Weight Loss Therapy</option>
                            <option value="Massage Therapy">Massage Therapy</option>
                            <option value="IV Hydration">IV Hydration</option>
                            <option value="Injectables for Wellness">Injectables for Wellness</option>
                            <option value="Lymphatic Drainage ">Lymphatic Drainage </option>
                            <option value="Life Coaching and Mental Wellness">Life Coaching and Mental Wellness</option>
                            <option value="Skincare">Skincare</option>
                            <option value="Chemical Peels">Chemical Peels</option>
                            <option value="HydraFacials">HydraFacials</option>
                          </select>
                        </span>
                      </div>
                      <div className="input-wrap is-one-third">
                        <span className="select">
                          <select aria-label="How Did You Hear Of Us*" id="HearOfUs" name="HearOfUs" required defaultValue="">
                            <option disabled value="">How Did You Hear of Us?*</option>
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
                          <select aria-label="Best Time To Reach You" id="BestTime" name="BestTime" required defaultValue="">
                            <option disabled value="">Best Time To Reach You*</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                          </select>
                        </span>
                      </div>
                      <div className="input-wrap text is-full">
                        <textarea aria-label="Message" data-hj-whitelist="" id="Message" maxLength={280} name="Message" placeholder="How can we assist your aesthetic needs?" required></textarea>
                      </div>
                      <div className="input-wrap is-full checkbox mb10" style={{ paddingTop: 0 }}>
                        <input aria-label="Yes Opt-in to Text" name="TextOptin" placeholder="Yes Opt-in to Text" type="checkbox" value="Yes Opt-in to Text" />
                        <p className="optin-terms">By checking this box you agree to receive SMS messages from Samsara Aesthetics & Wellness regarding appointments and specials. Standard messaging rates may apply. For more details, read our <Link href="/privacy-policy/">Privacy Policy</Link>.</p>
                      </div>
                      <div className="input-wrap text is-full" style={{ display: 'none' }}>
                        <input aria-hidden="true" aria-label="Zip Code (Do Not Fill Out)" name="ZipCode" placeholder="Zip Code*" type="text" />
                      </div>
                      <div className="input-wrap">
                        <button aria-label="Submit Form" className="button light box-shadow-smooth mb0" type="submit">Submit <img alt="right arrow" src="/assets/img/_defaults/arrow-right-highlight.svg" title="Submit Form" /></button>
                      </div>
                      <div className="input-wrap">
                        <span className="title-sm text-center consult-phone">
                          <a aria-label="Call Samsara Aesthetics & Wellness" className="tel-link" href="tel:(954) 688-7255">(954) 688-7255</a>
                        </span>
                      </div>
                      <input name="gtagevent" type="hidden" value="contact_form" />
                      <input name="LeadSource" type="hidden" value="Organic" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
