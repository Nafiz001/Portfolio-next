'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

export default function AdminSkills() {
  const [skills, setSkills] = useState<string[]>([]);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState('');

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'about', 'skills'), (docSnap) => {
      if (docSnap.exists()) {
        setSkills(docSnap.data().list || []);
      }
    });
    return () => unsub();
  }, []);

  const handleEdit = () => {
    setFormData(skills.join(', '));
    setEditing(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedList = formData.split(',').map(s => s.trim()).filter(Boolean);
    await setDoc(doc(db, 'about', 'skills'), { list: updatedList }, { merge: true });
    setEditing(false);
  };

  return (
    <div className="glass-card p-6 border border-[#00f0ff]/20 rounded-lg bg-[#050505]/50 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6 border-b border-[#00f0ff]/30 pb-4">
        <h3 className="text-xl text-[#00f0ff] font-bold tracking-widest">SKILLS & ABOUT MODULE</h3>
        {!editing && (
          <button onClick={handleEdit} className="px-4 py-2 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] font-mono text-sm border border-[#00f0ff]/50 rounded transition-colors">
            EDIT SKILLS
          </button>
        )}
      </div>

      {editing ? (
        <form onSubmit={handleSave} className="space-y-4 flex-1">
          <label className="block text-gray-400 font-mono text-xs mb-1 uppercase">Skills List (Comma separated)</label>
          <textarea 
            rows={6}
            value={formData}
            onChange={e => setFormData(e.target.value)}
            className="w-full bg-[#0a1018] border border-[#00f0ff]/30 rounded p-2 text-white font-mono text-sm focus:border-[#00f0ff] outline-none"
          />
          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 py-2 bg-[#00ffaa]/10 hover:bg-[#00ffaa]/20 text-[#00ffaa] border border-[#00ffaa]/50 rounded font-bold font-mono text-sm transition-colors">SAVE</button>
            <button type="button" onClick={() => setEditing(false)} className="flex-1 py-2 bg-[#ff0055]/10 hover:bg-[#ff0055]/20 text-[#ff0055] border border-[#ff0055]/50 rounded font-bold font-mono text-sm transition-colors">CANCEL</button>
          </div>
        </form>
      ) : (
        <div className="flex flex-wrap gap-2 overflow-y-auto custom-scrollbar flex-1 max-h-[300px]">
          {skills.length === 0 && <p className="text-gray-500 font-mono text-sm">NO SKILLS FOUND.</p>}
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] rounded font-mono text-xs">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
