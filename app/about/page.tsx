import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Samsara Aesthetics and Wellness in Plantation | Samsara Aesthetics & Wellness',
  description: 'Samsara Aesthetics & Wellness offers premier Wellness Center services in Plantation, FL. Call (954) 688-7255 today to schedule your appointment today.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="mb225 mt50">
        <div className="container">
          <div className="mw1200">
            {/* Introduction */}
            <div className="text-center mb100 animate fadeIn">
              <img alt="Samsara Aesthetics & Wellness Icon" className="mb35" src="/assets/img/icon.svg" />
              <h2 className="title-md uppercase accent-color mb25">
                True Beauty Begins with <span className="title-lg" style={{ color: '#004438' }}>Balance</span>
              </h2>
              <p className="lead accent-color">Your Journey to Renewed Confidence, Health & Beauty</p>
            </div>
            {/* Main Content */}
            <div className="flexy gap100 block-desktop is-vcentered mb100">
              <div className="flexy-item animate fadeIn">
                <p className="mb25">At Samsara Aesthetics & Wellness, we believe true beauty begins with balance. Our mission is to help every client feel confident, empowered, and renewed through a personalized approach that nurtures both inner wellness and outer beauty.</p>
                <p>Located in Plantation, Florida, Samsara offers a unique blend of <em>advanced aesthetic treatments, wellness therapies, and physician-guided care</em> designed to support your individual goals. From rejuvenating skincare and injectables to body contouring, weight management, and wellness services, every treatment plan is tailored to enhance your natural beauty while promoting long-term health and vitality.</p>
              </div>
              <div className="flexy-item flexy-image animate fadeIn accent-pattern-right">
                <img alt="Samsara Aesthetics & Wellness" className="box-shadow-smooth" src="/assets/img/feature/home/01.jpg" />
              </div>
            </div>
            {/* Philosophy Section */}
            <div className="flexy gap100 block-desktop is-vcentered mb100 flex-reverse">
              <div className="flexy-item flexy-image animate fadeIn accent-pattern-left">
                <img alt="Our Team at Samsara" className="box-shadow-smooth" src="/assets/img/feature/home/02.jpg" />
              </div>
              <div className="flexy-item animate fadeIn">
                <h3 className="title-sm uppercase accent-color mb25">Our Commitment to <span className="title-green-bg">Exceptional Care</span></h3>
                <p className="mb25">Our experienced team of medical, aesthetic, and wellness professionals is dedicated to providing exceptional care in a welcoming and relaxing environment. We take the time to understand your concerns, educate you on your options, and create customized solutions that align with your lifestyle and aspirations.</p>
                <p>The name <strong>&quot;Samsara&quot;</strong> represents transformation and renewal. We embrace this philosophy by helping our clients move forward with confidence, restoring not only their appearance but also their sense of well-being.</p>
              </div>
            </div>
            {/* Approach Section */}
            <div className="text-center animate fadeIn pv75 bg-image" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)', borderRadius: '15px' } as React.CSSProperties}>
              <div className="mw900 margin-auto ph50">
                <h3 className="title-md uppercase white mb35">Through Innovation & <span className="title-green-bg white">Holistic Care</span></h3>
                <p className="white mb25">Through innovative technology, holistic care, and a patient-first approach, we are committed to helping you become the best version of yourself.</p>
                <p className="white">Whether you are seeking aesthetic enhancements, wellness support, or a complete self-care experience, <strong>Samsara Aesthetics & Wellness is here to guide you on your journey to renewed confidence, health, and beauty</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb175 padding-index">
        <div className="container">
          <div className="mw1500">
            <div className="cascade-wrapper">
              <div className="cascade is-2 is-grid is-flexend is-collapsed-mobile">
                <Link className="animate fadeIn" href="/about/meet-the-staff/">
                  <h2 className="title-sm text-center mb20 highlight-color">Meet the Staff</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
                <Link className="animate fadeIn" href="/about/our-office/">
                  <h2 className="title-sm text-center mb20 highlight-color">Our Office</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
                <Link className="animate fadeIn" href="/about/payment-plans/">
                  <h2 className="title-sm text-center mb20 highlight-color">Payment Plans</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
                <Link className="animate fadeIn" href="/about/vip-membership/">
                  <h2 className="title-sm text-center mb20 highlight-color">VIP Membership</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
                <Link className="animate fadeIn" href="/about/testimonials/">
                  <h2 className="title-sm text-center mb20 highlight-color">Testimonials</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
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
                  <p className="lead accent-color mb20">Plan Your Visit<br /> With Samsara</p>
                  <p className="white mw600">Meet a Plantation team focused on elevated care, thoughtful recommendations, and a medspa experience built around renewal.</p>
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
