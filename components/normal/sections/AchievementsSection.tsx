'use client';

import { FaTrophy, FaMedal } from 'react-icons/fa';
import { useAchievements } from '@/hooks/usePortfolioData';
import Section from './Section';
import Reveal from '../Reveal';

export default function AchievementsSection() {
  const { data: achievements } = useAchievements();

  return (
    <Section id="achievements" title="Achievements" index="05">
      <Reveal key={achievements.length} stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {achievements.map((ach, i) => (
          <div key={ach.id ?? ach.title} className="surface-card relative overflow-hidden p-5">
            <div className="absolute -right-3 -top-3 text-[rgb(var(--brand))]/15">
              {i % 2 === 0 ? <FaTrophy className="h-16 w-16" /> : <FaMedal className="h-16 w-16" />}
            </div>
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">{ach.year}</span>
              <h3 className="mt-1 pr-10 font-semibold leading-tight text-[rgb(var(--text-heading))]">{ach.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{ach.event}</p>
              {ach.badge && (
                <span className="mt-4 inline-block rounded-full bg-[rgb(var(--brand))]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                  {ach.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
