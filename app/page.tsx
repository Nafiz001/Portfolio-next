'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import ModeToggle from '@/components/ModeToggle';
import NormalLayout from '@/components/normal/NormalLayout';

// 3D experience (Three.js, intro video) is loaded only when the user opts in,
// keeping the Three.js bundle out of the default normal-mode load.
const ThreeExperience = dynamic(() => import('@/components/ThreeExperience'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black">
      <div className="font-mono text-sm tracking-widest text-[#00f0ff] animate-pulse">
        INITIALIZING 3D ENVIRONMENT...
      </div>
    </div>
  ),
});

type Mode = 'normal' | '3d';

export default function Home() {
  // Always start in normal mode on every fresh load (3D is opt-in per session, not persisted).
  const [mode, setMode] = useState<Mode>('normal');

  return (
    <>
      <ModeToggle mode={mode} onToggle={() => setMode(mode === '3d' ? 'normal' : '3d')} />
      {mode === '3d' ? <ThreeExperience /> : <NormalLayout />}
    </>
  );
}
