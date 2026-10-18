import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-primary text-on-primary rounded-[32px] p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-on-primary/10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-on-primary/10 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg md:text-xl text-primary-container max-w-2xl mx-auto mb-10 leading-relaxed">
              I am available for contract work and custom Android development. Whether it's performance optimization or building an MVP from scratch, let's build something great together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button 
                  variant="tonal" 
                  className="bg-on-primary text-primary hover:bg-on-primary/90 h-14 px-8 text-lg font-medium"
                  icon={<MessageSquare size={20} />}
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
