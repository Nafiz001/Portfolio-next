import React, { useState, useEffect } from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Achievements = () => {
  const [achievements, setAchievements] = useState<any[]>([
    {
      id: 'loading',
      year: '...',
      title: 'Loading',
      event: 'Fetching Data...',
      badge: 'Standby'
    }
  ]);

  useEffect(() => {
    const fetchAch = async () => {
      try {
        const snap = await getDocs(collection(db, 'achievements'));
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (data.length > 0) setAchievements(data);
      } catch (e) {
        console.error('Error fetching achievements', e);
      }
    };
    fetchAch();
  }, []);
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="md:w-3/4 max-w-4xl max-h-[85vh] overflow-y-auto custom-scrollbar glass-card p-8 rounded-xl shadow-[0_0_30px_rgba(255,0,85,0.15)] border-[1px] border-[#ff0055]/20 bg-[#050505]/80 backdrop-blur-md">
        
        <div className="flex items-center gap-4 border-b border-[#ff0055]/30 pb-4 mb-6">
          <div className="h-4 w-4 bg-[#ff0055] animate-pulse"></div>
          <h2 className="text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff0055]">
            SYS.ACHIEVEMENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {achievements.map((ach, i) => (
            <div key={ach.id} className={`group relative bg-[#0a1018] border ${i % 2 === 0 ? 'border-[#ff0055]/20 hover:border-[#ff0055]/80 hover:shadow-[0_0_20px_rgba(255,0,85,0.2)]' : 'border-[#ffcc00]/20 hover:border-[#ffcc00]/80 hover:shadow-[0_0_20px_rgba(255,204,0,0.2)]'} rounded-lg p-6 transition-all duration-300`}>
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-300 ${i % 2 === 0 ? 'text-[#ff0055]' : 'text-[#ffcc00]'}`}>
                {i % 2 === 0 ? <FaTrophy size={40} /> : <FaMedal size={40} />}
              </div>
              <span className={`${i % 2 === 0 ? 'text-[#ff0055]' : 'text-[#ffcc00]'} font-mono text-sm tracking-widest block mb-2`}>{ach.year}</span>
              <h3 className="text-2xl text-white font-bold mb-3 tracking-wide">{ach.title}</h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                {ach.event}
              </p>
              <div className={`mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-sm border ${i % 2 === 0 ? 'text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/30' : 'text-[#ffcc00] bg-[#ffcc00]/10 border-[#ffcc00]/30'}`}>
                [ {ach.badge} ]
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Achievements;
