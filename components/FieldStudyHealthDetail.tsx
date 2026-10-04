import React from 'react';
import { ArrowLeft, Heart, ExternalLink, Award, FileText, BookOpen, MapPin } from 'lucide-react';

interface FieldStudyHealthDetailProps {
  onBack: () => void;
}

export const FieldStudyHealthDetail: React.FC<FieldStudyHealthDetailProps> = ({ onBack }) => {
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
          <div className="flex items-center gap-4">
            <a
              href="https://docs.google.com/document/d/13Q9fcyLjOltvwizzJERUPHH78TtD_xlZ6G8lgCUvuGM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-earthy-clay/15 hover:bg-earthy-clay text-earthy-olive hover:text-white rounded-xl text-xs font-mono font-bold transition-all"
            >
              <FileText className="w-3.5 h-3.5" /> Read Article
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Field Studies · Expedition II</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earthy-clay/15 text-earthy-olive rounded-full font-black uppercase tracking-[0.3em] text-xs">
                <MapPin className="w-3.5 h-3.5 text-earthy-clay" /> Qinghai-Tibetan Plateau
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-[0.85] tracking-tighter mb-8">
              Public Health &<br />
              <span className="italic text-earthy-clay">Tibetan Culture</span>
            </h1>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Overview */}
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-bold text-earthy-olive leading-relaxed">
                  Transitioning from ecological surveys to human and social investigations, my second field expedition focused on public health accessibility, healthcare infrastructure, and traditional healing doctrines in remote pastoral Tibetan communities.
                </p>
                <p className="text-xl md:text-2xl font-bold text-earthy-olive leading-relaxed opacity-90">
                  Through direct patient-physician observations and deep clinical interviews with Dr. Renzeng Duojie, I examined how spiritual faith, ritual psychotherapy, and nomadic living intersect to shape health outcomes.
                </p>

                {/* Primary Action Button */}
                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href="https://docs.google.com/document/d/13Q9fcyLjOltvwizzJERUPHH78TtD_xlZ6G8lgCUvuGM/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-earthy-olive text-white rounded-2xl font-black text-[0.8rem] uppercase tracking-[0.2em] hover:bg-earthy-clay transition-all shadow-xl group"
                  >
                    <FileText className="w-4 h-4 text-earthy-sand group-hover:scale-110 transition-transform" /> 
                    Read Research Article
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Lead Image */}
              <div className="relative max-w-md md:max-w-sm lg:max-w-md w-full mx-auto">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-earthy-olive/10 group">
                  <img 
                    src="https://i.postimg.cc/FRJLdtxN/image.png" 
                    alt="Tibetan Public Health & Traditional Clinic" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-earthy-clay/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Expedition II Core Findings */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="flex flex-col md:flex-row-reverse gap-16 items-start">
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-earthy-clay text-white rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-earthy-olive/30 shadow-sm">
                  <Heart className="w-4 h-4 text-white" /> Community Health & Traditional Healing
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-earthy-olive tracking-tight">
                  Healing <br /><span className="italic text-earthy-clay">& Heritage</span>
                </h2>
                
                <div className="space-y-6 text-lg text-earthy-olive font-bold leading-relaxed">
                  <p>
                    Nomadic lifestyles deeply shape community health realities. For pastoralist women, daily routines involve intensive physical labor like collecting dried yak dung as fuel and carrying heavy loads, placing persistent strain on the spine and musculoskeletal system.
                  </p>
                  <p>
                    In remote grasslands, limited access to modern feminine hygiene products has historically led to improvised solutions using layered cloths with plant ash and burnt yak dung. Combined with the harsh, hypoxic high-altitude climate, residents experience heightened vulnerability to cardiovascular ailments, cervical conditions, and respiratory illnesses.
                  </p>
                  <p>
                    To understand community responses, I conducted comprehensive field interviews with renowned Tibetan physician Mamba (Doctor) Renzeng Duojie. In his clinic beneath a Thangka of the Medicine Buddha, he demonstrated centuries-old holistic interventions—including medicinal herbal liquor spraying accompanied by sacred chants repeated thousands of times to amplify therapeutic potency.
                  </p>
                  <p>
                    Crucially, he highlighted an emerging phenomenon: rising mental health conditions among younger generations experiencing rapid urban migration and lifestyle transitions. In Tibetan medicine, mental and emotional equilibrium is inseparable from physiological stability. The ritualistic and spiritual framework acts as an organic system of community psychotherapy, providing reassurance, holiness, and communal support where conventional modern psychiatry remains inaccessible.
                  </p>
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/C5g035Lp/IMG-3567.jpg" 
                      alt="Tibetan Medicine Study" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/Qjkzcp7S/IMG-3564.jpg" 
                      alt="Tibetan Buddhist Monastery" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/nSWV2wy/IMG-3566.jpg" 
                      alt="Traditional Tibetan Healing" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/LXSgs7Pw/IMG-3563.jpg" 
                      alt="Cultural Artifacts & Settings" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/8DkZSjTV/IMG-3562.jpg" 
                      alt="Nomadic Lifestyle on the Plateau" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/7xjnDhd3/IMG-3558.jpg" 
                      alt="Tibetan Prayer Flags" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/RG4RNTvL/IMG-3552.jpg" 
                      alt="Tibetan Temple & Mountains" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://i.ibb.co/9m0Xb5DT/IMG-3550.jpg" 
                      alt="Herbology & Traditional Healing Elements" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recognition & Publication Section */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-earthy-olive p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10 flex flex-col gap-12">
                  <div className="space-y-4">
                    <BookOpen className="w-12 h-12 text-earthy-sage mb-4" />
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tight leading-[0.9]">
                      The Healing Pulse <br />of Sanjiangyuan
                    </h2>
                    <div className="w-20 h-1 bg-earthy-sage/40 rounded-full" />
                  </div>

                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] flex items-center gap-6 group hover:bg-white/15 transition-all">
                    <div className="w-16 h-16 bg-earthy-clay rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-earthy-sage mb-1">Recognition</h3>
                      <p className="text-2xl font-black leading-none mb-1">Third Prize</p>
                      <p className="text-white/70 font-bold text-xs tracking-wide">Social Justice Award | 2025 Fall</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a 
                      href="https://docs.google.com/document/d/13Q9fcyLjOltvwizzJERUPHH78TtD_xlZ6G8lgCUvuGM/edit?usp=sharing" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-5 px-10 py-6 bg-white text-earthy-olive rounded-2xl font-black text-[0.85rem] uppercase tracking-[0.2em] hover:bg-earthy-sage hover:text-white transition-all shadow-xl group/btn w-full sm:w-auto justify-center"
                    >
                      <FileText className="w-6 h-6" /> Read Research Article <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-earthy-sage/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-earthy-clay/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
