import { Github, Mail, Send } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    if (location.pathname === '/' || location.pathname === '/about' || location.pathname === '/projects') {
      scrollToSection('projects');
    } else {
      navigate('/', { state: { scrollTo: 'projects' } });
    }
  };
  
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-sky-500/20 shadow-sm p-1.5 transition-transform group-hover:scale-105">
            <img 
              src="./WirelessAlien-minimal-blue-tight.svg"
              alt="WirelessAlien" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-on-background">WirelessAlien</span>
        </Link>

        {/* Quick Nav in Footer */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <button
            type="button"
            onClick={handleProjectsClick}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Projects
          </button>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/donate" className="hover:text-primary transition-colors">Donate</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href="https://t.me/WirelessAlien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container hover:bg-[#24A1DE] hover:text-white transition-all"
            aria-label="Telegram"
          >
            <Send size={18} />
          </a>
          <a 
            href="https://github.com/WirelessAlien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="mailto:dev.abhilash.s@gmail.com" 
            className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-outline-variant/20 text-center">
        <p className="text-sm text-on-surface-variant">
          &copy; {currentYear} WirelessAlien. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
