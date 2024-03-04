import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import Image from "next/image";

interface ImagesProp {
  images?: string[];
  altText?: string;
}

const ImageSlide = ({ images, altText }: ImagesProp) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, EffectFade]}
        effect="fade"
        className="mySwiper2 w-full  relative"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index} className="md:!h-[550px] w-full">
            <Image
              src={image}
              alt={altText ?? ""}
              width={800}
              height={800}
              className="w-full h-full object-cover aspect-square object-center"
              fetchPriority="high"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        //   @ts-ignore
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full mt-2 [&_.swiper-wrapper]:justify-center [&_.swiper-button-next]:!text-sm"
      >
        {images?.map((image, index) => (
          <SwiperSlide
            key={index}
            className="max-h-16 max-w-20 cursor-pointer hover:border hover:border-textBlack"
          >
            <Image
              src={image}
              alt={altText ?? ""}
              width={800}
              height={800}
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlide;
