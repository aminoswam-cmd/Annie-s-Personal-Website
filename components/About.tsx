
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative background elements removed to satisfy the "weird shape" removal request */}

      <div className="max-w-4xl mx-auto text-center mb-20 relative">
        <h2 className="text-5xl md:text-7xl font-bold text-earthy-olive mb-6">About Me</h2>
        <div className="w-24 h-1.5 bg-earthy-clay mx-auto rounded-full" />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-8 space-y-8 text-left order-2 lg:order-1">
            <p className="text-2xl md:text-3xl leading-relaxed text-earthy-olive font-bold">
              Hi, welcome to my personal website! I am a high school student from <span className="text-earthy-sand italic underline decoration-earthy-clay/30 decoration-[8px] underline-offset-[-4px]">Mercersburg Academy</span>, class of 2027. 
            </p>
            
            <p className="text-xl md:text-2xl leading-relaxed text-earthy-olive font-bold opacity-90">
              I have strong passions for science, social studies, the outdoors, visual arts, and music. The bits and pieces of memories that I gained through these activities shaped me into who I am today.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-earthy-olive font-bold opacity-90">
              I grew up in Shanghai, China, with my family and my dog Meatball. I am so excited to share with you who I am and what I've done, so please keep exploring this website!
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-earthy-sage/10 text-earthy-olive rounded-2xl text-xs font-black tracking-[0.2em] uppercase border border-earthy-sage/30 shadow-sm">
                <span className="w-2.5 h-2.5 bg-earthy-clay rounded-full animate-ping" />
                Shanghai ✈️ Mercersburg
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-earthy-clay/5 text-earthy-olive rounded-2xl text-xs font-black tracking-[0.2em] uppercase border border-earthy-clay/20 shadow-sm">
                Class of 2027
              </div>
            </div>
          </div>

          {/* Photo Column */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs aspect-[3/4] rounded-[2rem] overflow-hidden border border-earthy-olive/15 bg-earthy-cream shadow-md group">
              <img 
                src="https://i.ibb.co/m5R7Y19p/IMG-7307.jpg" 
                alt="Annie Wu" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
