import { useMediaQuery } from "@mui/material";
import React from "react";
import Mark from "../assets/images/mark.png";

const HeroCard = ({ title, Mark }: { title: string; Mark: any }) => {
  const isMediaMax1025px = useMediaQuery("(max-width: 1025px)");
  return (
    <div
      className={`flex items-center  w-[50%]${
        isMediaMax1025px ? "w-[100%]" : "w-[50%]"
      } leading-8 `}
    >
      <img className="w-[24px]  mr-2 " src={Mark} alt="Logo" />
      <h2 className="text-light-black font-Inter text-[18px] font-medium">
        {title}
      </h2>
    </div>
  );
};

export default HeroCard;
