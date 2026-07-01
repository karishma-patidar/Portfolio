import { motion } from 'framer-motion';

export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                {title} {subtitle && <span className="text-[var(--text-secondary)] font-light">/ {subtitle}</span>}
              </h2>
            )}
            <div className="w-24 h-1 bg-brand-500 rounded-full"></div>
          </motion.div>
        )}

        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
}
