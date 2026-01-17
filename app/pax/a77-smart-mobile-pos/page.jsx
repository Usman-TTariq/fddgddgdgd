"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "A77 Smart Mobile POS",
    category: "PAX",
    price: "$299.00",
    image: "/images/pax1.png",
    description: "Compact and powerful mobile POS terminal perfect for on-the-go transactions and flexible retail operations.",
    features: [
        "Mobile Design — Lightweight and portable for flexible payment processing.",
        "Touchscreen Display — Intuitive touchscreen interface for easy operation.",
        "Multiple Connectivity — WiFi, 4G, and Bluetooth connectivity options.",
        "Long Battery Life — Extended battery performance for all-day use.",
        "Fast Processing — Quick transaction processing for efficient checkout.",
        "All Payment Types — Accepts chip, tap, swipe, and mobile wallet payments."
    ],
    categoryLink: "/pax"
};

export default function A77SmartMobilePOSPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="A77 Smart Mobile POS" pagesub="PAX" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

