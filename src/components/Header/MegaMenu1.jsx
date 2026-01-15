import React from "react";
import Image from 'next/image';
import Link from 'next/link';










const MegaMenu1= () => {
  return (
    <ul className="submenu">
      <li>
        <div className="mega_menu_wrapper">
          <div className="container-fluid p-0">
            <div className="mega_menu_wrapper_inner">
              <div className="row mt-none-30">
                {/* ---------- LEFT SIDE ---------- */}
                <div className="col-xl-8 col-lg-12 mt-30">
                  <div className="megamenu_pages_wrapper">
                    <div className="row g-10">
                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/service">
                          <span className="icon_title_wrap">
                            <small className="iconbox_icon">
                              <Image src="/images/icon/m_01.svg" alt="Service Icon" width={500} height={500} />
                            </small>
                            <small className="iconbox_title">Services</small>
                          </span>
                          <span className="description mb-0">
                            Happy to help you!
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link
                          className="iconbox_block_2" href="/service-details"
                        >
                          <span className="icon_title_wrap">
                            <small className="iconbox_icon">
                              <Image src="/images/icon/m_01.svg" alt="Service Details Icon" width={500} height={500} />
                            </small>
                            <small className="iconbox_title">
                              Service details
                            </small>
                          </span>
                          <span className="description mb-0">
                            Happy to help you!
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/career">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src="/images/icon/m_03.svg" alt="Career Icon" width={500} height={500} />
                            </span>
                            <small className="iconbox_title">Career</small>
                            <span className="badge">We’re Hiring</span>
                          </span>
                          <span className="description mb-0">
                            Open jobs to join our team.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/career-details">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src="/images/icon/m_02.svg" alt="Career Details Icon" width={500} height={500} />
                            </span>
                            <small className="iconbox_title">
                              Career details
                            </small>
                          </span>
                          <span className="description mb-0">
                            We are friendly — join our team.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/project">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src="/images/icon/m_03.svg" alt="Project Icon" width={500} height={500} />
                            </span>
                            <small className="iconbox_title">Project</small>
                          </span>
                          <span className="description mb-0">
                            Explore our all case studies.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/project-details">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src="/images/icon/m_03.svg" alt="Project Details Icon" width={500} height={500} />
                            </span>
                            <small className="iconbox_title">
                              Project details
                            </small>
                          </span>
                          <span className="description mb-0">
                            Explore our all case studies.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/team">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src="/images/icon/m_04.svg" alt="Team Icon" width={500} height={500} />
                            </span>
                            <small className="iconbox_title">Our team</small>
                          </span>
                          <span className="description mb-0">
                            We are friendly — join our team.
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* ---------- BUTTONS & REVIEWS ---------- */}
                    <ul className="btns_group mt-80 p-0 ul_li_between">
                      <li>
                        <Link className="thm-btn agency-btn megamenu-btn" href="/contact">
                          <span className="text">Get free consultation</span>
                          <span className="arrow">
                            <span className="arrow-icon">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.22852"
                                  y="17.3296"
                                  width="17.888"
                                  height="2.27149"
                                  transform="rotate(-40.2798 5.22852 17.3296)"
                                  fill="white"
                                />
                                <rect
                                  x="7.75781"
                                  y="6.25635"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 7.75781 6.25635)"
                                  fill="white"
                                />
                                <rect
                                  x="10.959"
                                  y="6.52002"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 10.959 6.52002)"
                                  fill="white"
                                />
                                <rect
                                  x="14.1562"
                                  y="6.78516"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 14.1562 6.78516)"
                                  fill="white"
                                />
                                <rect
                                  x="17.0957"
                                  y="10.25"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 17.0957 10.25)"
                                  fill="white"
                                />
                                <rect
                                  x="16.832"
                                  y="13.4517"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.832 13.4517)"
                                  fill="white"
                                />
                                <rect
                                  x="16.5684"
                                  y="16.6538"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.5684 16.6538)"
                                  fill="white"
                                />
                              </svg>

                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.22852"
                                  y="17.3296"
                                  width="17.888"
                                  height="2.27149"
                                  transform="rotate(-40.2798 5.22852 17.3296)"
                                  fill="white"
                                />
                                <rect
                                  x="7.75781"
                                  y="6.25635"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 7.75781 6.25635)"
                                  fill="white"
                                />
                                <rect
                                  x="10.959"
                                  y="6.52002"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 10.959 6.52002)"
                                  fill="white"
                                />
                                <rect
                                  x="14.1562"
                                  y="6.78516"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 14.1562 6.78516)"
                                  fill="white"
                                />
                                <rect
                                  x="17.0957"
                                  y="10.25"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 17.0957 10.25)"
                                  fill="white"
                                />
                                <rect
                                  x="16.832"
                                  y="13.4517"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.832 13.4517)"
                                  fill="white"
                                />
                                <rect
                                  x="16.5684"
                                  y="16.6538"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.5684 16.6538)"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </li>

                      <li>
                        <div className="review_short_info_2">
                          <div className="review_admin_logo">
                            <Image src="/images/logo/client-logo.svg" alt="Client 1" width={500} height={500} />
                          </div>
                          <div className="review_info_content">
                            <ul className="rating_block unordered_list">
                              {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                  <li key={i}>
                                    <i className="fas fa-star"></i>
                                  </li>
                                ))}
                            </ul>
                            <div className="review_counter">
                              From <b>200+</b> reviews
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="review_short_info_2">
                          <div className="review_admin_logo">
                            <Image src="/images/logo/client-logo2.svg" alt="Client 2" width={500} height={500} />
                          </div>
                          <div className="review_info_content">
                            <ul className="rating_block unordered_list">
                              {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                  <li key={i}>
                                    <i className="fas fa-star"></i>
                                  </li>
                                ))}
                            </ul>
                            <div className="review_counter">
                              From <b>150+</b> reviews
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ---------- RIGHT SIDE ---------- */}
                <div className="col-xl-4 col-lg-12 mt-30">
                  <div className="mega_menu_left">
                    <div className="author_box">
                      <div className="author_image">
                        <Image src="/images/blog/mega-robot.jpg" alt="AI Robot" width={500} height={500} />
                      </div>
                      <div className="author_box_content">
                        <h3 className="mb-60 text-white">
                          Looking for custom AI solutions tailored to you?
                        </h3>
                        <Link className="thm-btn agency-btn megamenu-btn" href="/contact">
                          <span className="text">Contact us now</span>
                          <span className="arrow">
                            <span className="arrow-icon">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.22852"
                                  y="17.3296"
                                  width="17.888"
                                  height="2.27149"
                                  transform="rotate(-40.2798 5.22852 17.3296)"
                                  fill="white"
                                />
                                <rect
                                  x="7.75781"
                                  y="6.25635"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 7.75781 6.25635)"
                                  fill="white"
                                />
                                <rect
                                  x="10.959"
                                  y="6.52002"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 10.959 6.52002)"
                                  fill="white"
                                />
                                <rect
                                  x="14.1562"
                                  y="6.78516"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 14.1562 6.78516)"
                                  fill="white"
                                />
                                <rect
                                  x="17.0957"
                                  y="10.25"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 17.0957 10.25)"
                                  fill="white"
                                />
                                <rect
                                  x="16.832"
                                  y="13.4517"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.832 13.4517)"
                                  fill="white"
                                />
                                <rect
                                  x="16.5684"
                                  y="16.6538"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.5684 16.6538)"
                                  fill="white"
                                />
                              </svg>

                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.22852"
                                  y="17.3296"
                                  width="17.888"
                                  height="2.27149"
                                  transform="rotate(-40.2798 5.22852 17.3296)"
                                  fill="white"
                                />
                                <rect
                                  x="7.75781"
                                  y="6.25635"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 7.75781 6.25635)"
                                  fill="white"
                                />
                                <rect
                                  x="10.959"
                                  y="6.52002"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 10.959 6.52002)"
                                  fill="white"
                                />
                                <rect
                                  x="14.1562"
                                  y="6.78516"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 14.1562 6.78516)"
                                  fill="white"
                                />
                                <rect
                                  x="17.0957"
                                  y="10.25"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 17.0957 10.25)"
                                  fill="white"
                                />
                                <rect
                                  x="16.832"
                                  y="13.4517"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.832 13.4517)"
                                  fill="white"
                                />
                                <rect
                                  x="16.5684"
                                  y="16.6538"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.5684 16.6538)"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="author_box">
                      <div className="author_image">
                        <Image src="/images/avatar/mega-avatar.jpg" alt="CEO Avatar" width={500} height={500} />
                      </div>
                      <div className="author_box_content">
                        <p className="mb-45 text-white">
                          “As CEO of Telligy, I’ve focused on clarity,
                          efficiency, and results — turning ideas into real
                          value without reinventing the wheel.”
                        </p>
                        <div className="author_holder">
                          <h4 className="author_name text-white">
                            Sebastian Patel
                          </h4>
                          <span className="author_designation text-white">
                            CEO & Chairman at, <Link href="/">Aivora</Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ---------- END RIGHT SIDE ---------- */}
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MegaMenu1;
