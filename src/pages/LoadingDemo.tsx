
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageLoader } from '@/components/ui/page-loader';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { EditingLoader } from '@/components/ui/editing-loader';
import { AuthLoader } from '@/components/ui/auth-loader';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingDemo = () => {
  const [showPageLoader, setShowPageLoader] = useState(false);
  const [progress, setProgress] = useState(30);
  
  // Logic to simulate editing progress
  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Loading Animation Demo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Spinners */}
          <div className="p-6 border border-border/30 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Loading Spinners</h2>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="text-center">
                <LoadingSpinner size="sm" />
                <p className="mt-2 text-sm">Small</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="md" />
                <p className="mt-2 text-sm">Medium</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="lg" />
                <p className="mt-2 text-sm">Large</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="md" text="Loading..." />
                <p className="mt-2 text-sm">With Text</p>
              </div>
            </div>
          </div>
          
          {/* Page Loader */}
          <div className="p-6 border border-border/30 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Page Loader</h2>
            <p className="mb-4">Full-screen loading overlay for page transitions</p>
            <Button onClick={() => {
              setShowPageLoader(true);
              setTimeout(() => setShowPageLoader(false), 3000);
            }}>
              Show Page Loader (3s)
            </Button>
            {showPageLoader && <PageLoader />}
          </div>
          
          {/* Editing Loader */}
          <div className="p-6 border border-border/30 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Editing Progress</h2>
            <p className="mb-4">Shows progress during video processing</p>
            <EditingLoader progress={progress} />
            <div className="mt-4">
              <Button onClick={simulateProgress} className="w-full">
                Simulate Processing
              </Button>
            </div>
          </div>
          
          {/* Auth Loaders */}
          <div className="p-6 border border-border/30 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Authentication Loaders</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-border/30 rounded-lg p-4">
                <AuthLoader type="login" />
              </div>
              <div className="border border-border/30 rounded-lg p-4">
                <AuthLoader type="signup" />
              </div>
              <div className="border border-border/30 rounded-lg p-4">
                <AuthLoader type="verification" />
              </div>
            </div>
          </div>
          
          {/* Skeleton Loaders */}
          <div className="p-6 border border-border/30 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Skeleton Loaders</h2>
            <p className="mb-4">Content placeholder animations</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Card Loading */}
          <div className="p-6 border border-border/30 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Content Card Loading</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-border/30 rounded-lg p-4">
                  <Skeleton className="h-32 w-full rounded-lg mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoadingDemo;
