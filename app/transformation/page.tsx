"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';


export default function TransformationPage() {
  useEffect(() => {
    document.title = "See Your Transformation | Samsara Aesthetics & Wellness";

    // Load Ageless embed loader script
    const existingScript = document.querySelector('script[src="https://www.ageless.ai/embed/v1/loader.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.ageless.ai/embed/v1/loader.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main>
      <div>
        <div className="mobile-cta">
          <a
            aria-label="Call Samsara Aesthetics & Wellness on the phone today"
            href="tel:(954) 688-7255"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'phone_number_click');
              }
            }}
          >
            (954) 688-7255
          </a>
          <Link href="/contact/"> Appointment</Link>
        </div>
        <div className="overlay" />
        <div className="modal">
          <div className="modal-background" />
          <div className="modal-content" />
          <button aria-label="close" className="modal-close is-large" />
        </div>

        {/* Transformation Experience Section */}
        <section className="mb175" style={{ minHeight: '80vh', paddingTop: '150px' }}>
          <div className="container">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div className="text-center mb50">
                <h1 className="title-md uppercase mb15" style={{ color: '#004438' }}>
                  Aesthetics + Wellness Experience
                </h1>
                <p className="lead" style={{ fontSize: '1.1rem', color: '#004438' }}>
                  Explore face and body treatments
                </p>
              </div>

              {/* Ageless — See Your Results */}
              <ageless-embed-launcher
                data-ageless-url="https://www.ageless.ai/embed/platforms/0b2d02eb-d002-470f-a56e-94e482f8dcad/a/samsaramedspa/transformation?utm_source=website_embed&utm_medium=embed"
                data-ageless-mode="dedicated"
                style={{ display: 'block', width: '100%', minHeight: '600px' }}
              />
              <Script src="https://www.ageless.ai/embed/v1/loader.js" strategy="afterInteractive" />
            </div>
          </div>
        </section>

        {/* Consultation Section */}
        <section
          className="pv75 bg-image animate zoomOutBg"
          style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)' } as React.CSSProperties}
        >
          <div className="container ps75">
            <div className="mw1600">
              <div className="inline-schedule-consult">
                <div className="flexy gap100 block-desktop is-vcentered">
                  <div className="flexy-item animate fadeIn text-center">
                    <h2 className="ipj-link mb20 title-md white uppercase" id="ipj-consult" data-ipj="Consultation">
                      Your Transformation Begins Here
                    </h2>
                    <p className="lead accent-color mb20">
                      Begin Your Samsara<br /> Consultation in Plantation
                    </p>
                    <p className="white mw600">
                      Reawaken your best self with a personalized plan that connects aesthetics, wellness, and long-term confidence.
                    </p>
                  </div>
                  <div className="flexy-item animate fadeIn">
                    <div className="contact-form">
                      <form
                        noValidate
                        action="https://formspree.io/f/mldenkyz"
                        method="POST"
                        className="form"
                        name="contactForm"
                        aria-label="Contact Form"
                      >
                        <div className="input-wrap text is-one-third">
                          <input
                            name="FullName"
                            aria-label="Full Name"
                            placeholder="Full Name*"
                            type="text"
                            aria-required="true"
                            required
                          />
                        </div>
                        <div className="input-wrap text is-one-third">
                          <input
                            pattern="[\+]?[0-9]{0,2}[\-\s\.]?[\(]?[0-9]{3}[\)]?[\-\s\.]?[0-9]{3}[\-\s\.]?[0-9]{4,6}"
                            name="Phone"
                            aria-label="Phone Number"
                            placeholder="Phone Number*"
                            type="tel"
                            aria-required="true"
                            required
                          />
                        </div>
                        <div className="input-wrap text is-one-third">
                          <input
                            name="Email"
                            aria-label="Email Address"
                            placeholder="Email Address*"
                            type="email"
                            aria-required="true"
                            required
                          />
                        </div>
                        <div className="input-wrap is-one-third">
                          <span className="select">
                            <select
                              id="Schedule"
                              name="ProcedureOfInterest"
                              aria-label="Procedure of Interest"
                              aria-required="true"
                              required
                              defaultValue=""
                            >
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
                            <select
                              id="HearOfUs"
                              name="HearOfUs"
                              aria-label="How Did You Hear Of Us*"
                              required
                              defaultValue=""
                            >
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
                            <select
                              id="BestTime"
                              name="BestTime"
                              aria-label="Best Time To Reach You"
                              required
                              defaultValue=""
                            >
                              <option disabled value="">Best Time To Reach You*</option>
                              <option value="Morning">Morning</option>
                              <option value="Afternoon">Afternoon</option>
                            </select>
                          </span>
                        </div>
                        <div className="input-wrap text is-full">
                          <textarea
                            id="Message"
                            name="Message"
                            maxLength={280}
                            placeholder="How can we assist your aesthetic needs?"
                            aria-label="Message"
                            required
                            defaultValue=""
                          />
                        </div>
                        <div className="input-wrap is-full checkbox mb10" style={{ paddingTop: 0 }}>
                          <input
                            name="TextOptin"
                            placeholder="Yes Opt-in to Text"
                            type="checkbox"
                            defaultValue="Yes Opt-in to Text"
                            aria-label="Yes Opt-in to Text"
                          />
                          <p className="optin-terms">
                            By checking this box you agree to receive SMS messages from Samsara Aesthetics &amp; Wellness regarding appointments and specials. Standard messaging rates may apply. For more details, read our <Link href="/privacy-policy/">Privacy Policy</Link>.
                          </p>
                        </div>
                        <div className="input-wrap text is-full" style={{ display: 'none' }}>
                          <input
                            name="ZipCode"
                            placeholder="Zip Code*"
                            type="text"
                            aria-hidden="true"
                            aria-label="Zip Code (Do Not Fill Out)"
                          />
                        </div>
                        <div className="input-wrap">
                          <button
                            type="submit"
                            className="button light box-shadow-smooth mb0"
                            aria-label="Submit Form"
                          >
                            Submit <img src="/assets/img/_defaults/arrow-right-highlight.svg" alt="right arrow" title="Submit Form" />
                          </button>
                        </div>
                        <div className="input-wrap">
                          <span className="title-sm text-center consult-phone">
                            <a
                              className="tel-link"
                              href="tel:(954) 688-7255"
                              onClick={() => {
                                if (typeof window !== 'undefined' && (window as any).gtag) {
                                  (window as any).gtag('event', 'phone_number_click');
                                }
                              }}
                              aria-label="Call Samsara Aesthetics & Wellness"
                            >
                              (954) 688-7255
                            </a>
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
