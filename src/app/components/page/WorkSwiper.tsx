"use client";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

type Images = {
  item: string[];
};

export const WorkSwiper = ({ item }: Images) => {
  return (
    <>
      {item.length > 1 ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
        >
          {item.map((image, index) => (
            <SwiperSlide key={image}>
              <Image
                src={`/images/works/${image}.webp`}
                width={700}
                height={600}
                alt=""
                className="w-full dark:brightness-90"
                priority={index === 0 ? true : false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        item.map(image => (
          <Image
            key={image}
            src={`/images/works/${image}.webp`}
            width={700}
            height={600}
            alt=""
            className="w-full dark:brightness-90"
          />
        ))
      )}
    </>
  );
};
