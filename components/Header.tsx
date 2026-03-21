'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if background should be glass (scrolled)
      setIsScrolled(currentScrollY > 50);

      // Determine scroll direction for visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
        paddingTop: isScrolled ? '12px' : '24px',
        paddingBottom: isScrolled ? '12px' : '24px',
      }}
      transition={{
        y: { duration: isVisible ? 0.5 : 0, ease: isVisible ? "easeOut" : "linear" },
        backgroundColor: { duration: 0.4 },
        paddingTop: { duration: 0.4 },
        paddingBottom: { duration: 0.4 }
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/images/profile/nafiz.jpg"
                alt="Nafiz Ahmed"
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover ring-2 ring-pink-500/50 group-hover:ring-pink-500 transition-all"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="font-black text-lg md:text-xl text-white tracking-[0.2em] uppercase hidden sm:block">
              MD. NAFIZ AHMED
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-white font-bold text-sm tracking-widest hover:text-pink-400 transition-all group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pb-10 space-y-6 pt-10 border-t border-white/10 glass-card rounded-3xl"
            >
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white font-black text-2xl tracking-[0.3em] hover:text-pink-500 transition-all uppercase"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
