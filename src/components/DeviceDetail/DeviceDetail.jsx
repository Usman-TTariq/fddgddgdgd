import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const DeviceDetail = ({ device }) => {
    const {
        title,
        category,
        price,
        image,
        features,
        description,
        categoryLink = "/clover"
    } = device;

    return (
        <section className="device-detail-section pt-140 pb-140">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left - Product Image */}
                    <div className="col-lg-6">
                        <div className="device-image-wrapper">
                            <div className="single-item-image img-hove-effect">
                                <div className="xb-img">
                                    <Image 
                                        src={image || "/images/service/img13.jpg"} 
                                        alt={title} 
                                        width={600} 
                                        height={600}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Product Details */}
                    <div className="col-lg-6">
                        <div className="device-details-content">
                            <h1 className="device-title mb-20">{title}</h1>
                            
                            {/* <div className="device-category mb-20">
                                <Link href={categoryLink} className="category-link">
                                    {category}
                                </Link>
                            </div> */}

                            <div className="device-price mb-30">
                                <button className="price-btn" style={{ fontSize: '18px', background: '#00ff97', color: '#000', fontWeight: 'bold' }}>{price}</button>
                            </div>

                            {description && (
                                <div className="device-description mb-30">
                                    <p>{description}</p>
                                </div>
                            )}

                            {features && features.length > 0 && (
                                <div className="device-features mb-40">
                                    <h3 className="features-title mb-20">Features Include:</h3>
                                    <ul className="feature-list list-unstyled">
                                        {features.map((feature, index) => (
                                            <li key={index} className="feature-item mb-15">
                                                <span className="feature-icon">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            opacity="0.2"
                                                            d="M24 12C24 13.024 22.742 13.868 22.49 14.812C22.23 15.788 22.888 17.148 22.394 18.002C21.892 18.87 20.382 18.974 19.678 19.678C18.974 20.382 18.87 21.892 18.002 22.394C17.148 22.888 15.788 22.23 14.812 22.49C13.868 22.742 13.024 24 12 24C10.976 24 10.132 22.742 9.188 22.49C8.212 22.23 6.852 22.888 5.998 22.394C5.13 21.892 5.026 20.382 4.322 19.678C3.618 18.974 2.108 18.87 1.606 18.002C1.112 17.148 1.77 15.788 1.51 14.812C1.258 13.868 0 13.024 0 12C0 10.976 1.258 10.132 1.51 9.188C1.77 8.212 1.112 6.852 1.606 5.998C2.108 5.13 3.618 5.026 4.322 4.322C5.026 3.618 5.13 2.108 5.998 1.606C6.852 1.112 8.212 1.77 9.188 1.51C10.132 1.258 10.976 0 12 0C13.024 0 13.868 1.258 14.812 1.51C15.788 1.77 17.148 1.112 18.002 1.606C18.87 2.108 18.974 3.618 19.678 4.322C20.382 5.026 21.892 5.13 22.394 5.998C22.888 6.852 22.23 8.212 22.49 9.188C22.742 10.132 24 10.976 24 12Z"
                                                            fill="#00FF97"
                                                        />
                                                        <path
                                                            d="M15.5559 9.14076L11.3992 13.178L9.24437 11.0869C8.77664 10.6326 8.01773 10.6326 7.55001 11.0869C7.08229 11.5412 7.08229 12.2783 7.55001 12.7326L10.5729 15.6686C11.0279 16.1105 11.7668 16.1105 12.2218 15.6686L17.2484 10.7864C17.7162 10.3321 17.7162 9.59504 17.2484 9.14076C16.7807 8.68648 16.0236 8.68648 15.5559 9.14076Z"
                                                            fill="#00FF97"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="feature-text">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="device-actions">
                                <Link href="/contact" className="thm-btn agency-btn mb-15">
                                    <span className="text">REQUEST A QUOTE</span>
                                    <span className="arrow">
                                        <span className="arrow-icon" style={{ color: '#fff', fontSize: '35px', paddingLeft: '6px' }}>→</span>
                                    </span>
                                </Link>
                                {/* <Link href="#details" className="thm-btn agency-btn agency-btn--secondary">
                                    <span className="text">VIEW DETAILS</span>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeviceDetail;

