"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation";

import MegaMenu1 from "./MegaMenu1";
import MegaMenuServices from "./MegaMenu2";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const lastScrollY = useRef(0);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Scroll up → show sticky smoothly
      if (currentScroll < lastScrollY.current && currentScroll > 100) {
        setIsSticky(true);
        setTimeout(() => setIsVisible(true), 10); // delay for smooth entrance
      }
      // Scroll down → hide sticky instantly
      else if (currentScroll > lastScrollY.current) {
        setIsVisible(false);
        setTimeout(() => setIsSticky(false), 100); // small delay for hide
      }

      // Reset if near top
      if (currentScroll <= 100) {
        setIsSticky(false);
        setIsVisible(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleSubmit = (e) => e.preventDefault();

  return (
    <header
      id="xb-header-area"
      className="header-area header-style--one header-transparent is-sticky"
    >
      <div
        className={`xb-header xb-sticky-stt ${isSticky ? "xb-header-area-sticky" : ""
          } ${isVisible ? "xb-header-fixed" : "xb-header-hidden"}`}
      >
        <div className="container mxw-1650">
          <div className="header__wrap ul_li_between">
            {/* Logo */}
            <div className="xb-header-logo" style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }} onClick={() => router.push('/')}>
              {/* <Link href="/" className="logo1" onClick={handleClick}> */}
              <Image style={{ width: '50px' }} src="/images/Asset 1.png" alt="Logo" width={500} height={500} />
              {/* </Link> */}
              {/* <Link href="/" className="logo1" onClick={handleClick}> */}
              <Image style={{ width: '150px' }} src="/images/Asset 2.png" alt="Logo" width={500} height={500} />
              {/* </Link> */}
            </div>

            {/* Desktop Menu */}
            <div className="main-menu__wrap navbar navbar-expand-lg p-0">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li>
                    <Link href="/" onClick={handleClick}>
                      <span>Home</span>
                    </Link>
                  </li>
                  {/* <li className="menu-item-has-children active">
                    <Link href="/" onClick={handleClick}>
                      <span>Home</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/" onClick={handleClick}>
                          <span>Ai Agency</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ai-marketing" onClick={handleClick}>
                          <span>Ai Marketing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ai-chatbot" onClick={handleClick}>
                          <span>Ai Chatbot</span>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li>
                    <Link href="/about" onClick={handleClick}>
                      <span>About Us</span>
                    </Link>
                  </li>

                  {/* MegaMenu */}
                  {/* <li className="menu-item-has-children megamenu">
                    <Link href="#" onClick={handleClick}>
                      <span>Pages</span>
                    </Link>
                    <MegaMenu1 />
                  </li> */}

                  <li className="menu-item-has-children megamenu">
                    <Link href="#" onClick={handleClick}>
                      <span>Devices</span>
                    </Link>
                    <MegaMenuServices />
                  </li>

                  {/* <li className="menu-item-has-children">
                    <Link href="/blog" onClick={handleClick}>
                      <span>Blog</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/blog" onClick={handleClick}>
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details" onClick={handleClick}>
                          <span>Blog Details</span>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li>
                    <Link href="/contact" onClick={handleClick}>
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Button */}
            <div className="header-btn">
              <Link href="/contact" className="thm-btn" onClick={handleClick}>
                let's talk
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="header-bar-mobile side-menu d-lg-none">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobileActive(!mobileActive)}
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="xb-header-wrap">
            <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
              <div className="xb-header-menu-scroll">
                <div
                  className="xb-menu-close xb-hide-xl xb-close"
                  onClick={() => setMobileActive(false)}
                ></div>

                <div className="xb-logo-mobile xb-hide-xl">
                  <Link href="/" rel="home">
                    <Image src="/images/logo/logo.svg" alt="Logo" width={500} height={500} />
                  </Link>
                </div>

                <div className="xb-header-mobile-search xb-hide-xl">
                  <form role="search" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Search..."
                      name="s"
                      className="search-field"
                    />
                    <button className="search-submit" type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>

                <nav className="xb-header-nav">
                  <MobileMenu />
                </nav>
              </div>
            </div>
            <div className="xb-header-menu-backdrop"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
