import React from "react";
import Mark from "../assets/images/mark.png";
import Andriod from "../assets/images/andriod-Button.png";
import Iphone from "../assets/images/iPhone-Button.png";
import Hero from "../assets/images/Hero-img.png";
import HeroCard from "./HeroCard";
import { title } from "process";
import { useMediaQuery } from "@mui/material";

const HeroCardProps: Array<{ title: string; Mark: any }> = [
  {
    title: "Clean and personalised meals",
    Mark: require("../assets/images/mark.png"),
  },
  { title: "Portion control", Mark: require("../assets/images/mark.png") },
  {
    title: "Daily physical activities",
    Mark: require("../assets/images/mark.png"),
  },
  { title: "Intermittent Fasting", Mark: require("../assets/images/mark.png") },
];

const HeroSection = () => {
  const isMediaMax1025px = useMediaQuery("(max-width: 1025px)");
  return (
    <div
      className={`md:flex flex-wrap justify-between w-full h-full   my-14 items-center ${
        isMediaMax1025px ? "w-full  px-4" : "w-full px-12"
      }`}
    >
      <div
        className={`   ${
          isMediaMax1025px ? "w-[100%] h-full  px-2 " : "w-[50%] h-full"
        }`}
      >
        <div className={`  ${isMediaMax1025px ? "w-[335px]" : "w-[605px]"}`}>
          <h1
            className={` text-light-black font-Nunito Sans font-bold  ${
              isMediaMax1025px ? "text-[40px] " : "text-[64px]"
            }`}
          >
            A healthier way to lose weight and stay fit
          </h1>
        </div>
        <div
          className={`my-2  ${isMediaMax1025px ? "border mt-8  " : "w-full"}`}
        >
          {HeroCardProps.map((item, index) => {
            return <HeroCard key={index} title={item.title} Mark={item.Mark} />;
          })}
        </div>
        <div
          className={`${
            isMediaMax1025px
              ? "flex flex-col justify-center items-center mt-8"
              : ""
          }`}
        >
          <div
            className={`md:flex justify-between w-[396px] h-full  items-center mt-[1.5rem] ${
              isMediaMax1025px
                ? "flex flex-col justify-center w-[327px] "
                : "w-[396px]"
            }`}
          >
            <div className={` ${isMediaMax1025px ? "mr-0" : "mr-4"}`}>
              <img
                className={`  ${
                  isMediaMax1025px ? "w-[327px]  " : "w-[198px] h-[58px] "
                }`}
                src={Andriod}
                alt=""
              />{" "}
            </div>
            <div>
              {" "}
              <img
                className={`  ${
                  isMediaMax1025px
                    ? "w-[327px] h-[98px] mt-3"
                    : "w-[167px] h-[58px]"
                }`}
                src={Iphone}
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <div
        className={` h-full  ${
          isMediaMax1025px ? "w-[100%]  mt-8" : "w-[50%]"
        }`}
      >
        <img
          className={` ${
            isMediaMax1025px ? "w-[400.93px] " : " w-[811.51px] "
          }`}
          src={Hero}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
