import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onProjectClick?: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    // These IDs lead to dedicated detail pages
    if ((id === 'liver-cancer' || id === 'exoskeleton' || id === 'three-rivers') && onProjectClick) {
      onProjectClick(id);
      return;
    }
    setExpandedId(expandedId === id ? null : id);
  };

  const isDetailPage = (id: string) => id === 'liver-cancer' || id === 'exoskeleton' || id === 'three-rivers';

  return (
    <section id="projects" className="py-32 px-6 bg-[#FDFCF8]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold text-earthy-olive tracking-tighter">Project Gallery</h2>
            <p className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs">Innovations & Investigations</p>
          </div>
          <p className="max-w-xs text-earthy-olive font-bold text-lg leading-snug">
            A cross-disciplinary portfolio spanning biology, engineering, and sociology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id}
              className={`group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-earthy-olive/10 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${expandedId === project.id ? 'md:col-span-2 lg:col-span-3' : ''}`}
              onClick={() => toggleExpand(project.id)}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${expandedId === project.id ? 'h-64' : 'aspect-[16/10]'}`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[0.65rem] font-black text-earthy-clay uppercase tracking-[0.2em] shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-earthy-sand font-serif font-bold text-xl opacity-40 mb-1 block">
                      0{idx + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-earthy-olive leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex w-10 h-10 bg-earthy-olive/5 text-earthy-olive rounded-full items-center justify-center group-hover:bg-earthy-olive group-hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                
                <p className="text-earthy-olive font-bold leading-relaxed text-base mb-6">
                  {project.description}
                </p>

                {/* Collapsible Details (For non-navigation projects) */}
                {!isDetailPage(project.id) && (
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedId === project.id ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 border-t border-earthy-cream mt-4">
                      <p className="text-earthy-olive/80 font-medium leading-relaxed italic text-lg">
                        {project.longDescription}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-auto">
                  <span className="flex items-center gap-2 text-earthy-clay font-black uppercase text-[0.7rem] tracking-[0.2em] hover:text-earthy-olive transition-colors group/btn">
                    {isDetailPage(project.id) ? (
                      <><ArrowUpRight className="w-5 h-5" /> view full project</>
                    ) : (
                      expandedId === project.id ? (
                        <><Minus className="w-5 h-5" /> less details</>
                      ) : (
                        <><Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform" /> more details</>
                      )
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};