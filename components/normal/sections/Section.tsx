'use client';

import { ReactNode } from 'react';
import Reveal from '../Reveal';

interface SectionProps {
  id: string;
  title: string;
  index: string;
  children: ReactNode;
}

// Standard wrapper for each normal-mode section: anchor id, scroll offset, a divider, and a
// numbered header so sections are visually distinct from one another.
export default function Section({ id, title, index, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-[rgb(var(--border-subtle))]/40 py-14 first:border-t-0 first:pt-0"
    >
      <Reveal>
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-sm font-bold text-accent">{index}</span>
          <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-[rgb(var(--text-heading))]">
            {title}
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-[rgb(var(--brand))]/40 to-transparent" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
