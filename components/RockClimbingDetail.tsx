import React from 'react';
import { ArrowLeft, MapPin, Compass, Award, Activity, Hash, Mountain, CheckCircle2 } from 'lucide-react';

interface RockClimbingDetailProps {
  onBack: () => void;
}

interface Location {
  name: string;
  state: string;
  type: string;
  description: string;
  image: string;
  routes?: string[];
}

const LOCATIONS: Location[] = [
  {
    name: "Seneca Rocks",
    state: "West Virginia",
    type: "Trad / Multi-pitch",
    description: "The place where I had my first experience in trad climbing and multipitch climbing. Seneca truly offers great scenic areas, fantastic stars, and a perfect place to set up a campfire and bond with your team.",
    image: "https://i.ibb.co/S7HRTRMJ/Weixin-Image-20251226144136-119-6.jpg",
    routes: [
      "Discrepancy 5.8",
      "Hayduke Shrugged 5.10b/c",
      "R2D2 5.5",
      "Candy Corner 5.6",
      "Ye Gods & Little Fishes 5.8",
      "Totem 5.11a",
      "Ecstasy 5.7"
    ]
  },
  {
    name: "New River Gorge",
    state: "West Virginia",
    type: "Sport / Sandstone",
    description: "The New is the perfect place for sport climbing. Just so many options of routes with different difficulty. I definitely had a great time finding and exploring routes, and Waterstone.",
    image: "https://i.ibb.co/Vcpy6yjZ/Weixin-Image-20251226144138-121-6.jpg",
    routes: [
      "Hippie Dreams 5.7",
      "Jeff's Bunny Hop 5.8",
      "Sniff the Drill 5.8",
      "She Got the Bosch, I Got Drilled 5.10a",
      "Baby Has a Bolt Gun 5.10c",
      "Narcissus 5.12a",
      "5.5 My Ass 5.6",
      "Bobby D’Bunny 5.7",
      "Geisha Girl 5.8",
      "Kinesthetica 5.10c",
      "Barb Wire 5.11c",
      "Badass Tattoo 5.10b",
      "G-String 5.11a",
      "Shady Lady 5.7",
      "Crescendo 5.9+",
      "New Yosemite 5.9",
      "Junkyard Dog 5.11b",
      "Frigidator 5.10b",
      "Rapscallion’s Blues 5.10c"
    ]
  },
  {
    name: "Reeds Creek",
    state: "West Virginia",
    type: "Technical Sport",
    description: "Truly my favorite sport climbing area and a hidden gem near Seneca. So many good and fun routes named after superheroes. Absolutely worth it to wake up at 5am for this.",
    image: "https://i.ibb.co/NMQTG2g/reeds-creek.jpg",
    routes: [
      "Invasive Species 5.10",
      "Batman 5.11",
      "Hungry for Histo 5.8+",
      "Bowling for Buzzards 5.10b/c",
      "Leaning Tower 5.8",
      "Take It To The Limit 5.8",
      "The Bat Roof 5.11b",
      "Joker 5.10a",
      "Superman 5.7"
    ]
  },
  {
    name: "Shaffer Rocks",
    state: "Pennsylvania",
    type: "Local Quartzite",
    description: "An area that we go often due to its close location. Shaffer offers some very interesting climbs that requires a wide range to techniques. Kind of unfriendly to shorter people like me. Wink wink, nudge nudge, Spider Balls and Leap of Faith.",
    image: "https://i.ibb.co/CpMj8hfQ/Weixin-Image-20251226144137-120-6.jpg",
    routes: [
      "Blazing Saddles 5.6",
      "Rappel Crack 5.6",
      "Ten Pins 5.8",
      "Leap of Faith 5.9",
      "Spider Balls 5.10d"
    ]
  },
  {
    name: "White Rocks",
    state: "Pennsylvania",
    type: "Sandstone Ridge",
    description: "White Rocks is very beginner friendly where you can start to build your techniques and counquer the fear of heights. Setting up the routes at the top is an amazing experience with the wide view and fun approach.",
    image: "https://i.ibb.co/PZMBTzkR/Weixin-Image-20251226144131-114-6.jpg",
    routes: [
      "Calvin Corner 5.5",
      "Patriot Act 5.4",
      "Super Crack aka Wise Crack 5.7"
    ]
  },
  {
    name: "Talking Headwall",
    state: "Rumney, NH",
    type: "Elite Sport",
    description: "You can always meet new friends at Talking Headwall. Most Saturdays, I spend my time meeting other climbers, setting up top ropes, doing changeovers here.",
    image: "https://i.ibb.co/Mxgpbgyc/Weixin-Image-20251226144134-117-6.jpg",
    routes: [
      "I love Big Jugs 5.8",
      "Ne Plus Ultra 5.9",
      "Fortis 5.10a",
      "Galen’s 10 5.10a",
      "Ascent Gully 5.2",
      "Leading Should Feel This Way 5.10c",
      "Little Balls 5.8",
      "Big Balls 5.10a/b",
      "Fat Bastard 5.7+",
      "Pure Energy (variation) 5.11a",
      "Pure Energy 5.10a"
    ]
  },
  {
    name: "Guizhou",
    state: "China",
    type: "Limestone / Arches",
    description: "The natural landscape at Guizhou is amazing; there are all kinds of caves and mountains in different shapes. The routes are challenging but accomplishing. A great place to go to hide from the summer heat. Also a great place to go for food.",
    image: "https://i.ibb.co/DHTBfJqq/Screenshot-2025-12-26-at-15-06-50.png"
  },
  {
    name: "Yunnan",
    state: "China",
    type: "Sandstone, Limstone",
    description: "There are so many different areas to explore, whether the arches that are similar to Guizhou or the large slabs that requires meticulous technical control, each area has its own personality. You can find a place to find in any weather and any day!",
    image: "https://i.ibb.co/whjT4cYB/IMG-6738.jpg"
  }
];

