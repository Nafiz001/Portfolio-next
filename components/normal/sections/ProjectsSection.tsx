'use client';

import { useRef, useState, useEffect } from 'react';
import { useProjects } from '@/hooks/usePortfolioData';
import Section from './Section';
import Reveal from '../Reveal';

const PLACEHOLDER_IMG = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default function ProjectsSection() {
  const { data: projects } = useProjects();
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const recompute = () => {
      setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
      setPage(Math.round(el.scrollLeft / el.clientWidth));
    };
    const onScroll = () => setPage(Math.round(el.scrollLeft / el.clientWidth));

    recompute();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', recompute);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recompute);
    };
  }, [projects.length]);

  const scrollByPage = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  };
  const scrollToPage = (i: number) => {
    const el = trackRef.current;
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <Section id="projects" title="Projects" index="03">
      <Reveal className="relative">
        {/* Horizontal paginated track */}
        <div
          ref={trackRef}
          className="custom-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1"
        >
          {projects.map((project) => (
            <article
              key={project.id ?? project.title}
              className="surface-card group flex w-full shrink-0 snap-start flex-col overflow-hidden md:w-[calc(50%-0.5rem)]"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={project.image || PLACEHOLDER_IMG}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--ink-2))]/80 to-transparent opacity-60" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-[rgb(var(--text-heading))]">{project.title}</h3>
                {project.subtitle && <p className="mt-0.5 text-sm text-accent">{project.subtitle}</p>}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <li
                        key={idx}
                        className="rounded-full bg-[rgb(var(--brand))]/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-accent inline-flex items-center gap-1">
                      Live Demo
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.githubClient && project.githubClient !== '#' && (
                    <a href={project.githubClient} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-[rgb(var(--text-heading))]">
                      Code
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.githubServer && project.githubServer !== '#' && (
                    <a href={project.githubServer} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-[rgb(var(--text-heading))]">
                      Server
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination controls */}
        {pages > 1 && (
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to page ${i + 1}`}
                  onClick={() => scrollToPage(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === page ? 'w-6 bg-[rgb(var(--brand))]' : 'w-1.5 bg-[rgb(var(--border-subtle))] hover:bg-[rgb(var(--text-muted))]'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous projects"
                onClick={() => scrollByPage(-1)}
                disabled={page === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border-subtle))] text-[rgb(var(--text))] transition-colors hover:border-[rgb(var(--brand))] hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Next projects"
                onClick={() => scrollByPage(1)}
                disabled={page >= pages - 1}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border-subtle))] text-[rgb(var(--text))] transition-colors hover:border-[rgb(var(--brand))] hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </Reveal>
    </Section>
  );
}
