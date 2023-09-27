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
                src="/z.jpg"
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
                src="/aa.jpg"
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
                src="/c.jpg"
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
                src="/zzzzz.jpg"
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
                src="/zz.jpg"
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
                src="/zzz.jpg"
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
                src="/zzzzz.jpg"
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
