"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const KeyVisual = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      <h1
        className={`"transition md:mt-0" mt-8 duration-3000 ${isVisible ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <Image
          src="/images/top/title.webp"
          width={180}
          height={180}
          alt="Portfolio"
          className="m-auto dark:brightness-90"
          priority
        />
      </h1>
    </>
  );
};
