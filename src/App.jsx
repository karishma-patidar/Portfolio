import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhyMe from './components/sections/WhyMe';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Aarti | Shopify Developer & E-commerce Engineer</title>
        <meta name="description" content="Aarti - Premium Shopify Developer & Liquid Expert. Building high-conversion custom themes, headless e-commerce solutions, and custom Shopify experiences." />
        <meta name="theme-color" content="#14b8a6" />
      </Helmet>
      
      <div className="relative min-h-screen selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)]">


        <Header />
        
        <main>
          <Hero />
          <WhyMe />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
