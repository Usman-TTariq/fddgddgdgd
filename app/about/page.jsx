"use client";

import { Fragment } from "react";
import Header from "../../src/components/Header/Header";
import PageTitle from "../../src/components/pagetitle/PageTitle";
import AboutSection from "../../src/components/AboutComponents/AboutSection/AboutSection";
import BrandSection from "../../src/components/AboutComponents/BrandSection/BrandSection";
import FeatureSection from "../../src/components/AboutComponents/FeatureSection/FeatureSection";
import TeamSection from "../../src/components/AboutComponents/TeamSection/TeamSection";
import AwardSection from "../../src/components/AboutComponents/AwardSection/AwardSection";
import Scrollbar from "../../src/components/scrollbar/scrollbar";
import Footer from "../../src/components/footer/Footer";

export default function AboutPage() {
  return (
    <Fragment>
      <div className="about-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="About Us" pagesub="About Us" />
            <AboutSection />
            {/* <BrandSection /> */}
            <FeatureSection />
            {/* <TeamSection /> */}
            <AwardSection />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

