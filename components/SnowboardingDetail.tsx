
import React from 'react';
import { ArrowLeft, Camera, Snowflake, Wind, Mountain } from 'lucide-react';

interface SnowboardingDetailProps {
  onBack: () => void;
}

const SNOWBOARDING_IMAGES: string[] = [
  "https://i.ibb.co/MxzG0WBD/Weixin-Image-20251226212559-138-6.jpg",
  "https://i.ibb.co/ZPg8thh/Weixin-Image-20251226212600-139-6.jpg",
  "https://i.ibb.co/NgRBKv7w/Weixin-Image-20251226212601-140-6.jpg",
  "https://i.ibb.co/F4qFHB2G/Weixin-Image-20251225221124-108-6.jpg",
  "https://i.ibb.co/gMRmjTjQ/Weixin-Image-20251226212603-142-6.jpg",
  "https://i.ibb.co/5bXBPFQ/Weixin-Image-20251226212610-148-6.jpg",
  "https://i.ibb.co/99rSk8XX/Weixin-Image-20251226212609-147-6.jpg",
  "https://i.ibb.co/mrsHKPdh/Weixin-Image-20251226212607-145-6.jpg",
  "https://i.ibb.co/tPTdzYBx/Weixin-Image-20251226212604-143-6.jpg",
  "https://i.ibb.co/6JWfYHB1/Weixin-Image-20251226212606-144-6.jpg",
  "https://i.ibb.co/s91VCP09/Weixin-Image-20251226212608-146-6.jpg",
  "https://i.ibb.co/7tyZPvQX/Weixin-Image-20251226212612-150-6.jpg",
  "https://i.ibb.co/PJcsVt1/Weixin-Image-20251226212611-149-6.jpg",
  "https://i.ibb.co/KzwBy02f/Weixin-Image-20251226212614-152-6.jpg",
  "https://i.ibb.co/VW5qQz0s/Weixin-Image-20251226212613-151-6.jpg"
];

export const SnowboardingDetail: React.FC<SnowboardingDetailProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF8]/95 backdrop-blur-md py-6 px-6 border-b border-earthy-olive/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-earthy-olive font-black uppercase tracking-widest text-[0.65rem] hover:text-earthy-clay transition-all group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to portfolio
          </button>
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Winter</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs mb-4 block">Snowboarding</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#1a1a1a] leading-[0.85] tracking-tighter mb-8">
              Snowboarding
            </h1>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="max-w-3xl space-y-8">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-earthy-sage/10 rounded-2xl flex items-center justify-center">
                  <Snowflake className="w-6 h-6 text-earthy-clay" />
                </div>
                <div className="w-12 h-12 bg-earthy-sage/10 rounded-2xl flex items-center justify-center">
                  <Wind className="w-6 h-6 text-earthy-clay" />
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-serif text-[#1B261B] leading-relaxed font-bold">
                Waking up at 6 am on a Saturday morning just to skin up the mountain and enjoy the fresh snow of the day.
              </p>
              <p className="text-xl text-earthy-olive leading-relaxed font-medium">
                Through <span className="text-earthy-clay italic font-black">Mercersburg Outdoor Education</span>, I learned the skills of splitboarding. Now I have the ability to explore more backcountry regions. I also found fun in ascending the mountain, just like my passion for climbing, stepping to a higher region with my own strength is always empowering.
              </p>
              <p className="text-lg text-earthy-sand font-medium border-l-4 border-earthy-sage pl-6 italic">
                "There's something transformative about earning your turns. The effort makes the fresh powder feel like a true reward."
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
             <div className="bg-white p-10 rounded-[2.5rem] border border-earthy-olive/10 shadow-sm">
                <Mountain className="w-10 h-10 text-earthy-clay mb-6" />
                <h3 className="text-2xl font-black text-earthy-olive mb-4">Backcountry Skills</h3>
                <p className="font-medium text-earthy-sand leading-relaxed">
                  Learning split-boarding and skinning techniques allowed me to explore terrain beyond the lifts. Skinning is like a combination of climbing and hiking, but in a winter and snowy setting. I not only get to enjoy the ride down, but also working hard for the way up.
                </p>
             </div>
             <div className="bg-earthy-olive p-10 rounded-[2.5rem] shadow-xl text-white">
                <Wind className="w-10 h-10 text-earthy-sage mb-6" />
                <h3 className="text-2xl font-black mb-4">Gains</h3>
                <p className="font-medium opacity-80 leading-relaxed">
                  The freezing temperatures and early starts built a level of resilience that translates to my academic work. It taught me that consistency and preparation are the keys to handling any challenge.
                </p>
             </div>
          </div>

          {/* Picture Gallery */}
          <div className="mt-20 space-y-12">
            <div className="flex items-center justify-between border-b border-earthy-olive/10 pb-6">
               <h2 className="text-4xl font-black text-earthy-olive tracking-tight flex items-center gap-4">
                <Camera className="w-8 h-8 text-earthy-clay" /> Slope Journal
              </h2>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-earthy-sand">Frozen Moments</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {SNOWBOARDING_IMAGES.map((url, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm border border-earthy-olive/5 aspect-[4/5]">
                  <img 
                    src={url} 
                    alt={`Snowboarding memory ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-earthy-olive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
