"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Weight Scale",
    category: "Peripherals",
    price: "$299.00",
    image: "/images/retail-img-1.png",
    description: "Precision digital weight scale with POS integration, perfect for retail stores, delis, and produce departments.",
    features: [
        "High Precision — Accurate weight measurements for accurate pricing and inventory.",
        "POS Integration — Seamlessly connects with your POS system for automatic pricing.",
        "Large Display — Clear, easy-to-read display for both staff and customers.",
        "Durable Platform — Sturdy construction to handle heavy items reliably.",
        "Tare Function — Zero-out container weight for accurate product measurements.",
        "Multiple Units — Switch between pounds, kilograms, and other weight units."
    ],
    categoryLink: "/peripherals"
};

export default function WeightScalePage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Weight Scale" pagesub="Peripherals" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

