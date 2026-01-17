"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Kitchen Printer",
    category: "Peripherals",
    price: "$149.00",
    image: "/images/p3.png",
    description: "Reliable kitchen printer designed for high-volume order printing in restaurant and food service environments.",
    features: [
        "High-Speed Printing — Rapid order printing to keep kitchen operations efficient.",
        "Durable Construction — Built to withstand heat, grease, and busy kitchen environments.",
        "Multiple Station Support — Connect to multiple terminals for organized order management.",
        "Clear Print Quality — Easy-to-read order tickets with sharp text and formatting.",
        "Easy Maintenance — Simple paper loading and routine maintenance procedures.",
        "Compatible Systems — Works seamlessly with major POS systems and software."
    ],
    categoryLink: "/peripherals"
};

export default function KitchenPrinterPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Kitchen Printer" pagesub="Peripherals" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

