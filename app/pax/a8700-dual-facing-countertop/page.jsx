"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "A8700 Dual-Facing Countertop",
    category: "PAX",
    price: "$399.00",
    image: "/images/pax2.png",
    description: "Advanced countertop POS terminal with dual-facing displays for both merchant and customer interaction.",
    features: [
        "Dual Display — Separate screens for merchant and customer for better interaction.",
        "Countertop Design — Stable and secure countertop placement for checkout counters.",
        "Large Touchscreen — Spacious display for easy navigation and operation.",
        "Fast Performance — High-speed processing for quick transaction handling.",
        "All Payment Methods — Comprehensive payment acceptance including contactless.",
        "Professional Appearance — Sleek design that enhances your checkout area."
    ],
    categoryLink: "/pax"
};

export default function A8700DualFacingCountertopPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="A8700 Dual-Facing Countertop" pagesub="PAX" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

