'use client';

import { useEducation } from '@/hooks/usePortfolioData';
import Section from './Section';
import Reveal from '../Reveal';

export default function EducationSection() {
  const { data: education } = useEducation();

  return (
    <Section id="education" title="Education" index="04">
      <Reveal key={education.length} stagger className="space-y-3">
        {education.map((item) => (
          <div key={item.id ?? item.degree} className="surface-card flex gap-4 p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--brand))]/10 text-accent">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                {item.date || item.year}
              </span>
              <h3 className="mt-0.5 font-semibold text-[rgb(var(--text-heading))]">{item.degree}</h3>
              <p className="mt-0.5 text-sm text-accent">{item.institution}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
