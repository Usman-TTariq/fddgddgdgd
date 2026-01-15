import React, { useEffect } from "react";
import Image from 'next/image';
import Marquee from "react-fast-marquee";


// Animated GIFs




// About images (3–4 images)



import Link from 'next/link';


const AboutSection = () => {
  // useEffect(() => {
  //   const bgEl = document.querySelector(".xb-about-img-wrap");
  //   if (bgEl) bgEl.style.backgroundImage = `url(/images/bg/about-bg.png)`;
  // }, []);

  const aboutImages = ["/images/a1.webp", "/images/a2.webp", "/images/m1.webp"];

  return (
    <section className="about pt-140">
      <div className="container">
        <div className="sec-title about-sec-title mb-75">
          <span className="sub-title">Who We are?</span>
          <h2 className="title">
            We helping
            <span>
              <Image src="/images/icon/original-66948a0d81d.gif" alt="animation" width={500} height={500} />
            </span>{" "}
            grow businesses and
            <span>
              <Image src="/images/icon/0deec720000b2066289b.gif" alt="animation" width={500} height={500} />
            </span>
            scale with smart, data-driven AI agency{" "}
            <span>
              <Image src="/images/icon/b10c3e43e836d32554bf.gif" alt="animation" width={500} height={500} />
            </span>
          </h2>
        </div>
      </div>

      {/* ✅ One single marquee with all 3 images */}
      <div className="xb-about-img-wrap bg_img wow" style={{ backgroundImage: `url(/images/bg/about-bg.png)` }}>
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
          {aboutImages.map((img, idx) => (
            <div key={idx} className="xb-about-img-item img-hove-effect">
              <div className="xb-img">
                <Link href="/service-details">
                  <img src={img} alt={`about-${idx + 1}`} />
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
