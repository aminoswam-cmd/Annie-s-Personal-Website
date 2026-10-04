import React, { useState } from 'react';
import { ArrowLeft, Skull, MapPin, Compass, Image as ImageIcon, Tag, Layers, Feather, Sparkles, BookOpen, Maximize2, X, ChevronLeft, ChevronRight, ZoomIn, Eye } from 'lucide-react';

interface CollectThemAllDetailProps {
  onBack: () => void;
}

interface BlogPost {
  id: string;
  entryNumber: string;
  title: string;
  subtitle: string;
  date: string;
  status: string;
  theme: string;
  designDescription: string;
  materialsAndCraft: string;
  huntClues: {
    poem: string;
  };
  placeholders: {
    title: string;
    caption: string;
    aspectRatio: string;
    mockUrl?: string;
  }[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'entry-01-tennis-court-tree',
    entryNumber: 'Dispatch 01',
    title: 'The Tree by the Tennis Court',
    subtitle: 'Commemorating the Lost Bird Family & Wooden Swing',
    date: 'Fall 2026 · Planning Phase',
    status: 'Ready for Kiln Fire',
    theme: 'Lost Birds & The Old Swing',
    designDescription:
      "On my everyday walk to the big red barn for climbing PGA, I always walk past this giant tree beside the tennis court. Its form stretches towards all directions, almost like hands reaching for the sky. There used to be a swing on one of the large branches and a bird's nest where you can see by stepping on the swing. However, this year, when I walked past that tree again, the swing was gone, and so was the nest. Therefore, there are wings coming out from the back of the skull in all directions, just like the tree itself, commemorating the lost family of birds and the laughter of kids on the old wooden swing surrounding the tree.",
    materialsAndCraft: 'High-fire stoneware with multi-directional sculpted wings, textured branch slip, wood-ash reduction glaze.',
    huntClues: {
      poem: `Follow the rhythm no drummer keeps:
thud, then thwack, then a hollow pop.
Leave the echo, lift your eyes
to a hundred hands that will not stop
reaching for the sky in every direction.

One arm cradles a plank, weathered and old,
hanging askew from a summer long gone.
Look higher, where the fingers braid,
a feathered tenant guards what waits till dawn.`
    },
    placeholders: [
      {
        title: 'Sculptural Ideation & Wing Anatomy',
        caption: 'Conceptual exploration showing outstretched wings and organic crown structure.',
        aspectRatio: 'aspect-[4/3]',
        mockUrl: 'https://i.ibb.co/xSGwPq5K/fd905e2406277d8726488bdf082fd6ec.jpg'
      },
      {
        title: 'Clay Model & Structural Form',
        caption: 'Detailed sculpting study examining dimensional wings and textured cranium in clay.',
        aspectRatio: 'aspect-[4/3]',
        mockUrl: 'https://i.ibb.co/m5C1C78t/85c5d180ad1acc5f243f3af04619b60a.jpg'
      },
      {
        title: 'The Giant Tree, Swing & Bird Nest',
        caption: 'The inspiring tree beside the tennis court with the old wooden swing and bird nest.',
        aspectRatio: 'aspect-[4/3]',
        mockUrl: 'https://i.ibb.co/8nLWZqMg/tree-swing-bird.png'
      }
    ]
  },
  {
    id: 'entry-02-barn-campfire',
    entryNumber: 'Dispatch 02',
    title: 'The Campfire Pit Beside the Barn',
    subtitle: 'Commemorating Campus Bonding, S\'mores & Fireside Traditions',
    date: 'Fall 2026 · Planning Phase',
    status: 'Clay Model & Site Ready',
    theme: 'Campfire Community & S\'mores',
    designDescription:
      'Campfire is a core element of the Mercersburg vocabulary and what creates community. We have lots of firepits on campus, whether in front of the Student Center, beside Culberston for pumpkin carving, or the one beside enchanted forest, they all became the place of bonding as students gather for smores. My favorite firepit on campus is the one right next to the barn, where I walk past almost every day for climbing practice, where frisbees flew across the air, and where the best conversations happen.',
    materialsAndCraft: 'High-fire stoneware with ember-textured slip, flame contour cresting, and wood-ash glaze accents.',
    huntClues: {
      poem: `Not where the crowded pathways meet,
nor beneath the lamps the whole campus knows,
but out where the sidewalk starts to fray
and the quiet deepens and the evening slows.

Follow the scent of sugar and smoke
to a golden dancer, spinning spark by spark,
where marshmallows blister and chocolate melts
beside a vast house of hay and hoof, dreaming in the dark.`
    },
    placeholders: [
      {
        title: 'Campfire Skull Design & Ideation',
        caption: 'Conceptual sketch and form exploration for the campfire-themed skull.',
        aspectRatio: 'aspect-[4/3]',
        mockUrl: 'https://i.ibb.co/cKL4zzLD/02c19c50fae4685d67c516bc9188cca7.jpg'
      },
      {
        title: 'Clay Sculpture & Ember Textures',
        caption: 'Sculptural clay study capturing dynamic flame contours and textured surface.',
        aspectRatio: 'aspect-[4/3]',
        mockUrl: 'https://i.ibb.co/yc3zjgrx/2aac577405ec9670601ace2f9987a0bd.jpg'
      },
      {
        title: 'The Barn Campfire Pit Hiding Spot',
        caption: 'The firepit beside the big red barn where climbing PGA passes and evening conversations ignite.',
        aspectRatio: 'aspect-[4/3]',
        mockUrl: 'https://i.ibb.co/R4bJZXLm/campfire.png'
      }
    ]
  },
  {
    id: 'entry-03-moe-mountain-biking',
    entryNumber: 'Dispatch 03',
    title: 'The MOE Mountain Biking Trail',
    subtitle: 'Commemorating Coach Ralph & The Trails of Mercersburg Outdoor Education',
    date: 'Fall 2026 · Planning Phase',
    status: 'Clay Model & Site Ready',
    theme: 'MOE Mountain Biking Program',
    designDescription:
      'Having spend almost all of my Performance Group Activities (PGA) at Mercersburg Outdoor Education (MOE), it has became a crucial part of my highschool life. However, there is only one program that I have never attended before -- Mountain Biking. It was once led by the amazing Ralph who worked at the school part-time for the ski-mountaineering and mountain biking coach. Unfortunately, along with Ralph not working for the school anymore, MOE Mountain Biking also closed. This sculpture is dedicated to this program that I have never yet to try.',
    materialsAndCraft: 'Sculpted clay with tire tread impressions, spoke wheel motifs, weathered trail slip, and iron oxide reduction.',
    huntClues: {
      poem: `Turn from the door that everyone knows,
past the stable's wide shoulder, into its shade,
where gravel murmurs its crunching song
and the ground remembers the paths that were made.

A gust sweeps by, a faceless rush,
over hills that climb and plunge like a coaster's track.
Where the wheel-borne wanderers gather to rest,
a shelter on wheels is waiting, tucked at the back.`
    },
    placeholders: [
      {
        title: 'Mountain Biking Skull Ideation & Form',
        caption: 'Conceptual exploration and form sketches for the mountain biking tribute skull.',
        aspectRatio: 'aspect-[4/3]',
        mockUrl: 'https://i.ibb.co/SwmbF4sm/82171545be4ff591b3699771bc64a80f.jpg'
      },
      {
        title: 'Clay Sculpture & Tread Details',
        caption: 'Hand-sculpted ceramic model featuring rugged tire tread crests and angular lines.',
        aspectRatio: 'aspect-[4/3]',
        mockUrl: 'https://i.ibb.co/LdkFQWxd/92cbbeea52edc51087aae33ace296029.jpg'
      },
      {
        title: 'The Shelter on Wheels Hiding Spot',
        caption: 'Hill garden trail location and mobile shelter tucked behind the stable.',
        aspectRatio: 'aspect-[4/3]',
        mockUrl: 'https://i.ibb.co/WpN4rLYp/hill-garden.png'
      }
    ]
  }
];

