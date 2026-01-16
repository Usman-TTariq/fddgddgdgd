import Image from 'next/image';
import Link from 'next/link';





const GallerySection = () => {

    const devices = [
        { name: "2D Hand Held Barcode Scanner", slug: "2d-hand-held-barcode-scanner", description: "Fast, reliable 2D handheld barcode scanner for error-free, accurate scanning, inventory management, and hassle-free retail operations.", images: ["/images/p1.png", "/images/p1.png", "/images/p1.png", "/images/p1.png"] },
        { name: "Epson Label Printer", slug: "epson-label-printer", description: "Print crisp, durable labels, tickets, bills, and whatnot with Epson’s high-performance printers, built for growing businesses.", images: ["/images/p2.png", "/images/p2.png", "/images/p2.png", "/images/p2.png"] },
        { name: "Kitchen Printer", slug: "kitchen-printer", description: "Streamline your orders with the latest Kitchen Printer: your simple solution to getting accurate order tickets for faster food preparation workflows.", images: ["/images/p3.png", "/images/p3.png", "/images/p3.png", "/images/p3.png"] },
        { name: "Printer Roll", slug: "printer-roll", description: "High-quality, BPA-free thermal rolls for clear and crisp receipts. Built to keep the service running without a hassle.", images: ["/images/p4.png", "/images/p4.png", "/images/p4.png", "/images/p4.png"] },
        { name: "Weight Scale", slug: "weight-scale", description: "Durable digital weight scales made to display accurate and prompt measurements for commercial and personal usage.", images: ["/images/p5.png", "/images/p5.png", "/images/p5.png", "/images/p5.png"] },
        { name: "Zebra Scanner", slug: "zebra-scanner", description: "Scan hands-free with multi-interface support, driverless setup, and durable retail design with reliable Zebra Scanners.", images: ["/images/p6.png", "/images/p6.png", "/images/p6.png", "/images/p6.png"] },
    ];

    return (
        <div className="service-gallary mt-50">
            <div className="row">
                {devices.map((device, index) => (
                    <div className="col-lg-4 col-md-6 mb-30" key={index}>
                        <div className="single-item-image img-hove-effect clover-gallery-item" style={{ height: "100%" }}>
                            <div className="xb-img" style={{ position: "relative", height: "100%" }}>
                                <Image src="/images/device-bk.png" alt={device.name} width={1000} height={1000} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                                {device.images.map((img, i) => (
                                    <Link key={i} href={`/peripherals/${device.slug}`} style={{ borderRadius: "0%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img src={img} alt={device.name} style={{maxWidth: "350px", objectFit: "contain", maxHeight: "350px", height: "350px"}}/>
                                    </Link>
                                ))}
                            </div>
                            <Link href={`/peripherals/${device.slug}`} className="clover-hover-overlay">
                                <h3 className="clover-hover-title">{device.name}</h3>
                                <p className="clover-hover-description">{device.description}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default GallerySection;