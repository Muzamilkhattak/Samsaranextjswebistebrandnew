"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';

export default function MeetTheStaff() {
  useEffect(() => {
    // Dynamically load swiper if not available
    const initSwiper = () => {
      if (typeof window !== 'undefined' && (window as any).Swiper) {
        new (window as any).Swiper('.staff-swiper', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: true,
          },
          speed: 600,
          effect: 'slide',
          watchSlidesProgress: true,
          watchSlidesVisibility: true,
          preloadImages: true,
          updateOnImagesReady: true,
        });
      }
    };

    if (!(window as any).Swiper) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js';
      script.onload = initSwiper;
      document.body.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css';
      document.head.appendChild(link);
    } else {
      initSwiper();
    }
  }, []);

  return (
    <main>

      <div className="masthead__image animate fadeIn box-shadow-smooth bg-image bg-top bg-position-widescreen" style={{ '--bgImage': 'url(/assets/img/masthead/about/02.jpg)', '--bgPosition': '50% 50%' } as React.CSSProperties}>
      </div>
      <div className="masthead__content text-center pb35-tablet">
        <h1 className="animate fadeIn white title-lg uppercase">Meet the Samsara Aesthetics<br /> & Wellness staff <span className="pt30 block subhead white animate strikethrough">in Plantation, FL</span>
        </h1>
      </div>


      <section className="mb175">
        <div className="container">
          <div className="text-center mb50">
            <img className="animate fadeUp mb35" src="/assets/img/icon.svg" alt="Meet the team at Samsara Aesthetics & Wellness in Plantation, FL Plantation" />
            <h2 className="title-lg animate fadeIn uppercase" style={{ color: '#004438' }}>Meet the Team</h2>
          </div>
          <p className="mw800 animate fadeIn">Our staff is led by <Link href="/about/dr-yves-jodesty/">Dr. Yves M. Jodesty Jr</Link> who is committed to holistic well-being and aesthetic enhancement. With years of experience, expertise, and a genuine passion for patient care, our staff is here to guide you on your journey to rejuvenation. </p>
          <p className="mw800 animate fadeIn">Dr. Yves M. Jodesty Jr. brings a wealth of medical knowledge and artistic sensibility to every treatment, ensuring you receive personalized care that addresses your unique needs. Our entire staff is dedicated to providing compassionate and comprehensive services, from <Link href="/">aesthetic treatments to wellness solutions in Plantation, FL</Link>, all in the serene environment of Samsara Aesthetics & Wellness. Discover the harmony of beauty and wellness with our dedicated team. </p>
        </div>
      </section>

      <section className="mb175">
        <div className="container">
          <h2 className="title-lg animate fadeIn uppercase text-center" style={{ color: '#004438' }}>Meet the Founders</h2>
          <div className="flexy is-multiline equal-height flexy-pad">
            <div className="flexy-item animate fadeIn no-delay is-4 is-6-widescreen">
              <div className="card no-pad">
                <Link href="/about/dr-yves-jodesty/">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/feature/staff/dr-yves-jodesty-02.jpg" alt="Meet the team at Samsara Aesthetics & Wellness in Plantation, FL Plantation" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Dr. Yves M. Jodesty Jr. <br />Chief Medical Officer</h3>
                    <div className="text-center mb25">
                      <span className="button transparent uppercase animate fadeIn">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flexy-item animate fadeIn no-delay is-4 is-6-widescreen">
              <div className="card no-pad">
                <Link href="/about/shahmeer-alam/">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/feature/staff/shahmeer-03.jpg" alt="Meet the team at Samsara Aesthetics & Wellness in Plantation, FL Plantation" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Shahmeer K. Alam Esq <br />Chief Operational Officer.</h3>
                    <div className="text-center mb25">
                      <span className="button transparent uppercase animate fadeIn">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Staff Section with Auto-Sliding Carousel */}
      <section className="mb175">
        <div className="container">
          <h2 className="title-lg animate fadeIn uppercase text-center" style={{ color: '#004438' }}>Our Staff</h2>

          {/* Desktop Slider */}
          <div className="swiper-container staff-swiper is-hidden-touch" style={{ overflow: 'hidden', marginTop: '30px' }}>
            <div className="swiper-wrapper">
              {/* Slide 1 - First 3 Staff Members */}
              <div className="swiper-slide" style={{ height: 'auto', opacity: 1 }}>
                <div className="flexy is-multiline equal-height flexy-pad">
                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Toni.webp" alt="Toni - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Toni Maguire <br />Practice Manager / Marketing Director.</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/dr-tonimaguire/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Erica.webp" alt="Erica - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Ericka Laurent <br />Nurse Practitioner</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/dr-erika/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Mark.webp" alt="Mark Jodesty - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Mark Jodesty <br />Operations</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/mark-jodesty/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - Next 3 Staff Members */}
              <div className="swiper-slide" style={{ height: 'auto', opacity: 1 }}>
                <div className="flexy is-multiline equal-height flexy-pad">
                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Michelle.webp" alt="Michelle - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Michelle Rzepka <br />Registered Nurse and Esthetician</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/dr-Michelle/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Sierra.webp" alt="Sierra - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Sierra Sesler <br />Front Desk Coordinator</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/dr-Sierra/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flexy-item is-4 is-6-widescreen">
                    <div className="card no-pad">
                      <div className="card-image-container staff-image">
                        <img className="fit-image staff-image" src="/assets/img/team/Maureen.png" alt="Maureen Murphy - Samsara Aesthetics & Wellness Staff" style={{ opacity: 1, visibility: 'visible' }} />
                      </div>
                      <div className="ps25 pv25">
                        <h3 className="title-xs text-center accent-color">Maureen Murphy <br />Massage Therapist</h3>
                        <div className="text-center mb25" style={{ marginTop: '15px' }}>
                          <Link href="/about/maureen-murphy/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Stack */}
          <div className="is-hidden-desktop staff-mobile-grid" style={{ marginTop: '30px' }}>
            <div className="flexy is-multiline equal-height flexy-pad">
              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Toni.webp" alt="Toni - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Toni Maguire <br />Office Manager - Marketing Director</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/dr-tonimaguire/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Erica.webp" alt="Erica - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Ericka Laurent <br />Nurse Practitioner</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/dr-erika/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Mark.webp" alt="Mark Jodesty - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Mark Jodesty <br />Operations</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/mark-jodesty/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Michelle.webp" alt="Michelle - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Michelle Rzepka <br />Registered Nurse and Esthetician</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/dr-Michelle/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Sierra.webp" alt="Sierra - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Sierra Sessler <br />Front Desk Coordinator</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/dr-Sierra/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexy-item is-12">
                <div className="card no-pad">
                  <div className="card-image-container staff-image">
                    <img className="fit-image staff-image" src="/assets/img/team/Maureen.png" alt="Maureen Murphy - Samsara Aesthetics & Wellness Staff" />
                  </div>
                  <div className="ps25 pv25">
                    <h3 className="title-xs text-center accent-color">Maureen Murphy <br />Massage Therapist</h3>
                    <div className="text-center mb25" style={{ marginTop: '15px' }}>
                      <Link href="/about/maureen-murphy/" className="button transparent uppercase">Read More<img src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right" className="filter-arrow-button" /></Link>
                    </div>
                  </div>
                </div>
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
                  <h2 className="ipj-link mb20 title-md white uppercase" id="ipj-consult" data-ipj="Consultation">Your Transformation Begins Here</h2>
                  <p className="lead accent-color mb20">Connect With the<br /> Samsara Care Team</p>
                  <p className="white mw600">Our staff can help you choose services, understand treatment timing, and feel prepared before your Plantation visit.</p>
                </div>
                <div className="flexy-item animate fadeIn">
                  <ScheduleConsultForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 1024px) {
          .is-hidden-touch { display: none !important; }
          .is-hidden-desktop { display: block !important; }
        }
        @media (min-width: 1025px) {
          .is-hidden-touch { display: block !important; }
          .is-hidden-desktop { display: none !important; }
        }
      `}} />
    </main>
  );
}
