'use client';

import React, { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { collection, writeBatch, doc } from 'firebase/firestore';
import AdminCrud, { FieldDef } from '@/components/admin/AdminCrud';
import AdminSkills from '@/components/admin/AdminSkills';

const projectsSchema: FieldDef[] = [
  { key: 'title', label: 'Project Title', type: 'text' },
  { key: 'subtitle', label: 'Platform Type', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea' },
  { key: 'tags', label: 'Tags (Comma separated)', type: 'array' },
  { key: 'liveUrl', label: 'Live URL', type: 'text' },
  { key: 'githubClient', label: 'GitHub URL', type: 'text' },
  { key: 'githubServer', label: 'GitHub Server URL', type: 'text' },
  { key: 'image', label: 'Project Image (Optional)', type: 'image' }
];

const expSchema: FieldDef[] = [
  { key: 'title', label: 'Job Title', type: 'text' },
  { key: 'company', label: 'Company', type: 'text' },
  { key: 'date', label: 'Date/Duration', type: 'text' },
  { key: 'url', label: 'Company URL', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea' },
];

const achSchema: FieldDef[] = [
  { key: 'year', label: 'Year', type: 'text' },
  { key: 'title', label: 'Title (e.g. Champion)', type: 'text' },
  { key: 'event', label: 'Event Name', type: 'text' },
  { key: 'badge', label: 'Badge/Label', type: 'text' },
];

const eduSchema: FieldDef[] = [
  { key: 'degree', label: 'Degree', type: 'text' },
  { key: 'institution', label: 'Institution', type: 'text' },
  { key: 'date', label: 'Date/Duration', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea' },
];

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('admin@nafiz.dev');
  const [password, setPassword] = useState('NafizAdmin2026!');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setStatus('');
    
    try {
      // Attempt login
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found') {
        setError('Invalid credentials or user not found.');
      } else {
        setError(err.message);
      }
    }
    setLoading(false);
  };

  const handleLogout = () => signOut(auth);

  // Migration scripts mapped exactly to the user's hardcoded component data
  const initializeDatabase = async () => {
    setStatus('Initializing Database Migration...');
    setLoading(true);
    try {
      const batch = writeBatch(db);

      // --- ABOUT (Skills) ---
      const skillsRef = doc(collection(db, 'about'), 'skills');
      batch.set(skillsRef, {
        list: [
          'html5', 'css3', 'javascript', 'typescript', 'react', 'nextjs', 
          'tailwindcss', 'threejs', 'c', 'cplusplus', 'python', 'java', 
          'php', 'laravel', 'dotnet', 'postgresql', 'mysql', 'mongodb', 
          'firebase', 'docker', 'express', 'nodejs', 'kubernetes', 'redis', 
          'grafana', 'prometheus', 'git', 'github', 'postman'
        ]
      });

      // --- PROJECTS ---
      const projectsData = [
        {
          id: 'p1',
          title: "BookNest",
          subtitle: "Book Management Platform",
          description: "A comprehensive book management and e-commerce platform connecting readers, librarians, and administrators with seamless digital experience. Features Stripe payment integration, role-based dashboards, and interactive maps.",
          image: "/images/projects/booknest.png",
          liveUrl: "https://booknest-client-jet.vercel.app/",
          githubClient: "https://github.com/Nafiz001/booknest-client",
          githubServer: "https://github.com/Nafiz001/booknest-server",
          tags: ["React", "Stripe", "MongoDB", "Leaflet", "Firebase Auth"],
        },
        {
          id: 'p2',
          title: "Artisan's Echo",
          subtitle: "Art Marketplace Platform",
          description: "A modern, responsive art marketplace platform built with React where artists showcase their work and users discover art. Features Firebase authentication, real-time MongoDB operations, advanced search and filtering, and dark/light theme toggle.",
          image: "/images/projects/artify.png",
          liveUrl: "https://artify-client-side.web.app/",
          githubClient: "https://github.com/Nafiz001/artify-client-side",
          githubServer: "https://github.com/Nafiz001/artify-server-side",
          tags: ["React", "Firebase", "MongoDB", "Tailwind CSS"],
        },
        {
          id: 'p3',
          title: "ChefKit",
          subtitle: "Meal Kits Platform",
          description: "Full-stack Next.js 16 application featuring a meal kit marketplace with authentication and content management. Built with App Router, NextAuth.js, and MongoDB for seamless performance and security.",
          image: "/images/projects/chefkit.png",
          liveUrl: "https://chefkit-client-side.vercel.app/",
          githubClient: "https://github.com/Nafiz001/chefkit-client-side",
          githubServer: "https://github.com/Nafiz001/chefkit-server-side",
          tags: ["Next.js 16", "NextAuth.js", "MongoDB"],
        },
        {
          id: 'p4',
          title: "GameHub",
          subtitle: "Gaming Platform",
          description: "A modern, responsive gaming platform enabling users to browse, discover, and explore video games. Features user authentication, search functionality, and smooth animations.",
          image: "/images/projects/gamehub.png",
          liveUrl: "https://my-gamehub-165d0.web.app/",
          githubClient: "https://github.com/Nafiz001/MY-GAMEHUB",
          tags: ["React", "Firebase", "CSS3"],
        },
        {
          id: 'p5',
          title: "Dragon News",
          subtitle: "News Portal Application",
          description: "Responsive news portal featuring real-time authentication and dynamic content delivery. Built with React and Firebase for fast performance and reliable user management.",
          image: "/images/projects/dragon.png",
          liveUrl: "https://dragon-news-bd-be17c.web.app/",
          githubClient: "https://github.com/Nafiz001/Dragon-News",
          tags: ["React", "Firebase", "JavaScript"],
        }
      ];
      projectsData.forEach((p) => {
        const docRef = doc(collection(db, 'projects'), p.id);
        batch.set(docRef, p);
      });

      // --- EXPERIENCE ---
      const expData = [
        {
          id: 'exp1',
          title: 'Prompt Engineer',
          company: 'fionetix solutions (remote)',
          date: 'Present',
          url: 'https://fionetix.com/',
          description: 'Designing, optimizing, and deploying highly structured and specialized AI prompts to drive complex generative models. Engineering systematic workflows to maximize LLM accuracy and contextual generation efficiency.'
        },
        {
          id: 'exp2',
          title: 'Full Stack Developer Intern',
          company: 'IniAstra Tech (remote)',
          date: 'January 2026 — June 2026',
          url: 'https://iniastratech.com/',
          description: 'Contributed to the development of robust, scalable web applications utilizing modern JavaScript frameworks. Handled both frontend UI architecture and backend database integrations across a fast-paced development sprint cycle.'
        }
      ];
      expData.forEach((e) => {
        const docRef = doc(collection(db, 'experience'), e.id);
        batch.set(docRef, e);
      });

      // --- ACHIEVEMENTS ---
      const achData = [
        {
          id: 'ach1',
          year: '2025',
          title: 'Champion',
          event: 'KUET First Byte Datathon',
          badge: 'Datathon Winner'
        },
        {
          id: 'ach2',
          year: '2026',
          title: '2nd Runner Up',
          event: 'BUET CSE Fest Hackathon',
          badge: 'Hackathon Finalist'
        }
      ];
      achData.forEach((a) => {
        const docRef = doc(collection(db, 'achievements'), a.id);
        batch.set(docRef, a);
      });

      // --- EDUCATION ---
      const eduData = [
        {
          id: 'edu1',
          degree: "BSc Computer Science & Engineering",
          institution: "Khulna University of Engineering & Technology (KUET)",
          date: "2023 - Present",
          description: "Focusing on web development, algorithms, data structures, and software engineering. Actively building scalable projects and participating in algorithm challenges."
        }
      ];
      eduData.forEach((e) => {
        const docRef = doc(collection(db, 'education'), e.id);
        batch.set(docRef, e);
      });

      await batch.commit();
      setStatus('Database successfully initialized and migrated!');
    } catch (err: any) {
      setError('Migration failed: ' + err.message);
    }
    setLoading(false);
  };

  if (loading) return <div className="min-h-screen bg-[#050505] text-[#00f0ff] flex items-center justify-center font-mono">LOADING SYSTEM...</div>;

  if (!user) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="glass-card p-8 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.15)] border-[1px] border-[#00f0ff]/20 bg-[#050505]/80 backdrop-blur-md w-full max-w-md">
          <h2 className="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff] mb-8 text-center">
            SYS.ADMIN
          </h2>
          {error && <div className="text-[#ff0055] font-mono text-sm mb-4 border border-[#ff0055]/30 p-2 bg-[#ff0055]/10">{error}</div>}
          {status && <div className="text-[#00ffaa] font-mono text-sm mb-4 border border-[#00ffaa]/30 p-2 bg-[#00ffaa]/10">{status}</div>}
          
          <div className="space-y-6">
            <div>
              <label className="block text-[#00f0ff] font-mono text-sm mb-2">IDENTIFIER</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0a1018] border border-[#00f0ff]/30 rounded p-3 text-white font-mono focus:outline-none focus:border-[#00f0ff] transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-[#00f0ff] font-mono text-sm mb-2">ACCESS CODE</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a1018] border border-[#00f0ff]/30 rounded p-3 text-white font-mono focus:outline-none focus:border-[#00f0ff] transition-colors"
                required
              />
            </div>
            <button type="submit" className="w-full py-4 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/50 text-[#00f0ff] font-bold tracking-widest rounded transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              INITIALIZE CONNECTION
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="h-screen w-full overflow-y-auto bg-[#050505] text-white p-8 relative z-50">
      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#00f0ff]/30 pb-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-widest text-[#00f0ff]">ADMINISTRATOR HUB</h1>
            <p className="text-gray-400 font-mono mt-2">Connected as: {user.email}</p>
          </div>
          <button onClick={handleLogout} className="mt-4 md:mt-0 px-6 py-2 border border-[#ff0055] text-[#ff0055] hover:bg-[#ff0055]/10 rounded font-mono text-sm transition-colors">
            TERMINATE SESSION
          </button>
        </div>

        <div className="glass-card p-8 rounded-xl border-[1px] border-[#00ffaa]/20 bg-[#0a1018]/50">
          <h2 className="text-2xl font-bold text-[#00ffaa] mb-4">DATABASE MIGRATION</h2>
          <p className="text-gray-400 font-mono mb-6 max-w-2xl">
            Clicking this button will initialize the Firestore schema and upload all locally hardcoded React data (Projects, Experience, Skills, Achievements, Education) straight into the live remote database.
          </p>
          
          {error && <div className="text-[#ff0055] font-mono text-sm mb-4">{error}</div>}
          {status && <div className="text-[#00ffaa] font-mono text-sm mb-4 animate-pulse">{status}</div>}

          <button 
            onClick={initializeDatabase}
            disabled={loading}
            className="px-8 py-4 bg-[#00ffaa]/10 hover:bg-[#00ffaa]/20 border border-[#00ffaa]/50 text-[#00ffaa] font-bold tracking-widest rounded transition-all hover:shadow-[0_0_15px_rgba(0,255,170,0.4)] disabled:opacity-50"
          >
            {loading ? 'PROCESSING...' : 'INITIALIZE DATABASE MIGRATION'}
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <AdminCrud collectionName="projects" title="PROJECTS MODULE" schema={projectsSchema} />
          <AdminCrud collectionName="experience" title="EXPERIENCE MODULE" schema={expSchema} />
          <AdminCrud collectionName="achievements" title="ACHIEVEMENTS MODULE" schema={achSchema} />
          <AdminCrud collectionName="education" title="EDUCATION MODULE" schema={eduSchema} />
          <AdminSkills />
        </div>

      </div>
    </div>
  );
}
