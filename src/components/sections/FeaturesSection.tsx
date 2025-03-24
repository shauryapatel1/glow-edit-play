
import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from '../ui-custom/FeatureCard';
import { Separator } from '@/components/ui/separator';

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
      description: "Our AI continuously scans social media for the hottest trends, recommending engaging effects and filters."
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
      description: "Elevate your videos with professional-grade motion graphics, animated text, and creative shapes."
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
      description: "Our smart cutting feature pinpoints the perfect moments to trim your footage for maximum impact."
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
      description: "Collaborate live with your team to brainstorm, edit, and refine your content efficiently."
    }
  ];

  return (
    <section id="features" className="py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-4">Create Scroll-Stopping Content</h2>
          <p className="text-muted-foreground">
            AI-driven editing with trend insights and collaborative tools to give your videos that extra edge.
          </p>
          <Separator className="w-16 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant="glass"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
