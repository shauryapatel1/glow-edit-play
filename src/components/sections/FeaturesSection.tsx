
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
          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
        </svg>
      ),
      title: "AI Enhancement",
      description: "Automatically enhance videos with intelligent scene detection, smart cutting, and style transfer."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: "Real-time Collaboration",
      description: "Edit videos with your team in real-time with synchronized changes and feedback tools."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "GPU Acceleration",
      description: "Leverage powerful GPU capabilities for fast rendering and real-time effects preview."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      ),
      title: "Video Library",
      description: "Organize your videos with smart search, filters, and version history for easy access."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      title: "Advanced Analytics",
      description: "Gain insights into viewer engagement, performance metrics, and audience behavior."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      title: "Premium Effects",
      description: "Access a wide range of professional-grade effects, transitions, and filters."
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
            Everything you need to create stunning videos
          </motion.h2>
          <motion.p 
            variants={pixelFadeIn(0.2)}
            className="text-xl text-muted-foreground"
          >
            Powerful tools that make professional video editing accessible to everyone.
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
