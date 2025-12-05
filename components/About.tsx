'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
    'Tailwind CSS', 'DaisyUI', 'Node.js', 'Express.js', 'MongoDB',
    'Firebase', 'NextAuth.js', 'Git', 'GitHub', 'REST APIs',
    'Responsive Design', 'Performance Optimization'
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 opacity-5 dark:opacity-[0.02] animate-float">
          <svg width="100" height="100" viewBox="0 0 24 24" className="text-blue-500">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 dark:opacity-[0.02] animate-float-delayed">
          <div className="text-6xl font-bold text-purple-500">{'{ }'}</div>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-5 dark:opacity-[0.02] animate-float-slow">
          <div className="text-5xl font-mono text-pink-500">{'</>'}</div>
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
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"
          />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here you will find more information about me, what I do, and my current skills in programming and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Get to know me!
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a <span className="font-bold text-pink-500">React Developer</span> and <span className="font-bold text-blue-500">Computer Science student</span> at Khulna University of Engineering & Technology, passionate about building responsive and user-friendly web applications.
              </p>
              <p>
                I have hands-on experience building full-stack applications with modern technologies like <span className="font-semibold">React, Next.js, Firebase, and MongoDB</span>. My projects feature authentication systems, real-time updates, and pixel-perfect responsive designs.
              </p>
              <p>
                I also worked as a QnA Teacher at Udvash Academic & Admission Care for two years, which strengthened my communication and problem-solving skills. I believe in continuous learning and staying updated with the latest web development trends.
              </p>
              <p>
                I'm open to <span className="font-bold">job opportunities</span> and <span className="font-bold">internships</span> where I can contribute, learn, and grow as a developer. If you have an opportunity that matches my skills, feel free to <span className="font-bold text-pink-500">contact me</span>!
              </p>
            </div>
            <Link 
              href="#contact"
              className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-lg font-bold py-3 px-10 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              CONTACT ME
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 px-5 rounded-lg font-semibold text-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white transition-all cursor-default transform hover:scale-105 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
