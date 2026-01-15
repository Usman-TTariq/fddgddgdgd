import Image from 'next/image';
// ===============================
// 📁 Blog Data (Typed for TypeScript)
// ===============================

// 🖼 Import Images


const blogs = [
  {
    id: "1",
    title: "Best Wedding Gown For Your Dream Day",
    slug: "Best-Wedding-Gown-For-Your-Dream-Day",
    screens: blogImg1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.",
    author: "Loura Sweety",
    create_at: "25 Sep 2024",
    blogSingleImg: blogSingleImg1,
    comment: "35",
    blClass: "format-standard-image",
    animation: "1200",
  },
  {
    id: "2",
    title: "You Must Need a Great Photographer",
    slug: "You-Must-Need-a-Great-Photographer",
    screens: blogImg2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.",
    author: "David Luis",
    create_at: "23 Sep 2024",
    blogSingleImg: blogSingleImg2,
    comment: "80",
    blClass: "format-standard-image",
    animation: "1400",
  },
  {
    id: "3",
    title: "Top 10 Wedding Bouquet Arranging Idea",
    slug: "Top-10-Wedding-Bouquet-Arranging-Idea",
    screens: blogImg3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.",
    author: "Jenefer Willy",
    create_at: "21 Sep 2024",
    blogSingleImg: blogSingleImg3,
    comment: "95",
    blClass: "format-video",
    videoBtn: "video-btn",
    animation: "1600",
  },
  {
    id: "4",
    title: "Best Wedding Gown For Your Dream Day",
    slug: "Best-Wedding",
    screens: blogImg4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.",
    author: "Jenefer Willy",
    create_at: "21 Sep 2024",
    blogSingleImg: blogSingleImg4,
    comment: "95",
    blClass: "format-video",
    animation: "1200",
  },
];

export default blogs;
