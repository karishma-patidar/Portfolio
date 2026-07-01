import Section from '../layout/Section';
import { motion } from 'framer-motion';

export default function Experience() {
  const experience = [
    {
      title: "Shopify Developer",
      company: "Mandasa Technologies",
      date: "2023 - Present",
      desc: "Leading custom theme developments for global DTC brands. Translating premium designs from Figma into pixel-perfect, highly responsive Shopify OS 2.0 sections. Implementing complex asynchronous cart updates, multi-tiered discount structures via Shopify Functions, and API-driven custom integrations. Improved client conversion rates by an average of 18% through load speed optimization.",
      tags: ["Theme Architecture", "Shopify Functions", "Figma To Liquid", "Performance Tuning"]
    }
  ];

  return (
    <Section id="experience" title="Experience" subtitle="Professional Work">
      <div className="relative border-l border-[var(--border-color)] ml-4 md:ml-6 space-y-12 pb-8">
        {experience.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-brand-500 shadow-[0_0_10px_var(--color-brand-500)]"></div>
            
            <div className="glass-panel p-6 md:p-8 rounded-3xl relative group hover:border-brand-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-1">{item.title}</h3>
                  <span className="text-lg text-brand-600 dark:text-brand-400 font-medium">{item.company}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] text-sm font-mono whitespace-nowrap">
                  {item.date}
                </span>
              </div>
              
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {item.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-700 dark:text-brand-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
