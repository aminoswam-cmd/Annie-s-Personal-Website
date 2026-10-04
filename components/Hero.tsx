
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden bg-[#FDFCF8]">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] font-bold leading-[0.85] text-earthy-olive tracking-tighter">
              Annie <br /> 
              <span className="text-earthy-sand italic">Wu</span>
            </h1>
          </div>
          
          <div className="space-y-8 max-w-lg">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-earthy-olive leading-snug">
              Exploring the intersection of <span className="text-earthy-clay italic font-medium">human</span> and <span className="text-earthy-clay italic font-medium">nature</span>.
            </p>
          </div>
        </div>
        
        <div className="relative flex justify-center md:justify-end">
          <div className="relative aspect-[3/4] w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[540px] overflow-hidden rounded-[2.5rem] border border-earthy-olive/5 shadow-2xl">
            <img 
              src="https://i.ibb.co/0yJHynzg/2a674a28314542c157a62240707e01ec.jpg" 
              alt="Annie Wu" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
