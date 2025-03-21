
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms & Privacy</h1>
        
        <Tabs defaultValue="terms" className="max-w-4xl mx-auto">
          <TabsList className="mb-8">
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="terms" className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
            <p className="text-muted-foreground">Last updated: June 1, 2024</p>
            
            <div className="mt-6 space-y-6">
              <section>
                <h3 className="text-xl font-medium mb-3">1. Acceptance of Terms</h3>
                <p>
                  By accessing or using GlowUp's services, you agree to be bound by these Terms of Service. If you do not agree
                  to these terms, please do not use our services.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">2. Description of Service</h3>
                <p>
                  GlowUp provides an AI-powered video editing platform that allows users to enhance, edit, and transform video
                  content. The specific features and functionality may change over time as we improve our services.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">3. User Accounts</h3>
                <p>
                  To access certain features of our services, you may need to create an account. You are responsible for
                  maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">4. User Content</h3>
                <p>
                  You retain all rights to the content you upload to our platform. By using our services, you grant us a
                  non-exclusive license to use, store, and process your content solely for the purpose of providing and improving
                  our services.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">5. Prohibited Uses</h3>
                <p>
                  You agree not to use our services for any illegal purposes or in any manner that could damage, disable, or
                  impair our services. You also agree not to upload content that infringes on the intellectual property rights of
                  others.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">6. Changes to Terms</h3>
                <p>
                  We reserve the right to modify these terms at any time. We will provide notice of significant changes by
                  updating the date at the top of this page. Your continued use of our services after such changes constitutes
                  your acceptance of the new terms.
                </p>
              </section>
            </div>
          </TabsContent>
          
          <TabsContent value="privacy" className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground">Last updated: June 1, 2024</p>
            
            <div className="mt-6 space-y-6">
              <section>
                <h3 className="text-xl font-medium mb-3">1. Information We Collect</h3>
                <p>
                  We collect information that you provide directly to us, such as when you create an account, upload content,
                  or contact our support team. We also automatically collect certain information about your device and how you
                  interact with our services.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">2. How We Use Your Information</h3>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, to communicate with you,
                  and to personalize your experience. We may also use your information for research and analytics purposes.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">3. Information Sharing</h3>
                <p>
                  We do not sell your personal information. We may share your information with third-party service providers
                  who perform services on our behalf, such as hosting, data analysis, and customer service.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">4. Data Security</h3>
                <p>
                  We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However,
                  no method of electronic storage or transmission is 100% secure.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">5. Your Rights</h3>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, such as the right
                  to access, correct, or delete your data. You can exercise these rights by contacting us at privacy@glowup.com.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium mb-3">6. Changes to Privacy Policy</h3>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by updating the date at
                  the top of this page. We encourage you to review our privacy policy whenever you use our services.
                </p>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
