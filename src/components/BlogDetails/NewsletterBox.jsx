import React from "react";
import Image from 'next/image';
import Link from 'next/link';


const NewsletterBox= () => {
  return (
    <div className="item_details-newslatter xb-border mt-80">
      <div className="xb-item--holder ul_li_between align-items-start">
        <div className="xb-item-heading_info">
          <h3 className="item_details_info_heading">Subscribe to our updates</h3>
          <p>
            Stay up to date! Get all of our resources and news <br />
            delivered straight to your inbox.
          </p>
        </div>

        <Link href="#" className="xb-item--bell-icon xb-border">
          <Image src="/images/icon/bell-icon.svg" alt="Notification Bell" width={500} height={500} />
        </Link>
      </div>

      <div className="xb-item--item-input_field pos-rel">
        <input type="email" placeholder="aivora@example.com" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsletterBox;
