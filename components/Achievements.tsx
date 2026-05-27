import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import { useAchievements } from '@/hooks/usePortfolioData';

const Achievements = () => {
  const { data: achievements } = useAchievements();
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="md:w-3/4 w-full max-w-4xl max-h-[85vh] overflow-y-auto custom-scrollbar glass-card p-5 md:p-8 rounded-xl shadow-[0_0_30px_rgba(255,0,85,0.15)] border-[1px] border-[#ff0055]/20 bg-[#050505]/90 backdrop-blur-lg">
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 border-b border-[#ff0055]/30 pb-4 mb-6">
          <div className="h-3 w-3 md:h-4 md:w-4 bg-[#ff0055] shadow-[0_0_10px_#ff0055] animate-pulse rounded-full hidden md:block"></div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider md:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff0055]">
            SYS.ACHIEVEMENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {achievements.map((ach, i) => (
            <div key={ach.id} className={`group relative bg-[#0a1018] border ${i % 2 === 0 ? 'border-[#ff0055]/20 hover:border-[#ff0055]/80 hover:shadow-[0_0_20px_rgba(255,0,85,0.2)]' : 'border-[#ffcc00]/20 hover:border-[#ffcc00]/80 hover:shadow-[0_0_20px_rgba(255,204,0,0.2)]'} rounded-lg p-4 md:p-6 transition-all duration-300`}>
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-300 ${i % 2 === 0 ? 'text-[#ff0055]' : 'text-[#ffcc00]'}`}>
                {i % 2 === 0 ? <FaTrophy className="w-6 h-6 md:w-10 md:h-10" /> : <FaMedal className="w-6 h-6 md:w-10 md:h-10" />}
              </div>
              <span className={`${i % 2 === 0 ? 'text-[#ff0055]' : 'text-[#ffcc00]'} font-mono text-xs md:text-sm tracking-widest block mb-2`}>{ach.year}</span>
              <h3 className="text-xl md:text-2xl text-white font-bold mb-2 md:mb-3 tracking-wide leading-tight px-1">{ach.title}</h3>
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
