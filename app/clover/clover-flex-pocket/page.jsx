"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Clover Flex Pocket",
    category: "Clover",
    price: "$65.00",
    image: "/images/retail-img-1.png",
    description: "Ultra-portable payment device that fits in your pocket, perfect for on-the-go transactions.",
    features: [
        "Pocket-Sized — Ultra-compact design that fits easily in your pocket.",
        "Lightweight — Weighs less than most smartphones for ultimate portability.",
        "Quick Payments — Fast transaction processing with chip, tap, and swipe support.",
        "Long Battery Life — Extended battery performance for all-day use.",
        "Mobile App — Pair with smartphone for full POS functionality.",
        "Affordable Entry — Low cost makes it accessible for small merchants."
    ]
};

export default function CloverFlexPocketPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Clover Flex Pocket" pagesub="Clover" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

