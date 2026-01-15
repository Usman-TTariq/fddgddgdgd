"use client";

import { useEffect, Fragment } from "react";
import HeaderTwo from "../../src/components/HeaderTwo/HeaderTwo";
import HeroSection from "../../src/components/ai-marketing-components/hero/Hero";
import AboutSection from "../../src/components/ai-marketing-components/AboutSection/AboutSection";
import AiServiceSection from "../../src/components/ai-marketing-components/AiServiceSection/AiServiceSection";
import AiBrandSection from "../../src/components/ai-marketing-components/AiBrandSection/AiBrandSection";
import ProjectSection from "../../src/components/ai-marketing-components/ProjectSection/ProjectSection";
import AwardSection from "../../src/components/ai-marketing-components/AwardSection/AwardSection";
import TestimonialSection from "../../src/components/ai-marketing-components/TestimonialSection/TestimonialSection";
import DownloadSection from "../../src/components/ai-marketing-components/DownloadSection/DownloadSection";
import AiFooterSection from "../../src/components/ai-marketing-components/AiFooterSection/AiFooterSection";
import Scrollbar from "../../src/components/scrollbar/scrollbar";

export default function AiMarketingPage() {
  useEffect(() => {
    document.title = "Ai Marketing | AI Agency & Technology React Template";
  }, []);

  return (
    <Fragment>
      <div className="ai-marketing">
        <div className="body_wrap o-clip">
          <HeaderTwo />
          <main>
            <HeroSection />
            <AboutSection />
            <AiServiceSection />
            <AiBrandSection />
            <ProjectSection />
            <AwardSection />
            <TestimonialSection />
            <DownloadSection />
          </main>
          <AiFooterSection />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