export const CollectThemAllDetail: React.FC<CollectThemAllDetailProps> = ({ onBack }) => {
  const [lightboxState, setLightboxState] = useState<{
    postId?: string;
    index?: number;
    url?: string;
    title?: string;
    caption?: string;
  } | null>(null);

  const openLightbox = (postId: string, index: number) => {
    setLightboxState({ postId, index });
  };

  const openSingleImageLightbox = (url: string, title: string, caption?: string) => {
    setLightboxState({ url, title, caption });
  };

  const closeLightbox = () => {
    setLightboxState(null);
  };

  const nextLightboxImage = () => {
    if (!lightboxState || !lightboxState.postId) return;
    const currentPost = BLOG_POSTS.find(p => p.id === lightboxState.postId);
    if (!currentPost) return;
    const nextIdx = ((lightboxState.index ?? 0) + 1) % currentPost.placeholders.length;
    setLightboxState({ postId: lightboxState.postId, index: nextIdx });
  };

  const prevLightboxImage = () => {
    if (!lightboxState || !lightboxState.postId) return;
    const currentPost = BLOG_POSTS.find(p => p.id === lightboxState.postId);
    if (!currentPost) return;
    const prevIdx = ((lightboxState.index ?? 0) - 1 + currentPost.placeholders.length) % currentPost.placeholders.length;
    setLightboxState({ postId: lightboxState.postId, index: prevIdx });
  };

  const activeLightboxPost = (lightboxState && lightboxState.postId) ? BLOG_POSTS.find(p => p.id === lightboxState.postId) : null;
  const activeLightboxItem = (activeLightboxPost && lightboxState && typeof lightboxState.index === 'number') 
    ? activeLightboxPost.placeholders[lightboxState.index] 
    : null;

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
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Hobbies · Interactive Sculpture Project</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earthy-clay/10 text-earthy-clay rounded-full font-black uppercase tracking-[0.3em] text-xs">
                <Skull className="w-3.5 h-3.5" /> Campus Art Installation & Scavenger Hunt
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive leading-[0.85] tracking-tighter mb-8">
              Collect<br />
              <span className="italic text-earthy-clay">them all!</span>
            </h1>
            <div className="w-24 h-2 bg-earthy-clay mb-12 rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Overview */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-bold text-earthy-olive leading-relaxed">
                  Back in freshman year, I took Sculpture I as my art course and made a heroic-sized (1.5x) skull out of ceramic clay. It was the first sculpture that I made, and it kindled my passion for 3D arts and sculpture. Initially, this skull stayed in my room as a decoration for 2 years, until at the end of my junior year, I decided it was time to leave it, because I couldn't bring it back home or store it in my limited storage boxes over the summer.
                </p>
                <p className="text-base md:text-lg font-bold text-earthy-olive/85 leading-relaxed">
                  An evil plan emerged in my mind: I brought this skull to the Enchanted Forest, placed it on a log, and wrote "Daddy take me home" on the top, expecting someone would eventually discover and take it. Surprisingly, it was gone the next day, even though it was hidden in such a secretive place. Therefore, I am inspired to make a series of skull sculptures of different themes to commemorate the lost things at Mercersburg and its history.
                </p>
              </div>

              {/* Picture Side */}
              <div className="relative max-w-md md:max-w-sm lg:max-w-md w-full mx-auto">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-earthy-olive/10 group bg-earthy-cream">
                  <img 
                    src="https://i.ibb.co/6c7HTBD1/fbe50aa90ea19dbca01ff674f33bc29a.jpg" 
                    alt="Handcrafted Sculpture Art Installation" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-earthy-clay/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Specific Sketch and Design Section */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="space-y-12">
              {/* Header */}
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-earthy-sage/15 text-earthy-olive rounded-full font-mono text-xs font-bold uppercase tracking-widest">
                  <Feather className="w-3.5 h-3.5 text-earthy-clay" /> Conceptual Blueprint & Ideation
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-earthy-olive tracking-tight">
                  Specific Sketch <br />
                  <span className="italic text-earthy-clay">and Design</span>
                </h2>
                <p className="text-lg md:text-xl text-earthy-olive/85 font-bold leading-relaxed">
                  These are sketches and designs I made thematically, based on the place I am putting them or the history I am commemorating.
                </p>
                <div className="w-20 h-1 bg-earthy-clay rounded-full" />
              </div>

              {/* Specific Sketch and Design Showcase Card */}
              <div 
                onClick={() => openSingleImageLightbox(
                  'https://i.ibb.co/NgWmRx6C/7d0cba9624d42c28751e76ee3f6d266d.jpg',
                  'Specific Sketch and Design',
                  'These are sketches and designs I made thematically, based on the place I am putting them or the history I am commemorating.'
                )}
                className="group relative bg-white rounded-[2.5rem] border border-earthy-olive/15 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 p-6 md:p-10"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-earthy-olive/70 uppercase tracking-wider px-1">
                    <span className="flex items-center gap-2 text-earthy-clay">
                      <Sparkles className="w-4 h-4" /> Thematic Concept Sheet
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-earthy-olive/5 rounded-full text-earthy-olive">
                      <Maximize2 className="w-3 h-3 text-earthy-clay" /> Click to enlarge sketch
                    </span>
                  </div>

                  <div className="w-full h-80 sm:h-[460px] md:h-[540px] rounded-3xl bg-earthy-sand/15 border border-earthy-olive/10 flex items-center justify-center relative overflow-hidden group-hover:bg-earthy-sand/25 transition-colors">
                    <img 
                      src="https://i.ibb.co/NgWmRx6C/7d0cba9624d42c28751e76ee3f6d266d.jpg" 
                      alt="Specific Sketch and Design"
                      className="w-full h-full object-contain p-2 md:p-4 rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-white/95 text-earthy-olive font-mono text-xs font-bold flex items-center gap-2 shadow-xl scale-95 group-hover:scale-100 transition-all">
                        <Maximize2 className="w-4 h-4 text-earthy-clay" /> View Fullscreen Drawing
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-earthy-olive/10">
                    <p className="text-sm md:text-base font-bold text-earthy-olive">
                      Thematic skulls concept drawings and comparative form studies.
                    </p>
                    <span className="text-xs font-mono font-bold text-earthy-clay uppercase tracking-wider">
                      Mercersburg Commemorative Series
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Post Series: Installation & Design Logs */}
          <section className="py-20 border-t border-earthy-olive/20">
            <div className="space-y-16">
              {/* Blog Feed Section Header */}
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-earthy-sage/15 text-earthy-olive rounded-full font-mono text-xs font-bold uppercase tracking-widest">
                  <BookOpen className="w-3.5 h-3.5 text-earthy-clay" /> Field Dispatches & Scavenger Series
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-earthy-olive tracking-tight">
                  The Three Sculptures <br />
                  <span className="italic text-earthy-clay">& Campus Hiding Spots</span>
                </h2>
                <p className="text-lg text-earthy-olive/80 font-bold leading-relaxed">
                  Detailed logs of each ceramic skull, its backstory, sculptural study, and scavenger hunt clue poem.
                </p>
                <div className="w-20 h-1 bg-earthy-clay rounded-full" />
              </div>

              {/* Blog Posts Feed */}
              <div className="space-y-16">
                {BLOG_POSTS.map((post, idx) => (
                  <article 
                    key={post.id}
                    className="bg-white rounded-[2.5rem] border border-earthy-olive/10 shadow-lg p-8 md:p-12 space-y-10 transition-all hover:shadow-xl"
                  >
                    {/* Post Meta Header */}
                    <div className="flex items-center justify-between gap-4 pb-6 border-b border-earthy-olive/10">
                      <div className="flex items-center gap-3">
                        <span className="px-4 py-1.5 bg-earthy-olive text-white rounded-xl text-xs font-black uppercase tracking-widest">
                          {post.entryNumber}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-earthy-clay">
                          <Tag className="w-3.5 h-3.5" /> {post.theme}
                        </span>
                      </div>
                    </div>

                    {/* Post Title & Subtitle */}
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-4xl font-black text-earthy-olive tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-base md:text-lg font-bold text-earthy-clay italic">
                        {post.subtitle}
                      </p>
                    </div>

                    {/* Paired Layout: Descriptions and Pictures Side-by-Side */}
                    {(() => {
                      const designStudies = post.placeholders.slice(0, post.placeholders.length > 2 ? 2 : 1);
                      const huntStudies = post.placeholders.slice(post.placeholders.length > 2 ? 2 : 1);

                      return (
                        <div className="space-y-12">
                          {/* 1. Design Concept Row (Side-by-Side: Text on left, Pictures on right) */}
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
                            {/* Left: What the Design Is Going to Be */}
                            <div className="lg:col-span-5 bg-[#FDFCF8] p-7 md:p-8 rounded-3xl border border-earthy-olive/10 flex flex-col justify-between space-y-6">
                              <div className="space-y-4">
                                <div className="flex items-center gap-2 text-earthy-clay font-black text-xs uppercase tracking-widest">
                                  <Feather className="w-4 h-4" /> 1. The Design Concept
                                </div>
                                <p className="text-sm md:text-base font-bold text-earthy-olive/90 leading-relaxed">
                                  {post.designDescription}
                                </p>
                              </div>

                              <div className="pt-4 border-t border-earthy-olive/10 space-y-1.5">
                                <span className="text-xs font-mono font-bold text-earthy-olive/60 uppercase tracking-wider block">
                                  Materials & Craft:
                                </span>
                                <p className="text-xs md:text-sm font-bold text-earthy-olive leading-relaxed">
                                  {post.materialsAndCraft}
                                </p>
                              </div>
                            </div>

                            {/* Right: Accompanying Pictures of the Design Studies */}
                            <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                              <div className="flex items-center justify-between text-xs font-mono font-bold text-earthy-olive/60 uppercase tracking-wider px-1">
                                <span className="flex items-center gap-1.5 text-earthy-clay">
                                  <ImageIcon className="w-3.5 h-3.5" /> Design and Sketches
                                </span>
                                <span className="hidden sm:inline">Click to enlarge</span>
                              </div>

                              <div className={`grid grid-cols-1 ${designStudies.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'} gap-5 h-full`}>
                                {designStudies.map((item, dIdx) => (
                                  <div
                                    key={dIdx}
                                    onClick={() => item.mockUrl && openLightbox(post.id, dIdx)}
                                    className={`group relative ${
                                      item.mockUrl 
                                        ? 'bg-white shadow-md border border-earthy-olive/15 cursor-pointer hover:shadow-xl hover:-translate-y-1' 
                                        : 'bg-[#FDFCF8] border-2 border-dashed border-earthy-olive/20'
                                    } rounded-3xl hover:border-earthy-clay/50 p-3 transition-all`}
                                  >
                                    <div className="w-full h-64 sm:h-72 md:h-80 rounded-2xl bg-earthy-sand/15 border border-earthy-olive/10 flex flex-col items-center justify-center text-center relative overflow-hidden group-hover:bg-earthy-sand/25 transition-colors">
                                      {item.mockUrl ? (
                                        <>
                                          <img 
                                            src={item.mockUrl} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                            referrerPolicy="no-referrer" 
                                          />
                                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-xl bg-white/95 text-earthy-olive font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg scale-95 group-hover:scale-100">
                                              <Maximize2 className="w-3.5 h-3.5 text-earthy-clay" /> Enlarge
                                            </span>
                                          </div>
                                        </>
                                      ) : (
                                        <div className="space-y-3 flex flex-col items-center justify-center p-6">
                                          <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm border border-earthy-olive/10 flex items-center justify-center text-earthy-clay group-hover:scale-110 transition-transform">
                                            <ImageIcon className="w-6 h-6" />
                                          </div>
                                          <div>
                                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-earthy-olive/70 block">
                                              {item.title}
                                            </span>
                                            <span className="text-[0.65rem] font-sans font-bold text-earthy-clay block mt-0.5">
                                              Blueprint • Ready for Photo
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-earthy-olive/10 text-[0.6rem] font-mono font-black text-earthy-olive uppercase tracking-wider shadow-xs">
                                        Fig. {idx + 1}.{dIdx + 1}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* 2. Scavenger Clues Row (Side-by-Side: Poem on left, Location Reference on right) */}
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-earthy-olive/10">
                            {/* Left: Clues for Hunt Card */}
                            <div className="lg:col-span-5 bg-earthy-clay/5 p-7 md:p-8 rounded-3xl border border-earthy-clay/15 space-y-4 flex flex-col justify-between">
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2 text-earthy-clay font-black text-xs uppercase tracking-widest">
                                    <Compass className="w-4 h-4" /> 2. Clues for Hunt
                                  </div>
                                  <span className="text-[0.65rem] font-mono font-bold uppercase tracking-wider text-earthy-clay/70 px-2.5 py-0.5 rounded-full bg-earthy-clay/10">
                                    Poetic Clue
                                  </span>
                                </div>
                                <div className="p-5 md:p-6 rounded-2xl bg-white/85 border border-earthy-clay/10 shadow-xs">
                                  <p className="text-sm md:text-base font-serif italic text-earthy-olive leading-relaxed whitespace-pre-line">
                                    {post.huntClues.poem}
                                  </p>
                                </div>
                              </div>
                              <div className="pt-3 border-t border-earthy-clay/10 flex items-center justify-between text-xs font-mono font-bold text-earthy-clay">
                                <span className="uppercase tracking-wider">Scavenger Clue · Follow the verse</span>
                                <Sparkles className="w-3.5 h-3.5" />
                              </div>
                            </div>

                            {/* Right: Accompanying Field Location Photo / Clue Reference */}
                            <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                              <div className="flex items-center justify-between text-xs font-mono font-bold text-earthy-olive/60 uppercase tracking-wider px-1">
                                <span className="flex items-center gap-1.5 text-earthy-clay">
                                  <MapPin className="w-3.5 h-3.5" /> Field Location & Hiding Spot Record
                                </span>
                                <span className="hidden sm:inline">Click to enlarge</span>
                              </div>

                              {huntStudies.map((item, hIdx) => {
                                const overallIndex = (post.placeholders.length > 2 ? 2 : 1) + hIdx;
                                return (
                                  <div
                                    key={hIdx}
                                    onClick={() => item.mockUrl && openLightbox(post.id, overallIndex)}
                                    className={`group relative ${
                                      item.mockUrl 
                                        ? 'bg-white shadow-md border border-earthy-olive/15 cursor-pointer hover:shadow-xl hover:-translate-y-1' 
                                        : 'bg-[#FDFCF8] border-2 border-dashed border-earthy-olive/20'
                                    } rounded-3xl hover:border-earthy-clay/50 p-3 transition-all h-full`}
                                  >
                                    <div className="w-full h-72 sm:h-80 md:h-[360px] rounded-2xl bg-earthy-sand/15 border border-earthy-olive/10 flex flex-col items-center justify-center text-center relative overflow-hidden group-hover:bg-earthy-sand/25 transition-colors">
                                      {item.mockUrl ? (
                                        <>
                                          <img 
                                            src={item.mockUrl} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                            referrerPolicy="no-referrer" 
                                          />
                                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-xl bg-white/95 text-earthy-olive font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg scale-95 group-hover:scale-100">
                                              <Maximize2 className="w-3.5 h-3.5 text-earthy-clay" /> Enlarge
                                            </span>
                                          </div>
                                        </>
                                      ) : (
                                        <div className="space-y-3 flex flex-col items-center justify-center p-6">
                                          <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm border border-earthy-olive/10 flex items-center justify-center text-earthy-clay group-hover:scale-110 transition-transform">
                                            <MapPin className="w-6 h-6" />
                                          </div>
                                          <div>
                                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-earthy-olive/70 block">
                                              {item.title}
                                            </span>
                                            <span className="text-[0.65rem] font-sans font-bold text-earthy-clay block mt-0.5">
                                              Location Blueprint • Ready for Photo
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-earthy-olive/10 text-[0.6rem] font-mono font-black text-earthy-olive uppercase tracking-wider shadow-xs">
                                        Fig. {idx + 1}.{overallIndex + 1}
                                      </div>
                                      {item.mockUrl && (
                                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-[0.6rem] font-mono font-bold text-white uppercase tracking-wider shadow-xs">
                                          Site Reference
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxState && (lightboxState.url || (activeLightboxPost && activeLightboxItem)) && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div 
            className="flex items-center justify-between gap-4 text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-white/10 rounded-lg font-mono text-xs font-bold text-earthy-sand">
                {lightboxState.url ? 'Overview' : `Fig. ${activeLightboxItem?.title}`}
              </span>
              <span className="text-sm font-bold text-white/80 hidden sm:inline">
                {lightboxState.title || activeLightboxPost?.title}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {activeLightboxPost && typeof lightboxState.index === 'number' && (
                <span className="text-xs font-mono text-white/60">
                  {lightboxState.index + 1} of {activeLightboxPost.placeholders.length}
                </span>
              )}
              <button 
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image with Prev / Next buttons */}
          <div 
            className="relative flex-1 flex items-center justify-center p-2 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {activeLightboxPost && activeLightboxPost.placeholders.length > 1 && (
              <button 
                onClick={prevLightboxImage}
                className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                title="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <img 
              src={lightboxState.url || activeLightboxItem?.mockUrl} 
              alt={lightboxState.title || activeLightboxItem?.title || "Enlarged preview"} 
              className="max-h-[72vh] max-w-[92vw] object-contain rounded-2xl shadow-2xl transition-all"
              referrerPolicy="no-referrer"
            />

            {activeLightboxPost && activeLightboxPost.placeholders.length > 1 && (
              <button 
                onClick={nextLightboxImage}
                className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                title="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Caption Bar */}
          <div 
            className="max-w-3xl mx-auto text-center space-y-1 p-4 bg-white/5 rounded-2xl border border-white/10 text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-lg font-black text-white">
              {lightboxState.title || activeLightboxItem?.title}
            </h4>
            <p className="text-xs sm:text-sm font-medium text-white/80 leading-relaxed">
              {lightboxState.caption || activeLightboxItem?.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

