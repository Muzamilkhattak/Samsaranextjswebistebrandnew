"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function DrToniMaguire() {
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
    <h1 className="animate fadeIn white title-lg uppercase">Toni Maguire <span className="pt30 block subhead white animate strikethrough">
        Samsara Aesthetics &amp; Wellness </span>
    </h1>
  </div>
  <section className="mb175">
    <div className="container">
      <div className="mw1600">
        <div className="flexy gap100 block-desktop">
          <div className="flexy-item animate fadeIn">
            <div className="pv75-desktop">
              <p className="title-md  uppercase text-center" style={{color: '#004438'}} id="ipj-replace" data-ipj="replace">Toni Maguire</p>
              <h2 className="subhead accent-color animate strikethrough">Practice Manager &amp; Marketing Director</h2>
              <p>For Toni Maguire, a love for the medical field has always been there, but over the years, that passion grew into something more. She found herself drawn to the world of aesthetics and wellness—not only for the treatments themselves, but for the confidence, connection, and transformation they can bring to people.</p>
              <p>As Practice Manager and Marketing Director at Samsara Aesthetics &amp; Wellness, Toni has found a way to combine everything she loves: healthcare, aesthetics, creativity, leadership, and connecting with people. From helping shape the patient experience to growing the Samsara brand, she pours her heart into creating a space that feels welcoming, elevated, and personal.</p>
              <p>For Toni, the most rewarding part is simple—watching people walk through the doors and leave feeling like the best version of themselves.</p>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img className="top box-shadow-smooth" src="/assets/img/team/Toni.webp" alt="Plantation, FL Med Spa - Toni Maguire" />
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
