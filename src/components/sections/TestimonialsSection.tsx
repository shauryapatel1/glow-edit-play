
import React from 'react';
import { cn } from '@/lib/utils';

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
  <div className={cn("glass rounded-xl p-8 shadow-glass-sm", className)}>
    <div className="flex mb-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    
    <p className="text-foreground mb-6 italic">"{quote}"</p>
    
    <div className="flex items-center">
      <img src={avatarSrc} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-muted-foreground">{role}, {company}</p>
      </div>
    </div>
  </div>
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
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 inline-block">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-300">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What our users are saying</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied customers who have transformed their video content with GlowUp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
