import Section from '../layout/Section';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      category: "Shopify Development",
      items: [
        "Theme Development & Customization", "Shopify OS 2.0", "Liquid Development", 
        "Custom Sections & Blocks", "Metafields & Metaobjects", "Admin Customization", 
        "Custom Product Pages", "Collection Page Customization", "Cart & Drawer Customization", "API Integrations"
      ]
    },
    {
      category: "Custom Functionality",
      items: [
        "Features Without Third-Party Apps", "Custom Product Options", "Wishlist Functionality", 
        "Recently Viewed Products", "Product Recommendations", "Custom Search & Filters", 
        "Mega Menu Development", "Content Management", "Custom Forms & Workflows"
      ]
    },
    {
      category: "Frontend Development",
      items: [
        "HTML5", "CSS3", "JavaScript", "jQuery", "Responsive Design", "Mobile Optimization"
      ]
    },
    {
      category: "Performance Optimization",
      items: [
        "Page Speed Optimization", "Core Web Vitals", "Image Optimization", 
        "Lazy Loading", "JavaScript & CSS Optimization", "Technical SEO"
      ]
    }
  ];

  return (
    <Section id="skills" title="Skills" subtitle="Expertise">
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-8 rounded-3xl hover:border-brand-500/50 transition-colors group"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-600 dark:text-brand-400 group-hover:text-brand-500 transition-colors">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-lg bg-[var(--bg-primary)] text-sm font-medium border border-[var(--border-color)] hover:border-brand-500 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
