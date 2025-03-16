
import React from 'react';
import { PixelButton } from '../ui-custom/PixelButton';
import { motion } from 'framer-motion';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sunset-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sunset-pink-400/10 rounded-full blur-[120px]" />
      </div>
      
      {/* Pixel art decorations */}
      <div className="absolute top-1/3 left-20 w-6 h-6 bg-sunset-400 animate-pixel-shift" />
      <div className="absolute bottom-1/3 right-20 w-8 h-8 bg-sunset-pink-500 animate-pixel-shift" style={{ animationDelay: '0.2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl overflow-hidden shadow-glass border-2 border-sunset-400/30 shadow-[4px_4px_0px_0px] shadow-sunset-400/20"
        >
          <div className="p-8 md:p-12 lg:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-4 inline-block">
                <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-pixel text-sunset-400 bg-sunset-400/10 border-2 border-sunset-400 shadow-[2px_2px_0px_0px] shadow-sunset-400/60">
                  Join the revolution
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-pixel mb-6 bg-sunset-gradient bg-clip-text text-transparent">
                Ready to go viral on social media?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl">
                Join thousands of creators, influencers, and brands who are dominating TikTok, Instagram Reels, and other platforms with GlowUp's AI-powered editing platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PixelButton 
                  size="lg" 
                  variant="sunset"
                  className="animate-glow"
                >
                  Start Free Trial
                </PixelButton>
                <PixelButton 
                  size="lg" 
                  variant="outline"
                >
                  Schedule Demo
                </PixelButton>
              </div>
              
              <p className="mt-6 text-sm text-muted-foreground">
                No credit card required. 14-day free trial with full access to all features.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
