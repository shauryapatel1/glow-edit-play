
import React, { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLoader } from "./components/ui/page-loader";

// Regular import for the most important page
import Index from "./pages/Index";

// Lazy load less critical pages for better performance
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Support = lazy(() => import("./pages/Support"));
const Terms = lazy(() => import("./pages/Terms"));
const LoadingDemo = lazy(() => import("./pages/LoadingDemo"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Improves performance by avoiding unnecessary refetches
      retry: 1, // Reduces number of retries for better UX
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={
            <Suspense fallback={<PageLoader text="Loading About" />}>
              <About />
            </Suspense>
          } />
          <Route path="/pricing" element={
            <Suspense fallback={<PageLoader text="Loading Pricing" />}>
              <Pricing />
            </Suspense>
          } />
          <Route path="/support" element={
            <Suspense fallback={<PageLoader text="Loading Support" />}>
              <Support />
            </Suspense>
          } />
          <Route path="/terms" element={
            <Suspense fallback={<PageLoader text="Loading Terms" />}>
              <Terms />
            </Suspense>
          } />
          <Route path="/loading-demo" element={
            <Suspense fallback={<PageLoader text="Loading Demo" />}>
              <LoadingDemo />
            </Suspense>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <Suspense fallback={<PageLoader text="Page Not Found" />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
