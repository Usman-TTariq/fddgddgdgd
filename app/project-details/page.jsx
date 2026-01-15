"use client";

import { Fragment } from "react";
import Header from "../../src/components/Header/Header";
import PageTitle from "../../src/components/pagetitle/PageTitle";
import ProjectDetailsSection from "../../src/main-component/ProjectDetails/ProjectDetailsSection";
import Scrollbar from "../../src/components/scrollbar/scrollbar";
import Footer from "../../src/components/footer/Footer";

export default function ProjectDetailsPage() {
  return (
    <Fragment>
      <div className="service-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Project details" pagesub="Project details" />
            <ProjectDetailsSection />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

