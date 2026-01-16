"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Clover Go",
    category: "Clover",
    price: "$59.00",
    image: "/images/retail-img-1.png",
    description: "The most portable Clover device, perfect for mobile businesses, delivery services, and pop-up shops.",
    features: [
        "Ultra Portable — Smallest Clover device for maximum mobility.",
        "Mobile-First — Designed to work seamlessly with smartphones and tablets.",
        "Contactless Payments — Advanced NFC technology for tap-to-pay transactions.",
        "Real-Time Sync — All transactions sync instantly to your Clover account.",
        "No Monthly Fees — Pay-as-you-go pricing with transparent transaction fees.",
        "Instant Setup — Start accepting payments within minutes of unboxing."
    ]
};

export default function CloverGoPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Clover Go" pagesub="Clover" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

