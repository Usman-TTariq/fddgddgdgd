"use client";

import { Fragment } from "react";
import Header from "../../src/components/Header/Header";
import PageTitle from "../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../src/components/scrollbar/scrollbar";
import Footer from "../../src/components/footer/Footer";
import ProjectSection from "../../src/main-component/ProjectPage/ProjectSection";

export default function ProjectPage() {
  return (
    <Fragment>
      <div className="service-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Our projects" pagesub="Our projects" />
            <ProjectSection />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

