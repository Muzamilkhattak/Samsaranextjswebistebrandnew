"use client";
import React from 'react';
import Link from 'next/link';

export default function DrToniMaguire() {
  return (
    <main>
      <div>
  <div className="mobile-cta">
    <a href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }} aria-label="Call Samsara Aesthetics & Wellness on the phone today">(954) 688-7255</a>
    <a href="/contact/"> Appointment</a>
  </div>
  <div className="overlay">
  </div>
  <div className="modal">
    <div className="modal-background" />
    <div className="modal-content">
    </div>
    <button className="modal-close is-large" aria-label="close" />
  </div>
  <div className="masthead__content text-center pb35-tablet">
    <h1 className="animate fadeIn white title-lg uppercase">Toni Maguire <span className="pt30 block subhead white animate strikethrough">
        Samsara Aesthetics &amp; Wellness </span>
    </h1>
  </div>
  <section className="mb175">
    <div className="container">
      <div className="mw1600">
        <div className="flexy gap100 block-desktop">
          <div className="flexy-item animate fadeIn">
            <div className="pv75-desktop">
              <p className="title-md  uppercase text-center" style={{color: '#004438'}} id="ipj-replace" data-ipj="replace">Toni Maguire</p>
              <h2 className="subhead accent-color animate strikethrough">Practice Manager &amp; Marketing Director</h2>
              <p>For Toni Maguire, a love for the medical field has always been there, but over the years, that passion grew into something more. She found herself drawn to the world of aesthetics and wellness—not only for the treatments themselves, but for the confidence, connection, and transformation they can bring to people.</p>
              <p>As Practice Manager and Marketing Director at Samsara Aesthetics &amp; Wellness, Toni has found a way to combine everything she loves: healthcare, aesthetics, creativity, leadership, and connecting with people. From helping shape the patient experience to growing the Samsara brand, she pours her heart into creating a space that feels welcoming, elevated, and personal.</p>
              <p>For Toni, the most rewarding part is simple—watching people walk through the doors and leave feeling like the best version of themselves.</p>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img className="top box-shadow-smooth" src="/assets/img/team/Toni.webp" alt="Plantation, FL Med Spa - Toni Maguire" />
          </div>
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
              <h2 className="ipj-link mb20 title-md white uppercase" id="ipj-consult" data-ipj="Consultation">
                Your Transformation Begins Here</h2>
              <p className="lead accent-color mb20">Schedule With Our<br /> Medical Wellness Team</p>
              <p className="white mw600">Explore physician-led guidance for treatments that support your
                appearance, confidence, and overall sense of well-being.</p>
            </div>
            <div className="flexy-item animate fadeIn">
              <div className="contact-form">
                <form noValidate action="https://formspree.io/f/mldenkyz" method="POST" className="form" name="contactForm" aria-label="Contact Form">
                  <div className="input-wrap text is-one-third">
                    <input name="FullName" aria-label="Full Name" placeholder="Full Name*" type="text" aria-required="true" required />
                  </div>
                  <div className="input-wrap text is-one-third">
                    <input pattern="[\+]?[0-9]{0,2}[\-\s\.]?[\(]?[0-9]{3}[\)]?[\-\s\.]?[0-9]{3}[\-\s\.]?[0-9]{4,6}" name="Phone" aria-label="Phone Number" placeholder="Phone Number*" type="tel" aria-required="true" required />
                  </div>
                  <div className="input-wrap text is-one-third">
                    <input name="Email" aria-label="Email Address" placeholder="Email Address*" type="email" aria-required="true" required />
                  </div>
                  <div className="input-wrap is-one-third">
                    <span className="select">
                      <select  id="Schedule" name="ProcedureOfInterest" aria-label="Procedure of Interest" aria-required="true" required defaultValue="">
                        <option value="" disabled>Procedure of Interest*</option>
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
                      <select  id="HearOfUs" name="HearOfUs" aria-label="How Did You Hear Of Us*" required defaultValue="">
                        <option value="" disabled>How Did You Hear of Us?*</option>
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
                      <select  id="BestTime" name="BestTime" aria-label="Best Time To Reach You" required defaultValue="">
                        <option value="" disabled>Best Time To Reach You*</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                      </select>
                    </span>
                  </div>
                  <div className="input-wrap text is-full">
                    <textarea id="Message" name="Message" aria-label="Message" data-hj-whitelist placeholder="How can we assist your aesthetic needs?"  maxLength={280} required defaultValue={""} />
                  </div>
                  <div className="input-wrap is-full checkbox mb10" style={{paddingTop: 0}}>
                    <input name="TextOptin" aria-label="Yes Opt-in to Text" placeholder="Yes Opt-in to Text" type="checkbox" defaultValue="Yes Opt-in to Text" />
                    <p className="optin-terms">By checking this box you agree to receive SMS messages
                      from Samsara Aesthetics &amp; Wellness regarding appointments and specials.
                      Standard messaging rates may apply. For more details, read our <a href="/privacy-policy/">Privacy Policy</a>.</p>
                  </div>
                  <div className="input-wrap text is-full" style={{display: 'none'}}>
                    <input name="ZipCode" aria-label="Zip Code (Do Not Fill Out)" aria-hidden="true" placeholder="Zip Code*" type="text" />
                  </div>
                  <div className="input-wrap">
                    <button type="submit" aria-label="Submit Form" className="button light box-shadow-smooth mb0">Submit <img src="/assets/img/_defaults/arrow-right-highlight.svg" title="Submit Form" alt="right arrow" /></button>
                  </div>
                  <div className="input-wrap">
                    <span className="title-sm text-center consult-phone">
                      <a className="tel-link" href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }} aria-label="Call Samsara Aesthetics & Wellness">(954) 688-7255</a>
                    </span>
                  </div>
                  <input type="hidden" name="gtagevent" defaultValue="contact_form" />
                  <input type="hidden" name="LeadSource" defaultValue="Organic" />
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
