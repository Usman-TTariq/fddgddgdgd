import React from "react";
import Image from 'next/image';

// Award Images (update paths)








import Link from 'next/link';

const awards1 = [
    "/images/Asset 6.png",
    "/images/Asset 5.png",
    "/images/Asset 3.png",
    "/images/Asset 4.png",
    "/images/Asset 6.png",
    "/images/Asset 5.png",
    "/images/Asset 3.png",
    "/images/Asset 4.png",
];

const awards2 = [
    "/images/Asset 6.png",
    "/images/Asset 5.png",
    "/images/Asset 3.png",
    "/images/Asset 4.png",
    "/images/Asset 6.png",
    "/images/Asset 5.png",
    "/images/Asset 3.png",
    "/images/Asset 4.png",
];

const awards3 = [
    "/images/Asset 6.png",
    "/images/Asset 5.png",
    "/images/Asset 3.png",
    "/images/Asset 4.png",
    "/images/Asset 6.png",
    "/images/Asset 5.png",
    "/images/Asset 3.png",
    "/images/Asset 4.png",
];

const AwardSection = () => {
    return (
        <section className="award pos-rel" style={{
            backgroundImage: `url(/images/bg/industries-bg02.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingTop: "80px",
        }}>
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6">
                        <div className="sec-title mb-30">
                            <span className="sub-title mb-20">Our Partners</span>
                            <h2 className="title title-line_height mb-5">
                                Trusted by Our Strategic Partners
                            </h2>
                            <p className="content">
                                We are proud to collaborate with forward-thinking partners who share our passion for innovation and excellence. Together, we deliver cutting-edge AI solutions that drive measurable growth, create lasting value, and ensure exceptional outcomes for our clients. Our partnerships are built on trust, shared success, and a commitment to pushing the boundaries of what’s possible.
                            </p>

                            <div className="team-btn mt-40">
                                <Link className="thm-btn agency-btn" href="/contact">
                                    <span className="text">Begin Today with us</span>

                                    <span className="arrow">
                                        <span className="arrow-icon">

                                            {/* First SVG */}
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

                                            {/* Second SVG */}
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
                    </div>

                    <div className="col-lg-6">
                        <div className="integration-logo-wrap ul_li">

                            <div className="award-logo-inner marquee-first">
                                {awards1.map((img, i) => (
                                    <div className="integration-logo award-logo" style={{padding: "16px"}} key={i}>
                                        <img src={img} alt="award logo" />
                                    </div>
                                ))}
                            </div>

                            <div className="award-logo-inner marquee2">
                                {awards2.map((img, i) => (
                                    <div className="integration-logo award-logo" style={{padding: "16px"}} key={i}>
                                        <img src={img} alt="award logo" />
                                    </div>
                                ))}
                            </div>

                            <div className="award-logo-inner marquee-first">
                                {awards3.map((img, i) => (
                                    <div className="integration-logo award-logo" style={{padding: "16px"}} key={i}>
                                        <img src={img} alt="award logo" />
                                    </div>
                                ))}
                            </div>

                            <div className="xb-shape">
                                <div className="shape shape--1"></div>
                                <div className="shape shape--2"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <span className="award-gradiant"></span>
        </section>
    );
};

export default AwardSection;
