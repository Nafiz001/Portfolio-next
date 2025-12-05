'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/images/profile/nafiz.jpg" 
              alt="Nafiz Ahmed"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-pink-500/50 group-hover:scale-110 transition-transform"
            />
            <span className="font-bold text-lg text-gray-900 dark:text-white tracking-wide">
              NAFIZ AHMED
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-900 dark:text-white font-semibold hover:text-pink-500 dark:hover:text-pink-500 transition-colors">
              HOME
            </Link>
            <Link href="#about" className="text-gray-900 dark:text-white font-semibold hover:text-pink-500 dark:hover:text-pink-500 transition-colors">
              ABOUT
            </Link>
            <Link href="#projects" className="text-gray-900 dark:text-white font-semibold hover:text-pink-500 dark:hover:text-pink-500 transition-colors">
              PROJECTS
            </Link>
            <Link href="#contact" className="text-gray-900 dark:text-white font-semibold hover:text-pink-500 dark:hover:text-pink-500 transition-colors">
              CONTACT
            </Link>
          </nav>

          <button 
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="#home" className="block text-gray-900 dark:text-white font-semibold hover:text-pink-500 transition-colors">
              HOME
            </Link>
            <Link href="#about" className="block text-gray-900 dark:text-white font-semibold hover:text-pink-500 transition-colors">
              ABOUT
            </Link>
            <Link href="#projects" className="block text-gray-900 dark:text-white font-semibold hover:text-pink-500 transition-colors">
              PROJECTS
            </Link>
            <Link href="#contact" className="block text-gray-900 dark:text-white font-semibold hover:text-pink-500 transition-colors">
              CONTACT
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
