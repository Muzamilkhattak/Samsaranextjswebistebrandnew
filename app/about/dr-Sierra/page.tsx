"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function DrSierra() {
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
    <h1 className="animate fadeIn white title-lg uppercase">Sierra Sesler <span className="pt30 block subhead white animate strikethrough">
        Samsara Aesthetics &amp; Wellness </span>
    </h1>
  </div>
  <section className="mb175">
    <div className="container">
      <div className="mw1600">
        <div className="flexy gap100 block-desktop">
          <div className="flexy-item animate fadeIn">
            <div className="pv75-desktop">
              <p className="title-md  uppercase text-center" style={{color: '#004438'}} id="ipj-replace" data-ipj="replace">Sierra Sesler</p>
              <h2 className="subhead accent-color animate strikethrough">at Samsara Wellness and Aesthetics
              </h2>
              <p>With over four years of experience in the medical field, Sierra is dedicated to creating a seamless, elevated experience for every patient. As our Front Desk Coordinator, she combines professionalism, attention to detail, and a passion for aesthetics to ensure each guest feels welcomed, valued, and cared for from the moment they arrive.</p>
              <p>Her commitment to exceptional service helps make every visit both comfortable and memorable.</p>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img className="top box-shadow-smooth" src="/assets/img/team/Sierra.webp" alt="Plantation, FL Med Spa - Sierra Sesler" />
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
