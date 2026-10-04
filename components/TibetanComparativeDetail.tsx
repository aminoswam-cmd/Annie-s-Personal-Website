import React, { useState } from 'react';
import { 
  ArrowLeft, BookOpen, Heart, Sparkles, Scale, Compass, 
  Globe, ExternalLink, Download, FileText, Mountain, Wind, 
  Sun, Eye, Layers, ShieldCheck, CheckCircle2, X, ChevronRight 
} from 'lucide-react';
import { PAPER_METADATA, PAPER_SECTIONS, WORKS_CITED_SAMPLE } from '../data/tibetanPaperData';

interface TibetanComparativeDetailProps {
  onBack: () => void;
}

export const TibetanComparativeDetail: React.FC<TibetanComparativeDetailProps> = ({ onBack }) => {
  const [activePart, setActivePart] = useState<'part-1-body-mind' | 'part-2-body-environment' | 'part-3-mind-environment'>('part-1-body-mind');
  const [isPaperModalOpen, setIsPaperModalOpen] = useState<boolean>(false);
  const [modalTab, setModalTab] = useState<'text' | 'citations'>('text');

  return (
    <div className="min-h-screen bg-[#FDFCF8] pb-32">
      {/* Top Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF8]/95 backdrop-blur-md py-6 px-6 border-b border-earthy-olive/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-earthy-olive font-black uppercase tracking-widest text-[0.65rem] hover:text-earthy-clay transition-all group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to portfolio
          </button>
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">
            Project · Tibetan Medicine Research
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earthy-clay/10 text-earthy-clay rounded-full font-black uppercase tracking-[0.25em] text-xs">
                <BookOpen className="w-3.5 h-3.5" /> Harvard Professor Mentorship
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-earthy-olive leading-[0.9] tracking-tighter mb-6">
              Tibetan Medicine <br />
              <span className="italic text-earthy-clay font-serif">Research Project</span>
            </h1>
            <p className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-earthy-olive/60 mb-8">
              Interconnectedness of Body, Mind, and Environment
            </p>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Overview & Abstract */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-bold text-earthy-olive leading-relaxed">
                    An academic investigation mentored by <strong>Professor Leonard van der Kuijp</strong> (Harvard University Department of South Asian Studies), exploring how Tibetan medicine constructs the unity of physiological (body), mental (mind), and cosmic (environment) dimensions.
                  </p>
                  <p className="text-base md:text-lg font-bold text-earthy-olive/85 leading-relaxed">
                    Traditional biomedical models frequently operate on implicit epiphenomenal assumptions, treating mental states as downstream byproducts of neurological structures. In contrast, Tibetan medicine (Sowa Rigpa) offers an ontology where mind, body, and environment exist in a continuous, bidirectional relationship. This paper provides a comparative anthropological analysis of Sowa Rigpa’s triadic framework. First, it explores the mind-body continuum via rlung dynamics and the heart center, analyzing how humoral treatments coexist with ritual exorcisms, ransom rites (Glud), and soul retrieval (bla bslu). Second, it unpacks the body-environment relationship through elemental composition, seasonal six-phase humors, and lunar-influenced bla movement. Third, it bridges Dzogchen teachings on the primordial base (zhi) and energy modes (dang, tsel, rölpa) with modern enactive cognitive science and the Ganzfeld effect to explain how perception enacts the boundary between self and world. In doing so, the paper highlights Sowa Rigpa as a model that seamlessly integrates medical science, ritual practice, and non-dual philosophy.
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="https://docs.google.com/document/d/1cEjo5P7uM2wULwLwA8ceP33FUifekCJid8fOqKMeYkM/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-earthy-olive text-white rounded-2xl font-black text-[0.8rem] uppercase tracking-[0.2em] hover:bg-earthy-clay transition-all shadow-xl group"
                  >
                    <FileText className="w-4 h-4 text-earthy-sand group-hover:scale-110 transition-transform" /> 
                    Read Full Paper Draft (32 Pages)
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://herbwiki.shallpay.cn/zh-cn/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 bg-white border border-earthy-olive/20 text-earthy-olive rounded-2xl font-black text-[0.8rem] uppercase tracking-[0.2em] hover:bg-earthy-cream transition-all shadow-sm"
                  >
                    <Globe className="w-4 h-4 text-earthy-clay" /> Explore Herb Wiki
                  </a>
                </div>
              </div>

              {/* Dual Photographic Artifacts - Stacked Vertically with 3:2 Proportions */}
              <div className="relative w-full max-w-lg mx-auto flex flex-col gap-6">
                <div className="aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-xl border border-earthy-olive/10 group bg-earthy-cream relative">
                  <img 
                    src="https://i.ibb.co/nsqwFHhW/DSC02286.jpg" 
                    alt="Tibetan Medical and Cultural Study Artifact" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>
                <div className="aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-xl border border-earthy-olive/10 group bg-earthy-cream relative">
                  <img 
                    src="https://i.ibb.co/nsfcrXQq/DSC02281.jpg" 
                    alt="Tibetan Medical and Cultural Study Artifact" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-earthy-clay/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Section 1: WHY I DID THIS PROJECT (Connecting back to Field Studies) */}
          {/* ========================================================================= */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="space-y-12">
              <div className="max-w-3xl space-y-4">
                <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs block">Rationale</span>
                <h2 className="text-4xl md:text-6xl font-black text-earthy-olive tracking-tight">
                  Why I Did This Project
                </h2>
                <div className="w-20 h-1 bg-earthy-clay rounded-full" />
                <p className="text-lg font-bold text-earthy-olive/80 leading-relaxed pt-2">
                  This project is inspired by the three field studies I did across the Qinhai-Tibetan Plateau and the monasteries I visited in SIchuan. The title of this paper is "Tibetan medicine and its construction of the interconnectedness of the body, mind, and environment"; I took lessons from each of my field studies and forged them into this research topic, covering my interested topics of rituals, nature, and spirits in Tibetan Buddhism.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Expedition I: Protection of Nature and Ecology */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-earthy-olive/10 shadow-lg space-y-5 relative overflow-hidden flex flex-col justify-between group hover:border-earthy-clay/30 transition-colors">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-earthy-sage/20 rounded-2xl flex items-center justify-center text-earthy-olive">
                      <Mountain className="w-6 h-6 text-earthy-clay" />
                    </div>
                    <div>
                      <span className="text-[0.65rem] font-black uppercase tracking-widest text-earthy-clay block mb-1">Expedition I</span>
                      <h3 className="text-xl font-black text-earthy-olive">Protection of Nature & Ecology</h3>
                    </div>
                    <p className="text-earthy-olive/85 font-medium leading-relaxed text-sm md:text-base">
                      During my first journey across the Sanjiangyuan plateau, what struck me most was <strong>how deeply people protect and cherish nature</strong>. Up in those high grasslands, survival isn't about conquering the land—it's about living in harmony with the glaciers, clean waters, and wildlife that keep everyone alive.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-earthy-olive/10 text-xs font-mono text-earthy-clay font-bold uppercase tracking-wider">
                    Core Element: Environment
                  </div>
                </div>

                {/* Expedition II: Healing the Body */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-earthy-olive/10 shadow-lg space-y-5 relative overflow-hidden flex flex-col justify-between group hover:border-earthy-clay/30 transition-colors">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-earthy-clay/10 rounded-2xl flex items-center justify-center text-earthy-clay">
                      <Heart className="w-6 h-6 text-earthy-clay" />
                    </div>
                    <div>
                      <span className="text-[0.65rem] font-black uppercase tracking-widest text-earthy-clay block mb-1">Expedition II</span>
                      <h3 className="text-xl font-black text-earthy-olive">How Tibetan Medicine Heals the Body</h3>
                    </div>
                    <p className="text-earthy-olive/85 font-medium leading-relaxed text-sm md:text-base">
                      During my second trip visiting nomadic clinics with Dr. Renzeng Duojie, I saw firsthand <strong>how Tibetan medicine cares for the physical body</strong>. Rather than just suppressing symptoms, doctors use carefully prepared herbal remedies, food, and daily routines to bring the body's natural heat and internal energies back into balance.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-earthy-olive/10 text-xs font-mono text-earthy-clay font-bold uppercase tracking-wider">
                    Core Element: Body
                  </div>
                </div>

                {/* Expedition III: Treating Mind and Body as One */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-earthy-olive/10 shadow-lg space-y-5 relative overflow-hidden flex flex-col justify-between group hover:border-earthy-clay/30 transition-colors">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-earthy-olive/10 rounded-2xl flex items-center justify-center text-earthy-olive">
                      <Sparkles className="w-6 h-6 text-earthy-clay" />
                    </div>
                    <div>
                      <span className="text-[0.65rem] font-black uppercase tracking-widest text-earthy-clay block mb-1">Expedition III</span>
                      <h3 className="text-xl font-black text-earthy-olive">Treating Mind & Body as One</h3>
                    </div>
                    <p className="text-earthy-olive/85 font-medium leading-relaxed text-sm md:text-base">
                      On my third trip visiting monasteries and medical colleges in Sichuan, I realized that Tibetan medicine <strong>never treats the mind and body as separate things</strong>. Watching rituals and prayers alongside medical checkups showed me that peace of mind, warmth, and faith play a real, measurable part in physical recovery.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-earthy-olive/10 text-xs font-mono text-earthy-clay font-bold uppercase tracking-wider">
                    Core Element: Mind
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* Section 2: PAPER OVERVIEW & CORE CONCEPTS EXPLORED */}
          {/* ========================================================================= */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="space-y-12">
              <div className="max-w-3xl space-y-4">
                <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs block">Scholarly Overview</span>
                <h2 className="text-4xl md:text-6xl font-black text-earthy-olive tracking-tight">
                  Core Concepts
                </h2>
                <div className="w-20 h-1 bg-earthy-clay rounded-full" />
              </div>

              {/* Part Navigation Pills */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActivePart('part-1-body-mind')}
                  className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    activePart === 'part-1-body-mind' 
                      ? 'bg-earthy-olive text-white shadow-md' 
                      : 'bg-white text-earthy-olive/70 border border-earthy-olive/15 hover:bg-earthy-cream'
                  }`}
                >
                  Part I · Body and Mind
                </button>
                <button
                  onClick={() => setActivePart('part-2-body-environment')}
                  className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    activePart === 'part-2-body-environment' 
                      ? 'bg-earthy-olive text-white shadow-md' 
                      : 'bg-white text-earthy-olive/70 border border-earthy-olive/15 hover:bg-earthy-cream'
                  }`}
                >
                  Part II · Body and Environment
                </button>
                <button
                  onClick={() => setActivePart('part-3-mind-environment')}
                  className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    activePart === 'part-3-mind-environment' 
                      ? 'bg-earthy-olive text-white shadow-md' 
                      : 'bg-white text-earthy-olive/70 border border-earthy-olive/15 hover:bg-earthy-cream'
                  }`}
                >
                  Part III · Mind and Environment
                </button>
              </div>

              {/* Dynamic Content Display */}
              <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-earthy-olive/10 shadow-xl space-y-10">
                {activePart === 'part-1-body-mind' && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase tracking-[0.3em] text-earthy-clay font-black">Part I · Body and Mind</span>
                      <h3 className="text-3xl md:text-4xl font-black text-earthy-olive">Body & Mind: Connected from the Inside Out</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-6 bg-earthy-sage/10 rounded-2xl border border-earthy-olive/10 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-earthy-olive font-black shadow-sm">
                          <Scale className="w-5 h-5 text-earthy-clay" />
                        </div>
                        <h4 className="font-black text-earthy-olive text-lg">Mind Isn't Just Brain Chemistry</h4>
                        <p className="text-xs md:text-sm font-medium text-earthy-olive/80 leading-relaxed">
                          In Western medicine, we often treat thoughts and emotions as mere chemical reactions in the brain. Tibetan medicine flips this: you are a whole, living system where what you think, feel, and do actively shapes your physical health from the inside out.
                        </p>
                      </div>

                      <div className="p-6 bg-earthy-sage/10 rounded-2xl border border-earthy-olive/10 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-earthy-olive font-black shadow-sm">
                          <Heart className="w-5 h-5 text-earthy-clay" />
                        </div>
                        <h4 className="font-black text-earthy-olive text-lg">The Rider and the Horse</h4>
                        <p className="text-xs md:text-sm font-medium text-earthy-olive/80 leading-relaxed">
                          Tibetan doctors place the mind in the heart, not just the head. They picture the mind as a rider and your breath or vital energy (<em>rlung</em>) as the horse. When your breath is frantic, your mind panics; calm the breath, and the mind naturally steadies.
                        </p>
                      </div>

                      <div className="p-6 bg-earthy-sage/10 rounded-2xl border border-earthy-olive/10 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-earthy-olive font-black shadow-sm">
                          <Sparkles className="w-5 h-5 text-earthy-clay" />
                        </div>
                        <h4 className="font-black text-earthy-olive text-lg">Why Rituals Actually Work</h4>
                        <p className="text-xs md:text-sm font-medium text-earthy-olive/80 leading-relaxed">
                          When a doctor prescribes an herbal pill alongside a chanting ceremony or ransom rite (<em>Glud</em>), it's not superstition. A patient’s belief, emotional release, and feeling of peace exert a real physical pull on the body’s healing process.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-earthy-olive/10 space-y-3">
                      <h4 className="font-black text-earthy-olive text-base">The Root of Getting Sick: Everyday Human Stress</h4>
                      <p className="text-sm font-medium text-earthy-olive/85 leading-relaxed">
                        In Tibetan medicine, sickness starts from everyday human struggles—stress, attachment, and anger. When we harbor chronic anxiety (wind), irritation (bile), or mental sluggishness (phlegm), it throws our inner energies off balance, showing up eventually as physical illness.
                      </p>
                    </div>
                  </div>
                )}

                {activePart === 'part-2-body-environment' && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase tracking-[0.3em] text-earthy-clay font-black">Part II · Body and Environment</span>
                      <h3 className="text-3xl md:text-4xl font-black text-earthy-olive">Body & Environment: We Don't Just Live in Nature, We Are Nature</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-6 bg-earthy-clay/10 rounded-2xl border border-earthy-olive/10 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-earthy-clay font-black shadow-sm">
                          <Compass className="w-5 h-5 text-earthy-clay" />
                        </div>
                        <h4 className="font-black text-earthy-olive text-lg">As Outside, So Inside</h4>
                        <p className="text-xs md:text-sm font-medium text-earthy-olive/80 leading-relaxed">
                          There’s an old saying: <em>"As it is outside, so it is within the body."</em> We are built from the exact same five elements as the mountains and rivers around us—earth, water, fire, wind, and space. Our skin is a porous boundary, constantly exchanging with the world.
                        </p>
                      </div>

                      <div className="p-6 bg-earthy-clay/10 rounded-2xl border border-earthy-olive/10 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-earthy-clay font-black shadow-sm">
                          <Sun className="w-5 h-5 text-earthy-clay" />
                        </div>
                        <h4 className="font-black text-earthy-olive text-lg">Living in Rhythm with the Seasons</h4>
                        <p className="text-xs md:text-sm font-medium text-earthy-olive/80 leading-relaxed">
                          Just like the weather changes outside, our bodies shift throughout the year. In spring, warming weather mirrors mucus melting; in winter, internal digestive heat ramps up. Doctors feel these subtle seasonal shifts simply by placing their fingers on your wrist pulse.
                        </p>
                      </div>

                      <div className="p-6 bg-earthy-clay/10 rounded-2xl border border-earthy-olive/10 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-earthy-clay font-black shadow-sm">
                          <ShieldCheck className="w-5 h-5 text-earthy-clay" />
                        </div>
                        <h4 className="font-black text-earthy-olive text-lg">Respecting the Land & Moon</h4>
                        <p className="text-xs md:text-sm font-medium text-earthy-olive/80 leading-relaxed">
                          If you pollute a river or dig up a sacred grove, tradition says you cause friction with the living spirit of that land. Meanwhile, our vital life-force (<em>bla</em>) travels through the body in step with the moon's phases, teaching doctors to respect cosmic timing before treating patients.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-earthy-olive/10 space-y-3">
                      <h4 className="font-black text-earthy-olive text-base">Clearing Bad Energy & Finding Balance</h4>
                      <p className="text-sm font-medium text-earthy-olive/85 leading-relaxed">
                        When someone feels deeply drained or unsettled, it's often viewed as picking up negative energy (<em>grib</em>) from stressful surroundings. Tibetan healers use simple divination (<em>Mo</em>) not to tell fortunes, but to help people pause, reflect on their habits, and find a clear path back to balance.
                      </p>
                    </div>
                  </div>
                )}

                {activePart === 'part-3-mind-environment' && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase tracking-[0.3em] text-earthy-clay font-black">Part III · Mind and Environment</span>
                      <h3 className="text-3xl md:text-4xl font-black text-earthy-olive">Mind & Environment: How We Shape What We Experience</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-6 bg-earthy-olive/10 rounded-2xl border border-earthy-olive/10 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-earthy-olive font-black shadow-sm">
                          <Layers className="w-5 h-5 text-earthy-clay" />
                        </div>
                        <h4 className="font-black text-earthy-olive text-lg">One Shared Source</h4>
                        <p className="text-xs md:text-sm font-medium text-earthy-olive/80 leading-relaxed">
                          Before we divide everything into "me" versus "the rest of the world," Dzogchen philosophy says reality begins from a single shared awareness (<em>zhi</em>). Our private thoughts and the solid physical world are like rays of light from the same single lamp.
                        </p>
                      </div>

                      <div className="p-6 bg-earthy-olive/10 rounded-2xl border border-earthy-olive/10 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-earthy-olive font-black shadow-sm">
                          <Eye className="w-5 h-5 text-earthy-clay" />
                        </div>
                        <h4 className="font-black text-earthy-olive text-lg">Perception Is a Two-Way Street</h4>
                        <p className="text-xs md:text-sm font-medium text-earthy-olive/80 leading-relaxed">
                          We don’t just passively record our surroundings like a camera. Our attention reaches out like a lasso, actively shaping what we notice and how it affects us. Modern cognitive science calls this "enaction"—we literally build our experience through how we interact with it.
                        </p>
                      </div>

                      <div className="p-6 bg-earthy-olive/10 rounded-2xl border border-earthy-olive/10 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-earthy-olive font-black shadow-sm">
                          <Wind className="w-5 h-5 text-earthy-clay" />
                        </div>
                        <h4 className="font-black text-earthy-olive text-lg">Breathing with the Universe</h4>
                        <p className="text-xs md:text-sm font-medium text-earthy-olive/80 leading-relaxed">
                          Every single day, humans take roughly 21,600 breaths—which classical texts note mirrors the sun's passage across the sky. Real healing is remembering that your breathing and the wider world are always dancing together, not separated by an invisible wall.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-earthy-olive/10 space-y-3">
                      <h4 className="font-black text-earthy-olive text-base">Sky-Gazing & Expanding Your Perspective</h4>
                      <p className="text-sm font-medium text-earthy-olive/85 leading-relaxed">
                        In advanced meditation (<em>Tögal</em>), practitioners sit and gaze into an open, cloudless blue sky. When visual distractions fade away, the mind stops projecting worries and settles into clarity—a phenomenon modern psychologists recognize as letting the sensory brain reset itself.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* Section 3: DIGITAL REPOSITORY & HERB WIKI ARCHIVE */}
          {/* ========================================================================= */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-earthy-olive text-white rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-earthy-olive/10 shadow-sm">
                  <Globe className="w-4 h-4 text-white" /> Digital Preservation
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-earthy-olive tracking-tight leading-tight">
                  Tibetan Medicine <br /><span className="italic text-earthy-clay font-serif">Herb Wiki Archive</span>
                </h2>
                <div className="space-y-6 text-lg text-earthy-olive font-bold leading-relaxed">
                  <p>
                    Alongside this philosophical treatise, I initiated and developed the <strong>Herb Wiki</strong>—an open-access digital pharmacopoeia documenting endangered Tibetan botanical species, compound formulations, and high-altitude ecological habitats.
                  </p>
                  <p>
                    Connecting the field observations of Sanjiangyuan and monastic compounders with modern digital preservation ensures this traditional medical wisdom remains accessible to future generations worldwide.
                  </p>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://herbwiki.shallpay.cn/zh-cn/home/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-10 py-5 bg-earthy-clay text-white rounded-2xl font-black text-[0.85rem] uppercase tracking-[0.2em] hover:bg-earthy-olive transition-all shadow-xl group/wiki"
                  >
                    <Globe className="w-5 h-5 transition-transform group-hover/wiki:rotate-12" /> Open Herb Wiki <ExternalLink className="w-5 h-5 group-hover/wiki:translate-x-1 group-hover/wiki:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="bg-earthy-sage/5 border-2 border-earthy-olive/10 rounded-[3rem] p-10 md:p-12 relative overflow-hidden group hover:border-earthy-clay/30 transition-colors">
                  <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-earthy-olive/5 transition-transform duration-500 group-hover:scale-110">
                      <BookOpen className="w-8 h-8 text-earthy-clay" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-earthy-olive">Open Ethnobotanical Repository</h3>
                    <p className="text-earthy-olive/80 font-bold leading-relaxed text-sm md:text-base">
                      Cataloging wild harvest protocols, regional distribution maps, and classical compound processing methods across Sichuan, Gansu, and Qinghai.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-earthy-clay/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACADEMIC PAPER FULL MODAL READER */}
      {/* ========================================================================= */}
      {isPaperModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
          <div className="bg-[#FDFCF8] w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] shadow-2xl border border-earthy-olive/20 flex flex-col overflow-hidden animate-fadeIn">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-earthy-olive/10 flex justify-between items-center bg-white/60">
              <div>
                <span className="text-[0.65rem] font-mono font-black uppercase tracking-[0.25em] text-earthy-clay block">
                  Harvard Academic Research Draft
                </span>
                <h3 className="text-xl md:text-2xl font-black text-earthy-olive">
                  Tibetan Medicine: Interconnectedness of Body, Mind, and Environment
                </h3>
                <p className="text-xs font-mono text-earthy-olive/70 mt-1">
                  Advised by Prof. Leonard van der Kuijp · 32 Pages · 86 Citations
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://docs.google.com/document/d/1cEjo5P7uM2wULwLwA8ceP33FUifekCJid8fOqKMeYkM/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-earthy-clay/10 hover:bg-earthy-clay/20 text-earthy-clay text-xs font-mono font-bold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open in Google Docs
                </a>
                <button
                  onClick={() => setIsPaperModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-earthy-olive/10 hover:bg-earthy-olive/20 flex items-center justify-center text-earthy-olive transition-colors shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Sub-Tabs */}
            <div className="px-6 md:px-8 py-3 bg-earthy-cream/50 border-b border-earthy-olive/10 flex gap-4">
              <button
                onClick={() => setModalTab('text')}
                className={`text-xs font-black uppercase tracking-widest pb-2 border-b-2 transition-all ${
                  modalTab === 'text' ? 'border-earthy-clay text-earthy-clay' : 'border-transparent text-earthy-olive/60'
                }`}
              >
                Monograph Sections
              </button>
              <button
                onClick={() => setModalTab('citations')}
                className={`text-xs font-black uppercase tracking-widest pb-2 border-b-2 transition-all ${
                  modalTab === 'citations' ? 'border-earthy-clay text-earthy-clay' : 'border-transparent text-earthy-olive/60'
                }`}
              >
                Selected Bibliography & Works Cited
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 md:p-10 overflow-y-auto space-y-10 flex-1 font-serif">
              {modalTab === 'text' ? (
                <>
                  {/* Abstract Card */}
                  <div className="p-6 md:p-8 bg-earthy-sage/10 rounded-2xl border border-earthy-olive/10 font-sans space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-earthy-clay">Paper Abstract</h4>
                    <p className="text-sm font-bold text-earthy-olive/90 leading-relaxed italic font-serif">
                      "{PAPER_METADATA.abstract}"
                    </p>
                  </div>

                  {/* Paper Sections */}
                  {PAPER_SECTIONS.map((section) => (
                    <article key={section.id} className="space-y-4 border-b border-earthy-olive/10 pb-8 last:border-b-0">
                      <div className="font-sans">
                        <span className="text-xs font-mono font-black text-earthy-clay uppercase tracking-widest">{section.part}</span>
                        <h4 className="text-2xl font-black text-earthy-olive mt-1">{section.title}</h4>
                      </div>
                      <div className="space-y-4 text-base md:text-lg text-earthy-olive/90 leading-relaxed">
                        {section.content.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    </article>
                  ))}
                </>
              ) : (
                <div className="space-y-6 font-sans">
                  <div>
                    <h4 className="text-xl font-black text-earthy-olive">Works Cited</h4>
                    <p className="text-xs font-mono text-earthy-olive/60 mt-1">
                      Key academic literature, tantric texts, and clinical studies cited in the 32-page draft:
                    </p>
                  </div>
                  <ul className="space-y-3 text-xs md:text-sm font-mono text-earthy-olive/80 divide-y divide-earthy-olive/10">
                    {WORKS_CITED_SAMPLE.map((ref, idx) => (
                      <li key={idx} className="pt-3">
                        <span className="text-earthy-clay font-bold mr-2">[{idx + 1}]</span>
                        {ref}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-earthy-olive/10 bg-white/60 flex flex-wrap justify-between items-center gap-4">
              <span className="text-xs font-mono text-earthy-olive/60">
                Paper: "Tibetan medicine and its construction of the interconnectedness of the body, mind, and environment"
              </span>
              <button
                onClick={() => setIsPaperModalOpen(false)}
                className="px-6 py-2.5 bg-earthy-olive text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-earthy-clay transition-colors"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
