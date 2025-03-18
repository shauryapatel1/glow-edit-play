
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSrc?: string;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  avatarSrc = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  className,
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={cn("bg-card/40 backdrop-blur-sm border border-border/10 rounded-lg p-6", className)}
  >
    <p className="text-foreground mb-6 italic text-sm md:text-base">"{quote}"</p>
    
    <div className="flex items-center">
      <img src={avatarSrc} alt={author} className="w-10 h-10 rounded-full object-cover mr-3" />
      <div>
        <h4 className="font-medium text-sm">{author}</h4>
        <p className="text-xs text-muted-foreground">{role}, {company}</p>
      </div>
    </div>
  </motion.div>
);

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "GlowUp has completely transformed our marketing videos. What used to take days now takes minutes, and the results are even better.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechNova",
      avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      quote: "As a content creator, I need to produce high-quality videos quickly. GlowUp's AI enhancements and intuitive interface make this possible.",
      author: "Michael Chen",
      role: "Content Creator",
      company: "VisualStory",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      quote: "The real-time collaboration feature has been a game-changer for our remote team. We can now work together seamlessly on video projects.",
      author: "Emily Rodriguez",
      role: "Production Manager",
      company: "MediaWorks",
      avatarSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-4">What our users are saying</h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied customers who have transformed their video content.
          </p>
          <Separator className="w-16 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatarSrc={testimonial.avatarSrc}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
