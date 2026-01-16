"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Clover Kiosk",
    category: "Clover",
    price: "$299.00",
    image: "/images/retail-img-1.png",
    description: "Self-service kiosk solution that allows customers to place orders and complete transactions independently.",
    features: [
        "Self-Service — Customers can place orders and pay without staff assistance.",
        "Large Touchscreen — 15-inch display for easy customer interaction.",
        "Order Management — Streamline order processing and reduce wait times.",
        "Payment Integration — Accept all payment methods including mobile wallets.",
        "Customizable Interface — Brand your kiosk with custom themes and layouts.",
        "Queue Management — Reduce lines and improve customer experience."
    ]
};

export default function CloverKioskPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Clover Kiosk" pagesub="Clover" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

