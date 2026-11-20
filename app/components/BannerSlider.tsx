"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

export interface BannerSlide {
  id: string;
  image: string;
  alt: string;
  link: string;
  isExternal?: boolean;
}

const DEFAULT_SLIDES: BannerSlide[] = [

  {
    id: 'Black-Friday',
    image: '/assets/img/Bannersliderimages/Samsara 023 final banner sized-02.webp',
    alt: 'Black Friday samsaramedspa Banner',
    link: 'https://samsaraaestheticswellness.myaestheticrecord.com/online-booking',
    isExternal: true,
  },
  {
    id: 'Cyber-Monday',
    image: '/assets/img/Bannersliderimages/Samsara 023 final banner sized-03.webp',
    alt: 'Cyber Monday Online Gift Card Offer',
    link: 'https://samsaraaestheticswellness.myaestheticrecord.com/online-booking/giftcards',
    isExternal: true,
  },
  {
    id: 'ai-experience',
    image: '/assets/img/Bannersliderimages/Samsara 023 final banner sized-01.webp',
    alt: 'Aesthetic Wellness AI Experience Banner',
    link: '/transformation/',
    isExternal: false,
  },

];

interface BannerSliderProps {
  slides?: BannerSlide[];
  autoSlideInterval?: number;
}

export default function BannerSlider({
  slides = DEFAULT_SLIDES,
  autoSlideInterval = 5000,
}: BannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Automatic sliding
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides, autoSlideInterval, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    if (touchDeltaX.current > 50) {
      prevSlide();
    } else if (touchDeltaX.current < -50) {
      nextSlide();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section className="banner-slider-section">
      <div
        className="banner-slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Promotional Banners Slider"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        {/* Slider track */}
        <div
          className="banner-slider-track"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            width: '100%',
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)',
            willChange: 'transform',
          }}
        >
          {slides.map((slide, idx) => {
            const content = (
              <img
                src={slide.image}
                alt={slide.alt}
                className="banner-slider-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            );

            return (
              <div
                key={slide.id}
                className="banner-slide"
              >
                {slide.isExternal ? (
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="banner-slide-link"
                    tabIndex={currentIndex === idx ? 0 : -1}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    href={slide.link}
                    className="banner-slide-link"
                    tabIndex={currentIndex === idx ? 0 : -1}
                  >
                    {content}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows (Desktop) */}
        {totalSlides > 1 && (
          <>
            <button
              type="button"
              className="banner-nav-btn banner-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous Banner"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="banner-nav-btn banner-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next Banner"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="banner-dots">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`banner-dot ${currentIndex === idx ? 'is-active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={currentIndex === idx ? 'true' : 'false'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
