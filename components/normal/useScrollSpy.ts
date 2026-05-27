'use client';

import { useState, useEffect } from 'react';

// Reports the id of the section currently in view, using IntersectionObserver.
// Avoids pulling GSAP/ScrollTrigger into the lightweight 2D bundle.
export function useScrollSpy(ids: string[], rootMargin = '-45% 0px -50% 0px') {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin, threshold: 0 }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
