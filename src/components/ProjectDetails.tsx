import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowLeft, Smartphone, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Button } from './Button';

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-24 pb-20 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold text-on-background mb-4">Project Not Found</h1>
        <p className="text-on-surface-variant mb-8">The project you are looking for does not exist.</p>
        <Link to="/">
          <Button variant="filled" icon={<ArrowLeft size={18} />}>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 lg:pt-32 min-h-[calc(100vh-200px)] flex flex-col px-6">
      <div className="max-w-4xl mx-auto w-full flex-1">
        
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className={`w-full md:w-1/3 aspect-square ${project.color} rounded-[32px] flex items-center justify-center relative overflow-hidden shadow-sm`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-tertiary/10 mix-blend-overlay"></div>
            {project.icon ? (
              <img src={project.icon} alt={project.title} className="w-32 h-32 md:w-48 md:h-48 rounded-3xl object-contain drop-shadow-xl z-10" />
            ) : (
              <Smartphone size={80} className="text-primary/40 z-10" />
            )}
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-surface-variant rounded-full text-on-surface-variant border border-outline-variant/30">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-on-background mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-on-surface-variant mb-8 leading-relaxed">
              {project.description}
            </p>

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="filled" 
                icon={project.type === 'github' ? <Github size={20} /> : <ExternalLink size={20} />}
                className="mb-10 text-base h-12 px-8"
              >
                {project.type === 'github' ? 'View Source Code' : 'View on Play Store'}
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-on-background mb-6">About the Project</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {project.longDescription}
            </p>
          </div>
          
          <div className="bg-surface-container-low rounded-[28px] p-8 border border-outline-variant/30">
            <h2 className="text-2xl font-bold text-on-background mb-6">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-on-surface-variant text-lg leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
