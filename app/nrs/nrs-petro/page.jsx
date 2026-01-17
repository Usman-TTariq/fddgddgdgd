"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "NRS PETRO",
    category: "NRS",
    price: "$449.00",
    image: "/images/nrs2.png",
    description: "Specialized POS system designed for petroleum and gas station operations with industry-specific features.",
    features: [
        "Petroleum Specific — Tailored features for gas station and fuel retail operations.",
        "Fuel Management — Integrated fuel inventory and pump management capabilities.",
        "Multi-Lane Support — Handle multiple fuel lanes and payment stations.",
        "Loyalty Programs — Built-in loyalty and rewards program functionality.",
        "Compliance Ready — Meets industry regulations and compliance requirements.",
        "24/7 Operation — Designed for round-the-clock gas station operations."
    ],
    categoryLink: "/nrs"
};

export default function NRSPETROPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="NRS PETRO" pagesub="NRS" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

