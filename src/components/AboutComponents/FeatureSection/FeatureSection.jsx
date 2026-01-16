import React, { useRef, useEffect } from "react";
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your background + icons






// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Reset background
    gsap.set(el, {
      backgroundPosition: "center 0px",
      backgroundSize: "cover",
    });

    // GSAP Parallax Effect
    gsap.to(el, {
      backgroundPositionY: "200px", // how much parallax to move
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",   // start when section enters screen
        end: "bottom top",     // end when section leaves screen
        scrub: 1,              // smooth parallax scroll
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="feature-section parallax-section"
      style={{
        backgroundImage: `url(/images/peripheral-slide.png)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="xb-feature-content">
              <div className="sec-title sec-title-center fea-sec-title mb-35">
                <span className="sub-title mb-20">Why We are Better?</span>
                <h2 className="title title-line_height">
                  Why our services are better than others?
                </h2>
              </div>

              <div className="row mt-none-30">

                {/* Item 1 */}
                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-feature-item xb-feature-item2">
                    <div className="xb-item--inner xb-border">
                      <span className="xb-item--icon" style={{padding: "12px"}}>
                        <Image src="/images/icon/fea-small-icon01.svg" alt="icon" width={500} height={500} />
                      </span>
                      <h2 className="xb-item--title">
                        Reliable POS <br /> Transactions
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-feature-item xb-feature-item2 xb-border">
                    <div className="xb-item--inner xb-border">
                      <span className="xb-item--icon" style={{padding: "12px"}}>
                        <Image src="/images/icon/fea-small-icon04.svg" alt="icon" width={500} height={500} />
                      </span>
                      <h2 className="xb-item--title">
                        Faster Checkouts
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-feature-item xb-feature-item2">
                    <div className="xb-item--inner xb-border">
                      <span className="xb-item--icon" style={{padding: "12px"}}>
                        <Image src="/images/icon/fea-small-icon02.svg" alt="icon" width={500} height={500} />
                      </span>
                      <h2 className="xb-item--title">
                        Personalized POS <br /> Solutions
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-feature-item xb-feature-item2 xb-border">
                    <div className="xb-item--inner xb-border">
                      <span className="xb-item--icon" style={{padding: "12px"}}>
                        <Image src="/images/icon/fea-small-icon06.svg" alt="icon" width={500} height={500} />
                      </span>
                      <h2 className="xb-item--title">
                        Client-Focused
                      </h2>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;
