'use client';

import { useState } from 'react';
import Scene3D from '@/components/Scene3D';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import SocialSidebar from '@/components/SocialSidebar';
import { AnimatePresence, motion } from 'framer-motion';

export type ViewState = 'home' | 'about' | 'education' | 'projects' | 'contact' | 'experience' | 'achievements';

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  
  return (
    <>
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
            <motion.div key="about" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-full p-4 pt-24 pb-24 md:p-8 md:pt-24 md:pb-8 max-w-7xl mx-auto overflow-y-scroll custom-scrollbar pointer-events-auto">
              <About />
            </motion.div>
          )}
          {currentView === 'projects' && (
            <motion.div key="projects" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-full p-4 pt-24 pb-24 md:p-8 md:pt-24 md:pb-8 max-w-7xl mx-auto overflow-y-scroll custom-scrollbar pointer-events-auto">
              <Projects />
            </motion.div>
          )}
          {currentView === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-full p-4 pt-24 pb-24 md:p-8 md:pt-24 md:pb-8 max-w-7xl mx-auto overflow-y-scroll custom-scrollbar pointer-events-auto">
              <Contact />
            </motion.div>
          )}
          {currentView === 'education' && (
            <motion.div key="education" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-full p-4 pt-24 pb-24 md:p-8 md:pt-24 md:pb-8 max-w-7xl mx-auto overflow-y-scroll custom-scrollbar pointer-events-auto">
              <Education />
            </motion.div>
          )}
          {currentView === 'experience' && (
            <motion.div key="experience" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-full p-4 pt-24 pb-24 md:p-8 md:pt-24 md:pb-8 max-w-7xl mx-auto overflow-y-scroll custom-scrollbar pointer-events-auto">
              <Experience />
            </motion.div>
          )}
          {currentView === 'achievements' && (
            <motion.div key="achievements" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-full p-4 pt-24 pb-24 md:p-8 md:pt-24 md:pb-8 max-w-7xl mx-auto overflow-y-scroll custom-scrollbar pointer-events-auto">
              <Achievements />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
