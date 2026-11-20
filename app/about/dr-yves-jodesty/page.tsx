"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

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
              <ScheduleConsultForm />
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
