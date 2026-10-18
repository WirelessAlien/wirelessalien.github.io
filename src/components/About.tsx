import { Code2, Cpu, Smartphone } from 'lucide-react';

export function About() {
  const skills = [
    'Kotlin', 'Java', 'Jetpack Compose', 'XML', 'MVVM', 'MVP', 'Coroutines', 'Flow', 'Room Database', 'Retrofit'
  ];

  return (
    <section id="about" className="py-24 bg-surface-container-low px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-on-background mb-6">About Me</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              I specialize in building high-performance, intuitive Android applications that solve real-world problems. With a keen eye for design and a commitment to writing clean, maintainable code, I bring ideas to life on the small screen.
            </p>
          </div>
          
          <div className="flex-1 w-full">
            <div className="bg-surface rounded-[28px] p-8 shadow-sm border border-outline-variant/30">
              <h3 className="text-2xl font-bold text-on-background mb-6 flex items-center gap-3">
                <Code2 className="text-primary" />
                Technical Arsenal
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-medium text-sm transition-transform hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
