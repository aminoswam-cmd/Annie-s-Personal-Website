
import React from 'react';
import { ArrowLeft, Map, Droplets, Heart, Stethoscope, Award, Palette, ExternalLink, BookOpen, Quote, FileText, Library, Globe, Camera } from 'lucide-react';

interface ThreeRiverSourceDetailProps {
  onBack: () => void;
}

export const ThreeRiverSourceDetail: React.FC<ThreeRiverSourceDetailProps> = ({ onBack }) => {
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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Field Expedition</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-earthy-olive font-black uppercase tracking-[0.4em] text-xs mb-4 block opacity-70">Qinghai-Tibetan Plateau</span>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-[0.85] tracking-tighter mb-8">
              Independent<br />
              <span className="italic text-earthy-clay">Field Study</span>
            </h1>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Paragraph Style Text */}
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-bold text-earthy-olive leading-relaxed">
                  Sanjiangyuan, or the Three River Source, the "Water Tower of Asia," is the birthplace of the Yangtze, Yellow, and Lancang rivers. My journey twice to this high-altitude wilderness explored the intersection of environmental protection, public health, and local culture/religion on the Qinghai-Tibetan Plateau.
                </p>
                <p className="text-xl md:text-2xl font-bold text-earthy-olive leading-relaxed">
                  Over the two separate expeditions over two summers, I transitioned from observing the fragile alpine ecosystem to investigating its close relationship with Tibetan culture, religion, and public health, exploring how faith and heritage shape community well-being and health outcomes in remote regions.
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

              {/* Picture Side */}
              <div className="relative max-w-md md:max-w-sm lg:max-w-md w-full mx-auto">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-earthy-olive/10 group">
                   <img 
                    src="https://i.ibb.co/67fGQMXT/e4f2d02c44c94c3dbb46dcbcd33f3de3.jpg" 
                    alt="Sanjiangyuan Overview" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Subtle Decorative Backdrop */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-earthy-clay/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Expedition 1: Natural Protection */}
          <section className="py-24 border-t border-earthy-olive/20">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-earthy-sage text-white rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-earthy-olive/20">
                  <Droplets className="w-4 h-4 text-white" /> Expedition I: Natural Protection
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-earthy-olive tracking-tight">
                  The Ecosystem <br /><span className="italic text-earthy-clay">Sentinel</span>
                </h2>
                <div className="space-y-6 text-lg text-earthy-olive font-bold leading-relaxed">
                  <p>
                    During my first visit, my focus was purely ecological and environmental. I spent my days documenting glacier of the Amne Machin Mountain slowly degrade and observing the delicate balance of the alpine meadows. We tracked biodiversity shifts, witnessing firsthand how climate change ripples through the headwaters.
                  </p>
                  <p>
                    Walking through the vast, silent plateaus, I realized the numerous issues that need to be addressed: retreating snow line, habitat of endangered species such as snow leopard, grassland degradation due to over grazing, the loss of habitats due to a local dam construction, and the poaching of musk deers. As I learned how the Amne Machin Mountain, a holy mountain in local culture, may disappear within a decade due to global warming, my heart sank. It was the first time that global warming stopped being an abstract concept of polar bears standing on small pieces of ice-sheets. I visited Amne Machin myself and was shocked by the grandness of it. There was an altar below the sacred mountain where the locals would pour barleys and barley wines as they chant and circle the altar. The deep love for this land lies within the heart of every Tibetan.
                  </p>
                  <p>
                    One local volunteer named Huaqing Jie who has been working in the Three River Source for years showed us his handbuild model of the Amne Machin Mountain back in the 60s and labeled each peak with the name of the deity. "Amne" means grandfather or ancestor, "Machin" represents magnificence or the greatest mountain at the source of Yellow River. Amne Machin is one of the Four Sacred Tibetan Buddhist Mountains in China and is of great importance to Tibetan. Huaqing Jie has dedicated his life in tracking the habitat and educating other local residents about the importance of protecting the ecosystem. However, Janurary of 2025, as he stepped into the sacred mountain again with his camera, an avalance took him away. His spirit will remain in his favoirte place forever. I had the honor to meet him on my first trip and he was a true inspiration. His words relfected his deep love for this land. Whenever he talked about anything related to habitat protection, he could go on and on. That uncontainable passion was precisely what was most admirable.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img src="https://i.ibb.co/MDxQN2pc/70500275e12ca0332280c72d1c1e2f13.jpg" alt="First Trip - Meadow Research" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img src="https://i.ibb.co/nqbmh5BK/5bce6250e0531f2c29b2671572acb79d.jpg" alt="Tibet Alpine Valley" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img src="https://i.ibb.co/FkPxnvqb/76b693eeacddfc12ba0455db64966482.jpg" alt="Alpine Meadow Scenery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img src="https://i.ibb.co/zhLxhZPZ/IMG-3396.jpg" alt="High Plateau Glacial Landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img src="https://i.ibb.co/3Y9w7h5r/f864eb9e1b174c818d84a238c238dc3a.jpg" alt="First Trip - Team Expedition" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img src="https://i.ibb.co/YFGqXySZ/IMG-3481.jpg" alt="Sacred Amne Machin Ridge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img src="https://i.ibb.co/sv6qPF7h/IMG-3668.jpg" alt="Sacred Amne Machin Peak" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-earthy-olive/5 border border-earthy-olive/30 shadow-md group hover:scale-[1.02] transition-all duration-500">
                    <img src="https://i.ibb.co/W4rXBQ0M/IMG-3695.avif" alt="Scenic Tibetan Landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expedition 2: Public Health & Tibetan Culture */}
          <section className="py-24 border-t border-earthy-olive/20">
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-earthy-clay text-white rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-earthy-olive/30">
                  <Heart className="w-4 h-4 text-white" /> Expedition II: Public Health & Tibetan Culture
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-earthy-olive tracking-tight">
                  Healing <br /><span className="italic text-earthy-clay"> & Heritage</span>
                </h2>
                <div className="space-y-6 text-lg text-earthy-olive font-bold leading-relaxed">
                  <p>
                    As I was reflecting on my first expedition, I noticed many details that reflect the lives of locals, so I decided to go again and investigate deeper about the human stories. My entry point was on public health accessibility in remote Tibetan communities. I noticed their nomadic lifestyle has a huge impact on their living: women's role is to collect yak dang as fuel for cooking and taking care of the kids. This is intense physical labor and would put lots of stress on the back area. They also don't have access to modern sanitary items like period pads. Instead, they would use cloth layering plant ashes and burnt yak dung. These small details combined with the high altitude environment made them more prone to cardiovascular diseases, cervical cancer, and lung cancer. In order to learn more about their public health issues, I was able to have an in-depth interview with a famous local Tibetan doctor, Mamba (which means doctor) Renzeng Duojie.
                  </p>
                  <p>
                    The moment I walk in I noticed the Thangka Painting of the Medicine Buhda. He spoke of the "Four Tantras" of Tibetan Medicine and how spiritual well-being is inseparable from physical health. I also got the chance to see him treating his patient: spraying medicinal liquor from his mouth to the girl's face. Honestly, I was shocked by this powerful scene and was slightly questioning the validity of this treatment method. But then he told me with confidence that he had chanted to this bottle of liquor for over thousands of time and that the efficacy of this will be hundreds of times larger. On top of cancer, cardiovascular diseases, skin diseases, he mentioned something unexpected -- mental illness, especially among the younger generations. Though he is not entirely sure of the reason, but the introduction of modern technologies and change in lifestyle for their generation (going to school and moving to the cities) definitely plays a role. 
                  </p>
                  <p>
                    Healing is not just physical. Even modern medicine cannot find a guaranteed cure for mental illnesses and heavily relies on therapy. Though therapy is not part of traditional Tibetan Medicine, the mental support is already interweaved into its healing process. From the immersive setting to the ritualistic elements, the patient is already recieving some sort of therapy. Moreover, Tibetan medicine is closely related to Tibetan Buddhism, which adds another layer of hope and holiness to the healing process. Tibetan medicine offers the patient another perspective to look at the diseases such as sins and causationism. It is precisely because religious power cannot be strictly explained by any modern science and its effects are not guaranteed, many patients go to it as a last resort of hope, hoping a miracle would happen and believing in all the ritualistic power. The different mindsets that patients have and the power of rituals made Tibetan medicine a super intriguing topic to explore.   
                  </p>
                </div>
              </div>
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

          {/* Expedition III / Section 3: Tibetan Buddhism & Tibetan Medicine */}
          <section className="py-24 border-t border-earthy-olive/20">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-earthy-sage text-white rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-earthy-olive/20">
                  <BookOpen className="w-4 h-4 text-white" /> Section III: Tibetan Buddhism & Tibetan Medicine
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-earthy-olive tracking-tight">
                  Monasteries & <br /><span className="italic text-earthy-clay">Healing Wisdom</span>
                </h2>

                <div className="space-y-8 text-lg text-earthy-olive leading-relaxed font-bold">
                  {/* Monastic Observations */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-earthy-clay tracking-tight flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-earthy-clay"></span>
                      Monastic Exploration & Cultural Roots
                    </h3>
                    <p>
                      My exploration did not stop; it led me to the historic monastic centers at the borders of Sichuan and Gansu provinces: <strong>Langmu Monastery</strong>, <strong>Choje Monastery</strong>, and <strong>Labrang Monastery</strong>. These monasteries feature bright golden roofs with deep maroon walls, decorated with exquisite Thangka details and figures of different Buddhas. I was struck by how nearly every village we drove past housed its own temple—showing how deeply Tibetan Buddhism is woven into daily life. Local residents spin prayer wheels and chant scriptures quietly as they circumambulate clockwise around the temples. At Choje Monastery, I had the privilege of speaking directly with a resident lama and their Khenpo, who is also a master Tibetan physician, delving deep into how Buddhist philosophy forms the fundamental framework of Tibetan healing traditions.
                    </p>
                  </div>

                  {/* Body & Mind Holism */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-earthy-clay tracking-tight flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-earthy-clay"></span>
                      The Undivided Self: Body, Mind, & the Heart
                    </h3>
                    <p>
                      In Tibetan medicine, the body and mind are an inseparable unity. Unlike modern Western medicine, which divides the human body into isolated specialties and views the brain as the central command, Tibetan medicine views the <strong>Heart</strong> as the true center of human consciousness and vitality. The physical body is governed by three humors: <em>rLung</em> (Wind/energy), <em>Tripa</em> (Bile/fire), and <em>Beken</em> (Phlegm/earth and water). Health requires bringing all organs into a harmonious equilibrium.
                    </p>
                    <p>
                      Because state of mind directly shapes bodily health, cultivating a calm, detached mindset is essential for recovery. The Khenpo noted that many patients worsen due to severe anxiety or mistrust in their physicians. Furthermore, psychological conditions labeled as "depression" by modern psychology are understood in Tibetan medicine not as isolated brain defects, but as mind-spirit imbalances that traditional holistic medicine and spiritual practices can effectively purify.
                    </p>
                  </div>

                  {/* Dialogue with Modern Medicine */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-earthy-clay tracking-tight flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-earthy-clay"></span>
                      Dialogue with Modern Western Medicine
                    </h3>
                    <p>
                      Tibetan physicians do not reject modern diagnostic technology (such as X-rays or blood tests); they view them as visual extensions of traditional observation. However, they view Western medicine as an incomplete system that treats symptoms in isolation rather than synthesizing the whole human being. As a traditional adage summarizes: <em>"Western medicine lets you die with clarity; Traditional Chinese medicine lets you live with confusion; Tibetan medicine lets you treat with clarity."</em>
                    </p>
                    <p>
                      On surgical interventions, Tibetan doctors recognize tumor resection because removing large masses allows herbal formulations to dissolve remaining micro-lesions. Conversely, they strongly oppose radiotherapy due to its systemic damage to vital energy and the non-violent Buddhist principle of avoiding the aggressive destruction of cells.
                    </p>
                  </div>

                  {/* Empirical Practice & Therapeutics */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-earthy-clay tracking-tight flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-earthy-clay"></span>
                      Empirical Apprenticeship & Pharmacology
                    </h3>
                    <p>
                      Tibetan medicine is deeply empirical and personalized. Diagnostic pulse-reading varies according to the seasons, the patient's state, and even the physician's constitution, requiring years of clinical apprenticeship alongside a master physician.
                    </p>
                    <p>
                      Pharmacology strictly respects the elemental properties (such as hot vs. cold) of ingredients. For instance, cold-property remedies must never be heated into hot decoctions, preserving their efficacy. Mineral ingredients undergo meticulous traditional detoxifying alchemy, rendering them therapeutic rather than harmful. In the <em>Four Medical Tantras</em>, treatment follows a strict hierarchy:
                    </p>
                    
                    {/* Hierarchy Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 text-center">
                      <div className="bg-earthy-sage/10 p-4 rounded-xl border border-earthy-olive/10">
                        <span className="text-[0.65rem] font-mono font-black text-earthy-clay block uppercase">1. Diet</span>
                        <p className="text-xs text-earthy-olive font-bold mt-1">Nutritional adjustment first</p>
                      </div>
                      <div className="bg-earthy-sage/10 p-4 rounded-xl border border-earthy-olive/10">
                        <span className="text-[0.65rem] font-mono font-black text-earthy-clay block uppercase">2. Lifestyle</span>
                        <p className="text-xs text-earthy-olive font-bold mt-1">Behavior & environmental balance</p>
                      </div>
                      <div className="bg-earthy-sage/10 p-4 rounded-xl border border-earthy-olive/10">
                        <span className="text-[0.65rem] font-mono font-black text-earthy-clay block uppercase">3. Medicine</span>
                        <p className="text-xs text-earthy-olive font-bold mt-1">Herbal & mineral remedies</p>
                      </div>
                      <div className="bg-earthy-sage/10 p-4 rounded-xl border border-earthy-olive/10">
                        <span className="text-[0.65rem] font-mono font-black text-earthy-clay block uppercase">4. External</span>
                        <p className="text-xs text-earthy-olive font-bold mt-1">Therapies as a last resort</p>
                      </div>
                    </div>
                  </div>

                  {/* 404 Diseases & Karma */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-earthy-clay tracking-tight flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-earthy-clay"></span>
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

              {/* Visuals / Monastery Gallery side */}
              <div className="w-full md:w-1/2 space-y-6 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
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
                  ].map((url, idx) => (
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
          <section className="py-24 border-t border-earthy-olive/20">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-earthy-olive text-white rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-earthy-olive/10 shadow-sm">
                  <Library className="w-4 h-4 text-white" /> Digital Preservation
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-earthy-olive tracking-tight leading-tight">
                  Tibetan Medicine <br /><span className="italic text-earthy-clay font-serif">Digital Archive</span>
                </h2>
                <div className="space-y-6 text-lg text-earthy-olive font-bold leading-relaxed">
                  <p>
                    I created a digital archive seeking to preserve traditional Tibetan medicine. It features a wiki page that allows everyone to contribute, thus preserving their medicinal culture and finding potential alternative options for environmental preservation.
                  </p>
                  <p>
                    By bridging ancient wisdom with modern technology, this repository ensures that invaluable knowledge remains accessible while fostering a global community of practitioners and researchers dedicated to its continuity.
                  </p>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://herbwiki.shallpay.cn/zh-cn/home/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-10 py-5 bg-earthy-clay text-white rounded-2xl font-black text-[0.85rem] uppercase tracking-[0.2em] hover:bg-earthy-olive transition-all shadow-xl group/wiki"
                  >
                    <Globe className="w-5 h-5 transition-transform group-hover/wiki:rotate-12" /> Explore Herb Wiki <ExternalLink className="w-5 h-5 group-hover/wiki:translate-x-1 group-hover/wiki:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-earthy-sage/5 border-2 border-earthy-olive/10 rounded-[3rem] p-12 relative overflow-hidden group hover:border-earthy-clay/30 transition-colors">
                  <div className="relative z-10 space-y-8">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-earthy-olive/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <BookOpen className="w-10 h-10 text-earthy-clay" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-black text-earthy-olive">Preserving Medicinal History</h3>
                    </div>
                  </div>
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-earthy-clay/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-earthy-sage/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </section>
          <section className="py-32">
            <div className="max-w-4xl mx-auto">
              <div className="bg-earthy-olive p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10 flex flex-col gap-12">
                  {/* Title Section */}
                  <div className="space-y-4">
                    <BookOpen className="w-12 h-12 text-earthy-sage mb-6" />
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tight leading-[0.9]">
                      The Healing Pulse <br />of Sanjiangyuan
                    </h2>
                    <div className="w-20 h-1 bg-earthy-sage/40 rounded-full" />
                  </div>

                  {/* Award Box - Simplified & Integrated */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] flex items-center gap-6 group hover:bg-white/15 transition-all">
                    <div className="w-16 h-16 bg-earthy-clay rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-earthy-sage mb-1">Recognition</h3>
                      <p className="text-2xl font-black leading-none mb-1">Third Prize</p>
                      <p className="text-white/60 font-bold text-xs tracking-wide">Social Justice Award | 2025 Fall</p>
                    </div>
                  </div>

                  {/* Google Doc Link Button */}
                  <div className="pt-4">
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

                {/* Abstract decorative background elements */}
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
