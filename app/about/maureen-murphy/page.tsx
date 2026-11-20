"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function MaureenMurphy() {
  return (
    <main>
      <div>
  <div className="mobile-cta">
    <a href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }} aria-label="Call Samsara Aesthetics & Wellness on the phone today">(954) 688-7255</a>
    <a href="/contact/"> Appointment</a>
  </div>
  <section className="mt75 mb175">
    <div className="container">
      <div className="mw1600">
        <div className="flexy gap100 block-desktop">
          <div className="flexy-item animate fadeIn">
            <div className="pv75-desktop">
              <p className="title-md uppercase text-center" style={{color: '#004438'}}>Maureen Murphy</p>
              <h2 className="subhead accent-color animate strikethrough">Massage Therapist
              </h2>
              <p>Throughout her career, Maureen has trained in a wide range of therapeutic techniques,
                including neuromuscular therapy, Swedish massage, sports massage, cupping, Swedish Thai
                massage, medical massage, lymphatic massage, prenatal massage, and infant massage.</p>
              <p>Maureen believes that no two clients are alike. She thoughtfully tailors each session to
                the individual, drawing from her extensive background to combine different modalities
                based on their specific needs and wellness goals. Her approach focuses on relieving
                tension, promoting relaxation, supporting overall wellness, and creating a truly
                therapeutic experience.</p>
              <p>Maureen is passionate about helping each client feel their best and is proud to bring her
                decades of experience and dedication to the patients of Samsara Aesthetics &amp; Wellness.
              </p>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img className="top box-shadow-smooth" src="/assets/img/team/Maureen.png" alt="Plantation, FL Med Spa - Maureen Murphy" />
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
