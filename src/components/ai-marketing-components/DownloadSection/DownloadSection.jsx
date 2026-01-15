import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

// ✅ Import images






const DownloadSection= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bookList = [
    {
      title: "The Ultimate Guide to Smarter Marketing Campaigns",
      img: pdfBook1,
    },
    {
      title: "Audience Insights Playbook: Turning Data Into Growth",
      img: pdfBook2,
    },
    {
      title: "The Complete Handbook for Optimizing Media Performance",
      img: pdfBook3,
    },
  ];

  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="download pt-80">
      <div className="container-fluid">
        <div className="ai-download-wrap ul_li_between mlr-20">
          <div className="sec-title-three download-sec-title">
            <span className="sub-title mb-25">Download Guide</span>
            <h2 className="title xb-text-reveal">
              Download the Complete Playbook
            </h2>
          </div>

          <div
            className="ai-download-inner ul_li wow fadeInRightBig"
            data-wow-duration="600ms"
          >
            <div className="bg-shape">
              <Image src="/images/download/net-img.png" alt="background" width={500} height={500} />
            </div>

            <div className="ai-download-book">
              {bookList.map((book, index) => (
                <div
                  key={index}
                  className={`book-item ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <img src={book.img} alt={`book ${index + 1}`} />
                </div>
              ))}
            </div>

            <ul className="ai-download-book-list list-unstyled">
              {bookList.map((book, index) => (
                <li
                  key={index}
                  className={`list ${index === currentIndex ? "current" : ""}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <Link href="/service-details">
                    {book.title}
                    <Image src="/images/icon/doenload-icon.svg" alt="icon" width={500} height={500} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
