'use client';

import { useSkills } from '@/hooks/usePortfolioData';
import { getIconForSkill } from '@/lib/skillIcons';
import Section from './Section';
import Reveal from '../Reveal';

export default function AboutSection() {
  const { data: skills } = useSkills();

  return (
    <Section id="about" title="About" index="01">
      <Reveal className="space-y-4 leading-relaxed text-muted">
        <p>
          I&apos;m a <span className="text-accent">Software Engineer</span> and Computer Science student at
          Khulna University of Engineering &amp; Technology, passionate about building robust and scalable web applications.
        </p>
        <p>
          I have hands-on experience building full-stack applications with modern technologies like{' '}
          <span className="text-[rgb(var(--text-heading))]">React, Next.js, Firebase, and MongoDB</span>. My projects feature
          authentication systems, real-time updates, and highly optimized responsive layouts.
        </p>
        <p>
          I also worked as a QnA Teacher at Udvash Academic &amp; Admission Care for two years, which strengthened my
          communication and problem-solving skills. I believe in continuous learning and staying updated with the latest
          web development trends.
        </p>
        <p>
          I&apos;m open to <span className="text-[rgb(var(--text-heading))]">job opportunities</span> and{' '}
          <span className="text-[rgb(var(--text-heading))]">internships</span> where I can contribute, learn, and grow.
        </p>
      </Reveal>

      <div className="mt-8">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">Skills &amp; Tools</h3>
        <Reveal key={skills.length} stagger className="flex flex-wrap gap-3">
          {skills.map((skillStr, index) => {
            const skill = getIconForSkill(skillStr);
            return (
              <div
                key={index}
                className="surface-card flex items-center gap-2 px-3 py-2"
                title={skill.name}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`h-5 w-5 object-contain ${skill.invert ? 'invert' : ''}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <span className="text-sm text-[rgb(var(--text))]">{skill.name}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
