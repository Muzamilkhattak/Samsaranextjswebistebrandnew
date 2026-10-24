"use client";
import React, { useState, useEffect, useRef } from 'react';

interface Review {
  name: string;
  timeAgo: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    name: "Melissa Seide",
    timeAgo: "2 months ago",
    text: "Love it here super new to the med spa experience but Erika is amazing she listens and makes sure that I’m comfortable. Of course the results are also amazing they have a new customer locked in! Big shout out to Toni as well for being super accommodating and helpful she introduced me to this process and I’m super happy I did it! 10/10"
  },
  {
    name: "Melanie Alston",
    timeAgo: "3 months ago",
    text: "I had a wonderful first time experience with a relaxing Hydrofacial And derma plane with Melissa. My experience and welcome From the first time I stepped in the door was amazing. I would highly recommend the secret little gem in Plantation Walk. So professional and you leave glowing and wanting to come back for more."
  },
  {
    name: "Alan Cohen",
    timeAgo: "4 months ago",
    text: "I had a wonderful experience at Samsara Aesthetics and Wellness Center. The space is beautiful, well appointed, and welcoming from the moment you walk in. Everyone on the team was warm, professional, and genuinely friendly. Ericka Laurent was absolutely incredible. With just a little Botox and a little filler, I feel ten years younger and completely refreshed."
  },
  {
    name: "Veronika Vernachio",
    timeAgo: "5 months ago",
    text: "The perfect recovery, treatment kickstart my immune system! The staff there was so nice and personable. They made me feel so welcomed. Highly recommend them to anybody looking for treatments in the area! I will definitely be going back."
  },
  {
    name: "N. Fagan",
    timeAgo: "5 months ago",
    text: "Michelle did a hydrofacial and my face looks and feels amazing. Highly recommend."
  },
  {
    name: "Elisa Dieme-Erlich",
    timeAgo: "6 months ago",
    text: "Samsara Aesthetics is absolutely beautiful, every detail is thoughtfully done. The space is trendy, modern, and super clean. The staff is amazing from top to bottom and makes you feel comfortable the entire time. I got a hydrafacial, tried Botox for the first time, and enjoyed the most relaxing massage. I loved everything so much that I decided to invest in my self-care and signed up for the membership and it is totally worth it!"
  },
  {
    name: "Gilda Burr",
    timeAgo: "6 months ago",
    text: "Maureen, the therapist was super cool. She worked out the knots under the shoulder blades and the kink in my neck. I walked out of there so relaxed. Also the hydro facial was much needed. Thank you, Michelle! Made it a spa day!! It was much needed."
  },
  {
    name: "Kelly Hubbard",
    timeAgo: "7 months ago",
    text: "Highly satisfied and strongly recommend! They listened to all of my concerns and addressed each one individually. Michelle gave me a fantastic Hydrafacial!! 6 stars!"
  },
  {
    name: "Emma Gagnon",
    timeAgo: "8 months ago",
    text: "The HydraFacial with Michelle left my face feeling soothed, smooth, and refreshed, while the massage with Maureen tackled the tight spots all over my body and left me relaxed. Thanks ladies!!"
  },
  {
    name: "Martha Castells",
    timeAgo: "9 months ago",
    text: "Beautiful clinic and Ericka is an amazing injector! My go to nurse for Botox and much more!"
  },
  {
    name: "Emma",
    timeAgo: "10 months ago",
    text: "Today was my first time visiting Samsara and I honestly couldn’t have asked for a better experience. From the moment I walked in everyone was so welcoming, and very knowledgeable. I felt so comfortable, and so happy with my results already. I will definitely be back. Thank you, Samsara!!!"
  },
  {
    name: "Vicky",
    timeAgo: "11 months ago",
    text: "Beyond grateful to be a part of the Samsara clientele as their focus is on wellness, not just cosmetics. Care and thought is put into the products they use in addition to the services being done to all clients. Health is priority here!"
  },
  {
    name: "Liesl",
    timeAgo: "1 year ago",
    text: "Absolutely delighted with the professionalism behind every esthetician in this business. Great quality of work. I’m so happy with all services I’ve got done and definitely a returning customer!"
  },
  {
    name: "Shaista",
    timeAgo: "1 year ago",
    text: "The Forma facial was a calm and relaxing experience. The staff is knowledgeable and the office setting is beautiful. I highly recommend Samsara for anyone looking for a wonderful aesthetic experience."
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextReview();
    } else if (diff < -50) {
      prevReview();
    }
    touchStartX.current = null;
  };

  return (
    <section className="mb150 testimonials-section">
      <div className="container">
        <div className="mb50 relative">
          <h2 className="highlight-color animate fadeIn text-center title-lg uppercase testimonials-header">
            Patient Testimonials
          </h2>

          <div 
            className="grc-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="testimonialSwiper">
              <div 
                className="swiper-wrapper"
                style={{
                  display: 'flex',
                  transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: '100%'
                }}
              >
                {REVIEWS.map((review, idx) => (
                  <div 
                    key={idx} 
                    className="swiper-slide"
                    style={{ width: '100%', flexShrink: 0 }}
                  >
                    <div className="grc-card">
                      <div className="grc-header">
                        <div className="grc-author">
                          <p className="grc-name">{review.name}</p>
                          <p className="grc-subtitle">{review.timeAgo}</p>
                        </div>
                        <div className="grc-nav-arrows">
                          <div 
                            className="swiper-button-testimonial-prev grc-arrow grc-arrow-prev" 
                            role="button" 
                            aria-label="Previous review"
                            onClick={(e) => { e.preventDefault(); prevReview(); }}
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M6.5 8L3.5 5L6.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div 
                            className="swiper-button-testimonial-next grc-arrow grc-arrow-next" 
                            role="button" 
                            aria-label="Next review"
                            onClick={(e) => { e.preventDefault(); nextReview(); }}
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M3.5 2L6.5 5L3.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grc-bubble-box">
                        <div className="grc-rating-row">
                          <div className="grc-stars-wrap">
                            <div className="grc-stars-icons">
                              {[...Array(5)].map((_, starIdx) => (
                                <svg key={starIdx} className="grc-star" width="18" height="18" viewBox="0 0 24 24" fill="#fbbc04">
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                </svg>
                              ))}
                            </div>
                            <svg className="grc-verified" width="16" height="16" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="#1a73e8"/>
                              <path d="M6.5 10.5L4 8l.7-.7L6.5 9.1l4.8-4.8.7.7z" fill="#fff"/>
                            </svg>
                          </div>
                          
                          <svg className="grc-google-g" width="22" height="22" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                            <path fill="#34A853" d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.77-4.59l-7.98-6.19A23.99 23.99 0 000 24c0 3.77.9 7.35 2.56 10.54l7.97-5.95z"/>
                            <path fill="#FBBC05" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.95C6.51 42.62 14.62 48 24 48z"/>
                          </svg>
                        </div>
                        
                        <p className="grc-review-text">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center grc-btn-wrap">
            <a 
              href="https://g.page/r/CYK0U7hErKK0EBM/review" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="grc-google-review-btn"
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#34A853" d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.77-4.59l-7.98-6.19A23.99 23.99 0 000 24c0 3.77.9 7.35 2.56 10.54l7.97-5.95z"/>
                <path fill="#FBBC05" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.95C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span>Leave a Google Review</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
