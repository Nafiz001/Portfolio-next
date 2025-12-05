'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGsapAnimations = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Smooth scroll parallax effect for hero section
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      gsap.to(heroSection, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        opacity: 0.3,
        y: 100,
      });
    }

    // Stagger animation for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    if (skillTags.length > 0) {
      gsap.fromTo(
        skillTags,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillTags[0],
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Parallax effect for project images
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach((image) => {
      gsap.to(image, {
        y: -10,
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    // Animate social sidebar on scroll
    const socialSidebar = document.querySelector('.social-sidebar');
    if (socialSidebar) {
      gsap.fromTo(
        socialSidebar,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out',
        }
      );
    }

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
