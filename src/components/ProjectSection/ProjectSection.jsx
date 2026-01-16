import React, { useEffect } from "react";
import Image from 'next/image';

// ✅ Import images







// ✅ Import icons









import Link from 'next/link';

const ProjectSection = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // ✅ Set dynamic background image
    const bgElement = document.querySelector(".project.bg_img");


    // ✅ Scroll activation logic
    const items = document.querySelectorAll(".xb-project-item");
    const paginations = document.querySelectorAll(".xb-project-pagination li");

    if (!items.length || !paginations.length) return;

    items.forEach((item) => {
      item.style.transition = "opacity 0.6s ease";
      item.style.opacity = "1";
    });

    const updateActive = () => {
      let indexToActivate = 0;
      const triggerLine = window.innerHeight * 0.3;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          indexToActivate = index;
        }
      });

      paginations.forEach((el) => el.classList.remove("active"));
      if (paginations[indexToActivate]) {
        paginations[indexToActivate].classList.add("active");
      }

      items.forEach((item, i) => {
        if (i === indexToActivate) {
          item.style.opacity = "1";
        } else if (i < indexToActivate) {
          item.style.opacity = "0.3";
        } else {
          item.style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", updateActive);
    updateActive();

    return () => {
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  return (
    <section className="project bg_img pt-135 pb-150" style={{ backgroundImage: `url(/images/bg/project-bg.png)`, backgroundSize: 'cover' }}>
      <div className="container">
        <div className="sec-title custom-sec-title xb-sec-padding text-center" style={{ marginBottom: "15px" }}>
          {/* <span className="sub-title">Our Projects</span> */}
          <h2 className="title">
            <span className="round-img">
              <Image src="/images/icon/b10c3e43e836d32554bf.gif" alt="animation" width={500} height={500} />
            </span>{" "}
            The Finest End-To-End Point of Sale Systems for Faster Checkouts and Shorter Queues!
          </h2>

        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="xb-heading-btn d-inline" style={{ marginBottom: "35px" }}>
            <Link className="thm-btn agency-btn" href="/devices">
              <span className="text">view our devices</span>
              <span className="arrow">
                <span className="arrow-icon">
                  {/* Double SVG arrow */}
                  {[...Array(2)].map((_, i) => (
                    <svg
                      key={i}
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
                  ))}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mxw-1800">
        <div className="xb-project-wrap">
          {/* Pagination */}
          <div className="xb-project-pagination-wrap">
            <ul className="xb-project-pagination">
              <li>1</li>
              <li className="active">2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>

          {/* Project items */}
          <div className="xb-project-inner">
            {[
              {
                img: "/images/clover-1.png",
                title: <>Slow Checkout Resolution?<br />Try Clover POS Systems!</>,
                desc: "Soireeinc offers credible Clover POS systems with fast processing, a sleek, latest interface, and diverse payment compatibility to streamline your services and improve customer flow for restaurants and retailers.",
                industry: "Data Processing",
                country: "Germany, Issum",
                techs: ["", "", ""],
              },
              {
                img: "/images/retail-img-4.png",
                title: <>Inventory Inaccuracy Control?<br />Choose NRS POS Systems!</>,
                desc: "NRS is built to offer real-time inventory tracking. It handles messy inventories and restores control with automated stock updates, quick error detection, and overstocking or stockout prevention.",
                industry: "Artificial Intelligence",
                country: "Singapore",
                techs: ["", "", ""],
              },
              {
                img: "/images/pax-slide.png",
                title: <>Payment Failure and Security Fix?<br />PAX Payment Terminals can come in handy!</>,
                desc: "PAX devices are programmed to prevent payment issues through secure, reliable transactions. It utilizes advanced encryption and broad payment acceptance to minimize declined payments and security risks.",
                industry: "Computer Vision",
                country: "United States",
                techs: ["", "", ""],
              },
              {
                img: "/images/peripheral-slide.png",
                title: <>Order Errors and Workflow Gaps?<br />POS Peripherals to the rescue!</>,
                desc: "POS systems for e-commerce and grocery stores can lag with proper peripherals such as scanners, printers, and displays. The right peripheral provides the support needed to maximize POS software's output with accurate scanning, clear receipts, and customer-facing displays.We turn complex data into clear, actionable insights. From predictive models to real-time dashboards, our AI-powered analytics help businesses make smarter, faster decisions with confidence.",
                industry: "Data Science",
                country: "Canada",
                techs: ["", "", ""],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="xb-project-item bg_img"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="xb-project-content">
                  <div className="xb-item--inner xb-border">
                    <h2 className="xb-item--title">{project.title}</h2>
                    <p className="xb-item--content">{project.desc}</p>
                    {/* <ul className="xb-item--list ul_li">
                      <li>
                        Industry: <span>{project.industry}</span>
                      </li>
                      <li>
                        Country: <span>{project.country}</span>
                      </li>
                    </ul> */}
                    {/* <div className="xb-item--technologie ul_li">
                      <span>Core Technologies:</span>
                      <ul className="list-unstyled ul_li">
                        {project.techs.map((icon, i) => (
                          <li key={i}>
                            <img src={icon} alt="icon" />
                          </li>
                        ))}
                      </ul>
                    </div> */}
                    {/* <div className="xb-item---btn mt-70">
                      <Link className="thm-btn agency-btn" href="/project-details">
                        <span className="text">read more</span>
                        <span className="arrow">
                          <span className="arrow-icon">
                            {[...Array(2)].map((_, i) => (
                              <svg
                                key={i}
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
                            ))}
                          </span>
                        </span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
