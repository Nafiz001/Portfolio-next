'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Artisan's Echo",
      subtitle: "Art Marketplace Platform",
      description: "A modern, responsive art marketplace platform built with React where artists showcase their work and users discover art. Features Firebase authentication, real-time MongoDB operations, advanced search and filtering, and dark/light theme toggle.",
      image: "/images/projects/artify.png",
      liveUrl: "https://artify-client-side.web.app/",
      githubClient: "https://github.com/Nafiz001/artify-client-side",
      githubServer: "https://github.com/Nafiz001/artify-server-side",
      tags: ["React", "Firebase", "MongoDB", "Tailwind CSS"],
      features: [
        "Secure authentication with Google OAuth and email/password",
        "Interactive engagement system with real-time like counts",
        "Advanced search and category-based filtering",
        "Dark/light theme toggle with localStorage persistence"
      ]
    },
    {
      title: "ChefKit",
      subtitle: "Restaurant-Quality Meal Kits Platform",
      description: "Full-stack Next.js 16 application featuring a meal kit marketplace with authentication and content management. Built with App Router, NextAuth.js, and MongoDB for seamless performance and security.",
      image: "/images/projects/chefkit.png",
      liveUrl: "https://chefkit-client-side.vercel.app/",
      githubClient: "https://github.com/Nafiz001/chefkit-client-side",
      githubServer: "https://github.com/Nafiz001/chefkit-server-side",
      tags: ["Next.js 16", "NextAuth.js", "MongoDB", "Vercel"],
      features: [
        "Server-side rendering with Next.js App Router",
        "NextAuth.js authentication with Google OAuth",
        "Comprehensive search, filter, and sorting functionality",
        "Complete CRUD operations with RESTful API"
      ]
    },
    {
      title: "GameHub",
      subtitle: "Gaming Platform",
      description: "A modern, responsive gaming platform enabling users to browse, discover, and explore video games. Features user authentication, search functionality, and smooth animations for enhanced user engagement.",
      image: "/images/projects/gamehub.png",
      liveUrl: "https://my-gamehub-165d0.web.app/",
      githubClient: "https://github.com/Nafiz001/MY-GAMEHUB",
      tags: ["React", "Firebase", "CSS3"],
      features: [
        "Responsive UI with seamless cross-device experience",
        "Firebase authentication for secure access",
        "Search and filtering for game discovery",
        "Smooth animations and transitions"
      ]
    },
    {
      title: "Dragon News",
      subtitle: "News Portal Application",
      description: "Responsive news portal featuring real-time authentication and dynamic content delivery. Built with React and Firebase for fast performance and reliable user management.",
      image: "/images/projects/dragon.png",
      liveUrl: "https://dragon-news-bd-be17c.web.app/",
      githubClient: "https://github.com/Nafiz001/Dragon-News",
      tags: ["React", "Firebase", "JavaScript"],
      features: [
        "Mobile-first responsive design",
        "Firebase authentication and real-time updates",
        "Dynamic routing for news categories",
        "Optimized loading and performance"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* React Logo */}
        <div className="absolute top-20 left-20 opacity-5 dark:opacity-[0.02] animate-float">
          <svg width="120" height="120" viewBox="0 0 841.9 595.3" className="text-blue-400">
            <g fill="currentColor">
              <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
              <circle cx="420.9" cy="296.5" r="45.7"/>
            </g>
          </svg>
        </div>
        {/* Code brackets */}
        <div className="absolute top-1/2 right-10 opacity-5 dark:opacity-[0.02] animate-float-delayed">
          <div className="text-8xl font-bold text-purple-500">{'{ }'}</div>
        </div>
        {/* JSX tags */}
        <div className="absolute bottom-20 left-1/3 opacity-5 dark:opacity-[0.02] animate-float-slow">
          <div className="text-7xl font-mono text-pink-500">{'</>'}</div>
        </div>
        {/* Component icon */}
        <div className="absolute top-40 right-1/3 opacity-5 dark:opacity-[0.02] animate-float">
          <svg width="80" height="80" viewBox="0 0 24 24" className="text-blue-500">
            <path fill="currentColor" d="M3 3h8v8H3V3m10 0h8v8h-8V3M3 13h8v8H3v-8m10 0h8v8h-8v-8z"/>
          </svg>
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-wider mb-4"
          >
            Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"
          />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in React, Next.js, and modern web development
          </p>
        </div>

        <div className="space-y-20 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''} group relative overflow-hidden rounded-2xl shadow-2xl`}>
                <div className="relative h-80 md:h-96 project-image overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-pink-500 font-semibold mb-4">{project.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    href={project.liveUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    LIVE DEMO
                  </Link>
                  <Link 
                    href={project.githubClient}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GITHUB
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
