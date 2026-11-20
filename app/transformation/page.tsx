"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';


export default function TransformationPage() {
  useEffect(() => {
    document.title = "See Your Transformation | Samsara Aesthetics & Wellness";

    // Load Ageless embed loader script
    const existingScript = document.querySelector('script[src="https://www.ageless.ai/embed/v1/loader.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.ageless.ai/embed/v1/loader.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main>
      <div>
        <div className="mobile-cta">
          <a
            aria-label="Call Samsara Aesthetics & Wellness on the phone today"
            href="tel:(954) 688-7255"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'phone_number_click');
              }
            }}
          >
            (954) 688-7255
          </a>
          <Link href="/contact/"> Appointment</Link>
        </div>
        <div className="overlay" />
        <div className="modal">
          <div className="modal-background" />
          <div className="modal-content" />
          <button aria-label="close" className="modal-close is-large" />
        </div>

        {/* Transformation Experience Section */}
        <section className="mb175" style={{ minHeight: '80vh', paddingTop: '150px' }}>
          <div className="container">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div className="text-center mb50">
                <h1 className="title-md uppercase mb15" style={{ color: '#004438' }}>
                  Aesthetics + Wellness Experience
                </h1>
                <p className="lead" style={{ fontSize: '1.1rem', color: '#004438' }}>
                  Explore face and body treatments
                </p>
              </div>

              {/* Ageless — See Your Results */}
              <ageless-embed-launcher
                data-ageless-url="https://www.ageless.ai/embed/platforms/0b2d02eb-d002-470f-a56e-94e482f8dcad/a/samsaramedspa/transformation?utm_source=website_embed&utm_medium=embed"
                data-ageless-mode="dedicated"
                style={{ display: 'block', width: '100%', minHeight: '600px' }}
              />
              <Script src="https://www.ageless.ai/embed/v1/loader.js" strategy="afterInteractive" />
            </div>
          </div>
        </section>

        {/* Consultation Section */}
        <section
          className="pv75 bg-image animate zoomOutBg"
          style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)' } as React.CSSProperties}
        >
          <div className="container ps75">
            <div className="mw1600">
              <div className="inline-schedule-consult">
                <div className="flexy gap100 block-desktop is-vcentered">
                  <div className="flexy-item animate fadeIn text-center">
                    <h2 className="ipj-link mb20 title-md white uppercase" id="ipj-consult" data-ipj="Consultation">
                      Your Transformation Begins Here
                    </h2>
                    <p className="lead accent-color mb20">
                      Begin Your Samsara<br /> Consultation in Plantation
                    </p>
                    <p className="white mw600">
                      Reawaken your best self with a personalized plan that connects aesthetics, wellness, and long-term confidence.
                    </p>
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
