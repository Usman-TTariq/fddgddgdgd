import React from "react";
import Image from 'next/image';
import Link from 'next/link';

// Image imports







const RelatedBlog= () => {
  return (
    <div className="related-blog pt-130">
      <h2 className="related-blog-title">Browse related blog</h2>

      <div className="row mt-none-30">

        {/* BLOG ITEM 1 */}
        <div className="col-lg-4 col-md-6 mt-30">
          <div className="xb-blog-item xb-small-blog-item">
            <div className="xb-item--inner img-hove-effect xb-border">
              <div className="xb-img">
                <Link href="/blog-details"><Image src="/images/blog/img02.jpg" alt="bimage" width={500} height={500} /></Link>
                <Link href="/blog-details"><Image src="/images/blog/img02.jpg" alt="bimage" width={500} height={500} /></Link>
                <Link href="/blog-details"><Image src="/images/blog/img02.jpg" alt="bimage" width={500} height={500} /></Link>
                <Link href="/blog-details"><Image src="/images/blog/img02.jpg" alt="bimage" width={500} height={500} /></Link>
              </div>

              <div className="xb-item--holder">
                <ul className="xb-item--meta list-unstyled ul_li">
                  <li>
                    <Image src="/images/icon/blog-icon01.svg" alt="icon" width={500} height={500} />
                    chatbots tips
                  </li>
                  <li>
                    <Image src="/images/icon/blog-icon02.svg" alt="icon" width={500} height={500} />
                    April 27, 2025
                  </li>
                </ul>

                <h2 className="xb-item--title border-effect-2">
                  <Link href="/blog-details">
                    AI chatbots vs human support which is best for?..
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG ITEM 2 */}
        <div className="col-lg-4 col-md-6 mt-30">
          <div className="xb-blog-item xb-small-blog-item">
            <div className="xb-item--inner img-hove-effect xb-border">
              <div className="xb-img">
                <Link href="/blog-details"><Image src="/images/blog/img03.jpg" alt="bimage" width={500} height={500} /></Link>
                <Link href="/blog-details"><Image src="/images/blog/img03.jpg" alt="bimage" width={500} height={500} /></Link>
                <Link href="/blog-details"><Image src="/images/blog/img03.jpg" alt="bimage" width={500} height={500} /></Link>
                <Link href="/blog-details"><Image src="/images/blog/img03.jpg" alt="bimage" width={500} height={500} /></Link>
              </div>

              <div className="xb-item--holder">
                <ul className="xb-item--meta list-unstyled ul_li">
                  <li>
                    <Image src="/images/icon/blog-icon01.svg" alt="icon" width={500} height={500} />
                    ai business
                  </li>
                  <li>
                    <Image src="/images/icon/blog-icon02.svg" alt="icon" width={500} height={500} />
                    March 17, 2025
                  </li>
                </ul>

                <h2 className="xb-item--title border-effect-2">
                  <Link href="/blog-details">
                    How E-commerce brands use AI to increase sales..
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG ITEM 3 */}
        <div className="col-lg-4 col-md-6 mt-30">
          <div className="xb-blog-item xb-small-blog-item">
            <div className="xb-item--inner img-hove-effect xb-border">
              <div className="xb-img">
                <Link href="/blog-details"><Image src="/images/blog/img12.jpg" alt="bimage" width={500} height={500} /></Link>
                <Link href="/blog-details"><Image src="/images/blog/img12.jpg" alt="bimage" width={500} height={500} /></Link>
                <Link href="/blog-details"><Image src="/images/blog/img12.jpg" alt="bimage" width={500} height={500} /></Link>
                <Link href="/blog-details"><Image src="/images/blog/img12.jpg" alt="bimage" width={500} height={500} /></Link>
              </div>

              <div className="xb-item--holder">
                <ul className="xb-item--meta list-unstyled ul_li">
                  <li>
                    <Image src="/images/icon/blog-icon01.svg" alt="icon" width={500} height={500} />
                    ai business tips
                  </li>
                  <li>
                    <Image src="/images/icon/blog-icon02.svg" alt="icon" width={500} height={500} />
                    March 22, 2025
                  </li>
                </ul>

                <h2 className="xb-item--title border-effect-2">
                  <Link href="/blog-details">
                    How AI is transforming modern business..
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RelatedBlog;
