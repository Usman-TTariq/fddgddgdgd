"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Printer Roll",
    category: "Peripherals",
    price: "$12.99",
    image: "/images/retail-img-1.png",
    description: "High-quality thermal printer rolls compatible with various POS printers, ensuring reliable receipt and label printing.",
    features: [
        "Thermal Paper — High-quality thermal paper for clear, long-lasting prints.",
        "Multiple Sizes — Available in various widths to fit different printer models.",
        "Long Length — Extended roll length reduces frequent paper changes.",
        "Compatible Brands — Works with Epson, Star, Bixolon, and other major printer brands.",
        "Cost-Effective — Affordable bulk pricing for businesses with high printing needs.",
        "Reliable Performance — Consistent quality to prevent printing errors and jams."
    ],
    categoryLink: "/peripherals"
};

export default function PrinterRollPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Printer Roll" pagesub="Peripherals" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

