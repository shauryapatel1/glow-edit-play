
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
            {/* Hero Section with Floating Objects */}
            <HeroWithObjects 
              title="Your Gateway to Viral Video Stardom"
              subtitle="Make your short videos pop with AI-powered editing"
              ctaText="Start Free Trial"
              secondaryCtaText="Watch Demo"
            />
            
            {/* Features Section */}
            <FeaturesSection />
            
            {/* How It Works Section with Floating Objects */}
            <div className="relative overflow-hidden">
              {/* Add FloatingObjects in How It Works section */}
              <div className="absolute inset-0 pointer-events-none">
                <FloatingObjects 
                  objectCount={8}
                  colors={["#EA384C", "#FEC6A1", "#D946EF"]}
                  shapes={['cube', 'cone']}
                  rotationSpeed={0.001}
                  floatSpeed={0.2}
                  minSize={0.5}
                  maxSize={1.2}
                  className="opacity-30"
                />
              </div>
              
              <HowItWorksSection />
            </div>
            
            {/* Testimonials Section */}
            <TestimonialsSection />
            
            {/* CTA Section */}
            <CtaSection />
          </main>
          
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
