import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Experience = () => {
  const [experiences, setExperiences] = useState<any[]>([
    {
      id: 'local_fio',
      title: 'Prompt Engineer',
      company: 'fionetix solutions (remote)',
      date: 'Present',
      url: 'https://fionetix.com/',
      description: 'Designing, optimizing, and deploying highly structured and specialized AI prompts to drive complex generative models.'
    },
    {
      id: 'local_ini',
      title: 'Full Stack Developer Intern',
      company: 'IniAstra Tech (remote)',
      date: 'January 2026 — June 2026',
      url: 'https://iniastratech.com/',
      description: 'Contributed to the development of robust, scalable web applications utilizing modern JavaScript frameworks.'
    }
  ]);

  useEffect(() => {
    const fetchExp = async () => {
      try {
        const snap = await getDocs(collection(db, 'experience'));
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (data.length > 0) setExperiences(data);
      } catch (e) { console.error('Error fetching experience', e); }
    };
    fetchExp();
  }, []);
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="md:w-3/4 max-w-4xl max-h-[85vh] overflow-y-auto custom-scrollbar glass-card p-8 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.15)] border-[1px] border-[#00f0ff]/20 bg-[#050505]/80 backdrop-blur-md">
        
        <div className="flex items-center gap-4 border-b border-[#00f0ff]/30 pb-4 mb-6">
          <div className="h-4 w-4 bg-[#00f0ff] animate-pulse"></div>
          <h2 className="text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]">
            SYS.EXPERIENCE
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={exp.id} className={`relative pl-6 border-l-2 ${i % 2 === 0 ? 'border-[#00f0ff]/50' : 'border-[#00f0ff]/20'}`}>
              <div className={`absolute w-3 h-3 ${i % 2 === 0 ? 'bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]' : 'bg-[#001122] border border-[#00f0ff]'} rounded-full -left-[7px] top-1`}></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl text-white font-semibold">{exp.title}</h3>
                <span className={i % 2 === 0 ? "text-[#00ffaa] font-mono text-sm tracking-wider" : "text-gray-400 font-mono text-sm tracking-wider"}>{exp.date}</span>
              </div>
              <a href={exp.url} target="_blank" rel="noopener noreferrer" className="inline-block text-[#00f0ff] hover:text-[#ffffff] transition-colors font-mono mb-4">
                @ {exp.company}
              </a>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
