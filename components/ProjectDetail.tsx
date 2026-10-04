
import React from 'react';
import { ArrowLeft, BookOpen, ExternalLink, Activity, Trophy, Dna, FileCheck } from 'lucide-react';

interface ProjectDetailProps {
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ onBack }) => {
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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Project Study</div>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs mb-4 block">Scientific Investigation</span>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-tight tracking-tight mb-8">
              CASEF <br />
              <span className="italic">Posterboard</span>
            </h1>
            <div className="w-32 h-2 bg-earthy-clay rounded-full" />
          </div>

          <div className="space-y-24">
            {/* Research Overview section */}
            <section id="introduction">
              <h2 className="text-5xl font-black text-earthy-olive mb-10 flex items-center gap-4">
                <BookOpen className="w-12 h-12 text-earthy-clay" />
                Research Overview
              </h2>
              <div className="space-y-10 text-xl md:text-xl leading-relaxed text-earthy-olive font-regular">
                <p>
                  My significant research project is titled "Targeted Oncolytic Therapy for Hepatocellular Carcinoma (HCC) with High Specificity and Efficiency." This project is an extension of the research I first began in Grade 10, where through bioinformatics approach I found potential therapeutic target genes for HCC.
                </p>
                <p>
                  Building on that foundation, I expanded the work by examining cellular heterogeneity within tumor tissues to offer a foundation for developing more precise and subtype specific therapy. I explored this complexity at the molecular level and developed a more precise method for tumor classification, facilitating personalized therapy.
                </p>
                <p>
                  What distinguishes my project from many others in this field is its integrated approach. Most studies on cancer rely solely on sequencing data analysis or in vitro experiments. In contrast, I combined multi-omics computational analysis with experimental validation to bridge the gap between data and function.
                </p>
              </div>
            </section>

            {/* CASEF Poster section */}
            <section id="casef-poster" className="space-y-12">
              <div className="text-center space-y-4">
                 <h2 className="text-5xl md:text-7xl font-black leading-tight text-earthy-olive">
                  CASEF <span className="italic">Posterboard</span>
                </h2>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-[2rem] p-2 md:p-4 border border-earthy-olive/10 shadow-2xl relative group overflow-hidden">
                  <img 
                    src="https://i.ibb.co/0VWdqftS/Poster-Board-Integration-of-sc-RNA-seq-and-ATAC-seq-in-Transcriptional-Analysis-of-Hepatocellular-Ca.png" 
                    alt="CASEF Posterboard - Integration of scRNA-seq and ATAC-seq in Transcriptional Analysis of Hepatocellular Carcinoma" 
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
                <p className="text-earthy-sand font-bold text-xl">Honors received for scientific excellence and innovation in cancer research.</p>
              </div>

              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="bg-white p-10 rounded-[2.5rem] border border-earthy-olive/10 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-[#FDFCF8] rounded-full flex items-center justify-center mb-8 shadow-sm">
                    <Trophy className="w-6 h-6 text-earthy-clay" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-earthy-olive">First Award, Finalist</h3>
                  <p className="text-lg font-bold text-earthy-sand mb-10 leading-relaxed">
                    Capital Area Science & Engineering Fair 2025
                  </p>
                  <div className="text-[0.7rem] font-black uppercase tracking-widest opacity-60 text-earthy-olive">State Level</div>
                </div>

                <div className="bg-[#000000] p-10 rounded-[2.5rem] shadow-xl text-white transform hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-8">
                    <Dna className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4">BioGenius Invitation</h3>
                  <p className="text-lg font-bold opacity-80 mb-10 leading-relaxed">
                    Capital Area Science & Engineering Fair 2025
                  </p>
                  <div className="text-[0.7rem] font-black uppercase tracking-widest opacity-60">State Level</div>
                </div>
              </div>
            </section>

            {/* Published Paper section */}
            <section id="published-paper" className="py-20 border-t border-earthy-olive/10">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-12 rounded-[3rem] border border-earthy-olive/5 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10 w-full md:w-1/3">
                    <div className="aspect-[3/4] bg-earthy-olive/5 rounded-2xl flex items-center justify-center relative overflow-hidden border border-earthy-olive/10">
                      <FileCheck className="w-20 h-20 text-earthy-clay opacity-30 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 right-4 h-1.5 bg-earthy-clay/20 rounded-full" />
                      <div className="absolute bottom-4 left-4 right-4 space-y-2">
                        <div className="h-1 bg-earthy-olive/10 rounded-full w-3/4" />
                        <div className="h-1 bg-earthy-olive/10 rounded-full w-1/2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-full md:w-2/3 space-y-8 text-center md:text-left">
                    <div className="space-y-4">
                      <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs block">Publication</span>
                      <h2 className="text-4xl md:text-5xl font-black text-earthy-olive leading-tight">
                        Targeted Oncolytic Therapy for HCC with High Specificity and Efficiency
                      </h2>
                      <p className="text-lg font-bold text-earthy-sand italic">
                        Full research manuscript detailing bioinformatics approach and experimental validation.
                      </p>
                    </div>

                    <a 
                      href="#" 
                      className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-2xl font-black text-[0.8rem] uppercase tracking-widest hover:bg-earthy-clay transition-all shadow-xl group/btn"
                    >
                      Read Full Paper <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>

                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-earthy-sage/5 rounded-full blur-3xl" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
