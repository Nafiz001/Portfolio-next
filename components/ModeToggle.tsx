'use client';

type Mode = 'normal' | '3d';

interface ModeToggleProps {
  mode: Mode;
  onToggle: () => void;
}

export default function ModeToggle({ mode, onToggle }: ModeToggleProps) {
  const is3D = mode === '3d';

  return (
    <button
      onClick={onToggle}
      aria-label={is3D ? 'Exit 3D experience' : 'View in 3D'}
      className={`fixed top-5 right-5 z-[200] pointer-events-auto flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition-all ${
        is3D
          ? 'border border-[#00f0ff]/60 bg-black/50 text-[#00f0ff] hover:bg-[#00f0ff]/10 shadow-[0_0_12px_rgba(0,240,255,0.35)]'
          : 'border border-[rgb(var(--brand))]/50 bg-[rgb(var(--ink))]/80 text-[rgb(var(--brand))] hover:bg-[rgb(var(--brand))]/10'
      }`}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {is3D ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m0-10l8-4M4 7v10l8 4" />
        )}
      </svg>
      {is3D ? 'Exit 3D' : 'View in 3D'}
    </button>
  );
}
