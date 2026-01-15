import React from "react";
import Image from 'next/image';

// --- contact images ---




// --- arrow icons ---


import Link from 'next/link';

// ---- contact items data ----
const contactData = [
  {
    location: "San Francisco, USA",
    phone: "+(1) 561 555 7689",
    email: "aivora@usadomain.com",
    img: img01,
  },
  {
    location: "London, United Kingdom",
    phone: "+1 (416) 123-4567",
    email: "aivora@ukdomain.com",
    img: img02,
  },
  {
    location: "Toronto, Canada",
    phone: "+1 (416) 123-4567",
    email: "aivora@cadomain.com",
    img: img03,
  },
];

const ContactInfoSection= () => {
  return (
    <section className="contact pb-150">
      <div className="container">
        <div className="row mt-none-30">
          {contactData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mt-30" key={index}>
              <div className="xb-contact-items img-hove-effect xb-border">
                <div className="xb-item--inner">

                  {/* Multiple hover images */}
                  <div className="xb-img">
                    <Link href="/contact"><img src={item.img} alt="location" /></Link>
                    <Link href="/contact"><img src={item.img} alt="location" /></Link>
                    <Link href="/contact"><img src={item.img} alt="location" /></Link>
                    <Link href="/contact"><img src={item.img} alt="location" /></Link>
                  </div>

                  {/* Content */}
                  <div className="xb-item--holder">
                    <p className="xb-item--location">{item.location}</p>
                    <span className="xb-item--contact_info">{item.phone}</span>
                    <span className="xb-item--contact_info">{item.email}</span>

                    <Link href="/contact" className="thm-btn form-btn mt-45">
                      VIEW LOCATION
                      <span className="xb-icon">
                        <Image src="/images/icon/rotate-arrow-white02.svg" alt="icon" width={500} height={500} />
                        <Image src="/images/icon/rotate-arrow-black03.svg" alt="icon" width={500} height={500} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
