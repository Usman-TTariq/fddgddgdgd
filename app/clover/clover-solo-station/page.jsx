"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Clover Solo Station",
    category: "Clover",
    price: "$149.00",
    image: "/images/retail-img-1.png",
    description: "A complete POS station designed for high-volume businesses with advanced features and robust performance.",
    features: [
        "Full Station Setup — Complete POS terminal with cash drawer and receipt printer.",
        "High-Performance Processing — Fast transaction processing for busy checkout lines.",
        "Employee Management — Track employee hours and manage staff permissions.",
        "Advanced Reporting — Detailed sales reports and analytics dashboard.",
        "Multiple Station Support — Scale your business with multiple terminal setup.",
        "24/7 Support — Dedicated customer support for your business operations."
    ]
};

export default function CloverSoloStationPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Clover Solo Station" pagesub="Clover" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

