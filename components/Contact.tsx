'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="glass-card w-full p-6 md:p-10 relative bg-black/40 border-[#00f0ff]/30 shadow-[#00f0ff]/10">
      {/* Decorative corner pieces */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff] opacity-50"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff] opacity-50"></div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-[0.2em] text-shadow-cyan">
          CONTACT
        </h2>
        <p className="text-[#00ffaa] font-mono tracking-widest text-sm md:text-base">
          {'>'} ESTABLISHING SECURE CONNECTION...
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-black/60 border border-[#00f0ff]/20 p-6 text-center group hover:border-[#00f0ff] transition-all font-mono"
        >
          <div className="text-[#00f0ff] mb-4">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-[#00ffaa] mb-2 text-sm tracking-widest uppercase">EMAIL_PROTOCOL</h3>
          <a href="mailto:nafizahmed000@gmail.com" className="text-white text-sm hover:text-[#00f0ff] transition-colors break-all">
            nafizahmed000@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black/60 border border-[#00f0ff]/20 p-6 text-center group hover:border-[#00f0ff] transition-all font-mono"
        >
          <div className="text-[#00f0ff] mb-4">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-[#00ffaa] mb-2 text-sm tracking-widest uppercase">VOICE_LINK</h3>
          <a href="tel:+8801634324335" className="text-white text-sm hover:text-[#00f0ff] transition-colors break-all">
            +880 1634-324335
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-black/60 border border-[#00f0ff]/20 p-6 text-center group hover:border-[#00f0ff] transition-all font-mono"
        >
          <div className="text-[#00f0ff] mb-4">
            <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.4 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          <h3 className="text-[#00ffaa] mb-2 text-sm tracking-widest uppercase">ENCRYPTED_COMMS</h3>
          <a href="https://wa.me/8801634324335" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-[#00f0ff] transition-colors break-all">
            +880 1634-324335
          </a>
        </motion.div>
      </div>

      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-black/60 border border-[#00f0ff]/20 p-8 w-full relative"
        >
          <div className="absolute top-0 left-0 bg-[#00f0ff]/20 text-[#00f0ff] px-3 py-1 text-xs font-mono">MESSAGE_PAYLOAD.EXE</div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4 font-mono">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm text-[#00ffaa] tracking-widest uppercase">
                  {'>'} IDENTIFIER
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#00f0ff]/30 text-white focus:outline-none focus:border-[#00f0ff] transition-all placeholder:text-gray-600 text-sm"
                  placeholder="Enter alias"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-[#00ffaa] tracking-widest uppercase">
                  {'>'} RETURN_ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#00f0ff]/30 text-white focus:outline-none focus:border-[#00f0ff] transition-all placeholder:text-gray-600 text-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm text-[#00ffaa] tracking-widest uppercase">
                {'>'} DATA_PACKET
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-[#00f0ff]/30 text-white focus:outline-none focus:border-[#00f0ff] transition-all resize-none placeholder:text-gray-600 text-sm"
                placeholder="Enter payload data"
              />
            </div>

            <div className="text-right pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#00f0ff]/10 text-[#00f0ff] hover:bg-[#00f0ff]/20 hover:text-white border border-[#00f0ff]/50 font-bold py-3 px-8 transition-all uppercase tracking-[0.2em]"
              >
                TRANSMIT
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
