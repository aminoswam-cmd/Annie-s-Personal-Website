import React from 'react';
import { FIELD_STUDIES } from '../constants';
import { ArrowUpRight, MapPin, Compass } from 'lucide-react';

interface FieldStudiesProps {
  onFieldStudyClick: (id: string) => void;
}

export const FieldStudies: React.FC<FieldStudiesProps> = ({ onFieldStudyClick }) => {
  return (
    <section id="field-studies" className="py-32 px-6 bg-[#FAF9F5] border-t border-earthy-olive/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold text-earthy-olive tracking-tighter">
              Field Studies
            </h2>
            <p className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs">
              Expeditions & High-Plateau Ethnography
            </p>
          </div>
          <p className="max-w-md text-earthy-olive font-bold text-lg leading-snug">
            Immersive field investigations across the Qinghai-Tibetan Plateau spanning alpine ecology, public health in pastoralist communities, and traditional Tibetan medical philosophy.
          </p>
        </div>

        {/* 3 Field Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FIELD_STUDIES.map((study, idx) => (
            <div 
              key={study.id}
              onClick={() => onFieldStudyClick(study.id)}
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-earthy-olive/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/11]">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[0.65rem] font-black text-earthy-clay uppercase tracking-[0.2em] shadow-sm">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-earthy-sand font-serif font-bold text-xl opacity-40 mb-1 block">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-earthy-olive leading-tight group-hover:text-earthy-clay transition-colors">
                      {study.title}
                    </h3>
                    {study.subtitle && (
                      <p className="text-xs font-black uppercase tracking-wider text-earthy-sand mt-1">
                        {study.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="flex w-10 h-10 bg-earthy-olive/5 text-earthy-olive rounded-full items-center justify-center shrink-0 group-hover:bg-earthy-olive group-hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {study.location && (
                  <div className="flex items-center gap-2 text-xs font-bold text-earthy-olive/70 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-earthy-clay shrink-0" />
                    <span>{study.location}</span>
                  </div>
                )}
                
                <p className="text-earthy-olive font-bold leading-relaxed text-sm mb-6">
                  {study.description}
                </p>

                <div className="mt-auto pt-4 border-t border-earthy-olive/5">
                  <span className="flex items-center gap-2 text-earthy-clay font-black uppercase text-[0.7rem] tracking-[0.2em] group-hover:text-earthy-olive transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    View Field Study
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
