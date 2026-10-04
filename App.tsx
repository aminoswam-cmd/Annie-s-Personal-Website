
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FieldStudies } from './components/FieldStudies';
import { FieldStudyEcologyDetail } from './components/FieldStudyEcologyDetail';
import { FieldStudyHealthDetail } from './components/FieldStudyHealthDetail';
import { FieldStudyBuddhismDetail } from './components/FieldStudyBuddhismDetail';
import { Projects } from './components/Projects';
import { Hobbies } from './components/Hobbies';
import { Leaderships } from './components/Leaderships';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { ExoskeletonDetail } from './components/ExoskeletonDetail';
import { RockClimbingDetail } from './components/RockClimbingDetail';
import { HikingDetail } from './components/HikingDetail';
import { SnowboardingDetail } from './components/SnowboardingDetail';
import { GuzhengDetail } from './components/GuzhengDetail';
import { ArtDetail } from './components/ArtDetail';
import { TibetanComparativeDetail } from './components/TibetanComparativeDetail';
import { RollingNestDetail } from './components/RollingNestDetail';
import { CollectThemAllDetail } from './components/CollectThemAllDetail';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);
  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  // Handle instant scroll behavior on navigation
  useLayoutEffect(() => {
    if (activeDetail) {
      // Entering a detail page - Jump to top instantly
      window.scrollTo(0, 0);
    } else {
      // Returning to home page - Jump to saved position instantly
      window.scrollTo(0, savedScrollPosition);
    }
  }, [activeDetail]);

  useEffect(() => {
    if (activeDetail) return; // Disable scroll detection on detail page

    const handleScroll = () => {
      const sections = Object.values(Section);
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeDetail]);

  const handleOpenDetail = (id: string) => {
    setSavedScrollPosition(window.scrollY);
    setActiveDetail(id);
  };

  const handleBackHome = () => {
    setActiveDetail(null);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeDetail || 'home'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {activeDetail === 'field-study-ecology' && <FieldStudyEcologyDetail onBack={handleBackHome} />}
        {activeDetail === 'field-study-health' && <FieldStudyHealthDetail onBack={handleBackHome} />}
        {activeDetail === 'field-study-buddhism' && <FieldStudyBuddhismDetail onBack={handleBackHome} />}
        {activeDetail === 'tibetan-comparative' && <TibetanComparativeDetail onBack={handleBackHome} />}
        {activeDetail === 'three-rivers' && <FieldStudyEcologyDetail onBack={handleBackHome} />}
        {activeDetail === 'liver-cancer' && <ProjectDetail onBack={handleBackHome} />}
        {activeDetail === 'exoskeleton' && <ExoskeletonDetail onBack={handleBackHome} />}
        {activeDetail === 'climbing' && <RockClimbingDetail onBack={handleBackHome} />}
        {activeDetail === 'rolling-nest' && <RollingNestDetail onBack={handleBackHome} />}
        {activeDetail === 'collect-them-all' && <CollectThemAllDetail onBack={handleBackHome} />}
        {activeDetail === 'hiking' && <HikingDetail onBack={handleBackHome} />}
        {activeDetail === 'snowboarding' && <SnowboardingDetail onBack={handleBackHome} />}
        {activeDetail === 'guzheng' && <GuzhengDetail onBack={handleBackHome} />}
        {activeDetail === 'art' && <ArtDetail onBack={handleBackHome} />}
        
        {!activeDetail && (
          <div className="relative">
            <Navbar activeSection={activeSection} />
            <main>
              <Hero />
              <About />
              <FieldStudies onFieldStudyClick={handleOpenDetail} />
              <Projects onProjectClick={handleOpenDetail} />
              <Hobbies onHobbyClick={handleOpenDetail} />
              <Leaderships />
            </main>
            <Footer />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
