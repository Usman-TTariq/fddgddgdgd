import Image from 'next/image';
import Link from 'next/link';

const GallerySection = () => {

    const devices = [
        { name: "Clover Flex", slug: "clover-flex", description: "Portable POS comes with diverse options for making checkout hassle-free, featuring a built-in printer for line-busting, tableside payments, and on-the-go selling.", images: ["/images/c1.png", "/images/c1.png", "/images/c1.png", "/images/c1.png"] },
        { name: "Clover Mini", slug: "clover-mini", description: "Perfect point-of-sale device for business owners looking for compact countertop POS systems. It comes with Android-based inventory tools for gaining business insights.", images: ["/images/c2.png", "/images/c2.png", "/images/c2.png", "/images/c2.png"] },
        { name: "Clover Solo Station", slug: "clover-solo-station", description: "Clover Solo Station is made for high-traffic businesses. It is made to fasten checkouts and prevent payment issues. It’s compact, fast, and high-yielding.", images: ["/images/c3.png", "/images/c3.png", "/images/c3.png", "/images/c3.png"] },
        { name: "Clover Kiosk", slug: "clover-kiosk", description: "POS system made for modern self-service businesses. It is built to offer contactless checkout experiences for the users and budget budget-friendly payment mechanism for business owners.", images: ["/images/c4.png", "/images/c4.png", "/images/c4.png", "/images/c4.png"] },
        { name: "Clover Compact", slug: "clover-compact", description: "Small space-saving POS device specifically made for businesses running in compact spaces. It offers quick transactions, straightforward setup, and day-to-day retail endeavors.", images: ["/images/c5.png", "/images/c5.png", "/images/c5.png", "/images/c5.png"] },
        { name: "Clover Flex Pocket", slug: "clover-flex-pocket", description: "Simple, accessible, and easy to carry. Clover Flex Pocket is built for quick mobile payments, curbside sales, and businesses that demand quick on-the-go checkouts.", images: ["/images/c6.png", "/images/c6.png", "/images/c6.png", "/images/c6.png"] },
        { name: "Clover Go", slug: "clover-go", description: "A Lightweight card reader for accessible checkout on the go. It utilizes your smartphone as a secure and efficient point-of-sale solution.", images: ["/images/c7.png", "/images/c7.png", "/images/c7.png", "/images/c7.png"] },
        { name: "Clover Kitchen Display System", slug: "clover-kitchen-display-system", description: "An all-in-one POS solution that caters to eatery businesses via fast checkouts, smart reporting, and order fulfillment.", images: ["/images/c8.png", "/images/c8.png", "/images/c8.png", "/images/c8.png"] },
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
                                    <Link key={i} href={`/clover/${device.slug}`} style={{ borderRadius: "0%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img src={img} alt={device.name} style={{maxWidth: "350px", objectFit: "contain", maxHeight: "350px", height: "350px"}}/>
                                    </Link>
                                ))}
                            </div>
                            <Link href={`/clover/${device.slug}`} className="clover-hover-overlay">
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