import React from "react";
import Image from 'next/image';

// ==== Import Images ====
















import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="about pos-rel pb-140">

      <div className="container">
        {/* ===== Top Scrolling Images ===== */}
        <div className="about-custom-imgs about-top-image ul_li_between align-items-start">

          {/* Column 1 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {["/images/about-1.png", "/images/about-1.png", "/images/about-1.png", "/images/about-1.png"].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={img} alt="about" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {["/images/about-4.png", "/images/about-4.png", "/images/about-4.png", "/images/about-4.png"].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={img} alt="about" />
                </Link>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="xb-video">
            <div className="img-hove-effect">
              <div className="xb-img">
                {["/images/about-5.png", "/images/about-5.png", "/images/about-5.png", "/images/about-5.png"].map((img, i) => (
                  <Link key={i} href="/about">
                    <img src={img} alt="about" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {["/images/about-3.png", "/images/about-3.png", "/images/about-3.png", "/images/about-3.png"].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={img} alt="about" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {["/images/about-2.png", "/images/about-2.png", "/images/about-2.png", "/images/about-2.png"].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={img} alt="about" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Title Section ===== */}
        <div className="sec-title sec-title-center about-sec-title about-sec-title-two mt-45">
          <span className="sub-title mb-10">Who We are?</span>

          <h2 className="title">
            We are the leading POS supplier offering the best POS system in the USA for safer, secure, and simpler business logistics.{" "}
          </h2>
          <p className="content">
            Streamline your checkouts with Android-based POS terminals, setups, and devices. Manage checkouts and update inventory, with shorter queues and happier customers
          </p>
        </div>

        {/* ===== Feature Boxes ===== */}
        <div className="row mt-40">
          {/* 1 */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src="/images/icon/feature-icon01.svg" alt="icon" width={500} height={500} />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Fast Processing Speed</h2>
                  <p className="xb-item--content">
                    Affordable point-of-sale systems with advanced processors for faster transaction times and hassle-free checkouts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src="/images/icon/feature-icon02.svg" alt="icon" width={500} height={500} />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Seamless System Integration</h2>
                  <p className="xb-item--content">
                    Smart POS hardware that connects to your old inventory mechanism, accounting, payment gateways, and third-party software.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src="/images/icon/feature-icon03.svg" alt="icon" width={500} height={500} />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Security Compliance</h2>
                  <p className="xb-item--content">
                    Reliable POS software designed for high efficiency and secure business logistics with integrated encryption and EMV compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="about-bg" style={{ width: "100%", height: "100%" }}>
        <Image src="/images/bg/about-bg02.png" alt="background" width={500} height={500} style={{ width: "100%", height: "100%" }} />
      </div>
    </section>
  );
};

export default AboutSection;
