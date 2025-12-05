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
    // Handle form submission (you can integrate with email service later)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 gradient-bg pattern-dots relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Code window */}
        <div className="absolute top-20 left-10 opacity-10 dark:opacity-5 animate-float-slow">
          <div className="bg-gradient-to-br from-purple-400/20 to-blue-400/20 backdrop-blur-sm rounded-lg p-4 w-48 h-40 shadow-xl">
            <div className="flex gap-1 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 bg-pink-400/50 rounded w-3/4"></div>
              <div className="h-1.5 bg-blue-400/50 rounded w-full"></div>
              <div className="h-1.5 bg-purple-400/50 rounded w-2/3"></div>
              <div className="h-1.5 bg-pink-400/50 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        {/* Terminal window */}
        <div className="absolute bottom-20 right-10 opacity-10 dark:opacity-5 animate-float-delayed">
          <div className="bg-gradient-to-br from-pink-400/20 to-purple-400/20 backdrop-blur-sm rounded-lg p-3 w-40 h-32 shadow-xl">
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1">
                <div className="text-green-500 text-xs">$</div>
                <div className="h-1 bg-green-400/50 rounded w-2/3"></div>
              </div>
              <div className="h-1 bg-blue-400/50 rounded w-full"></div>
              <div className="h-1 bg-purple-400/50 rounded w-3/4"></div>
            </div>
          </div>
        </div>
        {/* Function brackets */}
        <div className="absolute top-1/3 right-1/4 opacity-5 dark:opacity-[0.02] animate-float">
          <div className="text-6xl font-mono text-blue-500">{'( ) => { }'}</div>
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-wider mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"
          />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to contact me by filling out the form below. I'll get back to you as soon as possible!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
