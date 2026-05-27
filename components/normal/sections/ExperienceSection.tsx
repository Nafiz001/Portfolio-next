'use client';

import { useExperience } from '@/hooks/usePortfolioData';
import Section from './Section';
import Reveal from '../Reveal';

export default function ExperienceSection() {
  const { data: experiences } = useExperience();

  return (
    <Section id="experience" title="Experience" index="02">
      <Reveal key={experiences.length} stagger className="space-y-3">
        {experiences.map((exp) => (
          <div
            key={exp.id ?? exp.title}
            className="surface-card group grid grid-cols-1 gap-3 p-5 sm:grid-cols-[140px_1fr]"
          >
            <span className="pt-1 text-xs font-semibold uppercase tracking-widest text-muted">
              {exp.date}
            </span>
            <div>
              <h3 className="font-semibold text-[rgb(var(--text-heading))]">
                {exp.title}
                {exp.company && (
                  <>
                    {' · '}
                    {exp.url ? (
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" className="link-accent">
                        {exp.company}
                      </a>
                    ) : (
                      <span className="text-accent">{exp.company}</span>
                    )}
                  </>
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{exp.description}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
