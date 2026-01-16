import Image from 'next/image';
import Link from 'next/link';





const GallerySection = () => {

    const devices = [
        { name: "A77 Smart Mobile POS", slug: "a77-smart-mobile-pos", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "A8700 Dual-Facing Countertop", slug: "a8700-dual-facing-countertop", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "A920 Elegant Smart Mobile", slug: "a920-elegant-smart-mobile", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "A920 Pro Powerful Smart Mobile", slug: "a920-pro-powerful-smart-mobile", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "E700 Smart EPOS", slug: "e700-smart-epos", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
    ];

    return (
        <div className="service-gallary mt-50">
            <div className="row">
                {devices.map((device, index) => (
                    <div className="col-lg-4 col-md-6 mb-30" key={index}>
                        <div className="single-item-image img-hove-effect">
                            <div className="xb-img">
                                {device.images.map((img, i) => (
                                    <Link key={i} href={`/pax/${device.slug}`}>
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