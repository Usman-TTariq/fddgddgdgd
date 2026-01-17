"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Clover Flex",
    category: "Clover",
    price: "$75.00",
    image: "/images/c1.png",
    description: "Clover Flex is a handheld POS device with a built-in printer, perfect for businesses on the go.",
    features: [
        "Portable — Clover Flex is a handheld POS device with a built-in printer.",
        "Multi Payment — It accepts EMV, NFC, magstripe, gift cards, and EBT.",
        "Scanner + Camera — It can scan barcodes for fast sales and error-free inventory updates.",
        "Economically Feasible — The affordable Clover Flex cost makes it easy for small and scaling businesses.",
        "24-Hour Battery — Comes with long-term battery performance to handle long, uninterrupted shifts.",
        "Wi-Fi/LTE Options — Connects quickly with consistent speed, both on-site and remotely."
    ]
};

export default function CloverFlexPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Clover Flex" pagesub="Clover" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

