import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import Mark from "../assets/images/mark.png";
import HamburgerMenu from "../assets/images/hamburgerMenu.svg";
import close from "../assets/images/close.svg";
import { useMediaQuery } from "@mui/material";
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const isMediaMax1025px = useMediaQuery("(max-width: 1025px)");
  return isMediaMax1025px ? (
    <div className=" drop-shadow-md  bg-smokewhite  flex  justify-between items-center px-4 py-2 mt-4  w-full  ">
      <div className="flex  justify-center items-center w-full">
        <div className="w-[60%]">
          <img className=" w-[173.38px]  h-[16.79px]" src={Logo} alt="Logo" />
        </div>
        <div
          className="  flex justify-end w-[40%] "
          onClick={() => setClick(!click)}
        >
          <img
            className="h-[32px] w-[32px]"
            src={click ? close : HamburgerMenu}
            alt="HamburgerMenu"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className=" drop-shadow-md  bg-smokewhite   flex justify-center items-center  w-full h-[80px] ">
      <div className="      flex justify-center  items-center w-[100%] h-[80px]   ">
        <div className=" w-[40%]">
          <img className=" w-72 h-6 " src={Logo} alt="Logo" />
        </div>

        <div className=" flex justify-end items-center w-[45%]">
          <ul className="flex gap-10 ">
            <li className="  text-Darkblue text-base font-semibold   drop-shadow-6xl ">
              <a href="#works">Why Fitness Space</a>
            </li>
            <li className="  text-Darkblue text-base font-semibold   drop-shadow-6xl ">
              <a href="#Features">Stories</a>
            </li>
            <li className="  text-Darkblue text-base font-semibold   drop-shadow-6xl ">
              <a href="#FAQ">Learn</a>
            </li>
            <li className="  text-Darkblue text-base font-semibold   drop-shadow-6xl ">
              <a href="#FAQ">Faqs</a>
            </li>
          </ul>
          <button className=" rounded-xl bg-darkgreen w-[117px] h-14 text-white text-base font-semibold  py-2 px-4 ml-8">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
