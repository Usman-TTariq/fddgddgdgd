"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Clover Mini",
    category: "Clover",
    price: "$99.00",
    image: "/images/retail-img-1.png",
    description: "Compact and powerful, Clover Mini is perfect for small businesses looking for an all-in-one POS solution.",
    features: [
        "Compact Design — Perfect for limited counter space without compromising functionality.",
        "Touchscreen Interface — Intuitive 7-inch touchscreen for easy navigation.",
        "Multiple Payment Methods — Accepts all major payment types including chip, tap, and swipe.",
        "Inventory Management — Built-in tools to track inventory in real-time.",
        "Receipt Printer — Integrated thermal printer for instant receipts.",
        "Cloud-Based — Access your business data from anywhere with cloud connectivity."
    ]
};

export default function CloverMiniPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Clover Mini" pagesub="Clover" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

