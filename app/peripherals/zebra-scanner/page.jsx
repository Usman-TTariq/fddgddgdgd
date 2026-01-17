"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Zebra Scanner",
    category: "Peripherals",
    price: "$249.00",
    image: "/images/p6.png",
    description: "Enterprise-grade barcode scanner from Zebra Technologies, designed for high-performance scanning in demanding retail environments.",
    features: [
        "Enterprise Quality — Professional-grade scanner built for reliability and durability.",
        "Advanced Scanning — Reads damaged, wrinkled, and poorly printed barcodes.",
        "Multiple Connectivity — USB, Bluetooth, and serial connectivity options.",
        "Ergonomic Design — Comfortable grip for extended use during long shifts.",
        "Fast Scanning — Instant barcode recognition for rapid checkout processing.",
        "Long Warranty — Manufacturer warranty for peace of mind and reliable service."
    ],
    categoryLink: "/peripherals"
};

export default function ZebraScannerPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Zebra Scanner" pagesub="Peripherals" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

