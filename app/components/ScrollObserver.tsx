"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).toggleAccordionItem = function (element: HTMLElement) {
        const item = element.closest('.accordion__item');
        const answer = item?.querySelector('.accordion__answer') as HTMLElement;
        if (!item || !answer) return;
        
        const isOpen = item.classList.contains('open');
        
        const parentAccordion = item.closest('.accordion');
        if (parentAccordion) {
          parentAccordion.querySelectorAll('.accordion__item').forEach(i => {
            i.classList.remove('open');
            const a = i.querySelector('.accordion__answer') as HTMLElement;
            if (a) {
              a.style.maxHeight = '0px';
              a.style.opacity = '0';
            }
          });
        }
        
        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = '500px';
          answer.style.opacity = '1';
        }
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Give React a moment to render the DOM for the new route
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]); // Re-run whenever the route changes!

  return null;
}
