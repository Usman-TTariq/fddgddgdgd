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
            title: "01. What is a Zebra scanner more expensive than a 2D handheld one?",
            content:
                "A Zebra scanner is a bit more expensive due to their sturdy build and high performance. While both devices basically do the same thing, the results differ immensely.",
        },
        {
            id: 2,
            title: "02. Are Epson Label Printers suitable for printing shipping labels?",
            content:
                "Yes, this label printer is a great choice for small business owners as it prints good-quality labels on a budget. You can use it for other labeling requirements, including product tags and barcodes.",
        },
        {
            id: 3,
            title: "03. Can I use my Kitchen Printer for my Cafe receipts?",
            content:
                "Yes, the kitchen printers are highly versatile. You can print clear labels, even tickets, to run the cafe more smoothly without breaking the bank.",
        },
        {
            id: 4,
            title: "04. What is a suitable price for printer rolls?",
            content:
                "The printer roll determines the quality of the print. So, if you are not on a strict budget, go for printer rolls with $70 and $80 price tag. Such rolls are commonly compatible with both Epson printers and Kitchen printers.",
        },
        {
            id: 5,
            title: "05. What features does a weight scale have?",
            content:
                "A good quality weight scale always has a high precision weighing option, a portable design, a mini display screen, and measures in pounds, ounces, and grams.",
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