import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { scrollToSection } from '../utils';

interface HomeProps {
  initialSection?: string;
}

export function Home({ initialSection }: HomeProps) {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const target = initialSection || state?.scrollTo;
    if (target) {
      const timer = window.setTimeout(() => {
        scrollToSection(target);
      }, 60);
      return () => window.clearTimeout(timer);
    }
  }, [initialSection, location]);

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
