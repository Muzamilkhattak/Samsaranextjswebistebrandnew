"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TestimonialSlider from './components/TestimonialSlider';
import ScheduleConsultForm from '@/app/components/ScheduleConsultForm';
import BannerSlider from './components/BannerSlider';

export default function Home() {
  const [activeProcedure, setActiveProcedure] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    document.body.classList.add('home');

    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  return (
    <main>
      <BannerSlider />
      <section className="mb225">
        <div className="container">
          <div className="mw1300">
            <div className="text-center mb75">
              <h3 className="title-md uppercase accent-color animate fadeIn">Your <span className="title-lg ps10" style={{ color: '#004438' }}>Metamorphosis</span> Awaits</h3>
              <h2 className="subhead accent-color strikethrough animate fadeIn">Samsara Aesthetics &amp; Wellness</h2>
            </div>
            <div className="flexy gap100 block-desktop is-vcentered">
              <div className="flexy-item flexy-image animate fadeIn accent-pattern-left">
                <img className="box-shadow-smooth" src="/assets/img/feature/home/01.jpg" alt="Med Spa Plantation, FL  Plantation" />
              </div>
              <div className="flexy-item animate fadeIn pv75-desktop">
                <p className="lead">All of the components that make you beautiful already reside within you.</p>
                <p>At Samsara Aesthetics &amp; Wellness, our goal is to reawaken and nourish the parts of you that
                  have been resting and awaiting new beginnings. Our <em>Aesthetics and Wellness experts</em>
                  are here to help you live each day with well-founded confidence, vitality, and intention. We
                  take pride in providing every patient with an exceptionally empathetic and <em>holistic
                    treatment</em> experience that is equally grounding and indulgent.&nbsp; Samsara means
                  rebirth. As we free ourselves of the self-doubt and concerns that keep us from realizing our
                  full potential, we make room for our most vibrant qualities to flourish. Embrace your
                  reimagining and design the life you want for yourself at our Plantation <strong>Med
                    Spa</strong>.</p>
                <Link href="https://samsaraaestheticswellness.myaestheticrecord.com/online-booking" className="button box-shadow-smooth">Book Now <img className="arrow"
                  src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right icon" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb50">
        <div className="container">
          <div className="mw1000">
            <Link href="/about/vip-membership/"><img src="/assets/img/feature/wellness/11.jpg"
              alt="Med Spa Plantation, FL  Plantation" /></Link>
          </div>
        </div>
      </section>

      <section id="procedures" className="mb150 pt50 pb50-tablet feature-procedures bg-image animate zoomOutFadeInBg bg-green-home" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)' } as React.CSSProperties}>
        <div className="container ps25">
          <div className="text-center mb50">
            <img className="animate fadeUp mb35" src="/assets/img/icon.svg" alt="Med Spa Plantation, FL  Plantation" />
            <h3 className="title-xl white animate fadeIn uppercase">Cultivate Confidence</h3>
            <h2 className="subhead accent-color strikethrough animate fadeIn">Aesthetics &amp; Wellness Treatments</h2>
          </div>
          <div className="flexy is-swipable-touch flexy-pad is-multiline">

            {/* Injectables */}
            <div className="flexy-item is-3 is-6-widescreen">
              <div
                className={`animate fadeIn link-reveal-container box-shadow-smooth ${activeProcedure === 0 ? 'active' : ''}`}
                onClick={() => setActiveProcedure(activeProcedure === 0 ? null : 0)}
              >
                <img src="/assets/img/feature/home/injectables.jpg" alt="Med Spa Plantation, FL  Plantation" />
                <h2 className="intro white feature-title uppercase">Injectables
                  <hr className="discover-hr" /> <span className="block subhead accent-color">Discover</span>
                </h2>
                <div className="link-reveal">
                  <ul>
                    <li><Link href="/injectables-fillers/Neurotoxins" className="white" onClick={(e) => e.stopPropagation()}>Neurotoxins (Botox, Jeuveau, Xeomin)</Link></li>
                    <li><Link href="/injectables-fillers/Dermal-Fillers" className="white" onClick={(e) => e.stopPropagation()}>Fillers</Link></li>
                    <li><Link href="/injectables-fillers/PRP" className="white" onClick={(e) => e.stopPropagation()}>PRP</Link></li>
                    <li><Link href="/injectables-fillers/PRF" className="white" onClick={(e) => e.stopPropagation()}>PRF</Link></li>
                    <li><Link href="/injectables-fillers/biostimulators" className="white" onClick={(e) => e.stopPropagation()}>Biostimulators</Link></li>
                    <li><Link href="/injectables-fillers/Hair-Restoration" className="white" onClick={(e) => e.stopPropagation()}>Hair Restoration</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Laser & Energy */}
            <div className="flexy-item is-3 is-6-widescreen">
              <div
                className={`animate fadeIn link-reveal-container box-shadow-smooth ${activeProcedure === 1 ? 'active' : ''}`}
                onClick={() => setActiveProcedure(activeProcedure === 1 ? null : 1)}
              >
                <img src="/assets/img/feature/home/laser-energy.jpg" alt="Med Spa Plantation, FL  Plantation" />
                <h2 className="intro white feature-title uppercase">Laser &amp; Energy
                  <hr className="discover-hr" /> <span className="block subhead accent-color">Discover</span>
                </h2>
                <div className="link-reveal">
                  <ul>
                    <li><Link href="/laser-treatments/laser-hair-removal" className="white" onClick={(e) => e.stopPropagation()}>Laser Hair Removal</Link></li>
                    <li><Link href="/laser-treatments/ipl" className="white" onClick={(e) => e.stopPropagation()}>IPL</Link></li>
                    <li><Link href="/laser-treatments/morpheus8" className="white" onClick={(e) => e.stopPropagation()}>Morpheus8</Link></li>
                    <li><Link href="/laser-treatments/forma" className="white" onClick={(e) => e.stopPropagation()}>Forma</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Wellness */}
            <div className="flexy-item is-3 is-6-widescreen">
              <div
                className={`animate fadeIn link-reveal-container box-shadow-smooth ${activeProcedure === 2 ? 'active' : ''}`}
                onClick={() => setActiveProcedure(activeProcedure === 2 ? null : 2)}
              >
                <img src="/assets/img/feature/home/wellness.jpg" alt="Med Spa Plantation, FL  Plantation" />
                <h2 className="intro white feature-title uppercase">Wellness
                  <hr className="discover-hr" /> <span className="block subhead accent-color">Discover</span>
                </h2>
                <div className="link-reveal">
                  <ul>
                    <li><Link href="/wellness/weight-loss-therapy" className="white" onClick={(e) => e.stopPropagation()}>Weight Loss Therapy</Link></li>
                    <li><Link href="/wellness/Peptide-therapy" className="white" onClick={(e) => e.stopPropagation()}>Peptide Therapy</Link></li>
                    <li><Link href="/wellness/Hormone -Therapy" className="white" onClick={(e) => e.stopPropagation()}>Hormone Therapy</Link></li>
                    <li><Link href="/wellness/Vitamin-Therapy" className="white" onClick={(e) => e.stopPropagation()}>Vitamin Therapy</Link></li>
                    <li><Link href="/wellness/iv-Therapy" className="white" onClick={(e) => e.stopPropagation()}>IV Therapy</Link></li>
                    <li><Link href="/wellness/massage-therapy" className="white" onClick={(e) => e.stopPropagation()}>Massage Therapy</Link></li>
                    <li><Link href="/wellness/Evolve-Body contouring" className="white" onClick={(e) => e.stopPropagation()}>Evolve Body Contouring</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skincare */}
            <div className="flexy-item is-3 is-6-widescreen">
              <div
                className={`animate fadeIn link-reveal-container box-shadow-smooth ${activeProcedure === 3 ? 'active' : ''}`}
                onClick={() => setActiveProcedure(activeProcedure === 3 ? null : 3)}
              >
                <img src="/assets/img/feature/home/skincare.jpg" alt="Med Spa Plantation, FL  Plantation" />
                <h2 className="intro white feature-title uppercase">Skincare
                  <hr className="discover-hr" /> <span className="block subhead accent-color">Discover</span>
                </h2>
                <div className="link-reveal">
                  <ul>
                    <li><Link href="/skin-treatments/Traditional-Facial" className="white" onClick={(e) => e.stopPropagation()}>Traditional Facial</Link></li>
                    <li><Link href="/skin-treatments/hydrafacial" className="white" onClick={(e) => e.stopPropagation()}>HydraFacial</Link></li>
                    <li><Link href="/skin-treatments/chemical-peels" className="white" onClick={(e) => e.stopPropagation()}>Chemical Peels</Link></li>
                    <li><Link href="/skin-treatments/Dermaplaning" className="white" onClick={(e) => e.stopPropagation()}>Dermaplaning</Link></li>
                    <li><Link href="/skin-treatments/Mirconeedling" className="white" onClick={(e) => e.stopPropagation()}>Microneedling</Link></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="mb175">
        <div className="container">
          <div className="mw1300">
            <div className="text-center mb75">
              <img className="animate fadeUp mb50" src="/assets/img/icon.svg" alt="Med Spa Plantation, FL  Plantation" />
              <h3 className="title-md uppercase animate fadeIn" style={{ color: '#004438' }}>RESTORE. RENEW.</h3>
              <h2 className="subhead accent-color strikethrough animate fadeIn">our philosophy</h2>
            </div>
            <div className="flexy gap100 block-desktop">
              <div className="flexy-item animate fadeIn">
                <p className="lead">The power of Samsara is not in moving backward to try and reclaim what once was;
                  it is embracing and nourishing every facet of your being so that you can enter your story’s
                  next chapter as your most evolved self.</p>

              </div>
              <div className="flexy-item animate fadeIn">
                <p> At Samsara Aesthetics &amp; Wellness in Plantation <strong>Med Spa</strong> treatments can help
                  you renew and transform your life from the inside out. From <em>holistic wellness
                    treatments</em> to state-of-the-art technologies, we leave no stone unturned when it
                  comes to providing you with optimally beneficial solutions designed to enhance every aspect
                  of your life.&nbsp; </p>
                <p>Rather than simply aiming to <em>reverse signs of aging</em>, our personalized treatment
                  programs support your overall health to cultivate self-confidence and renew your
                  perspective. From <em>aesthetics and wellness</em> to <em>weight loss</em> and <em>life
                    coaching</em>, we want to see you truly thrive. </p>
                <p>When you reawaken the best version of yourself, you can achieve your best confidence, health,
                  beauty, and vitality. Our empathetic aesthetics &amp; wellness experts are here to personally
                  guide you toward a renewed sense of self so that you can live your most beautifully
                  authentic and fulfilling life. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb225 pv50 bg-image animate zoomOutFadeInBg overflow-visible" style={{ '--bgImage': 'url(/assets/img/bg/marble-grey.jpg)' } as React.CSSProperties}>
        <div className="container">
          <div className="text-center mb75">
            <img className="animate fadeUp mb50" src="/assets/img/icon.svg" alt="Med Spa Plantation, FL  Plantation" />
            <h3 className="title-md uppercase accent-color animate fadeIn">The Evolution Of <span style={{ color: '#004438' }}>Aesthetics</span></h3>
            <h2 className="subhead accent-color strikethrough animate fadeIn">Meet Our Founders</h2>
          </div>
          <div className="mw1300">
            <div className="mw800">
              <p className="lead">Our physician-led team of medical, aesthetic, and wellness specialists offers an
                exceptional level of combined empathy and expertise.</p>
              <p>Meet our in-house <em>board certified physician</em>, Yves M. Jodesty, Jr. MD, who offers more
                than a quarter-century of experience in medicine. Throughout their practice, they have witnessed
                firsthand the profound impact of overall wellness on patient health. In addition to good health,
                an optimally fulfilling and enjoyable life requires the confidence to embrace opportunities and
                pursue dreams.</p>
              <p>Shahmeer K. Alam Esq., our in-house life coach, guides clients through obstacles to help them
                break through to the life they envision. By letting go of unnecessary baggage and establishing
                new habits, you can access your full potential and reach new heights, personally and
                professionally. </p>
              <p><em>Collectively, our vision is to promote authentic beauty, mental wellness, and lasting health
                so that you may continue to blossom into your best self each day</em>. When it comes to
                personal development, the journey is the destination. Our comprehensive and patient-first
                approach is designed to nourish and nurture your whole person, and every member of our staff is
                equipped to provide you with the exceptional care and experience you deserve. We are honored to
                accompany you on the path to your most meaningful life. </p>
              <div className="text-center"><Link href="/about/meet-the-staff/" className="button box-shadow-smooth">Meet the
                Staff <img className="arrow" src="/assets/img/_defaults/arrow-right-white.svg"
                  alt="arrow right icon" /></Link></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb50">
        <div className="container">
          <div className="mw1300">
            <div className="text-center mb75">
              <img className="animate fadeUp mb50" src="/assets/img/icon.svg" alt="Med Spa Plantation, FL  Plantation" />
              <h3 className="title-lg uppercase animate fadeIn" style={{ color: '#004438' }}>Live in Full Vibrancy</h3>
              <h2 className="subhead accent-color strikethrough animate fadeIn">Featured Aesthetic Treatments</h2>
            </div>
            <div className="flexy gap100 block-desktop">
              <div className="flexy-item animate fadeIn">
                <p>All of the aesthetic treatments we offer work synergistically with your body to produce
                  lasting, natural results with little to no downtime. While many of the advanced modalities
                  available at Samsara have the power to produce comprehensive results, we take great care in
                  providing you with a <em>highly personalized, precise treatment plan</em>.&nbsp;</p>
              </div>
              <div className="flexy-item animate fadeIn">
                <p>Whether you desire to target a single concern or are seeking a total refresh through combined
                  therapies, we will meticulously plan and administer your <strong>Med Spa</strong> treatments
                  according to your unique needs, preferences, and signature aesthetic. Explore our featured
                  services, and schedule your consultation for an in-depth discussion about your most
                  advantageous options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="selector-container mb175 mw1800 z2 box-shadow-smooth">
        <div className="mb50 container">
          <div className="mw1400">
            <div className="selectors" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <span
                className={`animate fadeIn selector ${activeTab === 0 ? 'active' : ''}`}
                style={{ flex: '0 0 calc(33.333% - 7px)', whiteSpace: 'normal', cursor: 'pointer' }}
                onClick={() => setActiveTab(0)}
              >
                Neurotoxins
              </span>
              <span
                className={`animate fadeIn selector ${activeTab === 1 ? 'active' : ''}`}
                style={{ flex: '0 0 calc(33.333% - 7px)', whiteSpace: 'normal', cursor: 'pointer' }}
                onClick={() => setActiveTab(1)}
              >
                HydraFacial
              </span>
              <span
                className={`animate fadeIn selector ${activeTab === 2 ? 'active' : ''}`}
                style={{ flex: '0 0 calc(33.333% - 7px)', whiteSpace: 'normal', cursor: 'pointer' }}
                onClick={() => setActiveTab(2)}
              >
                PRP
              </span>
              <span
                className={`animate fadeIn selector ${activeTab === 3 ? 'active' : ''}`}
                style={{ flex: '0 0 calc(33.333% - 7px)', whiteSpace: 'normal', cursor: 'pointer' }}
                onClick={() => setActiveTab(3)}
              >
                Morpheus8
              </span>
              <span
                className={`animate fadeIn selector ${activeTab === 4 ? 'active' : ''}`}
                style={{ flex: '0 0 calc(33.333% - 7px)', whiteSpace: 'normal', cursor: 'pointer' }}
                onClick={() => setActiveTab(4)}
              >
                Laser Treatments
              </span>
              <span
                className={`animate fadeIn selector ${activeTab === 5 ? 'active' : ''}`}
                style={{ flex: '0 0 calc(33.333% - 7px)', whiteSpace: 'normal', cursor: 'pointer' }}
                onClick={() => setActiveTab(5)}
              >
                Body Contouring
              </span>
            </div>
          </div>
        </div>
        <div className="selector-items relative bg-image animate fadeInBg pv50" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-02.jpg)' } as React.CSSProperties}>
          <div className={`animate selector-item procedure-selection ${activeTab === 0 ? 'active' : ''}`} data-order={1}>
            <div className="container relative ml50 mr100">
              <div className="mw1400">
                <div className="flexy block-widescreen gap100">
                  <div className="flexy-item flexy-image animate fadeIn relative" data-order={1}>
                    <img src="/assets/img/selector/botox-fillers.jpg" className="top flexy-image box-shadow-smooth" alt="Med Spa Plantation, FL  Plantation" />
                  </div>
                  <div className="flexy-item pv75-desktop">
                    <h2 className="title-md white uppercase animate fadeIn mb25">Dermal Fillers &amp; Botox</h2>
                    <h3 className="subhead accent-color animate fadeIn mb30">Plantation, FL</h3>
                    <p className="mb30 animate fadeIn white">We offer injectable treatments like
                      <strong>Botox</strong> and <strong>dermal fillers</strong> to safely, conveniently,
                      and effectively achieve a range of aesthetic benefits. Our injectable solutions can
                      <em>reduce wrinkles and fine lines</em>, <em>restore or enhance volume</em>, or
                      provide a non-surgical lift for a more youthful appearance. Injectable procedures
                      are minimally invasive, requiring little to no downtime, and results are often
                      immediate. Our <em>dermal fillers can enhance and refine facial contours,&nbsp; and plump
                        lips</em>, delivering a refreshed and natural-looking appearance.
                    </p>
                    <Link href="/injectables-fillers/Neurotoxins/"
                      className="button light box-shadow-smooth">Injectables <img className="arrow"
                        src="/assets/img/_defaults/arrow-right-highlight.svg"
                        alt="arrow right icon" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`animate selector-item procedure-selection ${activeTab === 1 ? 'active' : ''}`} data-order={2}>
            <div className="container relative ml50 mr100">
              <div className="mw1400">
                <div className="flexy block-widescreen gap100">
                  <div className="flexy-item flexy-image animate fadeIn relative" data-order={2}>
                    <img src="/assets/img/selector/hydrafacial.jpg" className="top flexy-image box-shadow-smooth" alt="Med Spa Plantation, FL  Plantation" />
                  </div>
                  <div className="flexy-item pv75-desktop">
                    <h2 className="title-md white uppercase animate fadeIn mb25">HydraFacial</h2>
                    <h3 className="subhead accent-color animate fadeIn mb30">in Plantation, FL</h3>
                    <p className="mb30 animate fadeIn white">A <strong>HydraFacial</strong> offers a
                      rejuvenating and refreshing skincare experience, combining cleansing, exfoliation,
                      extraction, hydration, and antioxidant protection in one treatment. <em>This
                        advanced, non-invasive procedure is suitable for all skin types, delivering
                        immediate results such as improved skin texture, reduced fine lines, and a
                        radiant complexion</em>. With no downtime, it's perfect for busy individuals
                      seeking a quick and effective solution for skin concerns, leaving you with smoother,
                      clearer, and more youthful-looking skin. </p>
                    <Link href="/skin-treatments/hydrafacial/"
                      className="button light box-shadow-smooth">HydraFacial <img className="arrow"
                        src="/assets/img/_defaults/arrow-right-highlight.svg"
                        alt="arrow right icon" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`animate selector-item procedure-selection ${activeTab === 2 ? 'active' : ''}`} data-order={3}>
            <div className="container relative ml50 mr100">
              <div className="mw1400">
                <div className="flexy block-widescreen gap100">
                  <div className="flexy-item flexy-image animate fadeIn relative" data-order={3}>
                    <img src="/assets/img/selector/prp-prf.jpg" className="top flexy-image box-shadow-smooth" alt="Med Spa Plantation, FL  Plantation" />
                  </div>
                  <div className="flexy-item pv75-desktop">
                    <h2 className="title-md white uppercase animate fadeIn mb25">PRP </h2>
                    <h3 className="subhead accent-color animate fadeIn mb30">in Plantation, FL</h3>
                    <p className="mb30 animate fadeIn white">We offer platelet-based treatments that harness the
                      power of your body’s natural growth factors to stimulate cellular regeneration in
                      targeted areas. <strong>PRP</strong> (platelet-rich plasma) and <strong>PRF</strong>
                      (platelet-rich fibrin) are natural substances derived from a small blood sample
                      taken in our office and injected into areas like undereye hollows and the scalp for
                      hair restoration. <em>Learn more about PRP undereye treatment and PRF hair
                        restoration in Plantation</em>, and schedule your consultation to plan your
                      all-natural and personalized care plan. </p>
                    <Link href="/injectables-fillers/PRP/" className="button light box-shadow-smooth">PRP<img
                      className="arrow" src="/assets/img/_defaults/arrow-right-highlight.svg"
                      alt="arrow right icon" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`animate selector-item procedure-selection ${activeTab === 3 ? 'active' : ''}`} data-order={4}>
            <div className="container relative ml50 mr100">
              <div className="mw1400">
                <div className="flexy block-widescreen gap100">
                  <div className="flexy-item flexy-image animate fadeIn relative" data-order={4}>
                    <img src="/assets/img/selector/morpheus8.jpg" className="top flexy-image box-shadow-smooth" alt="Med Spa Plantation, FL  Plantation" />
                  </div>
                  <div className="flexy-item pv75-desktop">
                    <h2 className="title-md white uppercase animate fadeIn mb25">Morpheus8</h2>
                    <h3 className="subhead accent-color animate fadeIn mb30">in Plantation, FL</h3>
                    <p className="mb30 animate fadeIn white"><em>Morpheus8 is a revolutionary, non-invasive
                      cosmetic procedure offering benefits for both face and body</em>. With advanced
                      radiofrequency and microneedling technology, Morpheus8 stimulates collagen
                      production, resulting in tighter, more youthful skin, reduced wrinkles, and improved
                      texture. <strong>Morpheus8</strong> is versatile, effectively treating various skin
                      concerns, including scars and stretch marks. Its minimal downtime makes it a
                      convenient option for individuals seeking safe, efficient, and comprehensive
                      aesthetic enhancements. </p>
                    <Link href="/laser-treatments/morpheus8/" className="button light box-shadow-smooth">Morpheus8
                      <img className="arrow" src="/assets/img/_defaults/arrow-right-highlight.svg"
                        alt="arrow right icon" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`animate selector-item procedure-selection ${activeTab === 4 ? 'active' : ''}`} data-order={5}>
            <div className="container relative ml50 mr100">
              <div className="mw1400">
                <div className="flexy block-widescreen gap100">
                  <div className="flexy-item flexy-image animate fadeIn relative" data-order={5}>
                    <img src="/assets/img/selector/laser-treatments.jpg" className="top flexy-image box-shadow-smooth" alt="Med Spa Plantation, FL  Plantation" />
                  </div>
                  <div className="flexy-item pv75-desktop">
                    <h2 className="title-md white uppercase animate fadeIn mb25">Laser Treatments</h2>
                    <h3 className="subhead accent-color animate fadeIn mb30">in Plantation, FL</h3>
                    <p className="mb30 animate fadeIn white"><em>Our Plantation laser treatment specialists
                      employ the latest technologies to deliver optimally precise solutions to each
                      patient’s unique concerns</em>. We offer laser hair removal, tattoo removal, and
                      skin rejuvenation treatments to alleviate your concerns and enhance your confidence.
                      We know that no two patients require the same set of needs, and we are here to help
                      you determine your best <strong>laser treatment</strong> option. Read more about the
                      state-of-the-art technologies we offer, and schedule your consultation to discuss
                      your treatment.</p>
                    <Link href="/laser-treatments/laser-hair-removal/"
                      className="button light box-shadow-smooth">Laser Treatments
                      <img className="arrow" src="/assets/img/_defaults/arrow-right-highlight.svg"
                        alt="arrow right icon" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`animate selector-item procedure-selection ${activeTab === 5 ? 'active' : ''}`} data-order={6}>
            <div className="container relative ml50 mr100">
              <div className="mw1400">
                <div className="flexy block-widescreen gap100">
                  <div className="flexy-item flexy-image animate fadeIn relative" data-order={6}>
                    <img src="/assets/img/selector/body-contouring.jpg" className="top flexy-image box-shadow-smooth" alt="Med Spa Plantation, FL  Plantation" />
                  </div>
                  <div className="flexy-item pv75-desktop">
                    <h2 className="title-md white uppercase animate fadeIn mb25">Body Contouring </h2>
                    <h3 className="subhead accent-color animate fadeIn mb30">in Plantation, FL</h3>
                    <p className="mb30 animate fadeIn white">At Samsara, we have high-tech <strong>body
                      contouring</strong> treatments to help you realize your most sculpted, refined,
                      and youthful appearance throughout every inch of your body. Achieve multi-beneficial
                      results with the Evolve X system, designed to eliminate excess fat, firm skin, and
                      tone muscle simultaneously. Or, take a targeted approach with <em>Forma skin
                        tightening</em> or <em>Morpheus8 Body</em>. <em>Your desired shape is ready to
                          be revealed through body contouring at Samsara in Plantation, FL</em>. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />
      {/* <section className="mb175 pv50 bg-image animate zoomOutFadeInBg" style={{ '--bgImage': 'url(/assets/img/bg/marble-grey.jpg)' } as React.CSSProperties}>
        <div className="container">
          <div className="mw1300">
            <div className="mw850 text-center mb75">
              <img className="animate fadeUp mb50" src="/assets/img/icon.svg" alt="Med Spa Plantation, FL  Plantation" />
              <h3 className="title-md uppercase accent-color animate fadeIn"><span className="padding-up">For Every</span>
                <span className="title-lg ps10" style={{ color: '#004438' }}>Facet</span>
              </h3>
              <h2 className="subhead accent-color strikethrough animate fadeIn">Comprehensive Care Plans for Every
                Patient</h2>
            </div>
            <div className="flexy gap100 block-desktop">
              <div className="flexy-item flexy-image animate fadeIn">
                <img className="box-shadow-smooth" src="/assets/img/feature/home/04.jpg" alt="Med Spa Plantation, FL  Plantation" />
              </div>
              <div className="flexy-item animate fadeIn pv75-desktop">
                <p className="lead mb30">At our <strong>Med Spa</strong> Plantation patients receive our deep
                  passion for their well-being, which is the purpose behind each individual treatment that we
                  offer.</p>
                <p className="mb30">When your mind, body, and spirit work in harmony, you can realize your best life
                  experience. While you, as a whole, are unique, so are each of these components. Our menu has
                  been carefully curated to include individually tailored services designed for every facet of
                  you. <em>From rejuvenation and weight loss to cosmetic treatments to mental health, Samsara
                    offers a&nbsp; custom, comprehensive treatment plan for every patient’s personal needs</em>.
                </p>
                <Link href="/about/our-office/" className="button light box-shadow-smooth">Our Office <img
                  className="arrow" src="/assets/img/_defaults/arrow-right-highlight.svg"
                  alt="arrow right icon" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pv75 bg-image animate zoomOutBg" style={{ '--bgImage': 'url(/assets/img/bg/marble-green-01.jpg)' } as React.CSSProperties}>
        <div className="container ps75">
          <div className="mw1600">
            <div className="inline-schedule-consult">
              <div className="flexy gap100 block-desktop is-vcentered">
                <div className="flexy-item animate fadeIn text-center">
                  <h2 className="ipj-link mb20 title-md white uppercase" id="ipj-consult" data-ipj="Consultation">
                    Your Transformation Begins Here</h2>
                  <p className="lead accent-color mb20">Begin Your Samsara<br /> Consultation in Plantation</p>
                  <p className="white mw600">Reawaken your best self with a personalized plan that connects
                    aesthetics, wellness, and long-term confidence.</p>
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
