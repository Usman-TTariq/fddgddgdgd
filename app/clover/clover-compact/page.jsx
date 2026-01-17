"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Clover Compact",
    category: "Clover",
    price: "$89.00",
    image: "/images/c5.png",
    description: "A space-efficient POS terminal that delivers powerful features in a compact design.",
    features: [
        "Space-Efficient — Compact design perfect for small counters and mobile setups.",
        "All-in-One — Integrated payment processing, receipt printing, and display.",
        "Fast Setup — Get up and running in minutes with simple installation.",
        "Mobile Ready — Take payments anywhere with optional mobile connectivity.",
        "User-Friendly — Simple interface designed for quick training.",
        "Affordable — Cost-effective solution for small businesses and startups."
    ]
};

export default function CloverCompactPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Clover Compact" pagesub="Clover" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

