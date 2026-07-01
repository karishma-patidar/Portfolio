import Section from '../layout/Section';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function WhyMe() {
  const points = [
    "Build custom Shopify functionality without relying on paid apps.",
    "Create scalable solutions using Liquid, JavaScript, Metafields, and Metaobjects.",
    "Optimize stores for speed, performance, and conversions.",
    "Deliver responsive and user-friendly Shopify experiences.",
    "Experience working on live client stores with project values exceeding $1500."
  ];

  return (
    <Section id="why-me" title="Why Work With Me?">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[var(--bg-secondary)] transition-colors"
            >
              <CheckCircle2 className="text-brand-500 shrink-0 mt-1" size={24} />
              <p className="text-lg text-[var(--text-primary)] leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="glass-panel w-full rounded-[2rem] p-8 flex flex-col justify-center relative z-10">
            <h3 className="text-3xl font-bold mb-6">Let's elevate your brand.</h3>
            <p className="text-[var(--text-secondary)] text-lg mb-8">
              My approach focuses on writing clean, maintainable code that directly translates to better performance and higher conversion rates.
            </p>
            <a href="#contact" className="btn-primary self-start">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
