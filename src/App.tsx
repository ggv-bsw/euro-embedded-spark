import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LanguageLayout from "@/components/LanguageLayout";

const Index = React.lazy(() => import("./pages/Index"));
const Expertise = React.lazy(() => import("./pages/Expertise"));
const SuccessStories = React.lazy(() => import("./pages/SuccessStories"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Playground = React.lazy(() => import("./pages/Playground"));
const Careers = React.lazy(() => import("./pages/Careers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function renderPageRoutes() {
  return (
    <>
      <Route index element={<Index />} />
      <Route path="expertise" element={<Expertise />} />
      <Route path="success-stories" element={<SuccessStories />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="playground" element={<Playground />} />
      <Route path="careers" element={<Careers />} />
    </>
  );
}

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          {/* English routes (root) */}
          <Route element={<LanguageLayout />}>
            {renderPageRoutes()}
          </Route>
          {/* German routes (/de) */}
          <Route path="/de" element={<LanguageLayout />}>
            {renderPageRoutes()}
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
