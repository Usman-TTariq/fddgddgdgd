"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "2D Hand Held Barcode Scanner",
    category: "Peripherals",
    price: "$89.00",
    image: "/images/p1.png",
    description: "Advanced 2D barcode scanner with fast scanning capabilities, perfect for inventory management and checkout operations.",
    features: [
        "2D Scanning Technology — Read both 1D and 2D barcodes with precision and speed.",
        "Wireless Connectivity — Bluetooth and USB connectivity options for flexibility.",
        "Long Range Scanning — Scan barcodes from various distances and angles.",
        "Durable Design — Built to withstand drops and daily wear in retail environments.",
        "Fast Processing — Instant barcode recognition for efficient checkout processes.",
        "Battery Powered — Long-lasting battery for all-day use without interruption."
    ],
    categoryLink: "/peripherals"
};

export default function HandHeldBarcodeScannerPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="2D Hand Held Barcode Scanner" pagesub="Peripherals" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

