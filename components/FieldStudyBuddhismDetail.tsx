import React from 'react';
import { ArrowLeft, BookOpen, MapPin, Sparkles, Heart, Activity, Compass, Shield } from 'lucide-react';

interface FieldStudyBuddhismDetailProps {
  onBack: () => void;
}

export const FieldStudyBuddhismDetail: React.FC<FieldStudyBuddhismDetailProps> = ({ onBack }) => {
  const monasteryPhotos = [
    "https://i.ibb.co/wFqWBVvK/DSC02094.jpg",
    "https://i.ibb.co/nN7VbTZW/DSC02095.jpg",
    "https://i.ibb.co/sd2FDQ7s/DSC02083.jpg",
    "https://i.ibb.co/hJfHS5KV/DSC02117.jpg",
    "https://i.ibb.co/vvQ7gd4h/DSC02124.jpg",
    "https://i.ibb.co/tpK2NprM/DSC02133.jpg",
    "https://i.ibb.co/Ld1TTxdK/DSC02175.jpg",
    "https://i.ibb.co/FqK5LNqL/DSC02181.jpg",
    "https://i.ibb.co/5WQZggkR/DSC02195.jpg",
    "https://i.ibb.co/fVbSZh17/DSC02200.jpg",
    "https://i.ibb.co/Kz7ZNJkz/DSC02252.jpg",
    "https://i.ibb.co/MD8QBYbk/DSC02258.jpg",
    "https://i.ibb.co/XxcPG444/DSC02277.jpg",
    "https://i.ibb.co/Ng9Hxz46/DSC02296.jpg",
    "https://i.ibb.co/Fqx91gBp/DSC02315.jpg",
    "https://i.ibb.co/4RtgFDQs/DSC02331.jpg",
    "https://i.ibb.co/S47PJpLc/DSC02345.jpg",
    "https://i.ibb.co/HTyZ3280/DSC02356.jpg",
    "https://i.ibb.co/H18hmhj/DSC02358.jpg",
    "https://i.ibb.co/dJ6G53jz/DSC02368.jpg"
  ];

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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Field Studies · Expedition III</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earthy-sage/15 text-earthy-olive rounded-full font-black uppercase tracking-[0.3em] text-xs">
                <MapPin className="w-3.5 h-3.5 text-earthy-clay" /> Sichuan & Gansu Monasteries
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-[0.85] tracking-tighter mb-8">
              Tibetan Buddhism &<br />
              <span className="italic text-earthy-clay">Healing Wisdom</span>
            </h1>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Lead Text */}
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-bold text-earthy-olive leading-relaxed">
                  Deepening my inquiry into Tibetan philosophy and medical traditions, this field study took me through the historic monastic centers of Langmu, Choje, and Labrang Monasteries at the intersection of Sichuan and Gansu provinces.
                </p>
                <p className="text-xl md:text-2xl font-bold text-earthy-olive leading-relaxed opacity-90">
                  Through extensive dialogues with resident lamas and master physician-khenpos, I investigated the philosophical foundations of the <em>Four Medical Tantras</em>, humoral balance, and the cosmological categorization of human afflictions.
                </p>
              </div>

              {/* Lead Image */}
              <div className="relative max-w-md md:max-w-sm lg:max-w-md w-full mx-auto">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-earthy-olive/10 group">
                  <img 
                    src="https://i.ibb.co/wFqWBVvK/DSC02094.jpg" 
                    alt="Langmu Monastery Fieldwork" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-earthy-clay/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Detailed Content & Research Findings */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              {/* Left Column: Comprehensive Insights */}
              <div className="w-full md:w-1/2 space-y-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-earthy-sage text-white rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-earthy-olive/20 shadow-sm">
                  <BookOpen className="w-4 h-4 text-white" /> Monastic Dialogue & Tantric Philosophy
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-earthy-olive tracking-tight">
                  Monasteries & <br /><span className="italic text-earthy-clay">The Four Tantras</span>
                </h2>

                <div className="space-y-8 text-lg text-earthy-olive leading-relaxed font-bold">
                  {/* Monastic Observations */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-earthy-clay tracking-tight flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-earthy-clay"></span>
                      Monastic Exploration & Living Faith
                    </h3>
                    <p>
                      My exploration led me to the historic monastic centers at the borders of Sichuan and Gansu provinces: <strong>Langmu Monastery</strong>, <strong>Choje Monastery</strong>, and <strong>Labrang Monastery</strong>. These monasteries feature bright golden roofs with deep maroon walls, decorated with exquisite Thangka details and figures of different Buddhas.
                    </p>
                    <p>
                      I was struck by how nearly every village we drove past housed its own temple—showing how deeply Tibetan Buddhism is woven into daily life. Local residents spin prayer wheels and chant scriptures quietly as they circumambulate clockwise around the temples. At Choje Monastery, I had the privilege of speaking directly with a resident lama and their Khenpo, who is also a master Tibetan physician, delving deep into how Buddhist philosophy forms the fundamental framework of Tibetan healing traditions.
                    </p>
                  </div>

                  {/* 404 Diseases & Karma */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-earthy-clay tracking-tight flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-earthy-clay"></span>
                      The 404 Diseases & Karmic Cosmology
                    </h3>
                    <p>
                      Rooted in the <em>Four Medical Tantras</em>, Tibetan medical cosmology classifies all physical afflictions into <strong>404 types of diseases</strong>, divided into four distinct categories of 101:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                      <div className="bg-earthy-sage/10 p-5 rounded-2xl border border-earthy-olive/10">
                        <span className="text-xs font-mono font-black text-earthy-clay block mb-1">101 Superficial Diseases</span>
                        <p className="text-sm text-earthy-olive font-bold">Mild afflictions that naturally resolve within ~7 days; medicine serves as a supportive nudge.</p>
                      </div>
                      <div className="bg-earthy-sage/10 p-5 rounded-2xl border border-earthy-olive/10">
                        <span className="text-xs font-mono font-black text-earthy-clay block mb-1">101 Physician-Treatable</span>
                        <p className="text-sm text-earthy-olive font-bold">Standard bodily illnesses that respond directly to herbalism and physical therapies.</p>
                      </div>
                      <div className="bg-earthy-sage/10 p-5 rounded-2xl border border-earthy-olive/10">
                        <span className="text-xs font-mono font-black text-earthy-clay block mb-1">101 Karmic Afflictions</span>
                        <p className="text-sm text-earthy-olive font-bold">Rooted in karmic causes from past lives; requiring spiritual practice alongside care.</p>
                      </div>
                      <div className="bg-earthy-sage/10 p-5 rounded-2xl border border-earthy-olive/10">
                        <span className="text-xs font-mono font-black text-earthy-clay block mb-1">101 Spiritual Diseases</span>
                        <p className="text-sm text-earthy-olive font-bold">Caused by natural spirits and deities; untreatable by medicine alone, requiring Buddhist rituals to cultivate merit.</p>
                      </div>
                    </div>

                    <p>
                      Ultimately, Tibetan medical doctrine teaches that all sickness originates from the <strong>Three Buddhist Poisons: Greed, Hatred (Anger), and Ignorance</strong>. Unchecked desire and material comparison pollute the mind, creating the karmic cause that later manifests as bodily disease. The Khenpo shared that his master treated highly contagious patients without protective gear, trusting that without the underlying karmic cause, the disease could not take hold.
                    </p>
                    <p>
                      Central to this worldview is <strong>impermanence</strong> and a vast temporal perspective spanning lifetimes. Tibetans understand ~70% of major life conditions as fixed karmic results from past lives, while ~30% can be reshaped through spiritual practice to build merit for future lives. Rather than viewing difficulties with bitterness, hardships are understood as karmic purification. Because physical existence is temporary, life is lived to cultivate merit, removing the fear of death as life continues through the cycle of reincarnation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Complete Monastery Gallery */}
              <div className="w-full md:w-1/2 space-y-6 pt-4">
                <div className="space-y-2 mb-4">
                  <span className="text-earthy-sand font-black uppercase tracking-[0.3em] text-xs">Visual Documentation</span>
                  <h3 className="text-2xl font-bold text-earthy-olive">Monastery & Field Gallery</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {monasteryPhotos.map((url, idx) => (
                    <div 
                      key={idx} 
                      className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500"
                    >
                      <img 
                        src={url} 
                        alt={`Tibetan Monastery & Field Study Photo ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
