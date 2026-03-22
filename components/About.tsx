'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  const skillIcons = [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
    { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', invert: true },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg' },
    { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  ];

  return (
    <div className="glass-card w-full p-6 md:p-10 relative bg-black/40 border-[#00f0ff]/30 shadow-[#00f0ff]/10">
      {/* Decorative corner pieces */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff] opacity-50"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff] opacity-50"></div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-[0.2em] text-shadow-cyan">
          ABOUT_ME
        </h2>
        <p className="text-[#00ffaa] font-mono tracking-widest text-sm md:text-base">
          {'>'} EXTRACTING USER DATA...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/60 border border-[#00f0ff]/20 p-6 rounded-lg font-mono relative"
        >
          <div className="absolute top-0 left-0 bg-[#00f0ff]/20 text-[#00f0ff] px-3 py-1 text-xs">PROFILE.TXT</div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 mt-4 tracking-widest">
            {'>'} GET TO KNOW ME!_
          </h3>
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              I'm a <span className="text-[#00f0ff]">Software Engineer</span> and <span className="text-[#00ffaa]">Computer Science student</span> at Khulna University of Engineering & Technology, passionate about building robust and scalable web applications.
            </p>
            <p>
              I have hands-on experience building full-stack applications with modern technologies like <span className="text-white">React, Next.js, Firebase, and MongoDB</span>. My projects feature authentication systems, real-time updates, and highly optimized responsive layouts.
            </p>
            <p>
              I also worked as a QnA Teacher at Udvash Academic & Admission Care for two years, which strengthened my communication and problem-solving skills. I believe in continuous learning and staying updated with the latest web development trends.
            </p>
            <p>
              I'm open to <span className="text-white">job opportunities</span> and <span className="text-white">internships</span> where I can contribute, learn, and grow as a developer.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-black/60 border border-[#00f0ff]/20 p-6 rounded-lg font-mono relative"
        >
          <div className="absolute top-0 left-0 bg-[#00f0ff]/20 text-[#00f0ff] px-3 py-1 text-xs">SKILLS.JSON</div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 mt-4 tracking-widest">
            {'>'} LOADED PACKAGES_
          </h3>
          <div className="flex flex-wrap gap-4 md:gap-7 justify-center md:justify-start">
            {skillIcons.map((skill, index) => (
              <div key={index} className="relative group w-10 h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
                {/* True Color Icon immediately visible */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-full h-full object-contain transition-all duration-300 opacity-70 group-hover:opacity-100 drop-shadow-none group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)] ${skill.invert ? 'invert' : ''}`}
                />

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1 text-xs px-3 py-1.5 bg-black/90 border border-[#00f0ff]/50 rounded text-[#00f0ff] whitespace-nowrap pointer-events-none z-10 font-mono shadow-[0_0_10px_rgba(0,240,255,0.2)] backdrop-blur-md">
                  {skill.name}
                  {/* Small pointer triangle */}
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#00f0ff]/50"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
