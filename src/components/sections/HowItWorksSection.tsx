
import React from 'react';
import { VideoPreview } from '../ui-custom/VideoPreview';
import { motion } from 'framer-motion';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Upload your footage",
      description: "Simply drag and drop your raw video files into GlowUp. We support all popular formats including MP4, MOV, AVI, and more."
    },
    {
      number: "02",
      title: "AI enhancement",
      description: "Our intelligent algorithms analyze your footage and suggest professional enhancements including color grading, transitions, and cuts."
    },
    {
      number: "03",
      title: "Customize & collaborate",
      description: "Fine-tune your video with our intuitive editor, add effects, and invite team members to collaborate in real-time."
    },
    {
      number: "04",
      title: "Export & share",
      description: "Render your masterpiece in various formats and resolutions, then share directly to your favorite platforms."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 inline-block">
            <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-pixel text-sunset-400 bg-sunset-400/10 border-2 border-sunset-400 shadow-[2px_2px_0px_0px] shadow-sunset-400/60">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-pixel mb-4 bg-sunset-gradient bg-clip-text text-transparent">Create professional videos in minutes</h2>
          <p className="text-xl text-muted-foreground">
            A simple four-step process that transforms raw footage into stunning content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sunset-400/20 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sunset-pink-400/20 rounded-full"></div>
            
            <VideoPreview 
              imageSrc="https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="relative z-10"
              overlayText="See how easy it is to create professional videos"
            />
          </motion.div>
          
          {/* Steps */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-md border-2 border-sunset-400 bg-sunset-400/10 shadow-[2px_2px_0px_0px] shadow-sunset-400/30 flex items-center justify-center text-sunset-400 font-pixel">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-pixel mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    
                    {index < steps.length - 1 && (
                      <div className="ml-6 mt-4 h-8 border-l-2 border-dashed border-sunset-400/30"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
