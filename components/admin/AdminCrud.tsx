'use client';

import React, { useState, useEffect } from 'react';
import { db, storage } from '@/lib/firebase';
import { collection, onSnapshot, doc, setDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export type FieldDef = {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'image' | 'array';
};

interface AdminCrudProps {
  collectionName: string;
  title: string;
  schema: FieldDef[];
}

export default function AdminCrud({ collectionName, title, schema }: AdminCrudProps) {
  const [items, setItems] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, collectionName), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    });
    return () => unsub();
  }, [collectionName]);

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    setFormData(item);
  };

  const handleAddNew = () => {
    setEditingId('NEW');
    const emptyForm: any = {};
    schema.forEach(s => {
      emptyForm[s.key] = s.type === 'array' ? [] : '';
    });
    setFormData(emptyForm);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this record?')) {
      await deleteDoc(doc(db, collectionName, id));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldKey: string) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploading(true);
    const storageRef = ref(storage, `${collectionName}/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setFormData({ ...formData, [fieldKey]: url });
    setUploading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId === 'NEW') {
      await addDoc(collection(db, collectionName), formData);
    } else if (editingId) {
      await setDoc(doc(db, collectionName, editingId), formData, { merge: true });
    }
    handleCancel();
  };

  return (
    <div className="glass-card p-6 border border-[#00f0ff]/20 rounded-lg bg-[#050505]/50 flex flex-col h-full max-h-[600px]">
      <div className="flex justify-between items-center mb-6 border-b border-[#00f0ff]/30 pb-4">
        <h3 className="text-xl text-[#00f0ff] font-bold tracking-widest">{title}</h3>
        {!editingId && (
          <button onClick={handleAddNew} className="px-4 py-2 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] font-mono text-sm border border-[#00f0ff]/50 rounded transition-colors">
            + ADD NEW
          </button>
        )}
      </div>

      {editingId ? (
        <form onSubmit={handleSave} className="space-y-4 overflow-y-auto custom-scrollbar flex-1 pr-2">
          {schema.map(field => (
            <div key={field.key}>
              <label className="block text-gray-400 font-mono text-xs mb-1 uppercase">{field.label}</label>
              
              {field.type === 'text' && (
                <input required type="text" value={formData[field.key] || ''} onChange={e => setFormData({ ...formData, [field.key]: e.target.value })} className="w-full bg-[#0a1018] border border-[#00f0ff]/30 rounded p-2 text-white font-mono text-sm focus:border-[#00f0ff] outline-none" />
              )}
              
              {field.type === 'textarea' && (
                <textarea required rows={4} value={formData[field.key] || ''} onChange={e => setFormData({ ...formData, [field.key]: e.target.value })} className="w-full bg-[#0a1018] border border-[#00f0ff]/30 rounded p-2 text-white font-mono text-sm focus:border-[#00f0ff] outline-none" />
              )}
              
              {field.type === 'array' && (
                <input type="text" placeholder="Comma separated values" value={(formData[field.key] || []).join(', ')} onChange={e => setFormData({ ...formData, [field.key]: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) })} className="w-full bg-[#0a1018] border border-[#00f0ff]/30 rounded p-2 text-white font-mono text-sm focus:border-[#00f0ff] outline-none" />
              )}

              {field.type === 'image' && (
                <div className="space-y-2">
                  {formData[field.key] && (
                    <img src={formData[field.key]} alt="Preview" className="h-20 w-auto rounded border border-gray-600" />
                  )}
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, field.key)} className="w-full text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-mono file:bg-[#00f0ff]/10 file:text-[#00f0ff] hover:file:bg-[#00f0ff]/20" />
                  {uploading && <span className="text-[#00ffaa] text-xs font-mono animate-pulse">UPLOADING...</span>}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-4 pt-4 border-t border-[#00f0ff]/20">
            <button type="submit" disabled={uploading} className="flex-1 py-2 bg-[#00ffaa]/10 hover:bg-[#00ffaa]/20 text-[#00ffaa] border border-[#00ffaa]/50 rounded font-bold font-mono text-sm transition-colors">SAVE</button>
            <button type="button" onClick={handleCancel} className="flex-1 py-2 bg-[#ff0055]/10 hover:bg-[#ff0055]/20 text-[#ff0055] border border-[#ff0055]/50 rounded font-bold font-mono text-sm transition-colors">CANCEL</button>
          </div>
        </form>
      ) : (
        <div className="overflow-y-auto custom-scrollbar flex-1 pr-2 space-y-3">
          {items.length === 0 && <p className="text-gray-500 font-mono text-sm text-center mt-8">NO DATA FOUND.</p>}
          {items.map(item => (
            <div key={item.id} className="p-4 bg-[#0a1018] border border-gray-800 rounded hover:border-[#00f0ff]/30 transition-colors flex justify-between items-center group">
              <div className="truncate pr-4 flex-1">
                <h4 className="text-white font-bold truncate">{item.title || item.degree || item.company || 'Unnamed Item'}</h4>
                <p className="text-gray-500 font-mono text-xs truncate max-w-sm">ID: {item.id}</p>
              </div>
              <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleEdit(item)} className="px-3 py-1 bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 rounded font-mono text-xs hover:bg-[#00f0ff]/20">EDIT</button>
                <button onClick={() => handleDelete(item.id)} className="px-3 py-1 bg-[#ff0055]/10 text-[#ff0055] border border-[#ff0055]/30 rounded font-mono text-xs hover:bg-[#ff0055]/20">DEL</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
