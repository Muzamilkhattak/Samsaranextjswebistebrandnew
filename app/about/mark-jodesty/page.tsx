"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function MarkJodesty() {
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
              <p className="title-md uppercase text-center" style={{color: '#004438'}}>Mark Jodesty</p>
              <h2 className="subhead accent-color animate strikethrough">Operations
              </h2>
              <p>Mark Jodesty is an important part of the team at Samsara Aesthetics &amp; Wellness, providing support across daily operations, and event coordination. Working closely with the team behind the scenes, he helps ensure the practice remains organized, efficient, and prepared for both day-to-day needs and special events.</p>
              <p>With a hands-on and dependable approach, Mark assists in coordinating the many moving pieces that contribute to a seamless experience for both our team and our patients. His commitment to supporting Samsara’s operations and continued growth makes him a valued part of the practice.</p>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn">
            <img className="top box-shadow-smooth" src="/assets/img/team/Mark.webp" alt="Plantation, FL Med Spa - Mark Jodesty" />
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
