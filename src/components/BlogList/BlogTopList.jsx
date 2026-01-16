import React from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// IMAGES
const blog1 = "/images/blog/img01.jpg";
const blog2 = "/images/blog/img02.jpg";
const blog3 = "/images/blog/img03.jpg";
const blog4 = "/images/blog/img04.jpg";




const blogSlides = [
  {
    img: blog1,
    tag: "# ai business tips",
    title: "We’re live! explore our smart AI solutions for the future of business.",
    content:
      "We’re live! Discover our smart AI solutions designed to help businesses automate tasks, gain insights, and grow faster.",
  },
  {
    img: blog2,
    tag: "# chatbots tips",
    title: "Why AI chatbots are the next big thing in business communication..",
    content:
      "AI chatbots are reshaping communication with instant support and personalized responses, reducing business costs.",
  },
  {
    img: blog3,
    tag: "# ai business tips",
    title: "How AI agencies help small businesses compete with global brands..",
    content:
      "AI agencies empower small businesses with tools like analytics, automation, and personalized marketing.",
  },
  {
    img: blog4,
    tag: "# ai business tips",
    title: "Top services you should expect from a modern AI agency..",
    content:
      "Modern AI agencies offer chatbots, predictive analytics, personalized marketing, and process automation.",
  },
];

const BlogSlider= () => {
  return (
    <section className="blog pt-70">
      <div className="container">
        <div className="blog-slider pos-rel">

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".blog-swiper-btn.swiper-button-next",
              prevEl: ".blog-swiper-btn.swiper-button-prev",
            }}
            className="swiper-container"
          >
            {blogSlides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="blog-slide-item">
                  <div className="xb-item--img">
                    <img src={item.img} alt="Blog" />
                  </div>

                  <div className="xb-item--holder">
                    <a href="#!" className="xb-item--tag xb-border">{item.tag}</a>

                    <h2 className="xb-item--title">
                      <a href="/blog-details">{item.title}</a>
                    </h2>

                    <p className="xb-item--content">{item.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PAGINATION */}
          <div className="swiper-pagination"></div>

          {/* NAV BUTTONS */}
          <div className="blog-item_button">
            <div className="blog-swiper-btn swiper-button-prev">
              <Image src="/images/shape/prev-shape.png" alt="" width={500} height={500} />
              <i className="fa-regular fa-angles-left"></i>
            </div>

            <div className="blog-swiper-btn swiper-button-next">
              <Image src="/images/shape/next-shape.png" alt="" width={500} height={500} />
              <i className="fa-regular fa-angles-right"></i>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
