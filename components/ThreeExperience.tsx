'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import SocialSidebar from '@/components/SocialSidebar';

// Lazy-load the Three.js scene so its bundle is only fetched when 3D mode is entered.
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

export type ViewState = 'home' | 'about' | 'education' | 'projects' | 'contact' | 'experience' | 'achievements';

const panelClass =
  'w-full h-full p-4 pt-24 pb-24 md:p-8 md:pt-24 md:pb-8 max-w-7xl mx-auto overflow-y-scroll custom-scrollbar pointer-events-auto';
const panelMotion = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, delay: 0.5 },
};

export default function ThreeExperience() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [introFinished, setIntroFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Cinematic Failsafe: Force fade out the video after 6.5s in case the browser blocks autoplay
    const timer = setTimeout(() => setIntroFinished(true), 6500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current && !introFinished) {
      videoRef.current.volume = 0.3; // 30% cinematic volume

      // Attempt unmuted autoplay. Browsers strictly block this without prior interaction.
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If the browser strictly blocked the audio, fall back to playing muted so the visual intro doesn't freeze
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, [introFinished]);

  return (
    <div className="crt fixed inset-0 overflow-hidden bg-[#050505]">
      {/* Intro Sequence Video */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-auto"
          >
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dfdxu0bli/video/upload/f_auto,q_auto/v1774190107/2026-03-22_20-32-30_twymef.mp4"
              playsInline
              onEnded={() => setIntroFinished(true)}
              className="w-full h-full object-contain md:object-cover"
            />
            {/* Cinematic Overlay HUD */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

            {/* Mobile-only Top HUD */}
            <div className="absolute top-16 md:hidden flex flex-col items-center gap-2 px-4 text-center w-full z-10 pointer-events-none">
              <div className="text-[#00f0ff]/80 font-mono text-[10px] tracking-widest uppercase animate-pulse">
                [ SECURE UPLINK ESTABLISHED ]
              </div>
              <div className="w-[100px] h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent"></div>
            </div>

            <div className="absolute bottom-12 flex flex-col items-center gap-4 w-full px-4 z-10 text-center">
              <div className="text-[#00f0ff] font-mono text-[10px] md:text-sm tracking-widest md:tracking-[0.5em] animate-pulse">
                INITIALIZING SYSTEM DATA CORE...
              </div>
              <button
                onClick={() => setIntroFinished(true)}
                className="px-6 py-2 border border-white/20 text-white/50 text-xs font-mono tracking-widest hover:bg-white/10 hover:text-white transition-all rounded backdrop-blur-sm"
              >
                [ OVERRIDE SEQUENCE ]
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The 3D Hub Background */}
      <Scene3D currentView={currentView} setCurrentView={setCurrentView} />

      {/* Global overlay layout - must be pointer-events-none so we can click the 3D canvas underneath */}
      <main className="absolute inset-0 w-full h-screen overflow-hidden flex items-center justify-center pointer-events-none z-10">
        <div className="pointer-events-auto">
          <SocialSidebar />
        </div>

        {/* Navigation / Back button when not in home view */}
        <AnimatePresence>
          {currentView !== 'home' && (
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => setCurrentView('home')}
              className="absolute top-8 left-8 z-50 px-6 py-2 border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 bg-black/50 backdrop-blur-md flex items-center gap-2 font-bold tracking-widest text-sm uppercase rounded transition-colors shadow-[0_0_10px_rgba(0,240,255,0.3)] pointer-events-auto"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO HUB
            </motion.button>
          )}
        </AnimatePresence>

        {/* HTML Content Overlays */}
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="w-full absolute inset-0 pointer-events-none">
              <Hero onBrowse={() => setCurrentView('projects')} />
            </motion.div>
          )}
          {currentView === 'about' && (
            <motion.div key="about" {...panelMotion} className={panelClass}>
              <About />
            </motion.div>
          )}
          {currentView === 'projects' && (
            <motion.div key="projects" {...panelMotion} className={panelClass}>
              <Projects />
            </motion.div>
          )}
          {currentView === 'contact' && (
            <motion.div key="contact" {...panelMotion} className={panelClass}>
              <Contact />
            </motion.div>
          )}
          {currentView === 'education' && (
            <motion.div key="education" {...panelMotion} className={panelClass}>
              <Education />
            </motion.div>
          )}
          {currentView === 'experience' && (
            <motion.div key="experience" {...panelMotion} className={panelClass}>
              <Experience />
            </motion.div>
          )}
          {currentView === 'achievements' && (
            <motion.div key="achievements" {...panelMotion} className={panelClass}>
              <Achievements />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
