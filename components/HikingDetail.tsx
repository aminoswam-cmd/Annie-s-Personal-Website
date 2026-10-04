
import React from 'react';
import { ArrowLeft, Camera, Wind } from 'lucide-react';

interface HikingDetailProps {
  onBack: () => void;
}

const HIKING_IMAGES: string[] = [
  "https://i.ibb.co/HLhcsvpL/Weixin-Image-20251226210018-123-6.jpg",
  "https://i.ibb.co/YBy9J8Bk/Weixin-Image-20251226210021-125-6.jpg",
  "https://i.ibb.co/SwxdNtMM/Weixin-Image-20251226210054-135-6.jpg",
  "https://i.ibb.co/FbL22Bvx/Weixin-Image-20251225221122-107-6.jpg",
  "https://i.ibb.co/qL8pK3Ww/Weixin-Image-20251226210056-136-6.jpg",
  "https://i.ibb.co/VpT68Gvr/Weixin-Image-20251226210027-128-6.jpg",
  "https://i.ibb.co/7dkMdCq3/Weixin-Image-20251226210029-129-6.jpg",
  "https://i.ibb.co/Qv2ctNt6/Weixin-Image-20251226210024-126-6.jpg",
  "https://i.ibb.co/JFSPb0N0/Weixin-Image-20251226210052-134-6.jpg",
  "https://i.ibb.co/Psg2z2SP/Weixin-Image-20251226210044-132-6.jpg",
  "https://i.ibb.co/S4xS4SFT/Weixin-Image-20251226210039-131-6.jpg",
  "https://i.ibb.co/TMVymcMM/Weixin-Image-20251226210025-127-6.jpg"
];

export const HikingDetail: React.FC<HikingDetailProps> = ({ onBack }) => {
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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Outdoor Exploration</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs mb-4 block">Nature & Adventure</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#1a1a1a] leading-[0.85] tracking-tighter mb-8">
              Hiking
            </h1>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="max-w-3xl space-y-8">
              <p className="text-2xl md:text-3xl font-serif text-[#1B261B] leading-relaxed font-bold">
                I often hike in order to get to a climbing region, but through my Rivers and Trails PGA, I learned to have fun through hiking itself.
              </p>
              <p className="text-xl text-earthy-olive leading-relaxed font-medium">
                My favorite experience in hiking is to walk with different people and talk about different things. Bonding with the group while walking through scenic trails, what more can you ask for? Part of our hiking experience is tree climbing too!
              </p>
            </div>
          </div>

          {/* Picture Gallery */}
          <div className="mt-20 space-y-12">
            <div className="flex items-center justify-between border-b border-earthy-olive/10 pb-6">
               <h2 className="text-4xl font-black text-earthy-olive tracking-tight flex items-center gap-4">
                <Camera className="w-8 h-8 text-earthy-clay" /> Photo Journal
              </h2>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-earthy-sand"> </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {HIKING_IMAGES.map((url, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm border border-earthy-olive/5 aspect-[4/5]">
                  <img 
                    src={url} 
                    alt={`Hiking memory ${idx + 1}`} 
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
