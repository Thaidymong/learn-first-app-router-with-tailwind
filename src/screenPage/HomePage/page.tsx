import MainProducts from "@/src/components/MainProduct/Main";
import "./homepage.scss";

import "swiper/css/grid";
import "swiper/css/pagination";
import SlideBannerScreen from "../SlideBanner/SlideBannerScreen";

export default function HomePage() {
  return (
    <>
      <SlideBannerScreen />
      <MainProducts />
      <div className="banner py-[40px]">
      <img src="Capturexcxcxcx.PNG" alt="" />
      </div>
    </>
  );
}