export const RockClimbingDetail: React.FC<RockClimbingDetailProps> = ({ onBack }) => {
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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Outdoor Education</div>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs mb-4 block">Personal Expedition</span>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-[0.85] tracking-tighter mb-8">
              The <span className="italic text-earthy-clay">Vertical</span> <br /> Journal
            </h1>
            <p className="text-xl md:text-2xl font-serif text-earthy-olive max-w-2xl leading-relaxed">
              My favorite "Mercersburg Moments" are shared with people in the mountains, sitting around campfire before going to sleep, and waking up early just to prepare for a trip.
            </p>
          </div>

          {/* Location Sections */}
          <div className="space-y-32">
            {LOCATIONS.map((loc, idx) => (
              <section 
                key={loc.name} 
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-20 items-start`}
              >
                {/* Image Side */}
                <div className="w-full md:w-5/12 group">
                  <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-xl border border-earthy-olive/5">
                    <img 
                      src={loc.image} 
                      alt={`Annie climbing at ${loc.name}`} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earthy-olive/40 via-transparent to-transparent" />
                    
                    {/* Floating Info Plate */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <p className="text-[0.55rem] font-black uppercase tracking-widest text-white/80">Location</p>
                          <p className="text-white font-black uppercase tracking-[0.1em] text-xs">{loc.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[0.55rem] font-black uppercase tracking-widest text-white/80">Region</p>
                          <p className="text-white font-serif italic text-xs">{loc.state}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-7/12 space-y-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-earthy-clay">
                      <Hash className="w-3.5 h-3.5" />
                      <span className="text-[0.6rem] font-black uppercase tracking-[0.25em]">{loc.type}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-earthy-olive tracking-tighter leading-none">
                      {loc.name}
                    </h2>
                  </div>

                  <p className="text-lg text-earthy-olive leading-relaxed font-bold pl-6 border-l-2 border-earthy-clay/20">
                    {loc.description}
                  </p>

                  {/* Route List - Updated with Olive Green Style */}
                  {loc.routes && loc.routes.length > 0 && (
                    <div className="mt-8 p-6 bg-earthy-sage/10 rounded-3xl border border-earthy-sage/30">
                      <h3 className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-earthy-olive mb-4 flex items-center gap-2">
                        <Activity className="w-3 h-3 text-earthy-clay" /> Route Tick List
                      </h3>
                      <div className={`grid grid-cols-1 ${loc.routes.length > 8 ? 'md:grid-cols-2' : ''} gap-x-8 gap-y-2`}>
                        {loc.routes.map((route, rIdx) => (
                          <div key={rIdx} className="flex items-center gap-2 group/route">
                            <CheckCircle2 className="w-3.5 h-3.5 text-earthy-olive opacity-60 group-hover/route:opacity-100 transition-opacity" />
                            <span className="text-sm font-black text-earthy-olive tracking-tight">{route}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Closing Highlight */}
            <section className="py-24 border-t border-earthy-olive/10">
              <div className="max-w-3xl mx-auto text-center space-y-10">
                <h2 className="text-4xl md:text-6xl font-black text-earthy-olive leading-tight">
                  Always looking for the <br /> <span className="italic underline decoration-earthy-clay/30 underline-offset-8">next pitch.</span>
                </h2>
                <div className="flex justify-center gap-12">
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};