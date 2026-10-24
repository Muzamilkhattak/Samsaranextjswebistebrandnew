"use client";
import React from 'react';
import Link from 'next/link';

export default function DrYvesJodesty() {
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
  <section className="mb175" style={{marginTop: 180}}>
    <div className="container">
      <div className="mw1600">
        <div className="flexy gap100 block-desktop">
          <div className="flexy-item animate fadeIn">
            <div className="pv75-desktop">
              <p className="title-md  uppercase text-center" style={{color: '#004438'}} data-ipj="replace" id="ipj-replace">Yves M. Jodesty Jr., MD</p>
              <h2 className="subhead accent-color animate strikethrough">at Samsara Wellness and Aesthetics</h2>
              <p>Yves M. Jodesty Jr., MD is a distinguished <em>board-certified internal medicine and aesthetic physician</em> renowned for his unwavering dedication to integrative health care, unparalleled expertise, and artistic approach to <a href="/">aesthetic medicine in Plantation, FL</a>. With a profound passion for medicine and a keen eye for beauty, Dr. Jodesty Jr. has seamlessly merged his expertise in internal medicine with his artistic sensibilities, creating a unique and comprehensive approach to patient care. </p>
              <p>His extensive training and hands-on experience have equipped him with a deep understanding of the latest advancements in <strong>non-surgical rejuvenation</strong> techniques. Driven by a commitment to personalized care, he takes the time to truly listen to his patients’ desires and concerns, tailoring each treatment plan to achieve exquisite, harmonious results. Whether guiding patients toward optimal wellness or revitalizing their confidence through advanced cosmetic techniques, Dr. Jodesty Jr. stands as a beacon of innovation and excellence in aesthetics. </p>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img alt="Plantation, FL Med Spa physician, Dr. Yves Jodesty" className="top box-shadow-smooth" src="/assets/img/feature/staff/dr-yves-jodesty-02.jpg" />
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
              <h2 className="ipj-link mb20 title-md white uppercase" data-ipj="Consultation" id="ipj-consult">Your Transformation Begins Here</h2>
              <p className="lead accent-color mb20">Schedule With Our<br /> Medical Wellness Team</p>
              <p className="white mw600">Explore physician-led guidance for treatments that support your appearance, confidence, and overall sense of well-being.</p>
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
                    <textarea aria-label="Message" data-hj-whitelist id="Message" maxLength={280} name="Message" placeholder="How can we assist your aesthetic needs?" required  defaultValue={""} />
                  </div>
                  <div className="input-wrap is-full checkbox mb10" style={{paddingTop: 0}}>
                    <input aria-label="Yes Opt-in to Text" name="TextOptin" placeholder="Yes Opt-in to Text" type="checkbox" defaultValue="Yes Opt-in to Text" />
                    <p className="optin-terms">By checking this box you agree to receive SMS messages from Samsara Aesthetics &amp; Wellness regarding appointments and specials. Standard messaging rates may apply. For more details, read our <a href="/privacy-policy/">Privacy Policy</a>.</p>
                  </div>
                  <div className="input-wrap text is-full" style={{display: 'none'}}>
                    <input aria-hidden="true" aria-label="Zip Code (Do Not Fill Out)" name="ZipCode" placeholder="Zip Code*" type="text" />
                  </div>
                  <div className="input-wrap">
                    <button aria-label="Submit Form" className="button light box-shadow-smooth mb0" type="submit">Submit <img alt="right arrow" src="/assets/img/_defaults/arrow-right-highlight.svg" title="Submit Form" /></button>
                  </div>
                  <div className="input-wrap">
                    <span className="title-sm text-center consult-phone">
                      <a aria-label="Call Samsara Aesthetics & Wellness" className="tel-link" href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}>(954) 688-7255</a> </span>
                  </div>
                  <input name="gtagevent" type="hidden" defaultValue="contact_form" />
                  <input name="LeadSource" type="hidden" defaultValue="Organic" /></form>
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
