import Image from 'next/image';
import Marquee from "react-fast-marquee";







const BrandSection= () => {
    return (
        <section className="" >
            {/* <div className="container">
                <div className="xb-brand-wrap xb-border">
                    <div className="brand-sub-title xb-border">
                        <p>
                            World's Best <span>120 Companies</span> Work With Us
                        </p>
                    </div>


                    <Marquee speed={40} gradient={false} pauseOnHover={false}>
                        <div className="brand-marquee marquee-left">
                            <div className="xb-brand-inner ul_li_between">
                                {[logo01, logo02, logo03, logo04, logo05, logo06].map(
                                    (logo, index) => (
                                        <div className="xb-brand-item" key={index}>
                                            <img src={logo} alt={`logo ${index + 1}`} />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </Marquee>

                </div>
            </div> */}
        </section>
    );
};

export default BrandSection;


