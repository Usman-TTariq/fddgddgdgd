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
            title: "01. Which Clover POS system should I buy for my pharmacy with high customer flow?",
            content:
                "If your pharmacy has heavy customer then the Clover Station Duo is the right match for you. It is made for faster tractions and can easily fit your existing counter due to its compact size.",
        },
        {
            id: 2,
            title: "02. Which POS should I buy that lets my customers pay with different payment methods?",
            content:
                "All Clover-manufactured POS systems and devices are compatible with different payment methods, including contactless payments, credit, and debit cards. So, you can you whatever fits your assigned budget.",
        },
        {
            id: 3,
            title: "03. Can I customize the Clover POS devices?",
            content:
                "Sure, you can! Clover POS devices are designed to fit the needs of users across versatile domains. All of the Clover POS system features can be tweaked as per your business needs.",
        },
        {
            id: 4,
            title: "04. How much does it cost for a standard monthly package?",
            content:
                "There isn't a singular standard price for Clover systems. The price fluctuates depending on your chosen plan and features. There are other additional charges that need to be added up as well. So, your best bet is to get a quote today.",
        },
        {
            id: 5,
            title: "05. How can I activate card payment on my new Clover Duo system?",
            content:
                "Consult the experts at Clover directly via 844-743-7490. They'll help you choose your right match, and set up the payment processing.",
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