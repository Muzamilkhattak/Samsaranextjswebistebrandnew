"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function MeetTheStaff() {
  useEffect(() => {
    // Dynamically load swiper if not available
    const initSwiper = () => {
      if (typeof window !== 'undefined' && (window as any).Swiper) {
        new (window as any).Swiper('.staff-swiper', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: true,
          },
          speed: 600,
          effect: 'slide',
          watchSlidesProgress: true,
          watchSlidesVisibility: true,
          preloadImages: true,
          updateOnImagesReady: true,
        });
      }
    };

    if (!(window as any).Swiper) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js';
      script.onload = initSwiper;
      document.body.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css';
      document.head.appendChild(link);
    } else {
      initSwiper();
    }
  }, []);

  return (
    <main>

      <div className="masthead__image animate fadeIn box-shadow-smooth bg-image bg-top bg-position-widescreen" style={{ '--bgImage': 'url(/assets/img/masthead/about/02.jpg)', '--bgPosition': '50% 50%' } as React.CSSProperties}>
      </div>
      <div className="masthead__content text-center pb35-tablet">
        <h1 className="animate fadeIn white title-lg uppercase">Meet the Samsara Aesthetics<br /> & Wellness staff <span className="pt30 block subhead white animate strikethrough">in Plantation, FL</span>
        </h1>
      </div>


      <section className="mb175">
        <div className="container">
          <div className="text-center mb50">
            <img className="animate fadeUp mb35" src="/assets/img/icon.svg" alt="Meet the team at Samsara Aesthetics & Wellness in Plantation, FL Plantation" />
            <h2 className="title-lg animate fadeIn uppercase" style={{ color: '#004438' }}>Meet the Team</h2>
          </div>
          <p className="mw800 animate fadeIn">Our staff is led by <Link href="/about/dr-yves-jodesty/">Dr. Yves M. Jodesty Jr</Link> who is committed to holistic well-being and aesthetic enhancement. With years of experience, expertise, and a genuine passion for patient care, our staff is here to guide you on your journey to rejuvenation. </p>
          <p className="mw800 animate fadeIn">Dr. Yves M. Jodesty Jr. brings a wealth of medical knowledge and artistic sensibility to every treatment, ensuring you receive personalized care that addresses your unique needs. Our entire staff is dedicated to providing compassionate and comprehensive services, from <Link href="/">aesthetic treatments to wellness solutions in Plantation, FL</Link>, all in the serene environment of Samsara Aesthetics & Wellness. Discover the harmony of beauty and wellness with our dedicated team. </p>
        </div>
      </section>

      <section className="mb175">
        <div className="container">
          <h2 className="title-lg animate fadeIn uppercase text-center" style={{ color: '#004438' }}>Meet the Founders</h2>
          <div className="flexy is-multiline equal-height flexy-pad">
            <div className="flexy-item animate fadeIn no-delay is-4 is-6-widescreen">
              <div className="card no-pad">
                <Link href="/about/dr-yves-jodesty/">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/feature/staff/dr-yves-jodesty-02.jpg" alt="Meet the team at Samsara Aesthetics & Wellness in Plantation, FL Plantation" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Dr. Yves M. Jodesty Jr. <br />Chief Medical Officer</h3>
                    <div className="text-center mb25">
                      <span className="button transparent uppercase animate fadeIn">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flexy-item animate fadeIn no-delay is-4 is-6-widescreen">
              <div className="card no-pad">
                <Link href="/about/shahmeer-alam/">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/feature/staff/shahmeer-03.jpg" alt="Meet the team at Samsara Aesthetics & Wellness in Plantation, FL Plantation" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Shahmeer K. Alam Esq <br />Chief Operational Officer.</h3>
                    <div className="text-center mb25">
                      <span className="button transparent uppercase animate fadeIn">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Staff Section with Auto-Sliding Carousel */}
      <section className="mb175">
        <div className="container">
          <h2 className="title-lg animate fadeIn uppercase text-center" style={{ color: '#004438' }}>Our Staff</h2>

          {/* Desktop Slider */}
          <div className="swiper-container staff-swiper is-hidden-touch" style={{ overflow: 'hidden', marginTop: '30px' }}>
            <div className="swiper-wrapper">
              {/* Slide 1 - First 3 Staff Members */}
              <div className="swiper-slide" style={{ height: 'auto', opacity: 1 }}>
                <div className="flexy is-multiline equal-height flexy-pad">
                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Toni.webp" alt="Toni - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Toni Maguire <br />Practice Manager / Marketing Director.</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/dr-tonimaguire/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Erica.webp" alt="Erica - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Ericka Laurent <br />Nurse Practitioner</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/dr-erika/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Mark.webp" alt="Mark Jodesty - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Mark Jodesty <br />Operations</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/mark-jodesty/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - Next 3 Staff Members */}
              <div className="swiper-slide" style={{ height: 'auto', opacity: 1 }}>
                <div className="flexy is-multiline equal-height flexy-pad">
                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Michelle.webp" alt="Michelle - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Michelle Rzepka <br />Registered Nurse and Esthetician</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/dr-Michelle/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Sierra.webp" alt="Sierra - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Sierra Sesler <br />Front Desk Coordinator</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/dr-Sierra/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Maureen.png" alt="Maureen Murphy - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Maureen Murphy <br />Massage Therapist</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/maureen-murphy/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Stack */}
          <div className="is-hidden-desktop staff-mobile-grid" style={{ marginTop: '30px' }}>
            <div className="flexy is-multiline equal-height flexy-pad">
              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Toni.webp" alt="Toni - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Toni Maguire <br />Office Manager - Marketing Director</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/dr-tonimaguire/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Erica.webp" alt="Erica - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Ericka Laurent <br />Nurse Practitioner</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/dr-erika/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Mark.webp" alt="Mark Jodesty - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Mark Jodesty <br />Operations</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/mark-jodesty/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Michelle.webp" alt="Michelle - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Michelle Rzepka <br />Registered Nurse and Esthetician</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/dr-Michelle/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Sierra.webp" alt="Sierra - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Sierra Sessler <br />Front Desk Coordinator</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/dr-Sierra/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Maureen.png" alt="Maureen Murphy - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Maureen Murphy <br />Massage Therapist</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/maureen-murphy/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
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
                  <h2 className="ipj-link mb20 title-md white uppercase" id="ipj-consult" data-ipj="Consultation">Your Transformation Begins Here</h2>
                  <p className="lead accent-color mb20">Connect With the<br /> Samsara Care Team</p>
                  <p className="white mw600">Our staff can help you choose services, understand treatment timing, and feel prepared before your Plantation visit.</p>
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
                          <select id="Schedule" name="ProcedureOfInterest" aria-label="Procedure of Interest" aria-required="true" required defaultValue="">
                            <option value="" disabled>Procedure of Interest*</option>
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
                          <select id="HearOfUs" name="HearOfUs" aria-label="How Did You Hear Of Us*" required defaultValue="">
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
                          <select id="BestTime" name="BestTime" aria-label="Best Time To Reach You" required defaultValue="">
                            <option value="" disabled>Best Time To Reach You*</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                          </select>
                        </span>
                      </div>
                      <div className="input-wrap text is-full">
                        <textarea id="Message" name="Message" aria-label="Message" data-hj-whitelist placeholder="How can we assist your aesthetic needs?" maxLength={280} required></textarea>
                      </div>

                      <div className="input-wrap is-full checkbox mb10" style={{ paddingTop: 0 }}>
                        <input name="TextOptin" aria-label="Yes Opt-in to Text" placeholder="Yes Opt-in to Text" type="checkbox" value="Yes Opt-in to Text" />
                        <p className="optin-terms">By checking this box you agree to receive SMS messages from Samsara Aesthetics & Wellness regarding appointments and specials. Standard messaging rates may apply. For more details, read our <Link href="/privacy-policy/">Privacy Policy</Link>.</p>
                      </div>

                      <div className="input-wrap text is-full" style={{ display: 'none' }}>
                        <input name="ZipCode" aria-label="Zip Code (Do Not Fill Out)" aria-hidden="true" placeholder="Zip Code*" type="text" />
                      </div>
                      <div className="input-wrap">
                        <button type="submit" aria-label="Submit Form" className="button light box-shadow-smooth mb0">Submit <img src="/assets/img/_defaults/arrow-right-highlight.svg" title="Submit Form" alt="right arrow" /></button>
                      </div>
                      <div className="input-wrap">
                        <span className="title-sm text-center consult-phone">
                          <a className="tel-link" href="tel:(954) 688-7255" aria-label="Call Samsara Aesthetics & Wellness">(954) 688-7255</a>
                        </span>
                      </div>
                      <input type="hidden" name="gtagevent" value="contact_form" />
                      <input type='hidden' name='LeadSource' value='Organic' />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 1024px) {
          .is-hidden-touch { display: none !important; }
          .is-hidden-desktop { display: block !important; }
        }
        @media (min-width: 1025px) {
          .is-hidden-touch { display: block !important; }
          .is-hidden-desktop { display: none !important; }
        }
      `}} />
    </main>
  );
}
