"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function PaymentPlans() {
  useEffect(() => {
    // Suppress non-fatal third-party Cherry analytics network error
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      if (typeof args[0] === 'string' && args[0].includes('Failed to track widget analytics event')) {
        return;
      }
      originalConsoleError.apply(console, args);
    };

    if (document.getElementById("_hw")) {
      return () => {
        console.error = originalConsoleError;
      };
    }

    (function (w: any, d: Document, s: string, o: string, f: string) {
      w[o] = w[o] || function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
      const js = d.createElement(s) as HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];
      js.id = o;
      js.src = f;
      js.async = true;
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      } else {
        d.head.appendChild(js);
      }
    })(window, document, "script", "_hw", 'https://files.withcherry.com/widgets/widget.js');

    if (typeof window !== 'undefined' && (window as any)._hw) {
      (window as any)._hw(
        "init",
        {
          debug: false,
          variables: {
            slug: 'samsara-aesthetics--wellness-',
            name: "Samsara Aesthetics & Wellness ",
          },
          styles: {
            primaryColor: '#004438',
            secondaryColor: '#b5a596',
            fontFamily: 'Open Sans',
          },
        },
        ["all", "hero", "howitworks", "testimony", "faq", "calculator"]
      );
    }

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <main>
      <section className="mb40" style={{ marginTop: '120px' }}>
        <div className="container">
          <div id="all"></div>{/* CHERRY WIDGET END */}
        </div>
      </section>

      {/* AFFIRM PAYMENT PLAN SECTION */}
      <section className="mb60 pt10 pb10">
        <div className="container text-center">
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '35px 25px', background: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 68, 56, 0.08)', border: '1px solid #ebd9c8' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
              <svg width="140" height="40" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Affirm Logo">
                <path d="M18.8 38.8C10.7 38.8 4.2 32.5 4.2 24.3C4.2 16.1 10.7 9.8 18.8 9.8C24.1 9.8 28.5 12.6 30.9 17.1L24.8 20.5C23.6 17.8 21.3 16.1 18.8 16.1C14.3 16.1 10.7 19.7 10.7 24.3C10.7 28.9 14.3 32.5 18.8 32.5C21.4 32.5 23.7 30.8 24.9 28.1L31 31.5C28.5 36 24.1 38.8 18.8 38.8Z" fill="#4A4AF4" />
                <text x="38" y="34" fontFamily="'proxima-nova', Arial, sans-serif" fontWeight="700" fontSize="32" fill="#004438" letterSpacing="-0.5">Affirm</text>
              </svg>
            </div>
            <h2 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '32px', fontWeight: 700, lineHeight: '48px', color: 'rgb(0, 0, 0)', textTransform: 'uppercase', marginBottom: '12px' }}>
              Flexible Payments with Affirm
            </h2>
            <p style={{ fontFamily: "'proxima-nova', sans-serif", fontSize: '16px', color: '#555555', maxWidth: '600px', margin: '0 auto 25px', lineHeight: 1.5 }}>
              Pay over time with zero hidden fees and no surprises. Quick online application with an instant decision.
            </p>
            <div>
              <a href="https://www.affirm.com/user/signup" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#004438', color: '#ffffff', fontFamily: "'proxima-nova', sans-serif", fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(0, 68, 56, 0.2)', transition: 'all 0.3s ease' }}>
                Apply with Affirm
              </a>
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
                  <p className="lead accent-color mb20">Discuss Flexible<br /> Payment Options</p>
                  <p className="white mw600">Ask our team about payment planning so your treatment path can align with both your goals and your budget.</p>
                </div>
                <div className="flexy-item animate fadeIn">
                  <ScheduleConsultForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
