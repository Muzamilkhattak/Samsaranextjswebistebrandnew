"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TestimonialSlider from './components/TestimonialSlider';

export default function Home() {
  const [activeProcedure, setActiveProcedure] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [showAiPopup, setShowAiPopup] = useState(false);

  useEffect(() => {
    document.body.classList.add('home');
    const timer = setTimeout(() => {
      setShowAiPopup(true);
    }, 1000);

    // Hero masthead image slideshow (Ken Burns effect)
    const images = document.querySelectorAll<HTMLImageElement>('.home .masthead__image img');
    let slideshowInterval: NodeJS.Timeout | undefined;

    if (images.length > 1) {
      const updateImageMargin = () => {
        images.forEach((img) => {
          const w = img.offsetWidth || img.naturalWidth;
          if (w) img.style.marginLeft = `${-w / 2}px`;
        });
      };

      updateImageMargin();
      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', updateImageMargin);
        }
      });
      window.addEventListener('resize', updateImageMargin);

      // Ensure first image has 'fx' class initially
      images[0].classList.add('fx');

      let i = 1;
      const numberOfImages = images.length;

      slideshowInterval = setInterval(() => {
        if (i === numberOfImages) {
          i = 0;
        }

        images[i].classList.add('fx');

        if (i === 0) {
          images[numberOfImages - 2].classList.remove('fx');
        } else if (i === 1) {
          images[numberOfImages - 1].classList.remove('fx');
        } else if (i > 1) {
          images[i - 2].classList.remove('fx');
        }

        i++;
      }, 7000);

      return () => {
        document.body.classList.remove('home');
        clearTimeout(timer);
        if (slideshowInterval) clearInterval(slideshowInterval);
        window.removeEventListener('resize', updateImageMargin);
      };
    }

    return () => {
      document.body.classList.remove('home');
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <section className="masthead pattern-bg-home bg-image animate zoomOutFadeInBg overflow-visible box-shadow-smooth mb175" style={{ '--bgImage': 'url(/assets/img/bg/marble-grey.jpg)' } as React.CSSProperties}>
        <div className="masthead__image box-shadow-smooth">
          <img className="fx" src="/assets/img/masthead/home/01.jpg" alt="Med Spa Plantation, FL  Plantation" />
          <img src="/assets/img/masthead/home/02.jpg" alt="Med Spa Plantation, FL  Plantation" />
          <img src="/assets/img/masthead/home/03.jpg" alt="Med Spa Plantation, FL  Plantation" />
          <img src="/assets/img/masthead/home/04.jpg" alt="Med Spa Plantation, FL  Plantation" />
        </div>
        <div className="masthead__content text-center">
          <img className="animate fadeUp mb35" src="/assets/img/icon.svg" alt="Med Spa Plantation, FL  Plantation" />
          <p className="animate fadeUp title-home uppercase accent-color mb35 white-tablet">Rooted in <span className="title-home-green block pt30" style={{ color: '#004438' }}>Rebirth</span></p>
          <h1 className="animate fadeUp accent-color subhead white-tablet">Holistic Aesthetics <span className="block animate strikethrough pt25-tablet">&amp; Wellness Treatments</span> </h1>
        </div>
      </section>
      <section className="mb175">
        <div className="container">
          <div className="text-center animate fadeIn" style={{ margin: '0 auto' }}>
            <Link href="/transformation/" className="ai-banner-link">
              <img
                src="/assets/img/bg/Aesthetic Wellness AI Experience Popup Banner.webp"
                alt="Aesthetic Wellness AI Experience Banner"
                className="ai-banner-img"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="mb225">
        <div className="container">
          <div className="mw1300">
            <div className="text-center mb75">
              <img className="animate fadeUp mb50" src="/assets/img/icon.svg" alt="Med Spa Plantation, FL  Plantation" />
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
                <Link href="/consultation/" className="button box-shadow-smooth">Book Now <img className="arrow"
                  src="/assets/img/_defaults/arrow-right-white.svg" alt="arrow right icon" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb200">
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
      <section className="mb175 pv50 bg-image animate zoomOutFadeInBg" style={{ '--bgImage': 'url(/assets/img/bg/marble-grey.jpg)' } as React.CSSProperties}>
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
      </section>
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
                  <div className="contact-form">
                    <form noValidate action="https://formspree.io/f/mldenkyz" method="POST" className="form" name="contactForm" aria-label="Contact Form">
                      <div className="input-wrap text is-one-third">
                        <input name="FullName" aria-label="Full Name" placeholder="Full Name*" type="text" aria-required="true" required />
                      </div>
                      <div className="input-wrap text is-one-third">
                        <input pattern="[\+]?[0-9]{0,2}[\-\s\.]?[\(]?[0-9]{3}[\)]?[\-\s\.]?[0-9]{3}[\-\s\.]?[0-9]{4,6}" name="Phone" aria-label="Phone Number" placeholder="Phone Number*" type="tel" aria-required="true" required />
                      </div>
                      <div className="input-wrap text is-one-third">
                        <input name="Email" aria-label="Email Address" placeholder="Email Address*" type="email" aria-required="true" required />
                      </div>
                      <div className="input-wrap is-one-third">
                        <span className="select">
                          <select id="Schedule" name="ProcedureOfInterest" aria-label="Procedure of Interest" aria-required="true" required defaultValue="">
                            <option value="" disabled>Procedure of Interest*</option>
                            <option value="Injectables">Injectables</option>
                            <option value="Dermal Fillers and Neuromodulators">Dermal Fillers and
                              Neuromodulators</option>
                            <option value="PRP/PRF Treatments">PRP/PRF Treatments</option>
                            <option value="Laser and Energy Treatments">Laser and Energy Treatments
                            </option>
                            <option value="Plasma Skin Tightening">Plasma Skin Tightening</option>
                            <option value="IPL">IPL</option>
                            <option value="Morpheus8">Morpheus8</option>
                            <option value="Laser Hair Removal ">Laser Hair Removal </option>
                            <option value="Forma">Forma</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Physician Guided Weight Loss Therapy">Physician Guided
                              Weight Loss Therapy</option>
                            <option value="Massage Therapy">Massage Therapy</option>
                            <option value="IV Hydration">IV Hydration</option>
                            <option value="Injectables for Wellness">Injectables for Wellness
                            </option>
                            <option value="Lymphatic Drainage ">Lymphatic Drainage </option>
                            <option value="Life Coaching and Mental Wellness">Life Coaching and
                              Mental Wellness</option>
                            <option value="Skincare">Skincare</option>
                            <option value="Chemical Peels">Chemical Peels</option>
                            <option value="HydraFacials">HydraFacials</option>
                          </select>
                        </span>
                      </div>
                      <div className="input-wrap is-one-third">
                        <span className="select">
                          <select id="HearOfUs" name="HearOfUs" aria-label="How Did You Hear Of Us*" required defaultValue="">
                            <option value="" disabled>How Did You Hear of Us?*</option>
                            <option value="Website">Website</option>
                            <option value="Friend">Friend</option>
                            <option value="Google Search">Google Search</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Previous Patient">Previous Patient</option>
                            <option value="Other">Other</option>
                          </select>
                        </span>
                      </div>
                      <div className="input-wrap is-one-third">
                        <span className="select">
                          <select id="BestTime" name="BestTime" aria-label="Best Time To Reach You" required defaultValue="">
                            <option value="" disabled>Best Time To Reach You*</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                          </select>
                        </span>
                      </div>
                      <div className="input-wrap text is-full">
                        <textarea id="Message" name="Message" aria-label="Message" data-hj-whitelist placeholder="How can we assist your aesthetic needs?" maxLength={280} required defaultValue={""} />
                      </div>
                      <div className="input-wrap is-full checkbox mb10" style={{ paddingTop: 0 }}>
                        <input name="TextOptin" aria-label="Yes Opt-in to Text" placeholder="Yes Opt-in to Text" type="checkbox" defaultValue="Yes Opt-in to Text" />
                        <p className="optin-terms">By checking this box you agree to receive SMS messages
                          from Samsara Aesthetics &amp; Wellness regarding appointments and specials.
                          Standard messaging rates may apply</p>
                      </div>
                      <div className="input-wrap text is-full" style={{ display: 'none' }}>
                        <input name="ZipCode" aria-label="Zip Code (Do Not Fill Out)" aria-hidden="true" placeholder="Zip Code*" type="text" />
                      </div>
                      <div className="input-wrap">
                        <button type="submit" aria-label="Submit Form" className="button light box-shadow-smooth mb0">Submit <img src="/assets/img/_defaults/arrow-right-highlight.svg" title="Submit Form" alt="right arrow" /></button>
                      </div>
                      <div className="input-wrap">
                        <span className="title-sm text-center consult-phone">
                          <a className="tel-link" href="tel:(954) 688-7255" onClick={() => typeof window !== 'undefined' && (window as any).eval(`gtag('event', 'phone_number_click');`)} aria-label="Call Samsara Aesthetics & Wellness">(954) 688-7255</a>
                        </span>
                      </div>
                      <input type="hidden" name="gtagevent" defaultValue="contact_form" />
                      <input type="hidden" name="LeadSource" defaultValue="Organic" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="call-widget">
        <a href="tel:+19546887255" aria-label="Call us at (954) 688-7255">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          <span className="call-widget-tooltip">(954) 688-7255</span>
        </a>
      </div>

      {/* AI Experience Popup Banner */}
      <div
        className={`ai-experience-popup-overlay ${showAiPopup ? 'show' : ''}`}
        id="aiExperiencePopup"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowAiPopup(false);
          }
        }}
      >
        <div className="ai-experience-popup-container">
          <button
            className="ai-experience-popup-close"
            id="aiExperiencePopupClose"
            aria-label="Close Popup"
            onClick={() => setShowAiPopup(false)}
          >
            &times;
          </button>
          <Link
            href="/transformation/"
            className="ai-experience-popup-link"
            onClick={() => setShowAiPopup(false)}
          >
            <img
              src="/assets/img/bg/Aesthetic Wellness AI Experience Popup Banner.webp"
              alt="Aesthetic Wellness AI Experience Popup Banner"
              className="ai-experience-popup-img"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
