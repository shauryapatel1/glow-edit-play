
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroWithObjects } from '@/components/ui-sections/HeroWithObjects';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaSection } from '@/components/sections/CtaSection';

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
          className="fixed inset-0 flex items-center justify-center bg-background z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-24 h-24"
          >
            <div className="w-16 h-16 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-primary font-medium text-sm">Load</span>
            </div>
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
            {/* Hero Section */}
            <div className="relative">
              <HeroWithObjects 
                title="Your Gateway to Video Excellence"
                subtitle="Professional video editing made simple"
                ctaText="Start Free Trial"
                secondaryCtaText="Watch Demo"
              />
            </div>
            
            {/* Features Section */}
            <div className="relative">
              <FeaturesSection />
            </div>
            
            {/* How It Works Section */}
            <div className="relative overflow-hidden">
              <HowItWorksSection />
            </div>
            
            {/* Testimonials Section */}
            <div className="relative">
              <TestimonialsSection />
            </div>
            
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
