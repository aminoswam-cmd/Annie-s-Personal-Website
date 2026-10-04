
import React from 'react';
import { ArrowLeft, ExternalLink, Settings, Trophy, Award, Zap } from 'lucide-react';

interface ExoskeletonDetailProps {
  onBack: () => void;
}

export const ExoskeletonDetail: React.FC<ExoskeletonDetailProps> = ({ onBack }) => {
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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Engineering Study</div>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs mb-4 block">Mechanical Engineering</span>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-tight tracking-tight mb-8">
              Exoskeleton <br />
              <span className="italic">Prototype</span>
            </h1>
            <div className="w-32 h-2 bg-earthy-clay rounded-full" />
          </div>

          <div className="space-y-24">
            {/* Design Overview section */}
            <section id="introduction">
              <h2 className="text-5xl font-black text-earthy-olive mb-10 flex items-center gap-4">
                <Settings className="w-12 h-12 text-earthy-clay" />
                Project Overview
              </h2>
              <div className="space-y-10 text-xl md:text-xl leading-relaxed text-earthy-olive font-regular">
                <p>
                  Currently the most mature body energy harvesting devices are triboelectric or piezoelectric generators. However, they cannot harvest our body motion continuously. So, is there a possibility of developing a new route of body energy harvesting? My answer is to reference the most mature motion-based energy harvesting systems: windmill and watermill by developing a lower limb exoskeleton. It can be used for outdoor charging or even a backup power source.
                </p>
                <p>
                  This project proves the feasibility of harvesting kinetic energy from human movement to power wearable devices or store in battery; It also provides a prototype solution to harvest energy from a more continuous body motion. Some of the highlights during the process includes using planetary gear box to save space; using a resistor during the data testing stage to figure out the power, and PCB board printing to reduce the possibility of short circuit.
                </p>
              </div>
            </section>

            {/* CASEF Poster section */}
            <section id="technical-breakdown" className="space-y-12">
              <div className="text-center space-y-4">
                 <h2 className="text-5xl md:text-7xl font-black leading-tight text-earthy-olive">
                  CASEF <span className="italic">Posterboard</span>
                </h2>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-[2rem] p-2 md:p-4 border border-earthy-olive/10 shadow-2xl relative group overflow-hidden">
                  <img 
                    src="https://i.ibb.co/p6f0xBzS/Research-on-Power-Generation-Device-Applied-to-Knee-Exoskeleton-12-42-45.png" 
                    alt="CASEF Posterboard - Research on Power Generation Device Applied to Knee Exoskeleton" 
                    className="w-full h-auto rounded-xl shadow-inner transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-earthy-clay/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </section>

            {/* Recognition & Awards section */}
            <section id="awards" className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-earthy-olive mb-4">Recognition & Awards</h2>
                <p className="text-earthy-sand font-bold text-xl">Honors received for engineering innovation at CASEF 2024.</p>
              </div>

              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white p-8 rounded-[2rem] border border-earthy-olive/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <Trophy className="w-10 h-10 text-earthy-clay mb-6" />
                    <h3 className="text-2xl font-black mb-2 text-earthy-olive">Second Award</h3>
                    <p className="text-sm font-bold text-earthy-sand mb-6">Capital Area Science & Engineering Fair 2024</p>
                  </div>
                  <div className="text-[0.65rem] font-black uppercase tracking-widest opacity-60 text-earthy-olive">State Level</div>
                </div>

                <div className="bg-[#000000] p-8 rounded-[2rem] shadow-xl text-white flex flex-col justify-between">
                  <div>
                    <Award className="w-10 h-10 text-earthy-sage mb-6" />
                    <h3 className="text-2xl font-black mb-2">U.S. Air Force Special Award</h3>
                    <p className="text-sm font-bold opacity-70 mb-6">Capital Area Science & Engineering Fair 2024</p>
                  </div>
                  <div className="text-[0.65rem] font-black uppercase tracking-widest opacity-40">State Level</div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-earthy-olive/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <Award className="w-10 h-10 text-earthy-clay mb-6" />
                    <h3 className="text-xl font-black mb-2 text-earthy-olive">U.S. Navy & Marine Corps</h3>
                    <p className="text-sm font-bold text-earthy-sand mb-6">Office of Naval Research Special Award</p>
                  </div>
                  <div className="text-[0.65rem] font-black uppercase tracking-widest opacity-60 text-earthy-olive">National Recognition</div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-earthy-olive/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <Trophy className="w-10 h-10 text-earthy-clay mb-6" />
                    <h3 className="text-xl font-black mb-2 text-earthy-olive">CS & Math Category Award</h3>
                    <p className="text-sm font-bold text-earthy-sand mb-6">Informatics & Mathematics Category + Wolfram Award</p>
                  </div>
                  <div className="text-[0.65rem] font-black uppercase tracking-widest opacity-60 text-earthy-olive">Category Excellence</div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-earthy-olive/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <Zap className="w-10 h-10 text-earthy-clay mb-6" />
                    <h3 className="text-xl font-black mb-2 text-earthy-olive">IEEE Special Award</h3>
                    <p className="text-sm font-bold text-earthy-sand mb-6">Susquehanna Section IEEE Special Recognition</p>
                  </div>
                  <div className="text-[0.65rem] font-black uppercase tracking-widest opacity-60 text-earthy-olive">Institute of Electrical Engineers</div>
                </div>
              </div>
            </section>

            <section id="documentation" className="py-20 border-t border-earthy-olive/10">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-12 rounded-[3rem] border border-earthy-olive/5 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10 w-full md:w-2/3 space-y-8 text-center md:text-left">
                    <div className="space-y-4">
                      <span className="text-earthy-clay font-black uppercase tracking-[0.4em] text-xs block">Engineering Documentation</span>
                      <h2 className="text-4xl md:text-5xl font-black text-earthy-olive leading-tight">
                        Project <span className="italic">Paper</span>
                      </h2>
                      <p className="text-lg font-bold text-earthy-sand">
                        Access my original paper and poster board via Google Drive.
                      </p>
                    </div>

                    <a 
                      href="https://drive.google.com/drive/folders/1Iad2hreXh4-AMfuHI9SoZUWp5JqqM_GW?usp=sharing" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-2xl font-black text-[0.8rem] uppercase tracking-widest hover:bg-earthy-clay transition-all shadow-xl group/btn"
                    >
                      View Paper & Resources <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
