"use client";
import React from 'react';
import Link from 'next/link';

export default function Contact() {
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
  <section className="mb30">
    <div className="container">
      <div className="mw1200">
        <div className="text-center mb50">
          <img alt="Contact Samsara Aesthetics & Wellness in Plantation, FL Plantation" className="animate fadeUp mb35" src="/assets/img/icon.svg" />
          <h2 className="title-lg animate fadeIn uppercase" style={{color: '#004438'}}>Contact Us</h2>
        </div>
        <p className="mw800 animate fadeIn">We welcome your inquiries and look forward to assisting you on your
          journey to <em>rejuvenation and holistic wellness</em>. </p>
        <div className="contact-form contact-page mb100 animate fadeIn">
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
                  <option value="Laser and Energy Treatments">Laser and Energy Treatments</option>
                  <option value="Plasma Skin Tightening">Plasma Skin Tightening</option>
                  <option value="IPL">IPL</option>
                  <option value="Morpheus8">Morpheus8</option>
                  <option value="Laser Hair Removal ">Laser Hair Removal </option>
                  <option value="Forma">Forma</option>
                  <option value="Wellness">Wellness</option>
                  <option value="Physician Guided Weight Loss Therapy">Physician Guided Weight Loss
                    Therapy</option>
                  <option value="Massage Therapy">Massage Therapy</option>
                  <option value="IV Hydration">IV Hydration</option>
                  <option value="Injectables for Wellness">Injectables for Wellness</option>
                  <option value="Lymphatic Drainage ">Lymphatic Drainage </option>
                  <option value="Life Coaching and Mental Wellness">Life Coaching and Mental Wellness
                  </option>
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
              <textarea aria-label="Message" data-hj-whitelist id="Message" maxLength={280} name="Message" placeholder="How can we assist your aesthetic needs?" required defaultValue={""} />
            </div>
            <div className="input-wrap is-full checkbox mb10" style={{paddingTop: 0}}>
              <input aria-label="Yes Opt-in to Text" name="TextOptin" placeholder="Yes Opt-in to Text" type="checkbox" defaultValue="Yes Opt-in to Text" />
              <p className="optin-terms">By checking this box you agree to receive SMS messages from Samsara
                Aesthetics &amp; Wellness regarding appointments and specials. Standard messaging rates
                may apply. For more details, read our <a href="/privacy-policy/">Privacy Policy</a>.</p>
            </div>
            <div className="input-wrap text is-full" style={{display: 'none'}}>
              <input aria-hidden="true" aria-label="Zip Code (Do Not Fill Out)" name="ZipCode" placeholder="Zip Code*" type="text" />
            </div>
            <div className="input-wrap">
              <button aria-label="Submit Form" className="button light box-shadow-smooth mb0" type="submit">Submit <img alt="right arrow" src="/assets/img/_defaults/arrow-right-highlight.svg" title="Submit Form" /></button>
            </div>
            <div className="input-wrap">
              <span className="title-sm text-center consult-phone">
                <a aria-label="Call Samsara Aesthetics & Wellness" className="tel-link" href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}>(954)
                  688-7255</a> </span>
            </div>
            <input name="gtagevent" type="hidden" defaultValue="contact_form" />
            <input name="LeadSource" type="hidden" defaultValue="Organic" />
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="mb100">
    <div className="container">
      <div className="mw1200 animate fadeIn">
        <a className="animate fadeIn button" href="/cancellation-policy/">Our Cancellation Policy <img alt="arrow right icon" className="arrow" src="/assets/img/_defaults/arrow-right-white.svg" /></a>
      </div>
    </div>
  </section>
  <section className="mb175">
    <div className="container">
      <div className="mw1200">
        <div className="flexy gap100 mw1500 mb50">
          <div className="flexy-item animate fadeIn">
            <h2 className="title-sm mb30 accent-color">Our Location</h2>
            <div className="columns">
              <div className="column">
                <p>
                  <a aria-label="Samsara Aesthetics & Wellness Plantation Google Business Profile (Opens a new tab)" href="https://www.google.com/maps/place/331+N+University+Dr+m2+800,+Plantation,+FL+33324/@26.1246138,-80.2601013,17z/data=!3m1!4b1!4m5!3m4!1s0x88d907c8814f8a6d:0x690d01024a5d7341!8m2!3d26.124609!4d-80.257521?entry=ttu" rel="noopener" target="_blank"> 331 N. University Dr, Suite M2-800<br />
                    Plantation,
                    FL 33324 </a>
                </p>
                <p className="title-sm mb30 accent-color"><strong>Contact Us</strong></p>
                <p className="mb0">Phone:
                  <a aria-label="Call Samsara Aesthetics & Wellness" className="tel-link" href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}>(954)
                    688-7255</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flexy-item animate fadeIn">
            <h2 className="title-sm mb30 accent-color">Our Hours</h2>
            <p>
              Tue - Fri: 10:00am to 7:00pm<br /> Sat: 10:00am to 4:00pm <br /> Sunday: Closed
            </p>
          </div>
        </div>
        <p className="mw800 animate fadeIn">We value your feedback and questions. Please don't hesitate to get in
          touch with us for any assistance or information you may need. Your journey to rejuvenation starts
          here at <a href="/">Samsara Aesthetics &amp; Wellness in Plantation, FL</a>. </p>
      </div>
    </div>
  </section>
  <section className="mb100">
    <div className="container">
      <div className="mw1200">
        <iframe allowFullScreen aria-label="Google Maps Embed: Samsara Aesthetics & Wellness Plantation Location" className="box-shadow-dark" height={450} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.2124907005573!2d-80.26010128887742!3d26.124613793418458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d907c8814f8a6d%3A0x690d01024a5d7341!2s331%20N%20University%20Dr%20m2%20800%2C%20Plantation%2C%20FL%2033324!5e0!3m2!1sen!2sus!4v1699654084910!5m2!1sen!2sus" style={{border: 0}} width="100%" />
      </div>
    </div>
  </section>
</div>
    </main>
  );
}


