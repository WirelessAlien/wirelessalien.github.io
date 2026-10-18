import { Link } from 'react-router-dom';
import { Button } from './Button';
import { scrollToSection } from '../utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/30 rounded-full blur-3xl -z-10"></div>
      
      {/* Featured WirelessAlien Minimal Logo */}
      <div className="relative mb-6 group">
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 opacity-30 blur-xl group-hover:opacity-60 transition duration-500"></div>
        <div className="relative flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-3xl bg-slate-900 border border-sky-400/30 p-4 shadow-xl transition-transform group-hover:scale-105">
          <img 
            src="./WirelessAlien-minimal-blue-tight.svg"
            alt="WirelessAlien Logo" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]"
          />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-background mb-4">
        Hello, I'm WirelessAlien
      </h1>
      
      <h2 className="text-xl md:text-2xl text-on-surface-variant font-medium mb-8 max-w-2xl">
        A passionate Android Developer from Earth
      </h2>
      
      <p className="text-lg text-on-surface-variant max-w-3xl mb-10 leading-relaxed">
        Crafting exceptional mobile experiences through clean code, user-centric design, and continuous learning.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="filled" onClick={() => scrollToSection('projects')}>
          View My Work
        </Button>
        <Link to="/contact">
          <Button variant="tonal">Start a Conversation</Button>
        </Link>
      </div>
    </section>
  );
}
