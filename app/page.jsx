"use client";

import { useEffect } from "react";
import Header from "../src/components/Header/Header";
import HeroSection from "../src/components/hero/Hero";
import AboutSection from "../src/components/about/about";
import ServiceSection from "../src/components/ServiceSection/ServiceSection";
import FeatureSection from "../src/components/FeatureSection/FeatureSection";
import ProjectSection from "../src/components/ProjectSection/ProjectSection";
import IndustriesMarqueeSection from "../src/components/IndustriesMarqueeSection/IndustriesMarqueeSection";
import IndustriesSection from "../src/components/Industries/Industries";
import ContactSection from "../src/components/ContactSection/ContactSection";
import TestimonialSection from "../src/components/Testimonial/Testimonial";
import BlogSection from "../src/components/BlogSection/BlogSection";
import Footer from "../src/components/footer/Footer";
import Scrollbar from "../src/components/scrollbar/scrollbar";

export default function HomePage() {
  useEffect(() => {
    document.title = "Pos Verge - POS System & Hardware Solutions";
  }, []);

  return (
    <div className="ai-agency">
      <div className="body_wrap o-clip">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServiceSection />
          <FeatureSection />
          <ProjectSection />
          <IndustriesMarqueeSection />
          <IndustriesSection />
          <ContactSection />
          <TestimonialSection />
          {/* <BlogSection /> */}
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

