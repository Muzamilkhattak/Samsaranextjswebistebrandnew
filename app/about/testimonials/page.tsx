"use client";
import React from 'react';
import Link from 'next/link';

export default function Testimonials() {
  React.useEffect(() => {
    const initSwiper = () => {
      if (typeof window !== 'undefined' && (window as any).Swiper) {
        new (window as any).Swiper('.testimonialSwiper', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-testimonial-next',
            prevEl: '.swiper-button-testimonial-prev',
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          speed: 800,
          effect: 'slide',
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
      <style dangerouslySetInnerHTML={{__html: `

		@import url('https://fonts.cdnfonts.com/css/novecento-sans-wide');

		.testimonials-header {
			display: block;
		}

		.testimonials-section {
			padding-top: 180px;
			padding-bottom: 70px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		@media (max-width: 840px) {
			.testimonials-section {
				padding-top: 140px;
				padding-bottom: 40px;
				width: 100%;
				box-sizing: border-box;
				overflow-x: hidden;
			}

			.testimonials-section .container {
				padding-left: 15px !important;
				padding-right: 15px !important;
				max-width: 100% !important;
			}

			.testimonial-heading-wrapper {
				gap: 12px;
				margin-bottom: 25px;
				width: 100%;
			}

			.testimonials-header {
				font-size: 24px !important;
				line-height: 1.2 !important;
			}

			.testimonial-rating-badge {
				padding: 6px 16px;
				gap: 8px;
				max-width: 90%;
			}

			.testimonial-rating-score {
				font-size: 30px;
			}

			.testimonial-reviews-count {
				font-size: 11px;
			}

			.testimonial-card-container {
				padding: 0 !important;
				width: 100% !important;
				max-width: 100% !important;
				overflow: hidden !important;
			}

			.testimonial-card {
				padding: 25px 15px 20px !important;
				border-radius: 10px;
				width: 100% !important;
				box-sizing: border-box !important;
			}

			.testimonial-text {
				font-size: 15px !important;
				line-height: 1.55 !important;
				margin-bottom: 20px;
			}

			.testimonial-author-name {
				font-size: 14px;
			}

			.testimonialSwiper {
				padding: 5px 0 !important;
				width: 100% !important;
			}

			.swiper-button-testimonial-prev,
			.swiper-button-testimonial-next {
				width: 40px;
				height: 40px;
				top: 50% !important;
				bottom: auto !important;
				transform: translateY(-50%) !important;
				z-index: 10;
			}

			.swiper-button-testimonial-prev:hover,
			.swiper-button-testimonial-next:hover {
				transform: translateY(-50%) !important;
			}

			.swiper-button-testimonial-prev {
				left: 10px !important;
			}

			.swiper-button-testimonial-next {
				right: 10px !important;
			}
		}

		.testimonial-heading-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 16px;
			margin-bottom: 40px;
		}

		.testimonial-rating-badge {
			display: inline-flex;
			align-items: center;
			gap: 10px;
			background: #ffffff;
			padding: 8px 22px;
			border-radius: 40px;
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
			border: 1px solid rgba(0, 68, 56, 0.1);
		}

		.testimonial-rating-score {
			font-family: "novecento-sans", "Novecento sans wide", sans-serif;
			font-size: 38px;
			font-weight: 400;
			line-height: 1;
			color: #004438;
		}

		.testimonial-rating-details {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		.testimonial-stars-row {
			display: flex;
			align-items: center;
			gap: 3px;
		}

		.testimonial-stars-row img {
			height: 15px;
			width: auto;
		}

		.testimonial-reviews-count {
			font-size: 12px;
			color: #707073;
			margin-top: 2px;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.06em;
		}

		/* Sleek Card Layout */
		.testimonial-card-container {
			position: relative;
			padding: 0 10px;
		}

		.testimonial-card {
			background: #ffffff;
			border-radius: 12px;
			padding: 45px 50px 40px;
			box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
			border-top: 3px solid #004438;
			border-left: 1px solid rgba(0, 0, 0, 0.06);
			border-right: 1px solid rgba(0, 0, 0, 0.06);
			border-bottom: 1px solid rgba(0, 0, 0, 0.06);
			position: relative;
			text-align: center;
		}

		@media (max-width: 840px) {
			.testimonial-card {
				padding: 30px 20px 25px;
			}
		}

		.testimonial-quote-icon {
			width: 36px;
			height: 36px;
			margin: 0 auto 20px;
			opacity: 0.2;
		}

		.testimonial-text {
			font-size: 19px;
			line-height: 1.7;
			color: #333333;
			font-weight: 300;
			margin-bottom: 28px;
			max-width: 820px;
			margin-left: auto;
			margin-right: auto;
		}

		@media (max-width: 840px) {
			.testimonial-text {
				font-size: 16px;
				line-height: 1.6;
			}
		}

		.testimonial-author-name {
			font-size: 16px;
			font-weight: 700;
			color: #004438;
			letter-spacing: 0.04em;
			text-transform: uppercase;
			margin: 0;
		}

		.testimonial-author-divider {
			width: 30px;
			height: 2px;
			background: #b5a596;
			margin: 12px auto 0;
			border: none;
		}

		/* Swiper Controls Custom Styling */
		.testimonialSwiper {
			overflow: visible !important;
			padding: 10px 0 25px 0;
		}

		.swiper-button-testimonial-prev,
		.swiper-button-testimonial-next {
			width: 44px;
			height: 44px;
			border-radius: 50%;
			background: #ffffff;
			border: 1px solid rgba(0, 68, 56, 0.15);
			box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all 0.3s ease;
			top: 50%;
			transform: translateY(-50%);
		}

		.swiper-button-testimonial-prev:hover,
		.swiper-button-testimonial-next:hover {
			background: #004438;
			border-color: #004438;
		}

		.swiper-button-testimonial-prev:hover img,
		.swiper-button-testimonial-next:hover img {
			filter: brightness(0) invert(1);
		}

		.swiper-button-testimonial-prev {
			left: -20px;
		}

		.swiper-button-testimonial-next {
			right: -20px;
		}
	
      `}} />
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
  <section className="testimonials-section">
    <div className="container">
      <div className="mb50 relative text-center">
        <div className="testimonial-heading-wrapper animate fadeIn">
          <div className="testimonial-rating-badge">
            <span className="testimonial-rating-score">5.0</span>
            <div className="testimonial-rating-details">
              <div className="testimonial-stars-row">
                <img src="/assets/img/_defaults/icon-sharp-stars.png" alt="5 stars rating" />
              </div>
              <span className="testimonial-reviews-count">from 200+ Reviews</span>
            </div>
          </div>
          <h2 className="highlight-color title-lg uppercase testimonials-header">Patient Testimonials</h2>
        </div>
        <div className="mw1000 overflow-hidden testimonial-card-container">
          <div className="swiper testimonialSwiper mb50 animate fadeIn">
            <div className="swiper-wrapper">
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“Love it here super new to the med spa experience
                      but Erika is amazing she listens and makes sure that I’m comfortable. Of
                      course the results are also amazing they have a new customer locked in! Big
                      shout out to Toni as well for being super accommodating and helpful she
                      introduced me to this process and I’m super happy I did it! 10/10”</p>
                    <p className="testimonial-author-name">Melissa Seide</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“I had a wonderful first time experience with a
                      relaxing Hydrofacial And derma plane with Melissa. My experience and welcome
                      From the first time I stepped in the door was amazing. I would highly
                      recommend the secret little gem in Plantation Walk. So professional and you
                      leave glowing and wanting to come back for more.”</p>
                    <p className="testimonial-author-name">Melanie Alston</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“I had a wonderful experience at Samsara Aesthetics
                      and Wellness Center. The space is beautiful, well appointed, and welcoming
                      from the moment you walk in. Everyone on the team was warm, professional,
                      and genuinely friendly.
                      Ericka Laurent was absolutely incredible. With just a little Botox and a
                      little filler, I feel ten years younger and completely refreshed. Her
                      expertise, gentle approach, and eye for natural results made the entire
                      experience comfortable and confidence boosting.
                      I highly recommend visiting Samsara and booking an appointment with Ericka.
                      You will be in excellent hands.”</p>
                    <p className="testimonial-author-name">Alan Cohen</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“The perfect recovery, treatment kickstart my immune system! The staff there was so nice and personable. They made me feel so welcomed. Highly recommend them to anybody looking for treatments in the area! I will definitely be going back.”</p>
                    <p className="testimonial-author-name">Veronika Vernachio</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“Michelle did a hydrofacial and my face looks and feels amazing. Highly recommend.”</p>
                    <p className="testimonial-author-name">N. Fagan</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“Samsara Aesthetics is absolutely beautiful, every detail is thoughtfully done. The space is trendy, modern, and super clean. The staff is amazing from top to bottom and makes you feel comfortable the entire time. u l got a hydrafacial, tried Botox for the first time, and enjoyed the most relaxing massage. I loved everything so much that I decided to invest in my self-care and signed up for the membership and it is totally worth it! My face looks flawless, and I love that the estheticians are actual nurses.<br /><br />Highly recommend! If you stop by, tell the owner Toni that Elisa sent you, she’s the bomb! 💕<br />Thank you Samsara, see you next month! ✨💆🏽‍♀️”</p>
                    <p className="testimonial-author-name">Elisa Dieme-Erlich</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“Maureen, the therapist was super cool. She worked out the knots under the shoulder blades and the kink in my neck. I walked out of there so relaxed.**** Also the hydro facial was much needed. Thank you, Michelle!<br />Made it a spa day!! It was much needed.”</p>
                    <p className="testimonial-author-name">Gilda Burr</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“Highly satisfied and strongly recommend! They listened to all of my concerns and addressed each one individually. Michelle gave me a fantastic Hydrafacial!! 6 stars!”</p>
                    <p className="testimonial-author-name">Kelly Hubbard</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“The HydraFacial with Michelle left my face feeling soothed, smooth, and refreshed, while the massage with Maureen tackled the tight spots all over my body and left me relaxed. Thanks ladies!!”</p>
                    <p className="testimonial-author-name">Emma Gagnon</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“Beautiful clinic and Ericka is an amazing injector! My to go nurse for Botox and much more!”</p>
                    <p className="testimonial-author-name">Martha Castells</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“Today was my first time visiting Samsara and I
                      honestly couldn’t have asked for a better experience. From the moment I
                      walked in everyone was so welcoming, and very knowledgeable. I felt so
                      comfortable, and so happy with my results already. I will definitely be
                      back. Thank you, Samsara!!!”</p>
                    <p className="testimonial-author-name">Emma</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“Beyond grateful to be a part of the Samsara
                      clientele as their focus is on wellness, not just cosmetics (including harsh
                      chemicals thst are traditionally linked to cosmetic service). Care and
                      thought is put into the products they use in addition to the services being
                      done to all clients. Health is priority here!”</p>
                    <p className="testimonial-author-name">Vicky</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“Absolutely delighted with the professionalism
                      behind every esthetician in this business. Great quality of work. I’m so
                      happy with all services I’ve got done and definitely a returning customer!”
                    </p>
                    <p className="testimonial-author-name">Liesl</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center">
                <div className="mw1000">
                  <div className="testimonial-card">
                    <p className="testimonial-text">“I had a great experience. The office is beautiful
                      and the staff very knowledgeable. I got the Forma Face sculpting and it was
                      very calming with no downtime. Win win.👍”</p>
                    <p className="testimonial-author-name">Shaista</p>
                    <hr className="testimonial-author-divider" />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-testimonial-prev">
              <img src="/assets/img/_defaults/arrow-left-testimonial.svg" className="animate fadeIn" alt="Testimonials Plantation" />
            </div>
            <div className="swiper-button-testimonial-next">
              <img src="/assets/img/_defaults/arrow-right-testimonial.svg" className="animate fadeIn" alt="Testimonials Plantation" />
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
              <h2 className="ipj-link mb20 title-md white uppercase" id="ipj-consult" data-ipj="Consultation">
                Your Transformation Begins Here</h2>
              <p className="lead accent-color mb20">Start Your Own<br /> Samsara Experience</p>
              <p className="white mw600">After reading patient stories, schedule a consultation to discuss the
                services that may fit your personal goals.</p>
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
                        <option value disabled >Procedure of Interest*</option>
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
                        <option value disabled >How Did You Hear of Us?*</option>
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
                        <option value disabled >Best Time To Reach You*</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                      </select>
                    </span>
                  </div>
                  <div className="input-wrap text is-full">
                    <textarea id="Message" name="Message" aria-label="Message" data-hj-whitelist placeholder="How can we assist your aesthetic needs?" type="text" maxLength={280} required defaultValue={""} />
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
