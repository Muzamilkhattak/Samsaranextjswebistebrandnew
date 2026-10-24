"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ThankYou() {
  useEffect(() => {
    document.title = "Appointment Request Received | Samsara Med Spa";
  }, []);

  return (
    <main className="thankyou-page">
      {/* Bootstrap & Google Fonts */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;600&family=Encode+Sans:wght@100..900&display=swap"
        rel="stylesheet"
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .thankyou-page {
          background-image: url('/booking-images/background.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .thankyou-page .form-container {
          background: transparent;
          border-radius: 1px;
          padding: 20px;
          box-shadow: #ECE9F466;
          border-bottom: #C4C4C4;
        }

        .thankyou-page .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          max-width: 320px;
          margin: 0 auto;
        }

        .thankyou-page .logo img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .thankyou-page .btns {
          padding: 1rem 4rem;
          text-decoration: none;
          background-color: #1A4339;
          color: white;
          border-radius: 5px;
          font-size: 1.3rem;
          display: inline-block;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .thankyou-page .btns:hover {
          background-color: #0d2620;
          color: white;
          transform: translateY(-2px);
        }

        .thankyou-page .buttonvisit {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
        }

        @media (min-width: 576px) {
          .thankyou-page .contain {
            width: 50%;
          }
        }

        @media (max-width: 767px) {
          .thankyou-page .contain {
            width: 90%;
          }
        }

        @media (max-width: 1000px) {
          .thankyou-page .contain {
            width: 90%;
          }
        }

        /* Call Widget - Fixed Bottom Right */
        .call-widget {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          animation: fadeInUp 0.5s ease-in-out;
        }

        .call-widget a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #004438 0%, #006B54 100%);
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0, 68, 56, 0.4);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          animation: pulse 2s infinite;
        }

        .call-widget a:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 68, 56, 0.6);
        }

        .call-widget a::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          border: 2px solid #004438;
          opacity: 0;
          animation: ripple 2s infinite;
        }

        .call-widget svg {
          width: 28px;
          height: 28px;
          fill: white;
        }

        .call-widget-tooltip {
          position: absolute;
          right: 75px;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          color: #004438;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .call-widget:hover .call-widget-tooltip {
          opacity: 1;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .call-widget {
            bottom: 20px;
            right: 20px;
          }
          .call-widget a {
            width: 55px;
            height: 55px;
          }
          .call-widget svg {
            width: 24px;
            height: 24px;
          }
          .call-widget-tooltip {
            display: none;
          }
        }
      `}} />

      <div className="d-flex justify-content-center align-items-center flex-column vh-100">
        <h1 className="visually-hidden">Appointment Request Received</h1>
        <div className="logo">
          <Link href="/">
            <img src="/booking-images/logo.png" alt="Samsara Aesthetics & Wellness logo" />
          </Link>
        </div>
        <div className="contain mx-auto">
          <div className="d-flex justify-content-center align-items-center">
            <div className="form-container w-100">
              <p className="text-center fs-4 text-white fw-semibold mb-3">
                Thank you for booking your appointment with us! If you have any questions or need to reschedule, feel free to call us at
              </p>
              <p className="text-center mb-4">
                <a
                  className="fs-4 text-white text-decoration-none fw-semibold"
                  href="tel:+9546887255"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_number_click');
                    }
                  }}
                >
                  (954) 688-7255
                </a>
              </p>

              <div className="buttonvisit">
                <Link href="/" className="btns fs-5">
                  Visit Our Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call Widget - Fixed Bottom Right */}
      <div className="call-widget">
        <a
          href="tel:+19546887255"
          aria-label="Call us at (954) 688-7255"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'phone_number_click');
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          <span className="call-widget-tooltip">(954) 688-7255</span>
        </a>
      </div>
    </main>
  );
}
