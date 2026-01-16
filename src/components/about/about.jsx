import React, { useEffect } from "react";
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import Link from 'next/link';

const AboutSection = () => {
  const aboutItems = [
    { img: "/images/a1.webp", link: "/clover" },
    { img: "/images/a2.webp", link: "/pax" },
    { img: "/images/m1.webp", link: "/peripherals" },
  ];

  return (
    <section className="about pt-140">
      <div className="container">
        <div className="sec-title about-sec-title mb-75">
          <span className="sub-title">Who We are?</span>
          <h2 className="title" style={{textAlign: "center"}}>
            We are the
            <span>
              <Image src="/images/icon/original-66948a0d81d.gif" alt="animation" width={500} height={500} />
            </span>{" "}
            leading POS supplier
            <span>
              <Image src="/images/icon/0deec720000b2066289b.gif" alt="animation" width={500} height={500} />
            </span>
            offering the best POS system in the USA for safer, secure, and simpler business logistics.{" "}
            <span>
              <Image src="/images/icon/b10c3e43e836d32554bf.gif" alt="animation" width={500} height={500} />
            </span>
          </h2>
        </div>
      </div>

      {/* ✅ One single marquee with all 3 images */}
      <div className="xb-about-img-wrap bg_img wow" style={{ backgroundImage: `url(/images/bg/about-bg.png)` }}>
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
          {aboutItems.map((item, idx) => (
            <div key={idx} className="xb-about-img-item img-hove-effect">
              <div className="xb-img">
                <Link href={item.link}>
                  <img src={item.img} alt={`about-${idx + 1}`} />
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AboutSection;
