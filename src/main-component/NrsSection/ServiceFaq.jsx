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
            title: "01. What does a NRS POS system come with?",
            content:
                "The NRS-manufactured POS system comes with many immersive options, which are:\n• Dual Screen Display\n• Thermal Receipt Printer\n• Bi-Directional Barcode Scanner\n• Tracking options (inventory, sales, and users)\n• Nightly Summaries\n• Immersive Portal",
        },
        {
            id: 2,
            title: "02. Why should I switch to NRS POS?",
            content:
                "NRS POS systems are more than just a standard traditional sales register. It's new, innovative, faster, and secure. The system is introduced as an all-in-one POS solution to help you manage your business easily. It comes with an easy-to-navigate interface, secure payment options, and ease of inventory management.",
        },
        {
            id: 3,
            title: "03. Does the NRS POS system require internet?",
            content:
                "Yes, the system comes with many new innovative features that require access to the internet to work perfectly. To install and use the NRS POS system, you need to get a hard-wired internet connection. The internet speed should be at least 25/5 to work properly.",
        },
        {
            id: 4,
            title: "04. How can NRS POS assist in managing my store effectively?",
            content:
                "NRS POS systems are highly portable and versatile. They track the product inventory and highlight your bestsellers. The system also helps you track the flow of customers and calculate their average expenditure in your store.",
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