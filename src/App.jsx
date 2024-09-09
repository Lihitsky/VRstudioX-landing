import React from "react";
import { NavBar } from "./components/nav-bar";
import { HeroSection } from "./components/hero-section";
import { FeatureSection } from "./components/feature-section";
import { WorkflowSection } from "./components/workflow-section";
import { PriceSection } from "./components/price-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
        <PriceSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
