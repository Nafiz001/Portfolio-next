'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Education() {
  const [education, setEducation] = useState<any[]>([
    {
      id: 'load',
      degree: "LOADING SYSTEM...",
      institution: "Fetching remote records...",
      date: "Standby",
      description: "Querying the Firestore connection stream for academic data..."
    }
  ]);

  useEffect(() => {
    const fetchEdu = async () => {
      try {
        const snap = await getDocs(collection(db, 'education'));
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (data.length > 0) setEducation(data);
      } catch (e) {
        console.error('Error fetching education', e);
      }
    };
    fetchEdu();
  }, []);

  return (
    <div className="glass-card w-full p-6 md:p-10 relative bg-black/40 border-[#00f0ff]/30 shadow-[#00f0ff]/10">
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff] opacity-50"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff] opacity-50"></div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-[0.2em] text-shadow-cyan uppercase">
          EDUCATION
        </h2>
        <p className="text-[#00ffaa] font-mono tracking-widest text-sm md:text-base">
          {'>'} LOADING ACADEMIC RECORDS...
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-black/60 border border-[#00f0ff]/20 p-6 md:p-8 rounded-lg font-mono relative group hover:border-[#00f0ff]/50 transition-all"
          >
            <div className="absolute top-0 left-0 bg-[#00f0ff]/10 text-[#00f0ff] px-3 py-1 text-xs">{item.date || item.year}</div>
            <div className="flex flex-col md:flex-row gap-6 items-start mt-6">
              <div className="p-4 border border-[#00f0ff]/30 bg-[#00f0ff]/5 text-[#00f0ff] shrink-0">
                <svg className="w-6 h-6 text-[#00f0ff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 uppercase tracking-widest">
                  {item.degree}
                </h3>
                <h4 className="text-[#00ffaa] text-sm tracking-widest uppercase mb-4">
                  // {item.institution}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
