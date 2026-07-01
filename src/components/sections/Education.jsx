import Section from '../layout/Section';
import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: "Master's in Computer Application",
      school: "Gyanodaya University",
      date: "2023 - 2025",
      desc: "Specialized in Software Engineering and Database Architectures. Graduated with Honors. Participated in advanced frontend design courses and e-commerce development seminars.",
      tags: ["Software Eng.", "Data Structures", "Web Technologies"]
    },
    {
      degree: "Bachelor's of Computer Application",
      school: "Vikram University",
      date: "2020 - 2023",
      desc: "Completed exhaustive certification pathways covering Online Store 2.0 architectures, Shopify CLI theme tooling, Cart/Checkout customization, and GraphQL Storefront API integrations.",
      tags: ["Liquid", "GraphQL API", "Theme CLI"]
    }
  ];

  return (
    <Section id="education" title="Education" subtitle="Academic Journey">
      <div className="relative border-l border-[var(--border-color)] ml-4 md:ml-6 space-y-12 pb-8">
        {education.map((item, index) => (
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
                  <h3 className="text-2xl font-bold tracking-tight mb-1">{item.degree}</h3>
                  <span className="text-lg text-brand-600 dark:text-brand-400 font-medium">{item.school}</span>
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
