'use client';

import { useState } from 'react';
import Section from './Section';
import Reveal from '../Reveal';

const contacts = [
  { label: 'Email', value: 'nafizahmed000@gmail.com', href: 'mailto:nafizahmed000@gmail.com' },
  { label: 'Phone', value: '+880 1634-324335', href: 'tel:+8801634324335' },
  { label: 'WhatsApp', value: '+880 1634-324335', href: 'https://wa.me/8801634324335', external: true },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" title="Contact" index="06">
      <Reveal>
        <p className="mb-6 max-w-xl leading-relaxed text-muted">
          I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
      </Reveal>

      <Reveal stagger className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.external ? '_blank' : undefined}
            rel={c.external ? 'noopener noreferrer' : undefined}
            className="surface-card flex flex-col gap-1 p-4"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">{c.label}</span>
            <span className="break-all text-sm text-[rgb(var(--text))]">{c.value}</span>
          </a>
        ))}
      </Reveal>

      <Reveal>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full rounded-md border border-[rgb(var(--border-subtle))] bg-[rgb(var(--ink-2))] px-4 py-3 text-sm text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))]/60 focus:border-[rgb(var(--brand))] focus:outline-none"
          />
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Your email"
            className="w-full rounded-md border border-[rgb(var(--border-subtle))] bg-[rgb(var(--ink-2))] px-4 py-3 text-sm text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))]/60 focus:border-[rgb(var(--brand))] focus:outline-none"
          />
        </div>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Your message"
          className="w-full resize-none rounded-md border border-[rgb(var(--border-subtle))] bg-[rgb(var(--ink-2))] px-4 py-3 text-sm text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))]/60 focus:border-[rgb(var(--brand))] focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-[rgb(var(--brand))] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[rgb(var(--brand-soft))]"
        >
          Send Message
        </button>
      </form>
      </Reveal>
    </Section>
  );
}
