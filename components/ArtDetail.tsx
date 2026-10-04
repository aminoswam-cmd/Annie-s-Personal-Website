import React, { useState, useEffect } from 'react';
import { ArrowLeft, Palette, Award, Box, ChevronLeft, ChevronRight, X, Maximize2, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ArtPiece {
  title: string;
  description: string;
  image: string;
  images: string[];
}

const ALL_SKETCHES = [
  "https://i.ibb.co/1JwpmbXM/sketches-1-page-0001.jpg",
  "https://i.ibb.co/8LGQDr3H/sketches-1-page-0002.jpg",
  "https://i.ibb.co/B5Zrmn4r/sketches-1-page-0003.jpg",
  "https://i.ibb.co/Pv560RX4/sketches-1-page-0004.jpg",
  "https://i.ibb.co/jZzSKMSv/sketches-1-page-0005.jpg",
  "https://i.ibb.co/XZ6NVY87/sketches-1-page-0006.jpg",
  "https://i.ibb.co/rGZHqJkP/sketches-1-page-0007.jpg",
  "https://i.ibb.co/Ng3t1zj3/sketches-1-page-0008.jpg",
  "https://i.ibb.co/Hfb6MspT/sketches-1-page-0009.jpg",
  "https://i.ibb.co/kgZ1wLF4/sketches-1-page-0010.jpg",
  "https://i.ibb.co/wZRQxTYt/sketches-1-page-0011.jpg",
  "https://i.ibb.co/99n8SnMy/sketches-1-page-0012.jpg",
  "https://i.ibb.co/9k90bp4Y/sketches-1-page-0013.jpg",
  "https://i.ibb.co/pB0T7bLV/sketches-1-page-0014.jpg",
  "https://i.ibb.co/qL4mdx4G/sketches-1-page-0015.jpg",
  "https://i.ibb.co/rfbb9Gs5/sketches-1-page-0016.jpg",
  "https://i.ibb.co/CK6ryr1m/sketches-1-page-0017.jpg",
  "https://i.ibb.co/CKzMJBmR/sketches-1-page-0018.jpg",
  "https://i.ibb.co/PsB36DTt/sketches-1-page-0019.jpg",
  "https://i.ibb.co/rKf9Yq0t/sketches-1-page-0020.jpg",
  "https://i.ibb.co/chVbQkK9/sketches-1-page-0021.jpg",
  "https://i.ibb.co/S74mqgJM/sketches-1-page-0022.jpg",
  "https://i.ibb.co/n8nXjWb6/sketches-1-page-0023.jpg",
  "https://i.ibb.co/4nDx6wJR/sketches-1-page-0024.jpg",
  "https://i.ibb.co/j9mZKXBQ/sketches-1-page-0025.jpg",
  "https://i.ibb.co/35sjZ4C7/sketches-1-page-0026.jpg",
  "https://i.ibb.co/dwMK1zHg/sketches-1-page-0027.jpg",
  "https://i.ibb.co/Nnfx7wgL/sketches-1-page-0028.jpg",
  "https://i.ibb.co/GfS28RYf/sketches-1-page-0029.jpg",
  "https://i.ibb.co/4ZZRjR8j/sketches-1-page-0030.jpg",
  "https://i.ibb.co/Dg6ZFXHB/sketches-2-page-0001.jpg",
  "https://i.ibb.co/WWKsL7xh/sketches-2-page-0002.jpg",
  "https://i.ibb.co/V0pRQwmt/sketches-2-page-0003.jpg",
  "https://i.ibb.co/zWCcZK48/sketches-2-page-0004.jpg",
  "https://i.ibb.co/TBW0HGJV/sketches-2-page-0005.jpg",
  "https://i.ibb.co/mV4RJz0f/sketches-2-page-0006.jpg",
  "https://i.ibb.co/rDmNb6h/sketches-2-page-0007.jpg",
  "https://i.ibb.co/FLssx3xk/sketches-2-page-0008.jpg",
  "https://i.ibb.co/601ZzmBx/sketches-2-page-0009.jpg",
  "https://i.ibb.co/tTvSF1X0/sketches-2-page-0010.jpg",
  "https://i.ibb.co/dsdVhnxc/sketches-2-page-0011.jpg",
  "https://i.ibb.co/mV6hV7qM/sketches-2-page-0012.jpg",
  "https://i.ibb.co/wZ4bk1qf/sketches-2-page-0013.jpg",
  "https://i.ibb.co/XkLQvVdF/sketches-2-page-0014.jpg",
  "https://i.ibb.co/wht0S00w/sketches-2-page-0015.jpg",
  "https://i.ibb.co/QFktm2qq/sketches-2-page-0016.jpg",
  "https://i.ibb.co/N6t7nLxV/sketches-2-page-0017.jpg",
  "https://i.ibb.co/mC44ZWBZ/sketches-2-page-0018.jpg",
  "https://i.ibb.co/23cfTk6B/sketches-2-page-0019.jpg",
  "https://i.ibb.co/ds88T2j4/sketches-2-page-0020.jpg",
  "https://i.ibb.co/4Rr7N4Pc/sketches-2-page-0021.jpg",
];

interface ArtDetailProps {
  onBack: () => void;
}

const ART_PIECES = {
  threeD: [
    {
      title: "The Cross of Three",
      description: "Inspired by archival photos of the sacred Amne Machin mountain taken by local volunteers in the 1900s, this series of four paper sculptures documents the local landscape, capturing the beauty and vulnerability of a place revered by both humans and wildlife.",
      image: "https://i.ibb.co/QjmL95NL/annie-15p-page-0007.jpg",
      images: [
        "https://i.ibb.co/QjmL95NL/annie-15p-page-0007.jpg",
        "https://i.ibb.co/BHYXMz2m/AP-3-D-Arts-and-Design-copy.png",
        "https://i.ibb.co/9d67hzW/annie-15p-page-0008-copy.jpg",
        "https://i.ibb.co/wZdNcq72/annie-15p-page-0009-copy.jpg",
        "https://i.ibb.co/DDwJQDHW/annie-15p-page-0010-copy.jpg"
      ]
    },
    {
      title: "To the Holy Land",
      description: "Inspired by the Tibetan ritual of 'long kowtow', this architectural sculpture transforms spiritual devotion into a surreal pilgrimage path. Symbolic of inner faith and endurance, the piece evokes a Tibetan mandala-like spiritual field, guiding the eye through a space where suffering and transcendence coexist.",
      image: "https://i.ibb.co/RkrdQhRM/annie-15p-page-0013.jpg",
      images: [
        "https://i.ibb.co/RkrdQhRM/annie-15p-page-0013.jpg",
        "https://i.ibb.co/TM90RVTH/annie-15p-page-0012-copy.jpg",
        "https://i.ibb.co/8Lx21cMg/annie-15p-page-0014-copy.jpg",
        "https://i.ibb.co/LXdgpt0m/annie-15p-page-0015-copy.jpg"
      ]
    },
    {
      title: "Cancer Garden",
      description: "The heart, rarely affected by cancer, represents innocence and vitality. This piece reflects both the suffering and strength of those affected, turning a symbol of fragility into resilience and renewal.",
      image: "https://i.ibb.co/MkKJ95PZ/annie-15p-page-0001.jpg",
      images: [
        "https://i.ibb.co/MkKJ95PZ/annie-15p-page-0001.jpg",
        "https://i.ibb.co/g0K8WC9/annie-15p-page-0002-copy.jpg",
        "https://i.ibb.co/Kjhr3q14/annie-15p-page-0003-copy.jpg",
        "https://i.ibb.co/mVx1KKvW/annie-15p-page-0004-copy.jpg",
        "https://i.ibb.co/4ZZYB0jL/annie-15p-page-0005-copy.jpg",
        "https://i.ibb.co/C33KzrYL/annie-15p-page-0006-copy.jpg"
      ]
    },
    {
      title: "Perpetual Return",
      description: "A white spider lily emerges from human vertebrae, encircled by orbital bamboo hoops and prayer-flag mesh. Rooted in Buddhist concepts of impermanence, the piece frames physical mortality not as an end, but as a continuous cycle of rebirth within samsara.",
      image: "https://i.ibb.co/dJ0MKBJb/img147.jpg",
      images: [
        "https://i.ibb.co/dJ0MKBJb/img147.jpg",
        "https://i.ibb.co/GQkTsDCZ/img129.jpg",
        "https://i.ibb.co/6ccpsfvf/img135.jpg",
        "https://i.ibb.co/5gKFhdMq/img137.jpg",
        "https://i.ibb.co/VYf1xK0k/img143.jpg",
        "https://i.ibb.co/0pVwhRfp/img145.jpg"
      ]
    },
    {
      title: "rtsa",
      description: "\"rtsa\" is the Tibetan word for the subtle energy channels that flow within our body. This layered piece captures the intricate network of rtsa described in traditional Tibetan medicine, visualizing how meditative stillness harmonizes the subtle body's internal landscape.",
      image: "https://i.ibb.co/b5DBDL5X/img151.jpg",
      images: [
        "https://i.ibb.co/b5DBDL5X/img151.jpg",
        "https://i.ibb.co/RZBDMfm/img155.jpg",
        "https://i.ibb.co/C5qRW2yM/img157.jpg",
        "https://i.ibb.co/XfBJJYFw/img159.jpg",
        "https://i.ibb.co/27TYzFmD/img161.jpg"
      ]
    },
    {
      title: "Pillar",
      description: "Through the blending of different cultural elements, such as Totem poles, Tibetan masks, Balinese demon, Daruma Doll, and Maneki Neko, I aimed to erase the borders and conflict between countries.",
      image: "https://i.ibb.co/7JjqQby1/Weixin-Image-20260424094212-298-6.jpg",
      images: [
        "https://i.ibb.co/7JjqQby1/Weixin-Image-20260424094212-298-6.jpg",
        "https://i.ibb.co/mVqXwLL9/Weixin-Image-20260424094226-302-6.jpg",
        "https://i.ibb.co/TJDBBC5/Weixin-Image-20260424094237-304-6.jpg",
        "https://i.ibb.co/S2FYtq4/Weixin-Image-20260424094247-306-6.jpg"

      ]
    },
    {
      title: "Red Bull",
      description: "I emulated the Torito de Pucara from southern Peru to convey a sense of luck and fortune, represented by culture, to the audiences, exploring the theme of fortune and luck. A pair was made originally, but unfortunately one of them didn't make it out of the kiln, thus the one left is a 'miracle' of good luck.",
      image: "https://i.ibb.co/W4STPH4C/Weixin-Image-20260424094256-308-6.jpg",
      images: [
        "https://i.ibb.co/W4STPH4C/Weixin-Image-20260424094256-308-6.jpg",
        "https://i.ibb.co/QjfFymrb/Weixin-Image-20260424094252-307-6.jpg",
        "https://i.ibb.co/s91wgBXB/Weixin-Image-20260424094300-309-6.jpg",
        "https://i.ibb.co/S7rKzLxd/Weixin-Image-20260424095155-314-6.jpg"
      ]
    },
    {
      title: "Soldier Return, Soldier Leave",
      description: "Inspired by the theme, Daruma Doll, that guided me throughout winter term, I explored surrealism using lightbulbs and different objects to emulate a human figure. Originally, three lightbulbs were painted, but one of them shattered when assembling, echoing the title.",
      image: "https://i.ibb.co/67RWBFCF/IMG-4999.jpg",
      images: [
        "https://i.ibb.co/67RWBFCF/IMG-4999.jpg",
        "https://i.ibb.co/9kbRH9H3/IMG-4993.jpg",
        "https://i.ibb.co/ymsrM6M7/IMG-5003.jpg"
      ]
    },
    {
      title: "Possession",
      description: "This piece is inspired by a coin, which is a common possession that often symbolizes luck, like a lucky penny. There is also a saying in Chinese where you can turn your luck, so I added the ancient Chinese characters of luck on two sides of the coin so when you turn and flip it, it brings good luck.",
      image: "https://i.ibb.co/VYwykPvm/possession1.png",
      images: [
        "https://i.ibb.co/VYwykPvm/possession1.png",
        "https://i.ibb.co/DDXCbzC2/possession2.png"
      ]
    }
  ],
  twoD: [
    {
      title: "Exorcism 捉妖斩鬼",
      description: "This piece is inspired by the door gods as a part of Chinese culture. They protect your house from evil spirits and bring the fortune in. I also incorporated Tibetan patterns onto their clothings as the cultural exploration aspect of my theme.",
      image: "https://i.ibb.co/8DjVrnQK/exorcism.png",
      images: [
        "https://i.ibb.co/8DjVrnQK/exorcism.png"
      ]
    },
    {
      title: "Life of a Workman",
      description: "Still chiarascuro with white charcoal and chalk on black paper.",
      image: "https://i.ibb.co/rG16PnSL/vignette.jpg",
      images: [
        "https://i.ibb.co/rG16PnSL/vignette.jpg"
      ]
    },
    {
      title: "Micro to Macro",
      description: "I created this piece using watercolor and meticulous observation of the small jewelry.",
      image: "https://i.ibb.co/6Lj8LZ2/micro-to-macro.jpg",
      images: [
        "https://i.ibb.co/6Lj8LZ2/micro-to-macro.jpg"
      ]
    },
    {
      title: "Crossing",
      description: "Referencing traditional dragon pattern of ancient Chinese bronze artifacts, this wooden carving and printing represents power and fortune.",
      image: "https://i.ibb.co/27g4LpwW/Cross-wood-carving.jpg",
      images: [
        "https://i.ibb.co/27g4LpwW/Cross-wood-carving.jpg",
        "https://i.ibb.co/YFS7C0Mk/Screenshot-2026-06-21-at-12-41-03.png"
      ]
    },
    {
      title: "Face to Face",
      description: "Inspired by the Daruma doll in Japanese culture, I created this diptych in the style of Abstract Expressionism.",
      image: "https://i.ibb.co/d49SZ9r4/Screenshot-2026-06-22-at-12-19-35.png",
      images: [
        "https://i.ibb.co/d49SZ9r4/Screenshot-2026-06-22-at-12-19-35.png",
        "https://i.ibb.co/Yg1BSTh/Screenshot-2026-06-22-at-12-19-44.png"
      ]
    },
    {
      title: "Crossing Life",
      description: "This self-portrait is a reference to one of my dreams where I met my childhood self.",
      image: "https://i.ibb.co/v48tNVxJ/crossing-life.png",
      images: [
        "https://i.ibb.co/v48tNVxJ/crossing-life.png"
      ]
    },
    {
      title: "Duel",
      description: "Two samurais are sword fighting on unicycles.",
      image: "https://i.ibb.co/9HVZXGvw/duel.png",
      images: [
        "https://i.ibb.co/9HVZXGvw/duel.png"
      ]
    }
  ],
  awards: [
    {
      title: "Scholastic Art & Writing Awards Gold Medal",
      info: "National Award for Sculpture ('Cancer Garden'), 2026",
      icon: Award
    },
    {
      title: "Scholastic Art & Writing Awards Silver Key",
      info: "Regional Award for Drawing ('Life of a Workman'), 2026",
      icon: Award
    },
    {
      title: "New York Life Award",
      info: "Special Recognition for works exploring grief and bereavement, 2026",
      icon: Award
    }
  ]
};

export const ArtDetail: React.FC<ArtDetailProps> = ({ onBack }) => {
  const [activePiece, setActivePiece] = useState<ArtPiece | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedSketchIdx, setSelectedSketchIdx] = useState<number | null>(null);

  // Keyboard navigation for full size view & sketches
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePiece) {
        if (e.key === 'ArrowLeft') {
          setActiveImageIndex((prev) => (prev === 0 ? activePiece.images.length - 1 : prev - 1));
        } else if (e.key === 'ArrowRight') {
          setActiveImageIndex((prev) => (prev === activePiece.images.length - 1 ? 0 : prev + 1));
        } else if (e.key === 'Escape') {
          setActivePiece(null);
        }
      } else if (selectedSketchIdx !== null) {
        if (e.key === 'ArrowLeft') {
          setSelectedSketchIdx((prev) => (prev === null || prev === 0 ? ALL_SKETCHES.length - 1 : prev - 1));
        } else if (e.key === 'ArrowRight') {
          setSelectedSketchIdx((prev) => (prev === null || prev === ALL_SKETCHES.length - 1 ? 0 : prev + 1));
        } else if (e.key === 'Escape') {
          setSelectedSketchIdx(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePiece, selectedSketchIdx]);

  // Handle body locking
  useEffect(() => {
    if (activePiece || selectedSketchIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activePiece, selectedSketchIdx]);

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activePiece) return;
    setActiveImageIndex((prev) => (prev === 0 ? activePiece.images.length - 1 : prev - 1));
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activePiece) return;
    setActiveImageIndex((prev) => (prev === activePiece.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF8]/95 backdrop-blur-md py-6 px-6 border-b border-earthy-olive/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            id="back-home-btn"
            className="flex items-center gap-2 text-earthy-olive font-black uppercase tracking-widest text-[0.65rem] hover:text-earthy-clay transition-all group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to portfolio
          </button>
          <div className="text-sm font-black uppercase tracking-[0.3em] text-earthy-olive">Visual Arts</div>
        </div>
      </nav>

      <div className="pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="mb-20 space-y-4 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black text-earthy-olive tracking-tighter">Art</h1>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-earthy-clay" />
              <p className="text-earthy-sand font-black uppercase tracking-[0.4em] text-xs">Sculpture, Drawing & Creative Gallery</p>
            </div>
          </div>

          {/* 3D Pieces Section */}
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-earthy-clay/10 rounded-2xl flex items-center justify-center">
                <Box className="w-6 h-6 text-earthy-clay" />
              </div>
              <h2 className="text-4xl font-black text-earthy-olive tracking-tight">3D Pieces</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ART_PIECES.threeD.map((piece, i) => (
                <div 
                  key={i} 
                  className="group cursor-pointer"
                  onClick={() => {
                    setActivePiece(piece);
                    setActiveImageIndex(0);
                  }}
                >
                  <div className="aspect-[4/5] bg-earthy-cream rounded-[2rem] overflow-hidden mb-6 relative shadow-md group-hover:shadow-xl transition-all duration-500">
                    <img 
                      src={piece.image} 
                      alt={piece.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-earthy-olive/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 duration-300">
                      <div className="px-5 py-2.5 bg-white/95 backdrop-blur-md rounded-full text-[0.65rem] font-black text-earthy-olive uppercase tracking-[0.2em] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                        <Maximize2 className="w-3.5 h-3.5 text-earthy-clay animate-pulse" />
                        Explore & Angles (3D)
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-earthy-olive mb-2 group-hover:text-earthy-clay transition-colors">{piece.title}</h3>
                  <p className="text-earthy-sand text-sm font-medium leading-relaxed">{piece.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2D Pieces Section */}
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-earthy-sage/10 rounded-2xl flex items-center justify-center">
                <Palette className="w-6 h-6 text-earthy-sage" />
              </div>
              <h2 className="text-4xl font-black text-earthy-olive tracking-tight">2D Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {ART_PIECES.twoD.map((piece, i) => (
                <div 
                  key={i} 
                  className="group cursor-pointer"
                  onClick={() => {
                    setActivePiece(piece);
                    setActiveImageIndex(0);
                  }}
                >
                  <div className="aspect-video bg-earthy-cream rounded-[2rem] overflow-hidden mb-8 shadow-md hover:shadow-xl transition-all duration-500 relative">
                    <img 
                      src={piece.image} 
                      alt={piece.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-earthy-olive/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 duration-300">
                      <div className="px-5 py-2.5 bg-white/95 backdrop-blur-md rounded-full text-[0.65rem] font-black text-earthy-olive uppercase tracking-[0.2em] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                        <Maximize2 className="w-3.5 h-3.5 text-earthy-clay animate-pulse" />
                        Explore & Detail
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-earthy-olive mb-3 group-hover:text-earthy-clay transition-colors">{piece.title}</h3>
                  <p className="text-earthy-sand text-lg font-medium leading-relaxed max-w-xl">{piece.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sketches Section */}
          <section id="sketches" className="mb-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-earthy-clay/10 rounded-2xl flex items-center justify-center">
                <Feather className="w-6 h-6 text-earthy-clay" />
              </div>
              <h2 className="text-4xl font-black text-earthy-olive tracking-tight">Sketches</h2>
            </div>
            
            <p className="text-lg md:text-xl font-serif text-earthy-olive/90 leading-relaxed max-w-4xl italic font-bold mb-10">
              "My sketchbook follows me to wherever I go, to every corner of the world. By flipping through it, you can follow my journey from the Three River Source to on top of a tree to a mountain in Yunnan."
            </p>

            {/* Grid of 51 sketches */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
              {ALL_SKETCHES.map((imgUrl, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.015, 0.3) }}
                  onClick={() => setSelectedSketchIdx(idx)}
                  className="group relative aspect-[3/4] bg-earthy-cream rounded-2xl overflow-hidden border border-earthy-olive/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={imgUrl}
                    alt={`Sketch ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Number overlay always visible in corner */}
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[0.55rem] font-black text-earthy-clay tracking-wider shadow-sm z-10">
                    #{String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Hover dark gradient overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-3.5 h-3.5 text-earthy-clay" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section>
            <div className="bg-earthy-olive text-white p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-12">
                    <Award className="w-10 h-10 text-earthy-sage" />
                    <h2 className="text-4xl font-black tracking-tight">Recognitions & Awards</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {ART_PIECES.awards.map((award, i) => {
                      const IconComponent = award.icon;
                      return (
                        <div key={i} className="space-y-4">
                          <div className="h-0.5 w-12 bg-earthy-sage mb-6" />
                          <h3 className="text-xl font-black leading-tight">{award.title}</h3>
                          <p className="text-white/60 text-sm font-medium uppercase tracking-widest">{award.info}</p>
                        </div>
                      );
                    })}
                  </div>
               </div>
               
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-earthy-sage/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-[100px]" />
            </div>
          </section>
        </div>
      </div>

      {/* Interactive Museum Lightbox / Full Size Viewer */}
      <AnimatePresence>
        {activePiece && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col lg:flex-row overflow-hidden"
          >
            {/* Full-size Image Frame Container */}
            <div className="relative flex-1 bg-black/40 flex items-center justify-center p-4 md:p-12 h-[60vh] lg:h-full select-none">
              
              {/* Navigation Arrows */}
              {activePiece.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 md:left-8 z-[110] w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-95 group"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 md:right-8 z-[110] w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-95 group"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </>
              )}

              {/* Picture is shown in full size, unlimited by crop frame */}
              <div className="relative max-w-full max-h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={activePiece.images[activeImageIndex]}
                    alt={`${activePiece.title} - view ${activeImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="max-w-full max-h-[50vh] md:max-h-[75vh] lg:max-h-[85vh] object-contain rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Minimalist image indicator tag */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white/70 text-[0.7rem] font-sans font-medium">
                  View {activeImageIndex + 1} of {activePiece.images.length}
                </div>
              </div>

              {/* Close Button Mobile (Hidden on desktop sidebar) */}
              <button 
                onClick={() => setActivePiece(null)}
                className="absolute top-4 right-4 z-[110] lg:hidden w-10 h-10 bg-white/15 text-white rounded-full flex items-center justify-center backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Museum Exhibition Information Sidebar */}
            <div className="w-full lg:w-[420px] bg-[#121210] border-t lg:border-t-0 lg:border-l border-white/10 p-6 md:p-8 flex flex-col justify-between overflow-y-auto h-[40vh] lg:h-full text-white">
              
              <div className="space-y-6">
                <div className="hidden lg:flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-earthy-sand">Interactive Portfolio</span>
                  <button 
                    onClick={() => setActivePiece(null)}
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 hover:text-white text-white/70 rounded-full flex items-center justify-center transition-all"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                    {activePiece.title}
                  </h2>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed font-sans font-medium">
                    {activePiece.description}
                  </p>
                </div>
              </div>

              {/* Multi-angle & gallery selection scrollbar */}
              <div className="my-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/40">Select Angle / Picture</span>
                  <span className="text-xs font-mono text-white/50">{activePiece.images.length} views</span>
                </div>

                {/* Thumb Track: click to view immediately, scroll like a carousel gallery */}
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                  {activePiece.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx 
                          ? 'border-earthy-clay scale-95 ring-4 ring-earthy-clay/20' 
                          : 'border-white/10 hover:border-white/30 hover:scale-102'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt="" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      
                      {activeImageIndex === idx && (
                        <div className="absolute inset-0 bg-earthy-clay/20 flex items-center justify-center">
                          <span className="w-2.5 h-2.5 bg-earthy-clay rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-[0.65rem] text-white/30 text-center italic">
                  Tip: Use Left & Right keyboard arrows to browse angles
                </p>
              </div>

              {/* Credit Details */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                <span>By Annie Wu</span>
                <span>© 2026 Visual Arts</span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox for Sketches */}
      <AnimatePresence>
        {selectedSketchIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSketchIdx(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            {/* Top Bar */}
            <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-[110] text-white">
              <span className="text-xs font-mono tracking-widest text-white/60">
                SKETCH {selectedSketchIdx + 1} OF {ALL_SKETCHES.length}
              </span>
              <button 
                onClick={() => setSelectedSketchIdx(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedSketchIdx((prev) => (prev === null || prev === 0 ? ALL_SKETCHES.length - 1 : prev - 1)); 
              }}
              className="absolute left-4 md:left-8 z-[110] w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 hover:bg-white/15 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-95 group"
              aria-label="Previous sketch"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedSketchIdx((prev) => (prev === null || prev === ALL_SKETCHES.length - 1 ? 0 : prev + 1)); 
              }}
              className="absolute right-4 md:right-8 z-[110] w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 hover:bg-white/15 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-95 group"
              aria-label="Next sketch"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Immersive Image Viewer */}
            <div 
              className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedSketchIdx}
                  src={ALL_SKETCHES[selectedSketchIdx]}
                  alt={`Sketchbook View ${selectedSketchIdx + 1}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>

            {/* Bottom Keyboard Hint */}
            <div className="absolute bottom-6 text-white/40 text-[0.65rem] tracking-wider uppercase font-mono">
              Use Left & Right keyboard arrows to browse • Click outside or Esc to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
