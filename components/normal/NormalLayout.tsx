'use client';

import { useMemo } from 'react';
import Sidebar, { NavSection } from './Sidebar';
import { useScrollSpy } from './useScrollSpy';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import AchievementsSection from './sections/AchievementsSection';
import ContactSection from './sections/ContactSection';

const SECTIONS: NavSection[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function NormalLayout() {
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const activeId = useScrollSpy(ids);

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-[rgb(var(--ink))] text-[rgb(var(--text))]">
      {/* Ambient glow — fixed layer (not an ancestor of the sticky sidebar) so glass cards have depth. */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-[rgb(var(--brand))]/10 blur-[130px]" />
        <div className="absolute top-1/3 -left-24 h-[26rem] w-[26rem] rounded-full bg-[rgb(var(--brand))]/[0.06] blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[rgb(var(--brand-soft))]/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:flex lg:gap-12 lg:px-12 lg:py-0">
        {/* Left: fixed sidebar on desktop, stacked header on mobile */}
        <div className="lg:w-2/5 lg:max-w-md lg:shrink-0">
          <Sidebar sections={SECTIONS} activeId={activeId} onNavigate={handleNavigate} />
        </div>

        {/* Right: scrolling content. min-w-0 lets text wrap instead of overflowing the flex row. */}
        <main className="mt-16 min-w-0 lg:mt-0 lg:flex-1 lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <AchievementsSection />
          <ContactSection />

          <footer className="border-t border-[rgb(var(--border-subtle))] py-8 text-xs text-muted">
            Built with Next.js, React &amp; Tailwind CSS. Designed &amp; coded by Md. Nafiz Ahmed.
          </footer>
        </main>
      </div>
    </div>
  );
}
