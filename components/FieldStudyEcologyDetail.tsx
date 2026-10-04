import React from 'react';
import { ArrowLeft, Droplets, MapPin, Mountain, ShieldAlert, HeartHandshake, Eye, Sparkles } from 'lucide-react';

interface FieldStudyEcologyDetailProps {
  onBack: () => void;
}

export const FieldStudyEcologyDetail: React.FC<FieldStudyEcologyDetailProps> = ({ onBack }) => {
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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Field Studies · Expedition I</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earthy-sage/15 text-earthy-olive rounded-full font-black uppercase tracking-[0.3em] text-xs">
                <MapPin className="w-3.5 h-3.5 text-earthy-clay" /> Sanjiangyuan & Mt. Amne Machin
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-[0.85] tracking-tighter mb-8">
              Three River Source<br />
              <span className="italic text-earthy-clay">Ecological Conservation</span>
            </h1>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Overview Text */}
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-bold text-earthy-olive leading-relaxed">
                  Sanjiangyuan, or the Three River Source—often venerated as the "Water Tower of Asia"—is the cradle of the Yangtze, Yellow, and Lancang rivers. During my first expedition, my focus was centered on the fragile alpine ecology, glacial retreat, and community-led conservation on the Qinghai-Tibetan Plateau.
                </p>
                <p className="text-xl md:text-2xl font-bold text-earthy-olive leading-relaxed opacity-90">
                  Documenting high-altitude permafrost degradation and tracking biodiversity shifts transformed climate change from an abstract scientific concept into an immediate, tangible reality shaped by sacred topography.
                </p>
              </div>

              {/* Lead Image */}
              <div className="relative max-w-md md:max-w-sm lg:max-w-md w-full mx-auto">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-earthy-olive/10 group">
                  <img 
                    src="https://i.ibb.co/0pH2985C/e4f2d02c44c94c3dbb46dcbcd33f3de3.jpg" 
                    alt="Sanjiangyuan High Plateau Overview" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-earthy-clay/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Expedition Core Narrative */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-earthy-sage text-white rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-earthy-olive/20 shadow-sm">
                  <Droplets className="w-4 h-4 text-white" /> Ecological Fieldwork & Alpine Monitoring
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-earthy-olive tracking-tight">
                  The Ecosystem <br /><span className="italic text-earthy-clay">Sentinel</span>
                </h2>
                
                <div className="space-y-6 text-lg text-earthy-olive font-bold leading-relaxed">
                  <p>
                    During my first visit, I spent weeks documenting the glaciers of sacred Amne Machin Mountain slowly receding and examining the delicate equilibrium of alpine meadows. Walking through vast, silent plateaus, our team mapped soil composition changes and recorded the ecological ripples spreading through the headwaters.
                  </p>
                  
                  <div className="bg-earthy-sage/10 p-6 rounded-3xl border border-earthy-olive/10 space-y-3">
                    <div className="flex items-center gap-2 text-earthy-clay font-black text-sm uppercase tracking-wider">
                      <ShieldAlert className="w-4 h-4" /> Core Environmental Pressures
                    </div>
                    <ul className="space-y-2 text-sm text-earthy-olive font-bold">
                      <li>• <strong>Glacial Retreat:</strong> Rapid elevation climb of the regional snowline.</li>
                      <li>• <strong>Meadow Degradation:</strong> Overgrazing and permafrost thawing weakening soil roots.</li>
                      <li>• <strong>Wildlife Habitat Loss:</strong> Dam infrastructure altering water corridors.</li>
                      <li>• <strong>Poaching Threats:</strong> Protecting musk deer and endangered snow leopards.</li>
                    </ul>
                  </div>

                  <p>
                    As I learned how the sacred Amne Machin Mountain may lose its perennial glaciers within a decade due to global warming, my heart sank. Standing at its base altar, where local Tibetans pour roasted barley and barley wine while chanting and circumambulating, I witnessed how the deep reverence for this sacred landscape lies in the very heart of the local culture.
                  </p>
                  <p>
                    One local conservation volunteer named Huaqing Jie, who spent decades monitoring wildlife in Sanjiangyuan, showed us his handcrafted 1960s model of Amne Machin, carefully labeling each ridge with the Tibetan name of its deity. "Amne" means ancestor or grandfather; "Machin" signifies the greatest mountain at the Yellow River's source. In early 2025, an avalanche took him while he was in the sacred peaks with his camera. His spirit and uncontainable passion for wildlife protection remain an enduring inspiration for all our field endeavors.
                  </p>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/MDxQN2pc/70500275e12ca0332280c72d1c1e2f13.jpg" 
                      alt="Meadow Research" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/nqbmh5BK/5bce6250e0531f2c29b2671572acb79d.jpg" 
                      alt="Tibet Alpine Valley" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/FkPxnvqb/76b693eeacddfc12ba0455db64966482.jpg" 
                      alt="Alpine Meadow Scenery" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/zhLxhZPZ/IMG-3396.jpg" 
                      alt="High Plateau Glacial Landscape" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/3Y9w7h5r/f864eb9e1b174c818d84a238c238dc3a.jpg" 
                      alt="First Trip Team Expedition" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/YFGqXySZ/IMG-3481.jpg" 
                      alt="Sacred Amne Machin Ridge" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/sv6qPF7h/IMG-3668.jpg" 
                      alt="Sacred Amne Machin Peak" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/W4rXBQ0M/IMG-3695.avif" 
                      alt="Scenic Tibetan Landscape" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
