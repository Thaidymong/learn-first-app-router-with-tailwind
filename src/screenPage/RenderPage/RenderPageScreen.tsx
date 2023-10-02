"use client";
import "./active.scss";
import { useState } from "react";
import FirstCard from "./Component/FirstCard";
import SecondCard from "./Component/Second";
import ThirdCard from "./Component/ThirdCard";

export default function RenderPageScreen() {
  const [activeElement, setActiveElement] = useState(1);
  const handle = (e: any, num: number) => {
    e?.preventDefault();
    setActiveElement(num);
  };
  let renderComponents;
  if (activeElement === 1) {
    renderComponents = <FirstCard />;
  } else if (activeElement === 2) {
    renderComponents = <SecondCard />;
  } else if (activeElement === 3) {
    renderComponents = <ThirdCard />;
  }

  return (
    <>
      <div className="px-[5%]">
        <ul className="flex p-[40px]">
          <li
            className="pr-[40px] font-base text-gray-500 text-lg"
            onClick={(e) => handle(e, 1)}
          >
            <a
              href=""
              className={`inline-flex items-center justify-center px-[20px] py-[10px] ${
                activeElement === 1 ? "active" : ""
              }`}
            >
              Customer
            </a>
          </li>
          <li
            className="pr-[40px] font-base text-gray-500 text-lg"
            onClick={(e) => handle(e, 2)}
          >
            <a
              href=""
              className={`inline-flex items-center justify-center px-[20px] py-[10px] ${
                activeElement === 2 ? "active" : ""
              }`}
            >
              Price
            </a>
          </li>
          <li
            className="pr-[40px] font-base text-gray-500 text-lg"
            onClick={(e) => handle(e, 3)}
          >
            <a
              href=""
              className={`inline-flex items-center justify-center px-[20px] py-[10px] ${
                activeElement === 3 ? "active" : ""
              }`}
            >
              Card
            </a>
          </li>
        </ul>
        <div className="p-[40px]">{renderComponents}</div>
      </div>
    </>
  );
}
