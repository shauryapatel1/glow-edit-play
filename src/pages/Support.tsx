import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { HelpCircle, FileText, MessageCircle, Mail } from 'lucide-react';
import { PageLoader } from '@/components/ui/page-loader';
import { AuthLoader } from '@/components/ui/auth-loader';

const SupportOption = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="p-6 rounded-lg border border-border/30 bg-card/20">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Support = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <PageLoader text="Loading Support" />
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
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h1 className="text-3xl font-bold mb-4">Need Help?</h1>
              <p className="text-muted-foreground text-lg">
                We're here to support you every step of the way. Choose from the options below.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              <SupportOption 
                icon={<HelpCircle className="h-6 w-6 text-primary" />}
                title="Knowledge Base"
                description="Find answers to common questions in our comprehensive help center."
              />
              <SupportOption 
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="Documentation"
                description="Detailed guides and tutorials for getting the most out of GlowUp."
              />
              <SupportOption 
                icon={<MessageCircle className="h-6 w-6 text-primary" />}
                title="Live Chat"
                description="Chat with our support team in real-time during business hours."
              />
              <SupportOption 
                icon={<Mail className="h-6 w-6 text-primary" />}
                title="Email Support"
                description="Send us a message and we'll get back to you within 24 hours."
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card/20 border border-border/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <AnimatePresence>
                    {isSubmitting ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="py-8"
                      >
                        <AuthLoader type="verification" />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="Your name" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="your.email@example.com" />
                          </div>
                        </div>
                        <div className="space-y-2 mt-6">
                          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                          <Input id="subject" placeholder="How can we help you?" />
                        </div>
                        <div className="space-y-2 mt-6">
                          <label htmlFor="message" className="text-sm font-medium">Message</label>
                          <Textarea id="message" placeholder="Please describe your issue in detail..." className="min-h-[150px]" />
                        </div>
                        <Button type="submit" className="w-full mt-6">Send Message</Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </main>
          
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Support;
