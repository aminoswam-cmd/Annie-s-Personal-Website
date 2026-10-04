
import React from 'react';
import { HOBBIES } from '../constants';
import { Mountain, Wind, Palette, Music, Layers, PenTool, Truck, Skull } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Mountain,
  Wind,
  Palette,
  Music,
  Layers,
  PenTool,
  Truck,
  Skull
};

interface HobbiesProps {
  onHobbyClick?: (id: string) => void;
}

export const Hobbies: React.FC<HobbiesProps> = ({ onHobbyClick }) => {
  return (
    <section id="hobbies" className="py-32 px-6 bg-[#FDFCF8] overflow-hidden relative border-t border-earthy-olive/10">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-earthy-sage/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 space-y-4">
          <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs block">Life Outside School</span>
          <h2 className="text-6xl md:text-8xl font-black text-earthy-olive tracking-tighter">Beyond the <span className="text-earthy-clay italic font-serif">Desk</span></h2>
          <p className="text-earthy-olive font-bold max-w-xl text-xl leading-relaxed">
            Capturing the bits and pieces of memories gained through exploration, art, and rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOBBIES.map((hobby) => {
            const IconComponent = iconMap[hobby.icon];
            const isClickable = ['climbing', 'rolling-nest', 'collect-them-all', 'hiking', 'snowboarding', 'guzheng'].includes(hobby.id);
            
            return (
              <div 
                key={hobby.id}
                onClick={() => isClickable && onHobbyClick?.(hobby.id)}
                className={`group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-earthy-olive shadow-lg hover:shadow-2xl transition-all duration-700 ease-out ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* Background Image - High visibility by default */}
                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
                  <img 
                    src={hobby.image} 
                    alt={hobby.name} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                
                {/* Modern Gradient Overlay - Darker at bottom for text, clear at top for the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 ease-out translate-y-6 group-hover:translate-y-0">
                    {/* Icon with Glassmorphism */}
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md border border-white/40 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {IconComponent && <IconComponent className="w-7 h-7" />}
                    </div>
                    
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tight">
                      {hobby.name}
                    </h3>
                    
                    {/* Description - Reveals on Hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-white text-base font-bold leading-relaxed max-w-xs pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          {hobby.description}
                        </p>
                      </div>
                    </div>

                    {isClickable && (
                      <div className="mt-2 text-[0.6rem] font-black uppercase tracking-[0.25em] text-earthy-cream opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to see more →
                      </div>
                    )}
                    
                    {/* Subtle Hint */}
                    <div className="h-1 w-12 bg-earthy-clay rounded-full group-hover:w-full transition-all duration-700 origin-left" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
