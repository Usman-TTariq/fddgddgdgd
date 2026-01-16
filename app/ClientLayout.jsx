"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/css/fontawesome.css";
import "../src/css/themify-icons.css";
import "../src/css/animate.css";
import "../src/css/mousecursor.css";
import "../src/css/imageRevealHover.css";
import "../src/css/custom-fonts.css";
import "../src/css/main.css";
import "../src/index.css";
import WowInit from "../src/components/wowInit/wowInit";
import ScrollToTop from "../src/components/ScrollToTop";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function ClientLayout({ children }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // SplitText Reveal Animation
    const applySplitTextReveal = () => {
      const elements = document.querySelectorAll(".xb-text-reveal");
      if (!elements.length) return;

      elements.forEach((el) => {
        if (el.dataset.splitApplied === "true") return;
        el.dataset.splitApplied = "true";

        try {
          const split = new SplitText(el, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });

          gsap.set(split.chars, { opacity: 0.3, x: -7 });

          gsap.to(split.chars, {
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "top 60%",
              scrub: 1,
              markers: false,
            },
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
          });
        } catch (error) {
          console.warn("SplitText failed:", error);
        }
      });
    };

    if (typeof document === 'undefined') return;
    
    const timeout = setTimeout(applySplitTextReveal, 400);

    const observer = new MutationObserver(() => {
      requestAnimationFrame(applySplitTextReveal);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      clearTimeout(timeout);
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="App lenis" id="scrool">
      <WowInit />
      <ScrollToTop />
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

