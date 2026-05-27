'use client';

import Link from 'next/link';

export interface NavSection {
  id: string;
  label: string;
}

interface SidebarProps {
  sections: NavSection[];
  activeId: string;
  onNavigate: (id: string) => void;
}

const socials = [
  {
    href: 'https://www.linkedin.com/in/md-nafiz-ahmed-nafiz/',
    label: 'LinkedIn',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    href: 'https://github.com/Nafiz001',
    label: 'GitHub',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    href: 'https://web.facebook.com/nafiz.ahmed.503092',
    label: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    href: 'mailto:nafizahmed000@gmail.com',
    label: 'Email',
    path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    stroke: true,
  },
];

export default function Sidebar({ sections, activeId, onNavigate }: SidebarProps) {
  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:py-12">
      <div>
        <img
          src="/images/profile/nafiz.jpg"
          alt="Md. Nafiz Ahmed"
          className="mb-4 h-20 w-20 rounded-full border-2 border-[rgb(var(--brand))]/40 object-cover shadow-lg shadow-black/40"
        />
        <h1 className="text-3xl font-bold tracking-tight text-[rgb(var(--text-heading))] sm:text-4xl">
          Md. Nafiz Ahmed
        </h1>
        <h2 className="mt-2 text-base font-medium text-accent tracking-wide">
          Software Engineer
        </h2>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
          I build performant, robust and scalable full-stack web applications. CSE student at KUET, open to roles and internships.
        </p>

        {/* Section nav with scroll-spy active state */}
        <nav className="mt-8 hidden lg:block" aria-label="Sections">
          <ul className="space-y-2.5">
            {sections.map((section) => {
              const active = activeId === section.id;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => onNavigate(section.id)}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all ${
                        active
                          ? 'w-16 bg-[rgb(var(--brand))]'
                          : 'w-8 bg-[rgb(var(--border-subtle))] group-hover:w-16 group-hover:bg-[rgb(var(--text))]'
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                        active
                          ? 'text-[rgb(var(--text-heading))]'
                          : 'text-muted group-hover:text-[rgb(var(--text))]'
                      }`}
                    >
                      {section.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-5 lg:mt-0">
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            aria-label={s.label}
            className="text-muted transition-all hover:text-accent hover:-translate-y-0.5"
          >
            <svg
              className="h-6 w-6"
              fill={s.stroke ? 'none' : 'currentColor'}
              stroke={s.stroke ? 'currentColor' : undefined}
              strokeWidth={s.stroke ? 2 : undefined}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
            </svg>
          </Link>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 rounded border border-[rgb(var(--brand))]/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent transition-colors hover:bg-[rgb(var(--brand))]/10"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
