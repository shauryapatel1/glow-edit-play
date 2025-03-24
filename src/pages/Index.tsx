
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroWithObjects } from '@/components/ui-sections/HeroWithObjects';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { PageLoader } from '@/components/ui/page-loader';
import { PageTransition } from '@/components/ui/page-transition';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <PageLoader key="loader" text="Initializing GlowUp" />
      ) : (
        <PageTransition key="content">
          <div className="min-h-screen flex flex-col bg-background">
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
          </div>
        </PageTransition>
      )}
    </AnimatePresence>
  );
};

export default Index;
