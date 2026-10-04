import React from 'react';
import { ArrowLeft, Truck, Zap, Compass, Hammer, ShieldCheck, Sun, BatteryCharging, Wrench, Mountain, Flame, Droplets } from 'lucide-react';

interface RollingNestDetailProps {
  onBack: () => void;
}

export const RollingNestDetail: React.FC<RollingNestDetailProps> = ({ onBack }) => {
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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Hobbies · Camper Van Project</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earthy-clay/10 text-earthy-clay rounded-full font-black uppercase tracking-[0.3em] text-xs">
                <Hammer className="w-3.5 h-3.5" /> Maker's Lab: Senior Capstone Idea
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-[0.85] tracking-tighter mb-8">
              The Rolling<br />
              <span className="italic text-earthy-clay">Nest</span>
            </h1>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Overview */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-bold text-earthy-olive leading-relaxed">
                  This project is a project idea for my senior capstone in Maker's Lab. During Long Fall Weekend my junior year at highschool, our climbing coach/Maker's Lab instructor took my friends and I on a trip to the New River Gorge on his camper van. We stored all of our gear in the van and slept on the 2 level bed. It was an amazing trip and became the core inspiration for this project.
                </p>
                <p className="text-base md:text-lg font-bold text-earthy-olive/85 leading-relaxed">
                  The friend that went on this trip and I would like to renovate a camper van so that we can go out on our own on overnight climbing trips and sleep on a comfy mattress instead of a tent. This project would involve a wide range of skills such as woodworking, electrical engineering, and architectural design, which makes it perfect as a group project. The Rolling Nest would transform a bare vehicle into this warm and resilient home on wheels.
                </p>
              </div>

              {/* Lead Image */}
              <div className="relative max-w-md md:max-w-sm lg:max-w-md w-full mx-auto">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-earthy-olive/10 group">
                  <img 
                    src="https://i.ibb.co/Q3YPHQ70/campervan-reference.jpg" 
                    alt="The Rolling Nest Camper Van" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-earthy-clay/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Build Principles & Design Pillars */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="space-y-12">
              <div className="max-w-3xl space-y-4">
                <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs block">Engineering & Craft</span>
                <h2 className="text-4xl md:text-6xl font-black text-earthy-olive tracking-tight">
                  Design Pillars of <br /><span className="italic text-earthy-clay">The Build</span>
                </h2>
                <div className="w-20 h-1 bg-earthy-clay rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-earthy-olive/10 shadow-lg space-y-6">
                  <div className="w-14 h-14 bg-earthy-sage/20 rounded-2xl flex items-center justify-center text-earthy-olive">
                    <Sun className="w-7 h-7 text-earthy-clay" />
                  </div>
                  <h3 className="text-2xl font-black text-earthy-olive">Off-Grid Electrical System</h3>
                  <p className="text-earthy-olive/80 font-bold leading-relaxed text-sm">
                    Monocrystalline solar rooftop array paired with a deep-cycle LiFePO4 lithium battery bank, pure sine wave inverter, and DC-DC split alternator charging for continuous power in remote valleys.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-earthy-olive/10 shadow-lg space-y-6">
                  <div className="w-14 h-14 bg-earthy-clay/20 rounded-2xl flex items-center justify-center text-earthy-clay">
                    <Hammer className="w-7 h-7 text-earthy-clay" />
                  </div>
                  <h3 className="text-2xl font-black text-earthy-olive">Modular Woodworking</h3>
                  <p className="text-earthy-olive/80 font-bold leading-relaxed text-sm">
                    Lightweight Baltic birch cabinetry and a multi-functional convertible lounge-to-bed system engineered to withstand rugged mountain roads while maximizing internal volume.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-earthy-olive/10 shadow-lg space-y-6">
                  <div className="w-14 h-14 bg-earthy-olive/20 rounded-2xl flex items-center justify-center text-earthy-olive">
                    <Mountain className="w-7 h-7 text-earthy-olive" />
                  </div>
                  <h3 className="text-2xl font-black text-earthy-olive">Climber's Gear Garage</h3>
                  <p className="text-earthy-olive/80 font-bold leading-relaxed text-sm">
                    Custom rear under-bed storage garage optimized for trad racks, climbing ropes, crash pads, hiking packs, and four-season outdoor gear organization.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specs Overview */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-earthy-olive text-white rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-earthy-olive/10 shadow-sm">
                  <Wrench className="w-4 h-4 text-white" /> Technical Specifications
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-earthy-olive tracking-tight">
                  Compact Living, <br /><span className="italic text-earthy-clay">Maximum Freedom</span>
                </h2>
                
                <div className="space-y-6 text-lg text-earthy-olive font-bold leading-relaxed">
                  <p>
                    Designing a camper van requires treating every cubic inch as prime real estate. The build incorporates sound deadening, multi-layer thermal insulation (Havelock wool + reflective vapor barriers), and efficient ventilation to handle hot summer crags and freezing winter trailheads.
                  </p>
                  <p>
                    Whether parked at the base of Seneca Rocks or camping deep along the New River Gorge, "The Rolling Nest" is built to turn any trailhead into a welcoming home.
                  </p>
                </div>
              </div>

              {/* Specs Breakdown */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="bg-white p-6 rounded-2xl border border-earthy-olive/10 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-earthy-sage/15 rounded-xl text-earthy-olive shrink-0">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-earthy-olive text-base">Energy & Power</h4>
                    <p className="text-xs text-earthy-olive/80 font-bold mt-1">Solar PV generation, 200Ah Lithium Storage, 12V DC auxiliary fuse block, USB-C fast charge hubs.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-earthy-olive/10 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-earthy-clay/15 rounded-xl text-earthy-clay shrink-0">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-earthy-olive text-base">Water & Galley</h4>
                    <p className="text-xs text-earthy-olive/80 font-bold mt-1">12V electric diaphragm pump, fresh water reservoir, deep stainless sink, and dual-burner induction/gas cooking.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-earthy-olive/10 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-earthy-olive/15 rounded-xl text-earthy-olive shrink-0">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-earthy-olive text-base">Climate & Insulation</h4>
                    <p className="text-xs text-earthy-olive/80 font-bold mt-1">Roof-mounted reversible intake/exhaust fan, natural wool insulation, and magnetic blackout thermal window coverings.</p>
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
