import React, { useState } from "react"

const ServiceFaq = () => {

    // Accordion Active Index
    const [active, setActive] = useState(1);

    const toggleAccordion = (index) => {
        setActive(active === index ? -1 : index);
    };

    const faqItems = [
        {
            id: 1,
            title: "01. Why should I choose an Android POS over a traditional one?",
            content:
                "As compared to the bulky old traditional POS systems, PAX POS systems are portable and easy to use. They are based on Android OS and commonly work like a basic tablet, making business operations easy.",
        },
        {
            id: 2,
            title: "02. How can I connect my Android terminal to the WIFI?",
            content:
                "Follow the given instructions to connect your Android terminal to the WIFI:\n• Go to the Android settings.\n• Go to \"WIFI\" and select it.\n• Enter your set password.\n• Confirm and connect.",
        },
        {
            id: 3,
            title: "03. Are there any PAX POS for unattended sales terminals?",
            content:
                "Yes, there is. It's called the Q-series. There are two sub-options you can choose from. The first is IM30, and the second is the IM series. Get in touch with us to find the match.",
        },
        {
            id: 4,
            title: "04. What should I do in case of a connection error on the Android terminal?",
            content:
                "There can be two types of issues: network or host issues. So, run a ping test to figure out the error as follows:\nOpen the app > Func > Setting > Communication > Ping > (Google.com) Confirm",
        },
    ];


    return (
        <div className="service-process-wrap pt-60 pb-60">
            <div className="row mt-none-50 align-items-center">
                {/* LEFT SIDE ACCORDION */}
                <div className="col-lg-12 mt-50">
                    <h2 className="details-content-title mb-40">FAQs</h2>

                    <div className="service_process_faq">
                        <div className="accordion">
                            {faqItems.map((item) => (
                                <div className="accordion-item" key={item.id}>
                                    <div
                                        className={`accordion-button ${active === item.id ? "" : "collapsed"
                                            }`}
                                        role="button"
                                        onClick={() => toggleAccordion(item.id)}
                                    >
                                        {item.title}
                                    </div>

                                    <div
                                        className={`accordion-collapse collapse ${active === item.id ? "show" : ""
                                            }`}
                                    >
                                        <div className="accordion-body">
                                            <p className="m-0">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE CLICKABLE LIST */}
                {/* <div className="col-lg-6 mt-50">
                        <ul className="content_layer_group list-unstyled">
                            {faqItems.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => toggleAccordion(item.id)}
                                    className={active === item.id ? "active" : ""}
                                >
                                    <span>{item.title.replace(/^\d+\.\s/, "")}</span>
                                </li>
                            ))}
                        </ul>
                    </div> */}
            </div>
        </div>
    )
}

export default ServiceFaq;