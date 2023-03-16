import React from "react";

import Mobile from "../assets/images/mobile-img1.png";
import Mobile2 from "../assets/images/mobile-img2.png";
import Weghtloss from "../assets/images/Weightloss-img5.png";
import Readmore from "../assets/images/Readmore-Button.png";
import plan from "../assets/images/meal_plan.png";
import star from "../assets/images/Star.png";
import clock from "../assets/images/clock.png";
import cil from "../assets/images/cil_burn.png";
import circlemark from "../assets/images/circle-mark.png";
import Weightloss1 from "../assets/images/Weightloss-img1.png";
import Weightloss2 from "../assets/images/Weightloss-img2.png";
import Weightloss3 from "../assets/images/Weightloss-img3.png";
import Weightloss4 from "../assets/images/Weightloss-img4.png";

import WeghtlossMethodCard from "./WeghtlossMethodCard";
import PersonalizedMealPlanCard from "./PersonalizedMealPlanCard";
import ButtonPlanCard from "./ButtonPlanCard";
import { useMediaQuery } from "@mui/material";

const WeghtlossMethodCardProps = [
  {
    num: "03",
    WeightImage: require("../assets/images/Weightloss-img3.png"),
    title: "Daily Exercise",
    Healthytext:
      "Our daily exercise routines are simple, easy to replicate and kick-start our science-backed metabolic process that promote weight loss. You wouldn't want to miss this.",
    portiontitle: "Intermittent fasting",
    portiontext:
      "Your body has two fuel sources: food and stored food. For 16 hours, our users switch to the stored food in their bodies for energy, and that's our fasting period. Don't worry. You will probably be asleep during the fasting time.",
    WeightImage2: require("../assets/images/Weightloss-img4.png"),
    num2: "04",
  },
];

const PersonalizedMealPlanProps = [
  {
    plan: require("../assets/images/meal_plan.png"),
    title:
      "Medium size moi-moi with fresh tomatoes vegetable salad (breakfast)",
    star: require("../assets/images/Star.png"),
    startitle: "321 reviews ",
    hightitle: "High protien",
    cir: require("../assets/images/cir-img.png"),
    lowtitle: "Low carb",
    glutentitle: "Gluten free",
    clock: require("../assets/images/clock.png"),
    minstitle: "40 mins",
    cil: require("../assets/images/cil_burn.png"),
    caltitle: "400 CAL ",
    servstitle: " 1 servs",
  },
  {
    plan: require("../assets/images/meal_plan.png"),
    title:
      "Medium size moi-moi with fresh tomatoes vegetable salad (breakfast)",
    star: require("../assets/images/Star.png"),
    startitle: "321 reviews ",
    hightitle: "High protien",
    cir: require("../assets/images/cir-img.png"),
    lowtitle: "Low carb",
    glutentitle: "Gluten free",
    clock: require("../assets/images/clock.png"),
    minstitle: "40 mins",
    cil: require("../assets/images/cil_burn.png"),
    caltitle: "400 CAL ",
    servstitle: " 1 servs",
  },
  {
    plan: require("../assets/images/meal_plan.png"),
    title:
      "Medium size moi-moi with fresh tomatoes vegetable salad (breakfast)",
    star: require("../assets/images/Star.png"),
    startitle: "321 reviews ",
    hightitle: "High protien",
    cir: require("../assets/images/cir-img.png"),
    lowtitle: "Low carb",
    glutentitle: "Gluten free",
    clock: require("../assets/images/clock.png"),
    minstitle: "40 mins",
    cil: require("../assets/images/cil_burn.png"),
    caltitle: "400 CAL ",
    servstitle: " 1 servs",
  },
  {
    plan: require("../assets/images/meal_plan.png"),
    title:
      "Medium size moi-moi with fresh tomatoes vegetable salad (breakfast)",
    star: require("../assets/images/Star.png"),
    startitle: "321 reviews ",
    hightitle: "High protien",
    cir: require("../assets/images/cir-img.png"),
    lowtitle: "Low carb",
    glutentitle: "Gluten free",
    clock: require("../assets/images/clock.png"),
    minstitle: "40 mins",
    cil: require("../assets/images/cil_burn.png"),
    caltitle: "400 CAL ",
    servstitle: " 1 servs",
  },
];

