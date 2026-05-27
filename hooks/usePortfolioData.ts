'use client';

// Shared Firestore data hooks. The 3D panels and the normal (2D) sections both consume these
// so the fetching logic + hardcoded fallbacks live in a single place.

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import type { Project, ExperienceItem, EducationItem, Achievement } from '@/types/content';

const PROJECTS_FALLBACK: Project[] = [
  {
    title: 'LOADING SYSTEM...',
    subtitle: 'Fetching...',
    description: 'Querying Firestore remote database...',
    image: '',
    liveUrl: '#',
    githubClient: '#',
    githubServer: '#',
    tags: ['LOADING'],
  },
];

const EXPERIENCE_FALLBACK: ExperienceItem[] = [
  {
    id: 'local_fio',
    title: 'Prompt Engineer',
    company: 'fionetix solutions (remote)',
    date: 'Present',
    url: 'https://fionetix.com/',
    description: 'Designing, optimizing, and deploying highly structured and specialized AI prompts to drive complex generative models.',
  },
  {
    id: 'local_ini',
    title: 'Full Stack Developer Intern',
    company: 'IniAstra Tech (remote)',
    date: 'January 2026 — June 2026',
    url: 'https://iniastratech.com/',
    description: 'Contributed to the development of robust, scalable web applications utilizing modern JavaScript frameworks.',
  },
];

const EDUCATION_FALLBACK: EducationItem[] = [
  {
    id: 'load',
    degree: 'LOADING SYSTEM...',
    institution: 'Fetching remote records...',
    date: 'Standby',
    description: 'Querying the Firestore connection stream for academic data...',
  },
];

const ACHIEVEMENTS_FALLBACK: Achievement[] = [
  {
    id: 'loading',
    year: '...',
    title: 'Loading',
    event: 'Fetching Data...',
    badge: 'Standby',
  },
];

const SKILLS_FALLBACK: string[] = ['html5', 'css3', 'javascript', 'react', 'nodejs'];

function useCollection<T>(name: string, fallback: T[]) {
  const [data, setData] = useState<T[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, name));
        const docs = snap.docs.map(d => ({ id: d.id, ...d.data() })) as T[];
        if (active && docs.length > 0) setData(docs);
      } catch (e) {
        console.error(`Error fetching ${name} from Firebase`, e);
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchData();
    return () => { active = false; };
  }, [name]);

  return { data, loading };
}

export function useProjects() {
  return useCollection<Project>('projects', PROJECTS_FALLBACK);
}

export function useExperience() {
  return useCollection<ExperienceItem>('experience', EXPERIENCE_FALLBACK);
}

export function useEducation() {
  return useCollection<EducationItem>('education', EDUCATION_FALLBACK);
}

export function useAchievements() {
  return useCollection<Achievement>('achievements', ACHIEVEMENTS_FALLBACK);
}

export function useSkills() {
  const [data, setData] = useState<string[]>(SKILLS_FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchSkills = async () => {
      try {
        const snap = await getDoc(doc(db, 'about', 'skills'));
        if (active && snap.exists() && snap.data().list) {
          setData(snap.data().list as string[]);
        }
      } catch (e) {
        console.error('Error fetching skills:', e);
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchSkills();
    return () => { active = false; };
  }, []);

  return { data, loading };
}
