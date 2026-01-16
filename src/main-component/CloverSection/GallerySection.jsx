import Image from 'next/image';
import Link from 'next/link';





const GallerySection = () => {

    const devices = [
        { name: "Clover Flex", slug: "clover-flex", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Clover Mini", slug: "clover-mini", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Clover Solo Station", slug: "clover-solo-station", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Clover Kiosk", slug: "clover-kiosk", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Clover Compact", slug: "clover-compact", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Clover Flex Pocket", slug: "clover-flex-pocket", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Clover Go", slug: "clover-go", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "Clover Kitchen Display System", slug: "clover-kitchen-display-system", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
    ];

    return (
        <div className="service-gallary mt-50">
            <div className="row">
                {devices.map((device, index) => (
                    <div className="col-lg-4 col-md-6 mb-30" key={index}>
                        <div className="single-item-image img-hove-effect">
                            <div className="xb-img">
                                {device.images.map((img, i) => (
                                    <Link key={i} href={`/clover/${device.slug}`}>
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