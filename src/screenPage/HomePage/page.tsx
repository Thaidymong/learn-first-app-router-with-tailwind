import MainProducts from "@/src/components/MainProduct/Main";
import "./homepage.scss";
import Banner from "@/src/components/SlideBanner/SlideBanner";
export default function HomePage() {
  return (
    <>
      <div className="banner">
        <div className="space"></div>
        <div className="screenbanner">
          <img
            src="https://static.nike.com/a/images/w_1920,c_limit/9247c183-c5b4-42ed-99b8-c5f980edbca6/running-fast-pegasus-38-imp-launch-m-com-enhanced-pdp-cw7356-003.jpg"
            alt=""
          />
        </div>
        <div className="space"></div>
      </div>
      <MainProducts />
      <Banner />
    </>
  );
}
