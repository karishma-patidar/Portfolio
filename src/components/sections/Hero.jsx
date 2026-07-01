import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const words = ["Shopify Developer", "Liquid Expert", "E-commerce Engineer"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="min-h-[90vh] md:min-h-screen flex flex-col justify-center pt-20 lg:pt-24 pb-12 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1 px-3 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                Available for Freelance
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Aarti <br />
              <span className="text-gradient h-[1.2em] inline-block mt-2">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWord]}
                </motion.span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed">
              Specializing in engineering high-performance Shopify custom themes, bespoke Liquid architecture,
              and scalable headless e-commerce storefronts. I build online retail experiences that combine
              aesthetic minimalism with conversion-oriented performance.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#contact" className="btn-primary">
                Work With Me
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-secondary">
                View Work
              </a>
              <a href="../../../public/Aarti_Patidar_Resume_ATS.docx" download="Aarti_Patidar_Resume_ATS.docx" className="btn-secondary text-sm md:text-base">
                Download CV
                <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="glass-panel w-full h-full rounded-[2rem] overflow-hidden relative z-10 border border-[var(--border-color)] p-2">
              <div className="w-full h-full rounded-[1.5rem] bg-[var(--bg-secondary)] overflow-hidden flex items-center justify-center">
                {/* Placeholder for Profile Image */}
                <div className="text-[var(--text-secondary)] font-mono text-sm">
                  [Profile Image Placeholder]
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-24 w-full border-t border-[var(--border-color)] pt-8 md:pt-12"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-500">10+</h3>
            <p className="text-xs sm:text-sm text-(--text-secondary) uppercase tracking-wider font-semibold">Shopify Stores Launched</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-500">85+</h3>
            <p className="text-xs sm:text-sm text-(--text-secondary) uppercase tracking-wider font-semibold">Avg PageSpeed Score</p>
          </div>
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-500">2+</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] uppercase tracking-wider font-semibold">Years Freelance Exp</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
