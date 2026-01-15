import React, { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';



// Blog images




// Icons




const BlogSection= () => {
  useEffect(() => {
    const bgEl = document.querySelector(".blog.bg_img");
    if (bgEl) {
      // bgEl.style.backgroundImage = `url(${blogBg})`;
    }
  }, []);

  return (
    <section className="blog pt-150 bg_img">
      <div className="container">
        <div className="row mt-none-30">
          {/* Left Column */}
          <div className="col-lg-4 mt-30">
            <div className="sec-title blog-sec-title mb-70">
              <span className="sub-title mb-15">Our Latest News</span>
              <h2 className="title">
                Our latest news <Image src="/images/icon/original-9e54f87f13d.gif" alt="shape" width={500} height={500} />
              </h2>
            </div>
            <div className="blog-btn">
              <Link className="thm-btn agency-btn" href="/blog">
                <span className="text">view more blog</span>
                <span className="arrow">
                  <span className="arrow-icon">
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
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-8 mt-30">
            <div className="row mt-none-30">
              {/* Large Blog Post */}
              <div className="col-lg-12 mt-30">
                <div className="xb-blog-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                  <div className="xb-item--inner img-hove-effect xb-border">
                    <div className="xb-img">
                      {[...Array(4)].map((_, i) => (
                        <Link href="/blog-details" key={i}>
                          <Image src="/images/blog/img01.jpg" alt="blog" width={500} height={500} />
                        </Link>
                      ))}
                    </div>
                    <div className="xb-item--holder">
                      <ul className="xb-item--meta list-unstyled ul_li">
                        <li>
                          <Image src="/images/icon/blog-icon01.svg" alt="icon" width={500} height={500} /> ai business tips
                        </li>
                        <li>
                          <Image src="/images/icon/blog-icon02.svg" alt="icon" width={500} height={500} /> March 24, 2025
                        </li>
                      </ul>
                      <h2 className="xb-item--title">
                        <Link href="/blog-details">
                          How AI is transforming modern business operations and driving innovation — everything you
                          need to know..
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Blog 1 */}
              <div className="col-lg-6 col-md-6 mt-30">
                <div className="xb-blog-item xb-small-blog-item wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
                  <div className="xb-item--inner img-hove-effect xb-border">
                    <div className="xb-img">
                      {[...Array(4)].map((_, i) => (
                        <Link href="/blog-details" key={i}>
                          <Image src="/images/blog/img02.jpg" alt="blog" width={500} height={500} />
                        </Link>
                      ))}
                    </div>
                    <div className="xb-item--holder">
                      <ul className="xb-item--meta list-unstyled ul_li">
                        <li>
                          <Image src="/images/icon/blog-icon01.svg" alt="icon" width={500} height={500} /> chatbots tips
                        </li>
                        <li>
                          <Image src="/images/icon/blog-icon02.svg" alt="icon" width={500} height={500} /> April 27, 2025
                        </li>
                      </ul>
                      <h2 className="xb-item--title">
                        <Link href="/blog-details">AI chatbots vs human support — which is best for you?</Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Blog 2 */}
              <div className="col-lg-6 col-md-6 mt-30">
                <div className="xb-blog-item xb-small-blog-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                  <div className="xb-item--inner img-hove-effect xb-border">
                    <div className="xb-img">
                      {[...Array(4)].map((_, i) => (
                        <Link href="/blog-details" key={i}>
                          <Image src="/images/blog/img03.jpg" alt="blog" width={500} height={500} />
                        </Link>
                      ))}
                    </div>
                    <div className="xb-item--holder">
                      <ul className="xb-item--meta list-unstyled ul_li">
                        <li>
                          <Image src="/images/icon/blog-icon01.svg" alt="icon" width={500} height={500} /> ai business
                        </li>
                        <li>
                          <Image src="/images/icon/blog-icon02.svg" alt="icon" width={500} height={500} /> March 17, 2025
                        </li>
                      </ul>
                      <h2 className="xb-item--title">
                        <Link href="/blog-details">How eCommerce brands use AI to increase sales..</Link>
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

export default BlogSection;
