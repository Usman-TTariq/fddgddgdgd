import Image from 'next/image';
import Link from 'next/link';





const GallerySection = () => {

    const devices = [
        { name: "2D Hand Held Barcode Scanner", slug: "2d-hand-held-barcode-scanner", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Epson Label Printer", slug: "epson-label-printer", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Kitchen Printer", slug: "kitchen-printer", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Printer Roll", slug: "printer-roll", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Weight Scale", slug: "weight-scale", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Zebra Scanner", slug: "zebra-scanner", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
    ];

    return (
        <div className="service-gallary mt-50">
            <div className="row">
                {devices.map((device, index) => (
                    <div className="col-lg-4 col-md-6 mb-30" key={index}>
                        <div className="single-item-image img-hove-effect">
                            <div className="xb-img">
                                {device.images.map((img, i) => (
                                    <Link key={i} href={`/peripherals/${device.slug}`}>
                                        <img src={img} alt={device.name} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default GallerySection;