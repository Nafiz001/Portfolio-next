'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

export default function Home() {
  useGsapAnimations();
  
  return (
    <>
      <Header />
      <main className="relative">
        <SocialSidebar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
