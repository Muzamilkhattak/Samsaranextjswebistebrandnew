"use client";
import React from 'react';
import Link from 'next/link';

export default function ShahmeerAlam() {
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
        <div className="flexy gap100 block-desktop mb100 mb100">
          <div className="flexy-item animate fadeIn">
            <div className="pv75-desktop">
              <p className="title-md  uppercase text-center" style={{color: '#004438'}}>Shahmeer K. Alam Esq</p>
              <h2 className="subhead accent-color animate strikethrough">at Samsara Wellness and Aesthetics
              </h2>
              <p>Meet Shahmeer K. Alam Esq, an experienced attorney whose experience ranges from
                representing clients in complex litigation, criminal defense, and transactional
                drafting. Hailing from the dynamic legal landscape of Florida, with a passion for
                service that is matched only by an unwavering commitment to excellence, Shahmeer Alam
                has proven his mettle in numerous proceedings, displaying an impressive track record of
                successful outcomes. Licensed in the state of Florida, his profound understanding of the
                intricacies of the legal system, coupled with his meticulous attention to detail,
                ensures that clients receive top-tier representation. Beyond the courtroom, Shahmeer
                wears multiple hats, exemplifying his versatility and dedication to <em>holistic
                  well-being</em>. </p>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn min-height-700">
            <img alt="About Shahmeer K. Alam Esq, Executive Director  Plantation" className="top box-shadow-smooth" src="/assets/img/feature/staff/shahmeer-03.jpg" />
          </div>
        </div>
        <p className="animate fadeIn mw800">Holding the distinction of a seasoned lawyer, he harnesses his legal
          acumen to provide insightful guidance to individuals navigating personal and professional
          challenges. This unique blend of legal proficiency and emotional intelligence sets Shahmeer apart as
          a mentor who empowers others to overcome obstacles and achieve their aspirations. In a captivating
          fusion of disciplines, Shahmeer takes on the role of COO for Samsara Aesthetics &amp; Wellness medspa's
          operations. With an innate ability to manage complex tasks and an eye for operational intricacies,
          he ensures that this <a href="/">Plantation, FL Med Spa</a> functions seamlessly, offering clients a
          rejuvenating experience. This multifaceted approach showcases Shahmeer's capacity to seamlessly
          integrate his legal expertise and operational prowess into a harmonious symphony that drives success
          across diverse domains. Whether advocating in the courtroom or meticulously managing
          <strong>medspa</strong> operations, Shahmeer Alam Esq. epitomizes proficiency, empathy, and
          innovation. His journey embodies an unyielding dedication to not only the pursuit of legal
          excellence but also to facilitating positive change in the lives of individuals and businesses
          alike.</p>
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
              <p className="lead accent-color mb20">Learn More About<br /> Samsara Leadership</p>
              <p className="white mw600">Connect with Samsara to understand our practice philosophy, patient
                experience, and commitment to elevated service.</p>
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
