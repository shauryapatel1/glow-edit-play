
import React from 'react';
import { motion } from 'framer-motion';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-lg overflow-hidden shadow-md border border-border/30"
        >
          <div className="p-8 md:p-12 lg:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-4 inline-block">
                <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/30">
                  Join us today
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to transform your video content?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl">
                Join thousands of creators, influencers, and brands who are elevating their video content with our AI-powered editing platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-base font-medium">
                  Start Free Trial
                </button>
                <button className="btn-minimal text-base font-medium">
                  Schedule Demo
                </button>
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
