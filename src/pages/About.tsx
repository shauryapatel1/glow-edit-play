
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About GlowUp</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            GlowUp is a cutting-edge AI-powered video editing platform designed to help creators, marketers, and businesses
            transform their video content effortlessly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to democratize professional video editing by making it accessible to everyone, regardless of
            their technical expertise or budget. We believe that great content shouldn't be limited by complex tools or
            expensive software.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
          <p className="mb-6">
            Founded in 2023, GlowUp emerged from the frustration of dealing with complex video editing software. Our team
            of AI experts and video professionals came together to create a solution that simplifies the editing process
            without compromising on quality or creative control.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Technology</h2>
          <p className="mb-6">
            GlowUp leverages advanced AI algorithms to automate many aspects of video editing, from color correction and
            audio enhancement to smart trimming and transitions. Our platform continues to evolve with new features and
            capabilities based on user feedback and technological advancements.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
