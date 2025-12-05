'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SocialSidebar from '@/components/SocialSidebar';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

export default function Home() {
  useGsapAnimations();
  
  return (
    <main className="relative">
      <SocialSidebar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
