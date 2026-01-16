"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Epson Label Printer",
    category: "Peripherals",
    price: "$199.00",
    image: "/images/retail-img-1.png",
    description: "High-quality label printer from Epson, designed for printing professional labels, receipts, and tags with precision and reliability.",
    features: [
        "High-Quality Printing — Crisp, clear labels with professional-grade print quality.",
        "Multiple Label Sizes — Supports various label sizes for different business needs.",
        "Fast Printing Speed — Quick label printing to keep operations running smoothly.",
        "Easy Setup — Simple installation and configuration process.",
        "Energy Efficient — Low power consumption for cost-effective operations.",
        "Reliable Performance — Durable construction for continuous use in busy environments."
    ],
    categoryLink: "/peripherals"
};

export default function EpsonLabelPrinterPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Epson Label Printer" pagesub="Peripherals" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

