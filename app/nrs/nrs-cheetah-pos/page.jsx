"use client";

import { Fragment } from "react";
import Header from "../../../src/components/Header/Header";
import PageTitle from "../../../src/components/pagetitle/PageTitle";
import Scrollbar from "../../../src/components/scrollbar/scrollbar";
import Footer from "../../../src/components/footer/Footer";
import DeviceDetail from "../../../src/components/DeviceDetail/DeviceDetail";

const deviceData = {
    title: "NRS Cheetah POS",
    category: "NRS",
    price: "$399.00",
    image: "/images/nrs1.png",
    description: "High-performance POS system designed for speed and reliability in fast-paced retail environments.",
    features: [
        "Fast Processing — Lightning-fast transaction processing for quick checkout times.",
        "Reliable Performance — Built for high-volume operations with consistent reliability.",
        "Easy to Use — Intuitive interface for quick staff training and adoption.",
        "Multiple Payment Methods — Accepts all major payment types and methods.",
        "Inventory Management — Built-in inventory tracking and management features.",
        "Reporting & Analytics — Comprehensive reporting tools for business insights."
    ],
    categoryLink: "/nrs"
};

export default function NRSCheetahPOSPage() {
    return (
        <Fragment>
            <div className="about-page inner-page">
                <div className="body_wrap o-clip">
                    <Header />
                    <main>
                        <PageTitle pageTitle="NRS Cheetah POS" pagesub="NRS" />
                        <DeviceDetail device={deviceData} />
                    </main>
                    <Footer />
                    <Scrollbar />
                </div>
            </div>
        </Fragment>
    );
}

