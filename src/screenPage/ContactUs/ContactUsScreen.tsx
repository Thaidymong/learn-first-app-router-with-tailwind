"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./active.scss";
import { useState } from "react";
import { Card } from "flowbite-react";
import Chat from "./Component/Chat";

export default function ContactUsScreen() {
  const [activeComponent, setActiveComponent] = useState(1);
  const handleOnClick = (e: any, num: number) => {
    e?.preventDefault();
    setActiveComponent(num);
  };
  let renderComponents;
  if (activeComponent === 1) {
    renderComponents = (
      <>
        <Card className="max-w-sm" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
      </>
    );
  } else if (activeComponent === 2) {
    renderComponents = (
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>Noteworthy technology acquisitions 2021</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </p>
        <Button>
          <p>Read more</p>
        </Button>
      </Card>
    );
  }

  return (
    <>
      <div className="container mx-auto pt-[40px] px-[40px] mb-[50px]">
        <div className="border rounded-md p-4">
          <ul className="flex font-base text-gray-500 pl-4">
            <li
              className="pr-4"
              onClick={(e) => {
                handleOnClick(e, 1);
              }}
            >
              <a
                href=""
                className={`inline-flex items-center justify-center p-4  ${
                  activeComponent === 1 ? "active" : ""
                }`}
              >
                Top Grade
              </a>
            </li>
            <li
              className="pr-4"
              onClick={(e) => {
                handleOnClick(e, 2);
              }}
            >
              <a
                href=""
                className={`inline-flex items-center justify-center p-4  ${
                  activeComponent === 2 ? "active" : ""
                }`}
              >
                Normal Products
              </a>
            </li>
          </ul>
          <div className="py-[40px] px-[20px]">{renderComponents}</div>
        </div>

        <Chat />
      </div>
    </>
  );
}
