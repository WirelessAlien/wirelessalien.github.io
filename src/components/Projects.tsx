import { ExternalLink, Github, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Button } from './Button';

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-on-background mb-4">Featured Projects</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            A selection of Android applications I've built, focusing on clean architecture and smooth user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link 
              to={`/project/${project.id}`}
              key={project.id} 
              className="group flex flex-col bg-surface-container-low rounded-[24px] overflow-hidden transition-all hover:bg-surface-container hover:shadow-md border border-outline-variant/50"
            >
              <div className={`h-48 w-full ${project.color} flex items-center justify-center p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-tertiary/10 mix-blend-overlay"></div>
                {project.icon ? (
                  <img src={project.icon} alt={project.title} className="w-24 h-24 rounded-2xl object-contain drop-shadow-md z-10 group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <Smartphone size={64} className="text-primary/40 group-hover:scale-110 transition-transform duration-500 z-10" />
                )}
              </div>
              
              <div className="flex flex-col flex-1 p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">{project.title}</h3>
                  <div 
                    className="text-on-surface-variant group-hover:text-primary transition-colors"
                  >
                    {project.type === 'github' ? <Github size={24} /> : <ExternalLink size={24} />}
                  </div>
                </div>
                
                <p className="text-on-surface-variant mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-surface rounded-full text-on-surface-variant border border-outline-variant/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
