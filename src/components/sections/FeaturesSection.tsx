
import React from 'react';
import { motion } from 'framer-motion';
import { PixelCard } from '../ui-custom/PixelCard';
import { PixelButton } from '../ui-custom/PixelButton';
import { staggerContainer, pixelFadeIn } from '@/lib/animation-utils';
import { ParticleField } from '../effects/ParticleField';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
          <path d="M12 8v-2"/>
          <path d="M12 18v-2"/>
          <path d="M8 12H6"/>
          <path d="M18 12h-2"/>
          <path d="m15 9-1.5 1.5"/>
          <path d="m9 15-1.5 1.5"/>
          <path d="m15 15-1.5-1.5"/>
          <path d="m9 9-1.5-1.5"/>
        </svg>
      ),
      title: "AI-Powered Trend Integration",
      description: "Our AI continuously scans social media for the hottest trends, recommending engaging effects and filters to keep your content ahead of the curve."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
          <path d="M12 9v4"/>
          <path d="M12 17h.01"/>
        </svg>
      ),
      title: "Dynamic Motion Graphics",
      description: "Elevate your videos with professional-grade motion graphics, animated text, creative shapes, and dynamic particle bursts that bring your personality to life."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 12H3"/>
          <path d="M16 6H3"/>
          <path d="M16 18H3"/>
          <path d="M19 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"/>
          <path d="M21 6a2 2 0 1 0 0-4 2 2 0 1 0 0 4Z"/>
          <path d="M21 22a2 2 0 1 0 0-4 2 2 0 1 0 0 4Z"/>
        </svg>
      ),
      title: "Smart Editing",
      description: "Our smart cutting feature pinpoints the perfect moments to trim your footage, ensuring every second is optimized for maximum impact and engagement."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"/>
          <circle cx="6" cy="6" r="3"/>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"/>
          <path d="M11 18H8a2 2 0 0 1-2-2V9"/>
        </svg>
      ),
      title: "Interactive Collaboration",
      description: "Collaborate live with your team to brainstorm, edit, and refine your content within a streamlined workspace that makes creativity a collective adventure."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="3" height="8" x="13" y="2" rx="1.5"/>
          <path d="M19 8V7a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1"/>
          <rect width="20" height="14" x="2" y="8" rx="2"/>
          <path d="M12 12h.01"/>
        </svg>
      ),
      title: "Real-time Engagement Metrics",
      description: "View performance analytics, success stories, and trending data in real-time with our immersive, interactive dashboard."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 12h-2l3.2-7.5"/>
          <path d="M10 12H8l-3.2-7.5"/>
          <path d="M3 16h18"/>
          <path d="M18 18H6l-1 4h14l-1-4z"/>
        </svg>
      ),
      title: "Viral-Ready Templates",
      description: "Access a library of pre-designed templates proven to perform well on social media platforms, customizable to match your unique style."
    }
  ];

  return (
    <section id="features" className="py-20 bg-sunset-50/50 dark:bg-navy-900/50 relative overflow-hidden">
      {/* Pixel art background elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-sunset-400 animate-pixel-shift" />
      <div className="absolute bottom-20 right-20 w-8 h-8 bg-sunset-pink-500 animate-pixel-shift" style={{ animationDelay: '0.2s' }} />
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-sunset-yellow-400 animate-pixel-shift" style={{ animationDelay: '0.4s' }} />
      
      {/* Particle background */}
      <div className="absolute inset-0 opacity-30">
        <ParticleField color="#EA384C" density={20} speed={0.1} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer(0.1, 0.1)}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            variants={pixelFadeIn(0)}
            className="mb-4 inline-block"
          >
            <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-pixel text-sunset-500 bg-sunset-500/10 border-2 border-sunset-500 shadow-[2px_2px_0px_0px] shadow-sunset-500/60">
              Features
            </span>
          </motion.div>
          <motion.h2 
            variants={pixelFadeIn(0.1)}
            className="text-3xl sm:text-4xl font-pixel mb-4 bg-sunset-gradient bg-clip-text text-transparent"
          >
            Create Scroll-Stopping Content That Goes Viral
          </motion.h2>
          <motion.p 
            variants={pixelFadeIn(0.2)}
            className="text-xl text-muted-foreground"
          >
            We fuse AI-driven editing with interactive trend insights and collaborative tools to give your videos that extra edge.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <PixelCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={index % 3 === 0 ? 'orange' : index % 3 === 1 ? 'purple' : 'yellow'}
              delay={index}
              hasAnimation={true}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <PixelButton 
            variant="sunset"
            size="lg"
            className="animate-glow"
          >
            Explore All Features
          </PixelButton>
        </motion.div>
      </div>
    </section>
  );
};