const ButtonPlanCardProps = [
  { title: "Vegetarian" },
  { title: "Vegan" },
  { title: "Pescatarians" },
  { title: "Lactose-free" },
  { title: "Gluten-free" },
  { title: "Keto" },
  { title: "Low FODMAP" },
  { title: "Kid-friendly" },
];
const WeghtlossMethod = () => {
  const isMediaMax1025px = useMediaQuery("(max-width: 1025px)");
  return (
    <>
      <div className="mt-[8rem] w-full h-full   my-14 ">
        <div className="w-full h-full my-14 text-center ">
          <h1 className="font-medium text-[#1E1E1E] font-Ubuntu text-[30px]">
            Weight loss demystified in 4, simple ways
          </h1>
          <p className=" text-[#1E1E1E] font-Ubuntu text-[12px]">
            Our science-backed weight methods ensure you lose weight the healthy
            way.
          </p>
        </div>
      </div>

      <div
        className={`md:flex flex-wrap w-full h-full flex justify-center items-center ${
          isMediaMax1025px ? "" : ""
        }`}
      >
        <div
          className={`bg-red-500 w-full h-full ${isMediaMax1025px ? " " : ""}`}
        >
          <div
            className={`${
              isMediaMax1025px
                ? " flex justify-center items-center w-[100%]"
                : "flex justify-center items-center w-[100%]"
            }`}
          >
            <div
              className={`md:flex  justify-between items-center w-[1270px] h-[525px] bg-green-500 ${
                isMediaMax1025px
                  ? " w-[331px] h-[646px]"
                  : " w-[1270px] h-[525px] "
              }`}
            >
              <div className={` ${isMediaMax1025px ? "w-[100%] " : "w-[50%]"}`}>
                <img
                  className={`${
                    isMediaMax1025px
                      ? "w-[283px] h-[273.75px]"
                      : "w-[570px] h-[510px] "
                  } `}
                  src={Weightloss1}
                  alt="WeightImage"
                />
              </div>
              <div className={` ${isMediaMax1025px ? "w-[100%] " : "w-[50%]"}`}>
                <div className="">
                  <h1 className="font-bold text-[#1E1E1E] font-Ubuntu text-[36px]">
                    Healthy meals
                  </h1>
                </div>
                <div
                  className={`mt-[3rem] ${
                    isMediaMax1025px ? "w-[301px] " : "w-[505px]"
                  }`}
                >
                  <p className="text-[#1E1E1E] font-Ubuntu md:text-[20px] text-[16px]">
                    Healthy food is the middle point between staying healthy or
                    not. Depending on the type of food you consume, your health
                    will either improve or deteriorate. Our meals ensures the
                    former is achieved. Effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              isMediaMax1025px
                ? " flex justify-center items-center w-[100%]"
                : "flex justify-center items-center w-[100%]"
            }`}
          >
            <div className="w-[1270px] h-[525px] md:flex  justify-between items-center">
              <div className="w-[50%] ">
                <div className="">
                  <h1 className="font-bold text-[#1E1E1E] font-Ubuntu text-[36px]">
                    Portion control
                  </h1>
                  <div className="w-[505px] mt-[4rem]">
                    <p className="text-[#1E1E1E] font-Ubuntu text-[20px]">
                      Less is more. Yes, we know it. Less is more only if you
                      eat the right meals. Eating less won't do the magic you
                      desire. Our meal plan ensures you eat right food and in
                      the right portion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%] ">
                <img
                  className={`${
                    isMediaMax1025px ? "w-[283px]" : "w-[418.66px] h-[277.5px] "
                  } `}
                  src={Weightloss2}
                  alt="WeightImage"
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              isMediaMax1025px
                ? " flex justify-center items-center w-[100%]"
                : "flex justify-center items-center w-[100%]"
            }`}
          >
            <div className="w-[1270px] h-[525px] md:flex  justify-between items-center ">
              <div className="w-[50%] ">
                <img
                  className={`${
                    isMediaMax1025px ? "w-[283px]" : "w-[315.5px] h-[539px] "
                  } `}
                  src={Weightloss3}
                  alt="WeightImage"
                />
              </div>
              <div className="w-[50%] ">
                <div className="">
                  <h1 className="font-bold text-[#1E1E1E] font-Ubuntu text-[36px]">
                    Daily Exercise
                  </h1>
                  <div className="w-[505px] mt-[4rem]">
                    <p className="text-[#1E1E1E] font-Ubuntu text-[20px]">
                      Our daily exercise routines are simple, easy to replicate
                      and kick-start our science-backed metabolic process that
                      promote weight loss. You wouldn't want to miss this.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              isMediaMax1025px
                ? " flex justify-center items-center w-[100%]"
                : "flex justify-center items-center w-[100%]"
            }`}
          >
            <div className="w-[1270px] h-[525px] md:flex  justify-between items-center">
              <div className="w-[50%] ">
                <div className="">
                  <h1 className="font-bold text-[#1E1E1E] font-Ubuntu text-[36px]">
                    Intermittent fasting
                  </h1>
                  <div className="w-[505px] mt-[4rem]">
                    <p className="text-[#1E1E1E] font-Ubuntu text-[20px]">
                      Your body has two fuel sources: food and stored food. For
                      16 hours, our users switch to the stored food in their
                      bodies for energy, and that's our fasting period. Don't
                      worry. You will probably be asleep during the fasting
                      time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%] ">
                <img
                  className={`${
                    isMediaMax1025px ? "w-[283px]" : "w-[502px] h-[334px]"
                  } `}
                  src={Weightloss4}
                  alt="WeightImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center w-full h-full  ">
        <div className="w-[30%] h-[100%]">
          <img className=" w-[100%] h-[100%]" src={Mobile} alt="Mobile" />
        </div>
        <div className="  w-[30%] h-[100%]">
          <img className="" src={Mobile2} alt="Mobile" />
        </div>
      </div> */}

      {/* <div className="flex justify-center w-full h-full  px-12 mt-[6rem] ">
        <div className="w-[50%]  ">
          <img className="w-[100%]" src={Weghtloss} alt="Weghtloss" />
        </div>
        <div className=" w-[50%]  ">
          <div className=" w-[100%] px-12 ">
            <h1 className="font-medium text-[#1E1E1E] font-Ubuntu  w-[58%] text-[20px] mt-[2rem]">
              MAKING HEALTHY LIFESTYLE CHANGES IS NEVER EASY. LET’S TAKE YOUR
              HAND AND MAKE IT EASIER
            </h1>
            <p className=" text-[#1E1E1E] font-Ubuntu w-[91%] text-[15px] mt-[1.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Curabitur vitae nunc sed velit dignissim. Porta lorem mollis
              aliquam ut porttitor leo a diam sollicit.
            </p>

            <img className="mt-6  w-30 h-10 " src={Readmore} alt="Mobile" />
          </div>
        </div>
      </div> */}

      {/* <div className="px-12 mt-[8rem] w-full h-full ">
        <div className=" w-full flex  justify-center items-center">
          <h1 className="font-medium text-[#1E1E1E] font-Ubuntu   text-[20px] mt-[2rem]">
            Get a personalized meal plan for 30days
          </h1>
        </div>

        <div className=" w-full h-full my-2  p-10 grid grid-cols-1 md:grid-cols-4   ">
          {PersonalizedMealPlanProps.map((item, index) => {
            return (
              <PersonalizedMealPlanCard
                key={index}
                plan={item.plan}
                title={item.title}
                star={item.star}
                startitle={item.startitle}
                hightitle={item.hightitle}
                cir={item.cir}
                lowtitle={item.lowtitle}
                glutentitle={item.glutentitle}
                clock={item.clock}
                minstitle={item.minstitle}
                caltitle={item.caltitle}
                servstitle={item.servstitle}
                cil={item.cil}
              />
            );
          })}
        </div>
      </div> */}

      {/* <div className="mt-8  ">
        <div className="w-full flex  justify-center items-center">
          <h1 className=" text-[17px] font-medium font-Nunito Sans   text-[#0A110E]">
            We have different mean plan for every category
          </h1>
        </div>

        <div className="w-full flex flex-nowrap  mt-8 justify-center items-center ">
          {ButtonPlanCardProps.map((item, index) => {
            return <ButtonPlanCard key={index} title={item.title} />;
          })}
        </div>

        <div className="w-full flex justify-center items-center my-8">
          <h1>Choose from a preferred plan to help you live healthy</h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex w-[65%] justify-between items-center py-[2rem]">
            <div className="w-[32%] h-[60%]   rounded  -black flex justify-center items-center">
              <div className="  my-[1rem] ">
                <div className=" w-[100%] ">
                  <h1 className=" text-[18px] font-medium font-Nunito Sans   text-[#0A110E]">
                    Starter
                  </h1>
                  <p className=" text-[11px]  font-Nunito Sans   text-[#0A110E] mt-2 font-[500]">
                    This plan is tailored to beginners
                  </p>
                </div>
                <div className="  mt-[1rem]">
                  <h1 className=" text-[17px] font-medium font-Nunito Sans   text-[#0A110E]">
                    ₦2,500{" "}
                    <span className=" text-[12px] font-normal font-Nunito Sans   text-[#0A110E]">
                      every Month
                    </span>
                  </h1>
                </div>
                <div className="  mt-[2rem]">
                  <div className="flex items-center my-4  ">
                    <img
                      className="w-4 h-4 mr-1"
                      src={circlemark}
                      alt="circlemark"
                    />
                    <p className=" text-[10px] font-normal font-Nunito Sans   text-[#0A110E]">
                      {" "}
                      2 means daily
                    </p>
                  </div>
                  <div className="flex items-center my-4 ">
                    <img
                      className="w-4 h-4 mr-1"
                      src={circlemark}
                      alt="circlemark"
                    />
                    <p className=" text-[10px] font-normal font-Nunito Sans   text-[#0A110E]">
                      {" "}
                      2 means daily
                    </p>
                  </div>
                  <div className="flex items-center my-4">
                    <img
                      className="w-4 h-4 mr-1"
                      src={circlemark}
                      alt="circlemark"
                    />
                    <p className=" text-[10px] font-normal font-Nunito Sans   text-[#0A110E]">
                      {" "}
                      2 means daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[32%] h-[60%] bg-[#011B33]  border rounded flex justify-center items-center">
              <div className="  my-[1rem] ">
                <div className=" w-[100%] ">
                  <h1 className=" text-[18px] font-medium font-Nunito Sans   text-white">
                    Starter
                  </h1>
                  <p className=" text-[11px]  font-Nunito Sans   text-white mt-2 font-[500]">
                    This plan is tailored to beginners
                  </p>
                </div>
                <div className="  mt-[1rem]">
                  <h1 className=" text-[17px] font-medium font-Nunito Sans   text-white">
                    ₦2,500{" "}
                    <span className=" text-[12px] font-normal font-Nunito Sans   text-white">
                      every Month
                    </span>
                  </h1>
                </div>
                <div className="  mt-[2rem]">
                  <div className="flex items-center my-4 ">
                    <img
                      className="w-4 h-4 mr-1"
                      src={circlemark}
                      alt="circlemark"
                    />
                    <p className=" text-[10px] font-normal font-Nunito Sans   text-white">
                      {" "}
                      2 means daily
                    </p>
                  </div>
                  <div className="flex items-center my-4 ">
                    <img
                      className="w-4 h-4 mr-1"
                      src={circlemark}
                      alt="circlemark"
                    />
                    <p className=" text-[10px] font-normal font-Nunito Sans   text-white">
                      {" "}
                      2 means daily
                    </p>
                  </div>
                  <div className="flex items-center my-4">
                    <img
                      className="w-4 h-4 mr-1"
                      src={circlemark}
                      alt="circlemark"
                    />
                    <p className=" text-[10px] font-normal font-Nunito Sans   text-white">
                      {" "}
                      2 means daily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[32%] h-[60%]   rounded border border-black flex justify-center items-center">
              <div className="  my-[1rem] ">
                <div className=" w-[100%] ">
                  <h1 className=" text-[18px] font-medium font-Nunito Sans   text-[#0A110E]">
                    Starter
                  </h1>
                  <p className=" text-[11px]  font-Nunito Sans   text-[#0A110E] mt-2 font-[500]">
                    This plan is tailored to beginners
                  </p>
                </div>
                <div className="  mt-[1rem]">
                  <h1 className=" text-[17px] font-medium font-Nunito Sans   text-[#0A110E]">
                    ₦2,500{" "}
                    <span className=" text-[12px] font-normal font-Nunito Sans   text-[#0A110E]">
                      every Month
                    </span>
                  </h1>
                </div>
                <div className="  mt-[2rem]">
                  <div className="flex items-center my-4  ">
                    <img
                      className="w-4 h-4 mr-1"
                      src={circlemark}
                      alt="circlemark"
                    />
                    <p className=" text-[10px] font-normal font-Nunito Sans   text-[#0A110E]">
                      {" "}
                      2 means daily
                    </p>
                  </div>
                  <div className="flex items-center my-4 ">
                    <img
                      className="w-4 h-4 mr-1"
                      src={circlemark}
                      alt="circlemark"
                    />
                    <p className=" text-[10px] font-normal font-Nunito Sans   text-[#0A110E]">
                      {" "}
                      2 means daily
                    </p>
                  </div>
                  <div className="flex items-center my-4">
                    <img
                      className="w-4 h-4 mr-1"
                      src={circlemark}
                      alt="circlemark"
                    />
                    <p className=" text-[10px] font-normal font-Nunito Sans   text-[#0A110E]">
                      {" "}
                      2 means daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default WeghtlossMethod;
