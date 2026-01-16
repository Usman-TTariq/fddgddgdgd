import Image from 'next/image';
import Link from 'next/link';





const GallerySection= () => {

    // const gallerySets = [
    //     [img14, img14, img14, img14],
    //     [img15, img15, img15, img15],
    //     [img16, img16, img16, img16],
    // ];

    return (
        <div className="service-gallary ul_li_between mt-125">
            {/* {gallerySets.map((set, index) => (
                <div className="single-item-image img-hove-effect" key={index}>
                    <div className="xb-img">
                        {set.map((img, i) => (
                            <Link key={i} href="/service-details">
                                <img src={img} alt="gallery" />
                            </Link>
                        ))}
                    </div>
                </div>
            ))} */}
        </div>

    )
}

export default GallerySection;