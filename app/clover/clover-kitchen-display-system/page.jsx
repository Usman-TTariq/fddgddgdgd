"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "Clover Kitchen Display System",
    category: "Clover",
    price: "$199.00",
    image: "/images/retail-img-1.png",
    description: "Streamline kitchen operations with a dedicated display system that shows orders in real-time.",
    features: [
        "Real-Time Orders — Display incoming orders instantly as they're placed.",
        "Order Management — Organize orders by time, table, or priority.",
        "Kitchen Workflow — Optimize kitchen operations with customizable order views.",
        "Multiple Stations — Support multiple kitchen stations and preparation areas.",
        "Order Modifications — Handle special requests and modifications efficiently.",
        "Timer Integration — Built-in timers to track order preparation times."
    ]
};

export default function CloverKitchenDisplaySystemPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="Clover Kitchen Display System" pagesub="Clover" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

