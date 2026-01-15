"use client";

import { Fragment } from "react";
import Link from "next/link";
import Header from "../src/components/Header/Header";
import Scrollbar from "../src/components/scrollbar/scrollbar";
import Footer from "../src/components/footer/Footer";

export default function NotFound() {
  return (
    <Fragment>
      <div className="about-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <section className="error-page text-center">
              <div className="container">
                <div className="error-content">
                  <h1>404</h1>
                  <h2>Page Not Found</h2>
                  <p>The page you are looking for does not exist.</p>
                  <Link href="/" className="thm-btn">
                    Back to Home
                  </Link>
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
}

