/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TopAppBar } from './components/TopAppBar';
import { Home } from './components/Home';
import { Donate } from './components/Donate';
import { ContactPage } from './components/ContactPage';
import { ProjectDetails } from './components/ProjectDetails';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const navState = state as { scrollTo?: string } | null;
    if (!navState?.scrollTo && pathname !== '/about' && pathname !== '/projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, state]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-surface font-sans text-on-background selection:bg-primary-container selection:text-on-primary-container">
          <TopAppBar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home initialSection="about" />} />
              <Route path="/projects" element={<Home initialSection="projects" />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
