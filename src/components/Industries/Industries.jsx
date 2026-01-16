import React, { useEffect } from "react";
import Image from 'next/image';
import Marquee from "react-fast-marquee";

// ✅ Import background and icons









const IndustriesSection= () => {
  useEffect(() => {
    // ✅ Set background dynamically (optional)
    const section = document.querySelector(".industries.bg-wrap");
    // if (section) {
    //   section.style.backgroundImage = `url(${bgImg})`;
    // }
  }, []);

  // ✅ Industries data
  const industries = [
    { icon: "/images/icon/service-icon01.svg", title: "Education" },
    { icon: "/images/icon/service-icon02.svg", title: "Logistics" },
    { icon: "/images/icon/service-icon03.svg", title: "Marketing" },
    { icon: "/images/icon/service-icon04.svg", title: "Healthcare" },
    { icon: "/images/icon/service-icon05.svg", title: "Finance" },
    { icon: "/images/icon/service-icon06.svg", title: "Manufacturing" },
    { icon: "/images/icon/service-icon07.svg", title: "E-commerce" },
  ];

  return (
    <section className="industries pb-165 bg_img bg-wrap" style={{ backgroundImage: `url(/images/bg/industries-bg02.png)`, backgroundSize: 'cover' }}>
      <div className="container">
        <div className="sec-title sec-title-center text-center mb-50">
          <span className="sub-title mb-15">Industries Served</span>
          <h2 className="title">Industries we served with Affordable POS</h2>
        </div>
      </div>

      <div className="xb-industries-wrapper d-inline-block">
        <Marquee
          direction="right"
          speed={40}
          gradient={false}
          pauseOnHover={true}
          className="marquee-right"
        >
          <div className="xb-industries-inner ul_li">
            {industries.map((item, index) => (
              <div className="xb-industries-item xb-border" key={index}>
                <div className="xb-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3 className="xb-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default IndustriesSection;
