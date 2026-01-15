"use client";

import { Fragment } from "react";
import Header from "../../src/components/Header/Header";
import PageTitle from "../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../src/components/scrollbar/scrollbar";
import Footer from "../../src/components/footer/Footer";
import ServiceDetails from "../../src/main-component/SeviceSinglePage/ServiceDetails";

export default function ServiceDetailsPage() {
  return (
    <Fragment>
      <div className="about-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Service details" pagesub="Service details" />
            <ServiceDetails />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

