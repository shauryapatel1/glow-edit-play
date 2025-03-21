
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { HelpCircle, FileText, MessageCircle, Mail } from 'lucide-react';

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
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-bold mb-4">Need Help?</h1>
          <p className="text-muted-foreground text-lg">
            We're here to support you every step of the way. Choose from the options below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/20 border border-border/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-6">
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
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Please describe your issue in detail..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
