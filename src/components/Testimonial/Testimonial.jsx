import React, { useEffect } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// ✅ Images








const testimonials = [
  {
    id: 1,
    source: "GoodFirms",
    rating: "5.0",
    content:
      '“We got the Clover Compact from POSVerge, and honestly, it just made things easier. Billing is fast, staff picked it up in a day, and we don’t have to deal with messy counters anymore. It handles everything we need without slowing us down.”',
    name: "Riya Mehta",
    designation: "Manager - Trendico",
    avatar: "/images/t3.jpg",
  },
  {
    id: 2,
    source: "Clutch",
    rating: "4.9",
    content:
      '“POSVerge suggested a PAX POS for our store, and it’s been solid so far. Payments go through quickly, and it rarely gives us any trouble. Customers like the tap option, and we like how simple it is to use.”',
    name: "Miguel Torres",
    designation: "CEO & Funder - DocFlow",
    avatar: "/images/t2.jpg",
  },
  {
    id: 3,
    source: "Clutch",
    rating: "5.0",
    content:
      '“We switched to Clover through POSVerge, and it was a smooth move. Sales tracking and reports are clear, and closing the day takes way less time now. It just works way better than what I expected it to.”',
    name: "Sebastian Clark",
    designation: "Manager - SwiftLogix",
    avatar: "/images/t1.jpg",
  },
  {
    id: 4,
    source: "GoodFirms",
    rating: "5.0",
    content:
      '“Running a convenience store gets busy, and the NRS POS from POSVerge helps a lot. Inventory updates are automatic and checkout is faster. It’s one less thing to worry about during rush hours.”',
    name: "Priya Ramirez",
    designation: "CEO - BrightNest",
    avatar: "/images/t4.jpg",
  },
  {
    id: 5,
    source: "Clutch",
    rating: "4.7",
    content:
      '“We bought our receipt printer and barcode scanner from POSVerge along with the POS. Everything connected easily and worked right away. No extra setup stress, which was a big relief.”',
    name: "Sebastian Clark",
    designation: "Director - Finexa Capital",
    avatar: "/images/t5.jpg",
  },
  {
    id: 6,
    source: "Clutch",
    rating: "5.0",
    content:
      '“What I liked about POSVerge is that they didn’t push just one product. They helped us choose what fit our shop best. From the POS device we got to the scanner they suggested, everything runs smoothly now.”',
    name: "Sebastian Clark",
    designation: "Manager - SwiftLogix",
    avatar: "/images/t1.jpg",
  },
];

const TestimonialSection = () => {
  // useEffect(() => {
  //   const bgEl = document.querySelector(".testimonial.bg_img");
  //   if (bgEl) bgEl.style.backgroundImage = `url(/images/bg/testimonial-bg.png)`;
  // }, []);

  return (
    <section className="testimonial pb-150 bg_img" style={{ backgroundImage: `url(/images/bg/testimonial-bg.png)` }}>
      <div className="container">
        <div className="sec-title sec-title-center tes-sec-title text-center mb-50">
          <span className="sub-title mb-15">Our Testimonial</span>
          <h2 className="title">
            Hear from our
            <Image src="/images/icon/animated-gif03.gif" alt="shape" width={500} height={500} /> happy customers
          </h2>
        </div>
      </div>

      <div className="xb-testimonial-slider">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={400}
          spaceBetween={30}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1700: { slidesPerView: 5 },
            1600: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="xb-testimonial-item">
                <div className="xb-item--inner xb-border">
                  <ul className="xb-item--rating list-unstyled ul_li">
                    <li>
                      <i className="fa-solid fa-star-sharp"></i>
                    </li>
                    <li>{item.source}</li>
                    <li>{item.rating}</li>
                  </ul>
                  <p className="xb-item--content">{item.content}</p>
                  <div className="xb-item--author ul_li">
                    <div className="xb-item--avatar">
                      <img src={item.avatar} alt={item.name} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">{item.name}</h3>
                      <span className="xb-item--desig">{item.designation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
