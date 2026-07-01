import Section from '../layout/Section';
import { motion } from 'framer-motion';
import { ExternalLink, Check } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: "01",
      name: "Acotis Diamonds",
      url: "https://acotisdiamonds.co.uk/",
      value: "$800 - $1,000",
      work: [
        "Shopify Theme Customization", "Custom Sections Development", "Responsive Design Improvements",
        "Store Performance Optimization", "UI/UX Enhancements", "Metafield and metaobject"
      ]
    },
    {
      id: "02",
      name: "Adya Organics",
      url: "https://adyaorganics.com/",
      value: "$800 - $1,000",
      work: [
        "Shopify OS 2.0 Development", "Metaobjects Implementation", "Metafields Setup",
        "Dynamic Content Management", "Custom Product Page Features", "Performance Optimization"
      ]
    },
    {
      id: "03",
      name: "Artgatha",
      url: "https://www.artgatha.com/",
      value: "$400 - $500",
      work: [
        "Complete Store Redesign", "Homepage Redesign", "Collection Page Development",
        "Product Page Improvements", "Responsive Layout Optimization", "UI/UX Enhancements"
      ]
    }
  ];

  return (
    <Section id="projects" title="Featured Projects" subtitle="Selected Work">
      <div className="flex flex-col gap-12 md:gap-24">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-12 gap-8 md:gap-16 items-center"
          >
            {/* Project Info */}
            <div className={`md:col-span-5 flex flex-col gap-6 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="text-brand-500 font-mono text-xl">{project.id}</div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.name}</h3>
              
              <div className="flex flex-col gap-2 py-4 border-y border-[var(--border-color)]">
                <p className="flex justify-between items-center text-[var(--text-secondary)]">
                  <span>Website:</span>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-400 hover:underline">
                    {new URL(project.url).hostname.replace('www.', '')}
                  </a>
                </p>
                <p className="flex justify-between items-center text-[var(--text-secondary)]">
                  <span>Value:</span>
                  <span className="font-medium text-[var(--text-primary)]">{project.value}</span>
                </p>
              </div>

              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-secondary self-start group">
                Visit Store
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Project Details Panel */}
            <div className={`md:col-span-7 glass-panel p-8 md:p-12 rounded-[2rem] ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <h4 className="text-xl font-bold mb-6">Work Completed</h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.work.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
