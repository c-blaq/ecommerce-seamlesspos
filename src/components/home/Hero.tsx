"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Keyboard,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import Image from "next/image";

//  Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface HeroContents {
  title: string;
  description: string;
  imageSrc: string;
}

const Hero = () => {
  const CONTENTS: HeroContents[] = [
    {
      title: "Experience Seamless Shopping with SeamlessPOS",
      description:
        "Discover a world of electronic wonders with SeamlessPOS. From smartphones to laptops, wireless earbuds to smartwatches, find the perfect tech companion to elevate your lifestyle. ",
      imageSrc: "/images/ecommerce.webp",
    },
    {
      title: "Enjoy True Wireless Freedom with Wireless Headphones",
      description:
        "Immerse yourself in your favorite music with wireless headphones, offering superior sound quality, comfort, and convenience.",
      imageSrc: "/images/headphone.avif",
    },
    {
      title: "Discover the Latest Smartwatches",
      description:
        "Explore a wide range of Smartwatches from top brands, featuring stunning displays,and innovative features.",
      imageSrc: "/images/smartwatch.avif",
    },
  ];
  return (
    <div className="h-dvh max-h-[700px] relative  bg-gray-100">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination, A11y, Autoplay, Keyboard, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay
        keyboard
        className="h-full"
      >
        {CONTENTS.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative flex items-center justify-center"
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={1400}
              height={1400}
              priority
              fetchPriority="high"
              className="object-cover origin-center  w-full h-full"
            />
            <div className="absolute max-w-3xl z-[2] left-5 2xl:left-[20%] top-[45%] text-textGray-100">
              <h1 className="text-2xl sm:text-3xl mb-4 md:mb-5 font-semibold">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg ">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
