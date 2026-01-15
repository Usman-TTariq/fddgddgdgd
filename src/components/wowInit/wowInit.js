"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import WOW from "wowjs";

const WowInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();

    return () => wow.sync();
  }, [pathname]);

  return null;
};

export default WowInit;
