import React from "react";
import Image from 'next/image';
import Link from 'next/link';








const ItemDetailsContent= () => {
  return (
    <div className="item_details_content pb-80">
      <ul className="post_meta ul_li list-unstyled mb-25">
        <li>
          <Link href="/blog-details">
            <span className="meta_label1">#ai tools tips</span>
          </Link>
        </li>

        <li>
          <Link href="/blog-details">
            <span className="meta_icon">
              <Image src="/images/icon/calendar-icon.svg" alt="Calendar" width={500} height={500} />
            </span>
            <span className="meta_label">Last Update: 02/12/2025</span>
          </Link>
        </li>
      </ul>

      <h2 className="details-content-title mb-15">
        How our AI agency delivers next-gen <br /> automation tools to help
        businesses.
      </h2>

      <p className="mb-35">
        Our AI agency builds next-gen automation tools that help businesses
        streamline operations, reduce manual work, and improve overall
        efficiency...
      </p>

      {/* AUTHOR / META INFO */}
      <div className="post-meta-wrap">
        <div className="row mt-none-15">
          {/* LEFT SIDE */}
          <div className="col-md-6 mt-15">
            <ul className="post_meta list-unstyled ul_li">
              <li>
                <Link href="/blog-details">
                  <span className="meta_icon">
                    <Image src="/images/icon/user-gradient-icon.svg" alt="User" width={500} height={500} />
                  </span>
                  <span className="meta_label">by Madura</span>
                </Link>
              </li>

              <li>
                <Link href="/blog-details">
                  <span className="meta_icon">
                    <Image src="/images/icon/comment-icon.svg" alt="Comments" width={500} height={500} />
                  </span>
                  <span className="meta_label">50 Comments</span>
                </Link>
              </li>

              <li>
                <Link href="/blog-details">
                  <span className="meta_icon">
                    <Image src="/images/icon/eye-icon.svg" alt="Views" width={500} height={500} />
                  </span>
                  <span className="meta_label">20k Views</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 mt-15">
            <ul className="post_meta list-unstyled ul_li justify-content-md-end">
              <li>
                <Link href="/blog-details">
                  <span className="meta_icon">
                    <Image src="/images/icon/link-icon.svg" alt="Copy Link" width={500} height={500} />
                  </span>
                  <span className="meta_label">Copy Link</span>
                </Link>
              </li>

              <li>
                <Link href="/blog-details">
                  <span className="meta_icon">
                    <Image src="/images/icon/bookmark-icon.svg" alt="Bookmark" width={500} height={500} />
                  </span>
                  <span className="meta_label">Bookmark</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsContent;
