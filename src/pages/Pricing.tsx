
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  isPopular = false 
}: { 
  name: string; 
  price: string; 
  description: string; 
  features: string[]; 
  isPopular?: boolean; 
}) => {
  return (
    <div className={`rounded-lg p-6 ${isPopular ? 'border-2 border-primary' : 'border border-border/30'} bg-card/20`}>
      {isPopular && (
        <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full w-fit mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${isPopular ? '' : 'variant-outline'}`}>
        Get Started
      </Button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground text-lg">
            Choose the plan that works best for your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <PricingTier 
            name="Basic" 
            price="$19" 
            description="Perfect for individuals and content creators"
            features={[
              "Up to 10 videos per month",
              "720p output resolution",
              "Basic AI enhancements",
              "Standard support",
              "5GB cloud storage"
            ]}
          />
          
          <PricingTier 
            name="Professional" 
            price="$49" 
            description="Ideal for small teams and businesses"
            features={[
              "Unlimited videos",
              "4K output resolution",
              "Advanced AI enhancements",
              "Priority support",
              "50GB cloud storage",
              "Custom branding"
            ]}
            isPopular={true}
          />
          
          <PricingTier 
            name="Enterprise" 
            price="Custom" 
            description="For large organizations with specific needs"
            features={[
              "Unlimited everything",
              "8K output resolution",
              "Premium AI capabilities",
              "Dedicated account manager",
              "Unlimited cloud storage",
              "API access",
              "Custom integrations"
            ]}
          />
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-8 grid gap-6">
            <div className="text-left">
              <h3 className="font-medium mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle.</p>
            </div>
            <div className="text-left">
              <h3 className="font-medium mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground">Yes! All plans come with a 14-day free trial with full access to all features.</p>
            </div>
            <div className="text-left">
              <h3 className="font-medium mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">We offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
