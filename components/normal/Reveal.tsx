'use client';

import { useRef, useEffect, useLayoutEffect, ReactNode } from 'react';
import { gsap } from 'gsap';

// useLayoutEffect on the client (set the initial hidden state before paint, so there's no flash),
// falls back to useEffect on the server to silence the SSR warning.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Animate direct children in sequence rather than the block as a whole. */
  stagger?: boolean;
  /** Vertical offset (px) the elements rise from. */
  y?: number;
  /** Initial delay before the reveal starts. */
  delay?: number;
}

export default function Reveal({ children, className, stagger = false, y = 36, delay = 0 }: RevealProps) {
  'use no memo'; // opt out of React Compiler — it interferes with GSAP's imperative DOM mutations in the effect
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // For reduced-motion users, drop the vertical slide but keep a gentle fade (fades are
    // considered safe) so content still animates in.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fromY = reduced ? 0 : y;

    const targets: gsap.TweenTarget = stagger ? gsap.utils.toArray<HTMLElement>(el.children) : el;

    // Hide before first paint to avoid a flash of un-animated content.
    gsap.set(targets, { opacity: 0, y: fromY });

    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !played) {
          played = true;
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: reduced ? 0.4 : 0.8,
            ease: 'power3.out',
            delay,
            stagger: stagger ? 0.12 : 0,
            clearProps: 'transform',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
