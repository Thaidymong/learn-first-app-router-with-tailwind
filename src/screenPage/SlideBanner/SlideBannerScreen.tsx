"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
export default function SlideBannerScreen() {
  return (
    <>
      <div className="flex justify-between main_banner px-[7%]">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="mx-auto w-full rounded overflow-hidden ">
              <Image
                src="/S06b445e35c8c4826806b36cc2a7b09c4M.jpg"
                width={720}
                height={390}
                className="pr-[10px]"
                alt="Picture of the author"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto w-full rounded overflow-hidden ">
              <Image
                src="/fb5ac1efbecc457328ac01f72d2e87b6.jpg_720x720q80.jpg_.webp"
                width={720}
                height={390}
                className="pr-[10px]"
                alt="Picture of the author"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto w-full rounded overflow-hidden ">
              <Image
                src="/jaxya_512.webp"
                width={720}
                height={390}
                className="pr-[10px]"
                alt="Picture of the author"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto w-full rounded overflow-hidden ">
              <Image
                src="/fb5ac1efbecc457328ac01f72d2e87b6.jpg_720x720q80.jpg_.webp"
                width={720}
                height={390}
                className="pr-[10px]"
                alt="Picture of the author"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto w-full rounded overflow-hidden">
              <Image
                src="/images.jpg"
                width={720}
                height={390}
                className="pr-[10px]"
                alt="Picture of the author"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
