import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils';

export function TopAppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const handleSectionNav = (sectionId: string) => {
    closeMenu();
    if (location.pathname === '/' || location.pathname === '/about' || location.pathname === '/projects') {
      scrollToSection(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 z-50 px-6 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-sky-500/20 shadow-sm p-1.5 transition-transform group-hover:scale-105">
              <img 
                src="./WirelessAlien-minimal-blue-tight.svg"
                alt="WirelessAlien Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-on-background">
              WirelessAlien
            </span>
          </Link>
          
          <div className="flex items-center">
            <nav className="hidden md:flex items-center gap-2 mr-2">
              <button
                type="button"
                onClick={() => handleSectionNav('about')}
                className="px-4 py-2 rounded-full text-sm font-medium text-on-surface hover:bg-surface-variant transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleSectionNav('projects')}
                className="px-4 py-2 rounded-full text-sm font-medium text-on-surface hover:bg-surface-variant transition-colors cursor-pointer"
              >
                Projects
              </button>
              <Link 
                to="/contact" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface hover:bg-surface-variant'}`}
              >
                Contact
              </Link>
              <Link 
                to="/donate" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/donate' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface hover:bg-surface-variant'}`}
              >
                Donate
              </Link>
            </nav>
            <ThemeToggle />
            <button 
              type="button"
              className="md:hidden ml-4 p-2 text-on-surface hover:bg-surface-variant rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-surface md:hidden border-t border-outline-variant/30">
          <nav className="flex flex-col p-4 gap-2">
            <button
              type="button"
              onClick={() => handleSectionNav('about')}
              className="text-left px-4 py-4 rounded-xl text-lg font-medium text-on-surface hover:bg-surface-variant transition-colors"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleSectionNav('projects')}
              className="text-left px-4 py-4 rounded-xl text-lg font-medium text-on-surface hover:bg-surface-variant transition-colors"
            >
              Projects
            </button>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className={`px-4 py-4 rounded-xl text-lg font-medium transition-colors ${location.pathname === '/contact' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface hover:bg-surface-variant'}`}
            >
              Contact
            </Link>
            <Link 
              to="/donate" 
              onClick={closeMenu}
              className={`px-4 py-4 rounded-xl text-lg font-medium transition-colors ${location.pathname === '/donate' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface hover:bg-surface-variant'}`}
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
