"use client";

import { Fragment } from "react";
import Header from "../../src/components/Header/Header";
import PageTitle from "../../src/components/pagetitle/PageTitle";
import GallerySection from "../../src/main-component/CareerSection/GallerySection";
import HiringProcess from "../../src/main-component/CareerSection/HiringProcess";
import JobSection from "../../src/main-component/CareerSection/JobSection";
import VideoSection from "../../src/main-component/CareerSection/VideoSection";
import Scrollbar from "../../src/components/scrollbar/scrollbar";
import Footer from "../../src/components/footer/Footer";

export default function CareerPage() {
  return (
    <Fragment>
      <div className="about-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Careers" pagesub="Careers" />
            <GallerySection />
            <HiringProcess />
            <JobSection />
            <VideoSection />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

