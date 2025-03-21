
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageLoader } from '@/components/ui/page-loader';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <PageLoader text="Loading About" />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen flex flex-col bg-background"
        >
          <Navbar />
          
          <main className="flex-1 container mx-auto px-4 py-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold mb-6"
            >
              About GlowUp
            </motion.h1>
            
            <div className="prose prose-invert max-w-none">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg mb-6"
              >
                GlowUp is a cutting-edge AI-powered video editing platform designed to help creators, marketers, and businesses
                transform their video content effortlessly.
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-semibold mt-8 mb-4"
              >
                Our Mission
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                Our mission is to democratize professional video editing by making it accessible to everyone, regardless of
                their technical expertise or budget. We believe that great content shouldn't be limited by complex tools or
                expensive software.
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-semibold mt-8 mb-4"
              >
                Our Story
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                Founded in 2023, GlowUp emerged from the frustration of dealing with complex video editing software. Our team
                of AI experts and video professionals came together to create a solution that simplifies the editing process
                without compromising on quality or creative control.
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-2xl font-semibold mt-8 mb-4"
              >
                Our Technology
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-6"
              >
                GlowUp leverages advanced AI algorithms to automate many aspects of video editing, from color correction and
                audio enhancement to smart trimming and transitions. Our platform continues to evolve with new features and
                capabilities based on user feedback and technological advancements.
              </motion.p>
            </div>
          </main>
          
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default About;
