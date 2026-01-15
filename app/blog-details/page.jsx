"use client";

import { Fragment } from "react";
import Header from "../../src/components/Header/Header";
import PageTitle from "../../src/components/pagetitle/PageTitle";
import BlogDetailsSection from "../../src/components/BlogDetails/BlogSingle";
import Scrollbar from "../../src/components/scrollbar/scrollbar";
import Footer from "../../src/components/footer/Footer";

export default function BlogDetailsPage() {
  return (
    <Fragment>
      <div className="about-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Blog details" pagesub="Blog details" />
            <BlogDetailsSection />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

