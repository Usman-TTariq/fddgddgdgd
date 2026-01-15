import React from "react";
import Image from 'next/image';

import Link from "next/link";

const PageTitle = ({ pageTitle, pagesub }) => {
  return (
    <section
      className="breadcrumb bg_img"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="breadcrumb__content">
          <ul className="breadcrumb__list clearfix list-unstyled">
            <li className="breadcrumb-item">
               <Link href="/">Home</Link>
            </li>
             {pagesub && <li className="breadcrumb-item">{pagesub}</li>}
          </ul>
          {pageTitle && <h2 className="breadcrumb__title">{pageTitle}</h2>}
        </div>
      </div>
    </section>
  );
};

export default PageTitle;