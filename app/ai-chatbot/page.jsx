"use client";

import { useEffect, Fragment } from "react";
import HeaderThree from "../../src/components/HeaderThree/HeaderThree";
import HeroSection from "../../src/components/ai-chatbot-components/hero/Hero";
import VideoSection from "../../src/components/ai-chatbot-components/VideoSection/VideoSection";
import FeatureSection from "../../src/components/ai-chatbot-components/FeatureSection/FeatureSection";
import ProcessSection from "../../src/components/ai-chatbot-components/ProcessSection/ProcessSection";
import TestimonialSection from "../../src/components/ai-chatbot-components/TestimonialSection/TestimonialSection";
import IntegrationSection from "../../src/components/ai-chatbot-components/IntegrationSection/IntegrationSection";
import PricingSection from "../../src/components/ai-chatbot-components/PricingSection/PricingSection";
import FAQSection from "../../src/components/ai-chatbot-components/FAQSection/FAQSection";
import CTASection from "../../src/components/ai-chatbot-components/CTASection/CTASection";
import Footer from "../../src/components/ai-chatbot-components/Footer/Footer";
import Scrollbar from "../../src/components/scrollbar/scrollbar";

export default function AiChatbotPage() {
  useEffect(() => {
    document.title = "Ai Chatbot | AI Agency & Technology React Template";
  }, []);

  return (
    <Fragment>
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <HeaderThree />
          <main>
            <HeroSection />
            <VideoSection />
            <FeatureSection />
            <ProcessSection />
            <TestimonialSection />
            <IntegrationSection />
            <PricingSection />
            <FAQSection />
            <CTASection />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

