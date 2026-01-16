"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "A920 Pro Powerful Smart Mobile",
    category: "PAX",
    price: "$449.00",
    image: "/images/retail-img-1.png",
    description: "Professional-grade mobile POS with enhanced power and features for demanding business environments.",
    features: [
        "Enhanced Performance — Powerful processor for faster operations and multitasking.",
        "Advanced Features — Expanded capabilities for complex business requirements.",
        "Professional Grade — Built for high-volume transactions and continuous operation.",
        "Large Touchscreen — Spacious display for comprehensive information display.",
        "Extended Battery — Long-lasting battery for extended business hours.",
        "Enterprise Ready — Suitable for large businesses and multi-location operations."
    ],
    categoryLink: "/pax"
};

export default function A920ProPowerfulSmartMobilePage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="A920 Pro Powerful Smart Mobile" pagesub="PAX" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

