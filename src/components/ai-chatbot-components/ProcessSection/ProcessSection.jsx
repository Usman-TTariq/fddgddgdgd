import React from "react";
import Image from 'next/image';
import Link from 'next/link';

// ✅ Import images






const ProcessSection= () => {
  return (
    <section id="process" className="process-sction z-1 pt-150">
      <div className="container">
        <div className="row">
          {/* === Left Side === */}
          <div className="col-lg-5">
            <div
              className="xb-process-left-container wow fadeInLeft"
              data-wow-duration="600ms"
            >
              {/* === Section Title === */}
              <div className="sec-title sec-title--two process-title mb-50">
                <span className="sub-title d-block mb-25">
                  <Image src="/images/icon/sub-left-icon.png" alt="icon" width={500} height={500} />
                  How It Works
                </span>
                <h2 className="title d-inline">Launch your chatbot in 3 steps</h2>
                <div className="xb-heading-btn">
                  <Link className="thm-btn chatbot-btn" href="/contact">
                    start for free
                    <span className="arrow-icon">
                      {/* === Arrow SVGs === */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span className="btn-bg">
                      <svg
                        width="484"
                        height="60"
                        viewBox="0 0 484 60"
                        fill="none"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="484"
                          height="60"
                          fill="url(#paint0_radial_2224_3386)"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_2224_3386"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientTransform="matrix(-667.5 -25 0.582116 -49.7476 497 39)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#00FF97" />
                            <stop offset="1" stopColor="#00020F" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              {/* === Steps === */}
              <div className="xb-process-step xb-border active">
                <div className="xb-img">
                  <Image src="/images/process/img01.png" alt="Step 1" width={500} height={500} />
                  <h2 className="step-number">01</h2>
                </div>
                <h2 className="step-name">Sign Up & Build</h2>
              </div>

              <div className="xb-process-step xb-border">
                <div className="xb-img">
                  <Image src="/images/process/img01.png" alt="Step 2" width={500} height={500} />
                  <h2 className="step-number">02</h2>
                </div>
                <h2 className="step-name">Connect Channels</h2>
              </div>

              <div className="xb-process-step xb-border">
                <div className="xb-img">
                  <Image src="/images/process/img01.png" alt="Step 3" width={500} height={500} />
                  <h2 className="step-number">03</h2>
                </div>
                <h2 className="step-name">Analyze & Optimize</h2>
              </div>
            </div>
          </div>

          {/* === Right Side Images === */}
          <div className="col-lg-7">
            <div
              className="xb-process-right-container pb-150 mt-none-30 wow fadeInRight"
              data-wow-duration="600ms"
            >
              <div className="xb-process-item mt-30">
                <div className="xb-img">
                  <Image src="/images/process/img02.png" alt="Process 1" width={500} height={500} />
                </div>
              </div>
              <div className="xb-process-item mt-30">
                <div className="xb-img">
                  <Image src="/images/process/img03.png" alt="Process 2" width={500} height={500} />
                </div>
              </div>
              <div className="xb-process-item mt-30">
                <div className="xb-img">
                  <Image src="/images/process/img04.png" alt="Process 3" width={500} height={500} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
