import Section from '../layout/Section';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      // Add the Web3Forms access key
      const submitData = {
        ...data,
        access_key: import.meta.env.VITE_WEB3FORMS_KEY || '1e23c94e-cb48-4d17-8cb9-0837ed4884a7' 
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({ type: 'success', message: result.message || 'Message sent successfully!' });
        e.target.reset();
      } else {
        setFormStatus({ type: 'error', message: result.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus({ type: 'error', message: 'Network error. Make sure the backend server is running.' });
    } finally {
      setIsSubmitting(false);
      // Optional: Clear message after 5 seconds
      setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <Section id="contact" title="Contact Us" subtitle="Get In Touch">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8">Let's talk about your next project.</h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-500/10 text-brand-500 rounded-xl shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">General Inquiries</h4>
                  <a href="mailto:patidar.aarti1869@gmail.com" className="text-lg font-medium hover:text-brand-500 transition-colors break-all">
                    patidar.aarti1869@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-500/10 text-brand-500 rounded-xl shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Social Profiles</h4>
                  <a href="https://www.linkedin.com/in/aarti-patidar-864397227" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-brand-500 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-500/10 text-brand-500 rounded-xl shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-medium">Remote / Available Globally</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3 glass-panel p-8 md:p-10 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" autoComplete="off">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-[var(--text-secondary)]">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-[var(--text-secondary)]">Subject / Service Type</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                placeholder="e.g., Custom Theme Development"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-[var(--text-secondary)]">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={5}
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                placeholder="Describe your store or project goal..."
              ></textarea>
            </div>

            {formStatus.message && (
              <div className={`p-4 rounded-xl text-sm font-medium ${formStatus.type === 'success' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}`}>
                {formStatus.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
