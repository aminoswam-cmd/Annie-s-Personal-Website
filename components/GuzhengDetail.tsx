
import React from 'react';
import { ArrowLeft, Music, ExternalLink, Sparkles, Heart } from 'lucide-react';

interface GuzhengDetailProps {
  onBack: () => void;
}

export const GuzhengDetail: React.FC<GuzhengDetailProps> = ({ onBack }) => {
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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Musical Arts</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs mb-4 block">Traditional Instrument</span>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-[0.85] tracking-tighter mb-8">
              Guzheng <br />
              <span className="italic text-earthy-clay">Chinese Zither</span>
            </h1>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="max-w-3xl space-y-8">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-earthy-sage/10 rounded-2xl flex items-center justify-center">
                  <Music className="w-6 h-6 text-earthy-clay" />
                </div>
                <div className="w-12 h-12 bg-earthy-sage/10 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-earthy-clay" />
                </div>
              </div>
              <p className="text-2xl md:text-4xl font-serif text-earthy-olive leading-tight font-bold">
                Guzheng is a traditional Chinese instrument that I've been playing for over a decade. To me, it is more than an instrument. Each night, after practice and doing schoolwork, it can always help me relax and find inner peace. 
              </p>
              <div className="space-y-6 text-xl text-earthy-sand leading-relaxed font-medium">
                <p>
                  With its 21 strings, Guzheng can mimic and capture a wide range of vibes: the flowing water, roaming mountains, immense battlefield and the chirps of birds in the morning.
                </p>
                <p>
                  For me, the practice is meditative. It requires a unique blend of physical precision and emotional expression. Each piece tells a story—ranging from ancient historical legends to the quiet beauty of a sunrise in the mountains.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Highlight */}
          <div className="max-w-4xl mx-auto mt-24">
            <div className="bg-earthy-olive p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-[0.65rem] font-black text-earthy-sage uppercase tracking-widest">
                    <Heart className="w-3 h-3 fill-current" /> Performance
                  </div>
                  <h2 className="text-4xl font-black text-white leading-tight">
                    Watch My <br /> <span className="italic text-earthy-sage">Performance</span>
                  </h2>
                  <p className="text-white/70 font-medium">
                    Experience the contemporary piece "The Spring Arrives at the Xiangjiang River" performed on Guzheng.
                  </p>
                  <a 
                    href="https://youtu.be/5iwldmF-0r0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-10 py-5 bg-white text-earthy-olive rounded-2xl font-black text-[0.8rem] uppercase tracking-widest hover:bg-earthy-sage hover:text-white transition-all shadow-xl group/btn"
                  >
                    Watch on YouTube <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
                <div className="w-full md:w-1/2">
                   <div className="aspect-video bg-black/20 rounded-2xl border border-white/10 overflow-hidden relative">
                      <img 
                        src="https://i.ibb.co/QvN3M9qx/f00fc3e1956beee08aed8d0bc9ead39f.jpg" 
                        alt="Annie Wu Guzheng Performance" 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white group-hover:scale-110 transition-transform">
                          <Music className="w-8 h-8" />
                        </div>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-earthy-sage/20 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
