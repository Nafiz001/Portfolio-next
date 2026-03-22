'use client';

import Image from 'next/image';

export default function Hero({ onBrowse }: { onBrowse: () => void }) {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto md:top-10 md:right-10 pointer-events-auto z-20">
      <div className="glass-card bg-black/80 border border-[#00f0ff]/30 p-5 shadow-[#00f0ff]/10 max-w-[320px] relative">
        {/* Hacker styling absolute elements */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f0ff]"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f0ff]"></div>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full border border-[#00f0ff]/50 overflow-hidden flex-shrink-0">
            <Image
              src="/images/profile/nafiz.jpg"
              alt="Nafiz Ahmed"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-black text-white tracking-widest text-shadow-cyan">
              NAFIZ
            </h1>
            <h2 className="text-[#00ffaa] text-[10px] uppercase tracking-widest font-mono mt-0.5">
              SOFTWARE_ENGINEER
            </h2>
          </div>
        </div>

        <div className="bg-[#00f0ff]/10 border-l border-[#00f0ff] p-2 text-[10px] font-mono text-gray-300 mb-4">
          <p className="mb-1 text-[#00f0ff]">{'>'} SYSTEM STATUS: ONLINE</p>
          <p className="leading-tight">Drag to rotate the 3D environment. Click floating nodes to navigate data sectors.</p>
        </div>
        
        <button
          onClick={onBrowse}
          className="w-full relative px-4 py-2 bg-transparent text-[#00f0ff] text-xs font-bold tracking-[0.2em] overflow-hidden border border-[#00f0ff]/50 hover:border-[#00f0ff] transition-all group"
        >
          <span className="absolute inset-0 bg-[#00f0ff]/10 group-hover:bg-[#00f0ff]/20 transition-all"></span>
          <span className="relative">INITIALIZE_</span>
        </button>
      </div>
    </div>
  );
}
