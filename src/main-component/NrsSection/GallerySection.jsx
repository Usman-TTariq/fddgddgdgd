import Image from 'next/image';
import Link from 'next/link';

const GallerySection = () => {

    const devices = [
        { name: "NRS Cheetah POS", slug: "nrs-cheetah-pos", description: "NRS Cheetah POS is designed to streamline and simplify checkout with an intuitive interface and real-time transaction processing.", images: ["/images/nrs1.png", "/images/nrs1.png", "/images/nrs1.png", "/images/nrs1.png"] },
        { name: "NRS PETRO", slug: "nrs-petro", description: "NRS Petro POS is an all-in-one solution for secure transactions, fuel management, reporting, and amplified retail performance.", images: ["/images/nrs2.png", "/images/nrs2.png", "/images/nrs2.png", "/images/nrs2.png"] },
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
                                    <Link key={i} href={`/nrs/${device.slug}`} style={{ borderRadius: "0%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img src={img} alt={device.name} style={{maxWidth: "350px", objectFit: "contain", maxHeight: "350px", height: "350px"}}/>
                                    </Link>
                                ))}
                            </div>
                            <Link href={`/nrs/${device.slug}`} className="clover-hover-overlay">
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