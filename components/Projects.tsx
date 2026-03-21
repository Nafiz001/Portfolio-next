'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const projects = [
    {
      title: "BookNest",
      subtitle: "Book Management Platform",
      description: "A comprehensive book management and e-commerce platform connecting readers, librarians, and administrators with seamless digital experience. Features Stripe payment integration, role-based dashboards, and interactive maps.",
      image: "/images/projects/booknest.png",
      liveUrl: "https://booknest-client-jet.vercel.app/",
      githubClient: "https://github.com/Nafiz001/booknest-client",
      githubServer: "https://github.com/Nafiz001/booknest-server",
      tags: ["React", "Stripe", "MongoDB", "Leaflet", "Firebase Auth"],
    },
    {
      title: "Artisan's Echo",
      subtitle: "Art Marketplace Platform",
      description: "A modern, responsive art marketplace platform built with React where artists showcase their work and users discover art. Features Firebase authentication, real-time MongoDB operations, advanced search and filtering, and dark/light theme toggle.",
      image: "/images/projects/artify.png",
      liveUrl: "https://artify-client-side.web.app/",
      githubClient: "https://github.com/Nafiz001/artify-client-side",
      githubServer: "https://github.com/Nafiz001/artify-server-side",
      tags: ["React", "Firebase", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "ChefKit",
      subtitle: "Meal Kits Platform",
      description: "Full-stack Next.js 16 application featuring a meal kit marketplace with authentication and content management. Built with App Router, NextAuth.js, and MongoDB for seamless performance and security.",
      image: "/images/projects/chefkit.png",
      liveUrl: "https://chefkit-client-side.vercel.app/",
      githubClient: "https://github.com/Nafiz001/chefkit-client-side",
      githubServer: "https://github.com/Nafiz001/chefkit-server-side",
      tags: ["Next.js 16", "NextAuth.js", "MongoDB"],
    },
    {
      title: "GameHub",
      subtitle: "Gaming Platform",
      description: "A modern, responsive gaming platform enabling users to browse, discover, and explore video games. Features user authentication, search functionality, and smooth animations.",
      image: "/images/projects/gamehub.png",
      liveUrl: "https://my-gamehub-165d0.web.app/",
      githubClient: "https://github.com/Nafiz001/MY-GAMEHUB",
      tags: ["React", "Firebase", "CSS3"],
    },
    {
      title: "Dragon News",
      subtitle: "News Portal Application",
      description: "Responsive news portal featuring real-time authentication and dynamic content delivery. Built with React and Firebase for fast performance and reliable user management.",
      image: "/images/projects/dragon.png",
      liveUrl: "https://dragon-news-bd-be17c.web.app/",
      githubClient: "https://github.com/Nafiz001/Dragon-News",
      tags: ["React", "Firebase", "JavaScript"],
    }
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div className="glass-card w-full p-6 md:p-10 relative bg-black/40 border-[#00f0ff]/30 shadow-[#00f0ff]/10">
      {/* Decorative corner pieces */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff] opacity-50"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff] opacity-50"></div>
      
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-[0.2em] text-shadow-cyan">
          SYSTEM_DATABASE
        </h2>
        <p className="text-[#00ffaa] font-mono tracking-widest text-sm md:text-base">
          {'>'} QUERYING PROJECTS... {projects.length} RECORDS FOUND
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-6 w-full">
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-6 bg-black/60 border border-[#00f0ff]/20 hover:border-[#00f0ff]/80 transition-all p-4 rounded-lg group"
          >
            {/* Image Container */}
            <div className="w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden border border-[#00f0ff]/30 relative rounded-sm">
              <div className="absolute inset-0 bg-[#00f0ff]/20 z-10 opacity-0 group-hover:opacity-50 transition-opacity mix-blend-overlay"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* Content Container */}
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1 tracking-widest text-shadow-cyan uppercase">
                  {project.title}
                </h3>
                <p className="text-[#00ffaa] font-mono text-xs tracking-wider mb-3">
                  // {project.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-1 text-xs font-mono border border-[#00f0ff]/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-[#00f0ff]/20 pt-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-[#00f0ff] hover:text-white font-mono text-sm tracking-widest uppercase hover:underline"
                  >
                    [ LIVE DEMO ]
                  </Link>
                  <Link
                    href={project.githubClient}
                    target="_blank"
                    className="text-gray-400 hover:text-white font-mono text-sm tracking-widest uppercase hover:underline"
                  >
                    [ GITHUB ]
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10 font-mono">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-[#00f0ff] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#00f0ff]/10 px-4 py-2 border border-[#00f0ff]/30 transition-all"
          >
            {'< PREV'}
          </button>
          <span className="text-gray-400">
            PAGE {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-[#00f0ff] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#00f0ff]/10 px-4 py-2 border border-[#00f0ff]/30 transition-all"
          >
            {'NEXT >'}
          </button>
        </div>
      )}
    </div>
  );
}
