"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "E700 Smart EPOS",
    category: "PAX",
    price: "$499.00",
    image: "/images/pax5.png",
    description: "Comprehensive electronic point of sale system with advanced features for modern retail operations.",
    features: [
        "Full EPOS System — Complete point of sale solution with all essential features.",
        "Advanced Reporting — Detailed sales reports and business analytics.",
        "Inventory Management — Real-time inventory tracking and management.",
        "Employee Management — Staff management and scheduling capabilities.",
        "Multi-Store Support — Manage multiple locations from a central system.",
        "Cloud Integration — Cloud-based data storage and synchronization."
    ],
    categoryLink: "/pax"
};

export default function E700SmartEPOSPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="E700 Smart EPOS" pagesub="PAX" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

