"use client";
import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function AccessibilityStatement() {
  return (
    <main>
      <div>
        <div className="mobile-cta">
          <a aria-label="Call Samsara Aesthetics & Wellness on the phone today" href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}>(954) 688-7255</a>
          <a href="/contact/"> Appointment</a>
        </div>
        <div className="overlay"></div>
        <div className="modal">
          <div className="modal-background" />
          <div className="modal-content"></div>
          <button aria-label="close" className="modal-close is-large" />
        </div>
        <section className="masthead bg-image animate zoomOutFadeInBg overflow-visible" style={{'--bgImage': 'url(/assets/img/bg/marble-grey.jpg)'} as React.CSSProperties}>
          <div className="masthead__image animate fadeIn box-shadow-smooth bg-image bg-top bg-position-widescreen" style={{'--bgImage': 'url(/assets/img/masthead/about/04.jpg)', '--bgPosition': '50% 50%'} as React.CSSProperties}></div>
          <div className="masthead__content text-center pb35-tablet">
            <h1 className="animate fadeIn white title-lg uppercase">Our Accessibility Statement <span className="pt30 block subhead white animate strikethrough">
                Samsara Aesthetics &amp; Wellness			</span>
            </h1>
          </div>
        </section>
        <section className="mb200">
          <div className="container">
            <div className="mw1200">
              <h2 className="title-sm highlight-color">General</h2>
              <p>We strive to ensure that its services are accessible to people with disabilities. We have invested a significant amount of resources to help ensure that its website is made easier to use and more accessible for people with disabilities, with the strong belief that website accessibility efforts assist all users and that every person has the right to live with dignity, equality, comfort and independence.</p>
              <h2 className="title-sm highlight-color">Accessibility on Our Site</h2>
              <p>We make available the <a aria-label="UserWay Accessibility Website (Opens a new tab)" href="https://UserWay.org" rel="noopener noreferrer" target="_blank" title="Free Website Accessibility Widget">UserWay&apos;s Web Accessibility Widget</a> is powered by a dedicated accessibility server. The software allows us to improve its compliance with the Web Content Accessibility Guidelines (WCAG 2.1).</p>
              <h2 className="title-sm highlight-color">Enabling the Accessibility Menu</h2>
              <p>Our accessibility menu can be enabled by clicking the accessibility menu icon that appears on the corner of the page. After triggering the accessibility menu, please wait a moment for the accessibility menu to load in its entirety.</p>
              <h2 className="title-sm highlight-color">Disclaimer</h2>
              <p>We continue our efforts to constantly improve the accessibility of its site and services in the belief that it is our collective moral obligation to allow seamless, accessible and unhindered use also for those of us with disabilities.</p>
              <p>In an ongoing effort to continually improve and remediate accessibility issues, we also regularly scan our site with UserWay&apos;s <a aria-label="UserWay Accessibility Scanner (Opens a new tab)" href="https://UserWay.org/scanner" rel="noopener noreferrer" target="_blank" title="Free Website Accessibility Scanner">Accessibility Scanner</a> to identify and fix every possible accessibility barrier on our site. Despite our efforts to make all pages and content on our site fully accessible, some content may not have yet been fully adapted to the strictest accessibility standards. This may be a result of not having found or identified the most appropriate technological solution.</p>
              <h2 className="title-sm highlight-color">Here For You</h2>
              <p>If you are experiencing difficulty with any content on our site or require assistance with any part of our site, please contact us during normal business hours as detailed below and we will be happy to assist.</p>
              <h2 className="title-sm highlight-color">Contact Us</h2>
              <p>If you have any questions, need assistance, or want to report an accessibility issue, please call us at{" "}
                <a aria-label="Call Samsara Aesthetics &amp; Wellness" className="tel-link" href="tel:(954) 688-7255" onClick={() => { if(typeof window !== 'undefined' && (window as any).gtag) (window as any).gtag('event', 'phone_number_click'); }}>(954) 688-7255</a> or fill out the <a aria-label="Contact form" href="/contact/">contact form</a> on our website.
              </p>
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
                    <p className="lead accent-color mb20">Need Help<br /> Scheduling?</p>
                    <p className="white mw600">Contact our office for assistance with website access, appointment questions, or accommodations before your visit.</p>
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
