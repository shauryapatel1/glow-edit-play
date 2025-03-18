
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroWithObjects } from '@/components/ui-sections/HeroWithObjects';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { GlowingOrb } from '@/components/effects/GlowingOrb';
import { FloatingObjects } from '@/components/effects/FloatingObjects';
import { InteractiveScene } from '@/components/effects/InteractiveScene';
import { ParticleField } from '@/components/effects/ParticleField';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-background dark:bg-background z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-24 h-24"
          >
            <div className="absolute inset-0">
              <GlowingOrb size={40} color="#F97316" intensity={2} />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-2 border-sunset-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex flex-col bg-background"
        >
          <Navbar />
          
          <main className="flex-1">
            {/* Hero Section with Floating Objects and Interactive Particles */}
            <div className="relative">
              <HeroWithObjects 
                title="Your Gateway to Viral Video Stardom"
                subtitle="Make your short videos pop with AI-powered editing"
                ctaText="Start Free Trial"
                secondaryCtaText="Watch Demo"
              />
              
              {/* Add interactive 3D scene behind the hero */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <InteractiveScene />
              </div>
            </div>
            
            {/* Features Section with Particle Background */}
            <div className="relative">
              <div className="absolute inset-0 z-0">
                <ParticleField 
                  color="#00E5FF" 
                  density={30}
                  speed={0.3}
                  className="opacity-25"
                />
              </div>
              <FeaturesSection />
            </div>
            
            {/* How It Works Section with enhanced Floating Objects */}
            <div className="relative overflow-hidden">
              {/* Enhance FloatingObjects in How It Works section */}
              <div className="absolute inset-0 pointer-events-none">
                <FloatingObjects 
                  objectCount={12}
                  colors={["#00E5FF", "#FF3366", "#76FF03"]}
                  shapes={['cube', 'cone', 'torus', 'sphere']}
                  rotationSpeed={0.002}
                  floatSpeed={0.4}
                  minSize={0.5}
                  maxSize={1.5}
                  className="opacity-40"
                />
              </div>
              
              <HowItWorksSection />
            </div>
            
            {/* Testimonials Section with glowing orbs */}
            <div className="relative">
              <div className="absolute top-1/4 left-1/4 opacity-40 pointer-events-none">
                <GlowingOrb size={60} color="#00E5FF" intensity={1.2} position={[0, 0, -50]} />
              </div>
              <div className="absolute bottom-1/4 right-1/4 opacity-40 pointer-events-none">
                <GlowingOrb size={80} color="#FF3366" intensity={1} position={[0, 0, -70]} />
              </div>
              <TestimonialsSection />
            </div>
            
            {/* CTA Section with enhanced background */}
            <CtaSection />
          </main>
          
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
