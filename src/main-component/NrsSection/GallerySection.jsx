import Image from 'next/image';
import Link from 'next/link';





const GallerySection = () => {

    const devices = [
        { name: "NRS Cheetah POS", slug: "nrs-cheetah-pos", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
        { name: "NRS PETRO", slug: "nrs-petro", images: ["/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png", "/images/retail-img-1.png"] },
    ];

    return (
        <div className="service-gallary mt-50">
            <div className="row">
                {devices.map((device, index) => (
                    <div className="col-lg-4 col-md-6 mb-30" key={index}>
                        <div className="single-item-image img-hove-effect">
                            <div className="xb-img">
                                {device.images.map((img, i) => (
                                    <Link key={i} href={`/nrs/${device.slug}`}>
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