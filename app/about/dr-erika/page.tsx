"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function DrErika() {
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
  <section className="mb175">
    <div className="container">
      <div className="mw1600">
        <div className="flexy gap100 block-desktop">
          <div className="flexy-item animate fadeIn">
            <div className="pv75-desktop">
              <p className="title-md  uppercase text-center" style={{color: '#004438'}} id="ipj-replace" data-ipj="replace">Ericka</p>
              <h2 className="subhead accent-color animate strikethrough">at Samsara Wellness and Aesthetics
              </h2>
              <p>I am a licensed esthetician and RN with a passion for skincare, beauty, and wellness.
                With four years of experience in the industry I have switched careers from a Teacher and
                Flight Attendant so I can work with individuals to boost confidence while achieving
                personal skincare and aesthetic goals through customized treatments incorporating home
                skincare regimens.</p>
              <p>I believe our beauty and wellness goals are continually evolving; self-care and self-love
                is an important aspect to maintaining our confidence. It is easily neglected as stress
                and responsibilities take on a life of their own. Although simple, I believe through
                facial treatments I can help bring back that needed pampering and care into everyone’s
                life.</p>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img className="top box-shadow-smooth" src="/assets/img/team/Erica.webp" alt="Plantation, FL Med Spa - Erika" />
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
