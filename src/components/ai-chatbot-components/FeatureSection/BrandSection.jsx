import React from "react";
import Image from 'next/image';
import Marquee from "react-fast-marquee";














const BrandSection= () => {
    return (

        <section className="brand">
            <div className="container">
                <div className="sec-title sec-title--two custom-sec-title text-center mb-30">
                    <span className="sub-title">
                        <Image src="/images/icon/sub-left-icon.png" alt="icon" width={500} height={500} />
                        Trusted by 9000+ AI Assistants created
                        <Image src="/images/icon/sub-left-icon.png" alt="icon" width={500} height={500} />
                    </span>
                </div>
            </div>

            <Marquee
                gradient={false}
                speed={30}
                pauseOnHover
                direction="left"
                className="brand-marquee ac-brand-marquee marquee-left"
            >
                <div className="ac-brand-inner ul_li_between">
                    {[brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo6, brandLogo7, brandLogo8, brandLogo9, brandLogo10, brandLogo11].map(
                        (logo, i) => (
                            <div className="xb-brand-item" key={i}>
                                <img src={logo} alt={`brand-${i + 1}`} />
                            </div>
                        )
                    )}
                </div>
            </Marquee>
        </section>
    );
};

export default BrandSection;
