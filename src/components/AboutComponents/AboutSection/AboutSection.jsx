import React from "react";
import Image from 'next/image';

// ==== Import Images ====
















import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="about pos-rel pb-140">

      <div className="container">
        {/* ===== Top Scrolling Images ===== */}
        <div className="about-top-image ul_li_between align-items-start">

          {/* Column 1 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {[img05, img05, img05, img05].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={img} alt="about" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {[img06, img06, img06, img06].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={img} alt="about" />
                </Link>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="xb-video">
            <video
              loop
              muted
              playsInline
              autoPlay
              poster={videoPoster}
            >
              <source src="https://www.pexels.com/download/video/18069701/" />
            </video>
          </div>

          {/* Column 3 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {[img07, img07, img07, img07].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={img} alt="about" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {[img08, img08, img08, img08].map((img, i) => (
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
            We helping
            <span><Image src="/images/icon/original-66948a0d81d.gif" alt="gif" width={500} height={500} /></span>
            grow businesses and
            <span><Image src="/images/icon/0deec720000b2066289b.gif" alt="gif" width={500} height={500} /></span>
            scale with smart,
            <span><Image src="/images/icon/b10c3e43e836d32554bf.gif" alt="gif" width={500} height={500} /></span>
            data-driven AI agency
          </h2>

          <p className="content">
            We help grow and scale your business by delivering smart,
            data-driven AI solutions tailored to your needs. Our technology
            optimizes operations, enhances decision-making, and uncovers new
            opportunities for growth.
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
                  <h2 className="xb-item--title">Smarter insights</h2>
                  <p className="xb-item--content">
                    Make faster, data-driven decisions powered by real-time AI analysis.
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
                  <h2 className="xb-item--title">Integrated AI solutions</h2>
                  <p className="xb-item--content">
                    No extra tools needed. Get built-in, scalable AI from day one.
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
                  <h2 className="xb-item--title">End-to-end automation</h2>
                  <p className="xb-item--content">
                    Automate workflows with intelligent systems that never leave you guessing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="about-bg">
        <Image src="/images/bg/about-bg02.png" alt="background" width={500} height={500} />
      </div>
    </section>
  );
};

export default AboutSection;
