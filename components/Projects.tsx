'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<any[]>([
    {
      title: "LOADING SYSTEM...",
      subtitle: "Fetching...",
      description: "Querying Firestore remote database...",
      image: "",
      liveUrl: "#",
      githubClient: "#",
      githubServer: "#",
      tags: ["LOADING"],
    }
  ]);
  const projectsPerPage = 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, 'projects'));
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (data.length > 0) setProjects(data);
      } catch (err) { console.error('Error fetching projects from Firebase', err); }
    };
    fetchData();
  }, []);

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
        <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-white mb-2 tracking-widest md:tracking-[0.2em] text-shadow-cyan break-words">
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
            {/* Image Container w/ Scroll Glow Effect */}
            <motion.div 
              className="w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden relative rounded-sm"
              initial={{ borderColor: 'rgba(0, 240, 255, 0.1)', boxShadow: '0 0 0px rgba(0, 240, 255, 0)' }}
              whileInView={{ borderColor: 'rgba(0, 240, 255, 0.8)', boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)' }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ border: '1px solid' }}
            >
              <div className="absolute inset-0 bg-[#00f0ff]/20 z-10 opacity-0 group-hover:opacity-50 transition-opacity mix-blend-overlay"></div>
              <motion.img
                src={project.image || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                alt={project.title}
                className="w-full h-full object-cover transition-all"
                initial={{ filter: 'grayscale(100%)', opacity: 0.7 }}
                whileInView={{ filter: 'grayscale(0%)', opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

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
                  {project.tags?.map((tag: string, idx: number) => (
                    <span key={idx} className="bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-1 text-xs font-mono border border-[#00f0ff]/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-[#00f0ff]/20 pt-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl || '#'}
                      target="_blank"
                      className="text-[#00f0ff] hover:text-white font-mono text-sm tracking-widest uppercase hover:underline"
                    >
                      [ LIVE DEMO ]
                    </Link>
                  )}
                  {project.githubClient && (
                    <Link
                      href={project.githubClient || '#'}
                      target="_blank"
                      className="text-gray-400 hover:text-white font-mono text-sm tracking-widest uppercase hover:underline"
                    >
                      [ GITHUB ]
                    </Link>
                  )}
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
