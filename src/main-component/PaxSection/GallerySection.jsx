import Image from 'next/image';
import Link from 'next/link';

const GallerySection = () => {

    const devices = [
        { name: "A77 Smart Mobile POS", slug: "a77-smart-mobile-pos", description: "Revolutionary A77 Smart Mobile POS is built for fast-paced businesses and offers versatile and secure transactions in real time.", images: ["/images/pax1.png", "/images/pax1.png", "/images/pax1.png", "/images/pax1.png"] },
        { name: "A8700 Dual-Facing Countertop", slug: "a8700-dual-facing-countertop", description: "A8700 Dual-Facing Countertop POS features a user-friendly, seamless design that enables businesses to offer hassle-free customer interactions.", images: ["/images/pax2.png", "/images/pax2.png", "/images/pax2.png", "/images/pax2.png"] },
        { name: "A920 Elegant Smart Mobile", slug: "a920-elegant-smart-mobile", description: "A920 Elegant Smart Mobile POS combines a simple, no-fluff design with a fast and secure payment system.", images: ["/images/pax3.png", "/images/pax3.png", "/images/pax3.png", "/images/pax3.png"] },
        { name: "A920 Pro Powerful Smart Mobile", slug: "a920-pro-powerful-smart-mobile", description: "A920Pro Powerful Smart Mobile is a high-performance POS setup. It includes multi-functional features built for the retail and hospitality industry.", images: ["/images/pax4.png", "/images/pax4.png", "/images/pax4.png", "/images/pax4.png"] },
        { name: "E700 Smart EPOS", slug: "e700-smart-epos", description: "E700 Smart EPOS enables businesses to streamline transactions with an intuitive interface and a range of multi-functionality features.", images: ["/images/pax5.png", "/images/pax5.png", "/images/pax5.png", "/images/pax5.png"] },
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
                                    <Link key={i} href={`/pax/${device.slug}`} style={{ borderRadius: "0%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img src={img} alt={device.name} style={{maxWidth: "350px", objectFit: "contain", maxHeight: "350px", height: "350px"}}/>
                                    </Link>
                                ))}
                            </div>
                            <Link href={`/pax/${device.slug}`} className="clover-hover-overlay">
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