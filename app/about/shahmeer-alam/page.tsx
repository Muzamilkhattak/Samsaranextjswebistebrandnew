"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function ShahmeerAlam() {
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
        <div className="flexy gap100 block-desktop mb100 mb100">
          <div className="flexy-item animate fadeIn">
            <div className="pv75-desktop">
              <p className="title-md  uppercase text-center" style={{color: '#004438'}}>Shahmeer K. Alam Esq</p>
              <h2 className="subhead accent-color animate strikethrough">at Samsara Wellness and Aesthetics
              </h2>
              <p>Meet Shahmeer K. Alam Esq, an experienced attorney whose experience ranges from
                representing clients in complex litigation, criminal defense, and transactional
                drafting. Hailing from the dynamic legal landscape of Florida, with a passion for
                service that is matched only by an unwavering commitment to excellence, Shahmeer Alam
                has proven his mettle in numerous proceedings, displaying an impressive track record of
                successful outcomes. Licensed in the state of Florida, his profound understanding of the
                intricacies of the legal system, coupled with his meticulous attention to detail,
                ensures that clients receive top-tier representation. Beyond the courtroom, Shahmeer
                wears multiple hats, exemplifying his versatility and dedication to <em>holistic
                  well-being</em>. </p>
            </div>
          </div>
          <div className="flexy-item flexy-image animate fadeIn min-height-700">
            <img alt="About Shahmeer K. Alam Esq, Executive Director  Plantation" className="top box-shadow-smooth" src="/assets/img/feature/staff/shahmeer-03.jpg" />
          </div>
        </div>
        <p className="animate fadeIn mw800">Holding the distinction of a seasoned lawyer, he harnesses his legal
          acumen to provide insightful guidance to individuals navigating personal and professional
          challenges. This unique blend of legal proficiency and emotional intelligence sets Shahmeer apart as
          a mentor who empowers others to overcome obstacles and achieve their aspirations. In a captivating
          fusion of disciplines, Shahmeer takes on the role of COO for Samsara Aesthetics &amp; Wellness medspa's
          operations. With an innate ability to manage complex tasks and an eye for operational intricacies,
          he ensures that this <a href="/">Plantation, FL Med Spa</a> functions seamlessly, offering clients a
          rejuvenating experience. This multifaceted approach showcases Shahmeer's capacity to seamlessly
          integrate his legal expertise and operational prowess into a harmonious symphony that drives success
          across diverse domains. Whether advocating in the courtroom or meticulously managing
          <strong>medspa</strong> operations, Shahmeer Alam Esq. epitomizes proficiency, empathy, and
          innovation. His journey embodies an unyielding dedication to not only the pursuit of legal
          excellence but also to facilitating positive change in the lives of individuals and businesses
          alike.</p>
      </div>
    </div>
  </section>
  <section className="pv75 bg-image animate zoomOutBg" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)' } as React.CSSProperties}>
    <div className="container ps75">
      <div className="mw1600">
        <div className="inline-schedule-consult">
          <div className="flexy gap100 block-desktop is-vcentered">
            <div className="flexy-item animate fadeIn text-center">
              <h2 className="ipj-link mb20 title-md white uppercase" data-ipj="Consultation" id="ipj-consult">
                Your Transformation Begins Here</h2>
              <p className="lead accent-color mb20">Learn More About<br /> Samsara Leadership</p>
              <p className="white mw600">Connect with Samsara to understand our practice philosophy, patient
                experience, and commitment to elevated service.</p>
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
