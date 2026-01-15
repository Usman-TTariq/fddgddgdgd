import React from "react";
import Image from 'next/image';
import Slider from "react-slick";







const partners = [
  { pImg: pimg1 },
  { pImg: pimg2 },
  { pImg: pimg3 },
  { pImg: pimg4 },
  { pImg: pimg5 },
  { pImg: pimg3 },
];

const PartnerSection = ({ pClass = "" }) => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 991, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className={`wpo-partners-section section-padding ${pClass}`}>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="partner-grids partners-slider">
              <Slider {...settings}>
                {partners.map((partner, index) => (
                  <div className="grid" key={index}>
                    <img
                      src={partner.pImg}
                      alt={`Partner ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
