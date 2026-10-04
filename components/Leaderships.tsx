
import React from 'react';
import { Award, Star, Compass, Shield, Users, Edit3, ClipboardList, Key, Scissors } from 'lucide-react';

const leadershipRoles = [
  { 
    title: "Peer Group Leader", 
    year: "(26-27)", 
    icon: Users,
    description: "Facilitating activities and providing mentorship to foster a supportive community for incoming students."
  },
  { 
    title: "Blue Review Arts Staff", 
    year: "(24-26)", 
    icon: Edit3,
    description: "Contributing to the curation and production of the school's arts and literary magazine."
  },
  { 
    title: "Blue Review Arts Editor", 
    year: "(26-27)", 
    icon: Star,
    description: "Leading the arts editorial team in selecting visual submissions for publication and composing the pages."
  },
  { 
    title: "Peer Tutoring Center Head Proctor", 
    year: "(25-27)", 
    icon: Shield,
    description: "Managing daily operations and student support services at the peer tutoring center and help students with STEM subjects (Calculus, Biology, Physics, Chemistry, Organic Chemistry)."
  },
  { 
    title: "Climbing Club President", 
    year: "(25-27)", 
    icon: Compass,
    description: "Organizing climbing trips, open barn, and building a thriving community of outdoor enthusiasts."
  },
  { 
    title: "Climbing Internship", 
    year: "(25-27)", 
    icon: ClipboardList,
    description: "Gaining hands-on experience in instruction, route setting, and facility management in and outdoors"
  },
  { 
    title: "Burgin Proctor", 
    year: "(24-26)", 
    icon: Award,
    description: "Managing the Burgin Center of Arts by assiting student check-in and maintaining the use of space."
  },
  { 
    title: "Blue Key", 
    year: "(25-27)", 
    icon: Key,
    description: "Acting as a campus ambassador, providing tours and representing the school's values to visiting families."
  },
  {
    title: "Hair Donation",
    year: "(21-27)",
    icon: Scissors,
    description: "Donated hair to young cancer patients for about every 2 years to support self-esteem. Also wrote a 10-page literary journalism paper that documents the hair donation industry as well as the perspective of cancer patients by interviewing one of my classmates."
  },
];

export const Leaderships: React.FC = () => {
  return (
    <section id="leaderships" className="py-24 px-6 bg-white overflow-hidden relative border-t border-earthy-olive/10">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20 space-y-4 text-center md:text-left">
          <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs block">Experience & Impact</span>
          <h2 className="text-5xl md:text-7xl font-black text-earthy-olive tracking-tighter">
            Leaderships <span className="text-earthy-clay italic font-serif">& Community Services</span>
          </h2>
        </div>

        <div className="space-y-0">
          {leadershipRoles.map((role, index) => (
            <div 
              key={index}
              className="group py-10 md:py-12 border-b border-earthy-olive/10 flex flex-col md:flex-row gap-6 md:gap-12 items-start transition-all duration-300 hover:bg-earthy-sage/5 -mx-6 px-6 rounded-xl"
            >
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-earthy-sage/10 border border-earthy-olive/5 flex items-center justify-center transition-all duration-500 group-hover:bg-earthy-olive group-hover:scale-110 shadow-sm group-hover:shadow-lg leadership-icon-container">
                <role.icon className="w-8 h-8 text-earthy-clay group-hover:text-white transition-colors leadership-icon" />
              </div>
              
              <div className="flex-grow space-y-3">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h3 className="text-2xl md:text-3xl font-black text-earthy-olive leading-tight">
                    {role.title}
                  </h3>
                  <span className="text-earthy-clay font-bold text-sm md:text-base uppercase tracking-widest">
                    {role.year}
                  </span>
                </div>
                <p className="text-earthy-olive/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-earthy-sage/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-earthy-clay/5 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
};
