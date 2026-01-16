"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "A920 Elegant Smart Mobile",
    category: "PAX",
    price: "$349.00",
    image: "/images/retail-img-1.png",
    description: "Elegant and stylish mobile POS device combining premium design with powerful functionality.",
    features: [
        "Elegant Design — Premium appearance that enhances your business image.",
        "Large Display — Generous screen size for clear visibility and easy operation.",
        "All-in-One — Integrated payment processing, receipt printing, and display.",
        "Mobile Flexibility — Take payments anywhere with wireless connectivity.",
        "User-Friendly — Intuitive interface for quick staff training.",
        "Fast & Reliable — Quick processing with dependable performance."
    ],
    categoryLink: "/pax"
};

export default function A920ElegantSmartMobilePage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="A920 Elegant Smart Mobile" pagesub="PAX" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

