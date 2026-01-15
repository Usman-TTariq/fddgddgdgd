"use client";

import { Fragment } from "react";
import Header from "../../src/components/Header/Header";
import PageTitle from "../../src/components/pagetitle/PageTitle";
import ServiceSection from "../../src/main-component/ServicePage/ServiceSection";
import Scrollbar from "../../src/components/scrollbar/scrollbar";
import Footer from "../../src/components/footer/Footer";

export default function ServicePage() {
  return (
    <Fragment>
      <div className="about-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Services" pagesub="Services" />
            <ServiceSection />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

