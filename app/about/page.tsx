import React from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export const metadata = {
  title: 'About Samsara Aesthetics and Wellness in Plantation | Samsara Aesthetics & Wellness',
  description: 'Samsara Aesthetics & Wellness offers premier Wellness Center services in Plantation, FL. Call (954) 688-7255 today to schedule your appointment today.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="mb225 mt50">
        <div className="container">
          <div className="mw1200">
            {/* Introduction */}
            <div className="text-center mb100 animate fadeIn">
              <img alt="Samsara Aesthetics & Wellness Icon" className="mb35" src="/assets/img/icon.svg" />
              <h2 className="title-md uppercase accent-color mb25">
                True Beauty Begins with <span className="title-lg" style={{ color: '#004438' }}>Balance</span>
              </h2>
              <p className="lead accent-color">Your Journey to Renewed Confidence, Health & Beauty</p>
            </div>
            {/* Main Content */}
            <div className="flexy gap100 block-desktop is-vcentered mb100">
              <div className="flexy-item animate fadeIn">
                <p className="mb25">At Samsara Aesthetics & Wellness, we believe true beauty begins with balance. Our mission is to help every client feel confident, empowered, and renewed through a personalized approach that nurtures both inner wellness and outer beauty.</p>
                <p>Located in Plantation, Florida, Samsara offers a unique blend of <em>advanced aesthetic treatments, wellness therapies, and physician-guided care</em> designed to support your individual goals. From rejuvenating skincare and injectables to body contouring, weight management, and wellness services, every treatment plan is tailored to enhance your natural beauty while promoting long-term health and vitality.</p>
              </div>
              <div className="flexy-item flexy-image animate fadeIn accent-pattern-right">
                <img alt="Samsara Aesthetics & Wellness" className="box-shadow-smooth" src="/assets/img/feature/home/01.jpg" />
              </div>
            </div>
            {/* Philosophy Section */}
            <div className="flexy gap100 block-desktop is-vcentered mb100 flex-reverse">
              <div className="flexy-item flexy-image animate fadeIn accent-pattern-left">
                <img alt="Our Team at Samsara" className="box-shadow-smooth" src="/assets/img/feature/home/02.jpg" />
              </div>
              <div className="flexy-item animate fadeIn">
                <h3 className="title-sm uppercase accent-color mb25">Our Commitment to <span className="title-green-bg">Exceptional Care</span></h3>
                <p className="mb25">Our experienced team of medical, aesthetic, and wellness professionals is dedicated to providing exceptional care in a welcoming and relaxing environment. We take the time to understand your concerns, educate you on your options, and create customized solutions that align with your lifestyle and aspirations.</p>
                <p>The name <strong>&quot;Samsara&quot;</strong> represents transformation and renewal. We embrace this philosophy by helping our clients move forward with confidence, restoring not only their appearance but also their sense of well-being.</p>
              </div>
            </div>
            {/* Approach Section */}
            <div className="text-center animate fadeIn pv75 bg-image" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)', borderRadius: '15px' } as React.CSSProperties}>
              <div className="mw900 margin-auto ph50">
                <h3 className="title-md uppercase white mb35">Through Innovation & <span className="title-green-bg white">Holistic Care</span></h3>
                <p className="white mb25">Through innovative technology, holistic care, and a patient-first approach, we are committed to helping you become the best version of yourself.</p>
                <p className="white">Whether you are seeking aesthetic enhancements, wellness support, or a complete self-care experience, <strong>Samsara Aesthetics & Wellness is here to guide you on your journey to renewed confidence, health, and beauty</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb175 padding-index">
        <div className="container">
          <div className="mw1500">
            <div className="cascade-wrapper">
              <div className="cascade is-2 is-grid is-flexend is-collapsed-mobile">
                <Link className="animate fadeIn" href="/about/meet-the-staff/">
                  <h2 className="title-sm text-center mb20 highlight-color">Meet the Staff</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
                <Link className="animate fadeIn" href="/about/our-office/">
                  <h2 className="title-sm text-center mb20 highlight-color">Our Office</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
                <Link className="animate fadeIn" href="/about/payment-plans/">
                  <h2 className="title-sm text-center mb20 highlight-color">Payment Plans</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
                <Link className="animate fadeIn" href="/about/vip-membership/">
                  <h2 className="title-sm text-center mb20 highlight-color">VIP Membership</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
                <Link className="animate fadeIn" href="/about/testimonials/">
                  <h2 className="title-sm text-center mb20 highlight-color">Testimonials</h2>
                  <p className="lead text-center highlight-color">Learn More <img alt="right arrow" className="arrow-right filter-highlight-color" src="/assets/img/_defaults/arrow-right-highlight.svg" /></p>
                </Link>
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
                  <h2 className="ipj-link mb20 title-md white uppercase" data-ipj="Consultation" id="ipj-consult">Your Transformation Begins Here</h2>
                  <p className="lead accent-color mb20">Plan Your Visit<br /> With Samsara</p>
                  <p className="white mw600">Meet a Plantation team focused on elevated care, thoughtful recommendations, and a medspa experience built around renewal.</p>
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
