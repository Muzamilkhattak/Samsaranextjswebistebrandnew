"use client";
import React from 'react';
import Link from 'next/link';

export default function CancellationPolicy() {
  return (
    <main>
      <div>
        <div className="mobile-cta">
          <a aria-label="Call Samsara Aesthetics & Wellness on the phone today" href="tel:(954) 688-7255" onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}>(954) 688-7255</a>
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

        <div className="masthead__image animate fadeIn box-shadow-smooth bg-image bg-top bg-position-widescreen" style={{ '--bgImage': 'url(/assets/img/masthead/about/05.jpg)', '--bgPosition': '50% 50%' } as React.CSSProperties}>
        </div>
        <div className="masthead__content text-center pb35-tablet">
          <h1 className="animate fadeIn white title-lg uppercase">Our Cancellation Policy <span className="pt30 block subhead white animate strikethrough">
            Samsara Aesthetics &amp; Wellness			</span>
          </h1>
        </div>
        <section className="mb200">
          <div className="container">
            <div className="mw1200">
              <p className="lead">Appointment Cancellation Policy:</p>
              <p>At <a href="/">Samsara Aesthetics &amp; Wellness in Plantation, FL</a>, we strive to provide exceptional care and services to all our patients. To ensure efficient operations and fair access to our treatments, we kindly request adherence to our appointment <strong>cancellation policy</strong> as detailed below:</p>
              <ol className="mb30">
                <li>Patients must cancel or reschedule appointments at least 24 hours in advance. This allows us to manage our schedule and accommodate other patients waiting for services. </li>
                <li>Please contact us via phone, email or through our online booking platform to cancel or reschedule your appointment.</li>
                <li>Cancellations made less than 24 hours before the scheduled appointment may incur a fee of $50.</li>
                <li>No call/no-shows may incur a fee of $100.</li>
                <li>We understand that emergencies happen. If you cancel within 24 hours, no call, or no show due to an unforeseen event, please inform us as soon as possible. Exceptions will be considered on a case-by-case basis, and documentation may be required. </li>
                <li>Patients arriving more than 10 minutes past the original scheduled time may have their service time reduced or appointment rescheduled, incurring a late arrival rescheduling fee of $25.</li>
                <li>As a gesture of goodwill, we offer a one-time courtesy waiver of the cancellation fee or late arrival rescheduling fee for the first missed late-cancelled appointment. </li>
                <li>Cancellation fees are non-refundable. In certain circumstances, at the discretion of management, fees may be applied as a credit towards future services. </li>
              </ol>
              <p className="mb10 lead">Acknowledgement: </p>
              <p className="mb10">By booking an appointment, patients acknowledge and agree to our cancellation policy. We appreciate your understanding and cooperation in ensuring a smooth and efficient experience for all our valued patients.</p>
              <p className="mb50">Thank you for choosing Samsara Aesthetics &amp; Wellness for your <strong>medial aesthetics and wellness</strong> needs. We look forward to serving you. </p>
              <p className="mb10 lead">Refund Policy:</p>
              <ol className="mb30">
                <li>At Samsara Aesthetics &amp; Wellness, we pride ourselves on the excellence of our services. If you are dissatisfied with any treatment received, we encourage you to contact us within 72 hours of your appointment. Our team is committed to addressing your concerns and will offer a corrective service or treatment adjustment as deemed appropriate. Please note, we do not offer refunds for services rendered but are dedicated to ensuring your satisfaction with our solutions. </li>
                <li>Unopened and unused products may be returned within 7 days of purchase for a full refund or exchange, with a valid receipt. </li>
                <li>Due to health regulations, certain products may not be returnable. These exceptions will be clearly noted at the time of purchase. </li>
                <li>If you choose to cancel a prepaid service or package before any of the services have been used, we will refund the purchase price.</li>
              </ol>
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
                    <p className="lead accent-color mb20">Have Questions<br /> Before Booking?</p>
                    <p className="white mw600">Review our appointment policy, then contact Samsara if you need help preparing for or adjusting your visit.</p>
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
                          <textarea aria-label="Message" data-hj-whitelist id="Message" maxLength={280} name="Message" placeholder="How can we assist your aesthetic needs?" required type="text" defaultValue={""} />
                        </div>
                        <div className="input-wrap is-full checkbox mb10" style={{ paddingTop: 0 }}>
                          <input aria-label="Yes Opt-in to Text" name="TextOptin" placeholder="Yes Opt-in to Text" type="checkbox" defaultValue="Yes Opt-in to Text" />
                          <p className="optin-terms">By checking this box you agree to receive SMS messages from Samsara Aesthetics &amp; Wellness regarding appointments and specials. Standard messaging rates may apply. For more details, read our <a href="/privacy-policy/">Privacy Policy</a>.</p>
                        </div>
                        <div className="input-wrap text is-full" style={{ display: 'none' }}>
                          <input aria-hidden="true" aria-label="Zip Code (Do Not Fill Out)" name="ZipCode" placeholder="Zip Code*" type="text" />
                        </div>
                        <div className="input-wrap">
                          <button aria-label="Submit Form" className="button light box-shadow-smooth mb0" type="submit">Submit <img alt="right arrow" src="/assets/img/_defaults/arrow-right-highlight.svg" title="Submit Form" /></button>
                        </div>
                        <div className="input-wrap">
                          <span className="title-sm text-center consult-phone">
                            <a aria-label="Call Samsara Aesthetics & Wellness" className="tel-link" href="tel:(954) 688-7255" onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}>(954) 688-7255</a> </span>
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

