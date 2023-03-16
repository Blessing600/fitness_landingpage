import React from "react";
import Logo from "../assets/images/Logo.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import Youtube from "../assets/images/youtube.png";

const Footer = () => {
  return (
    <div className="w-full h-full my-[4rem]">
      <div className="w-full flex justify-center ">
        <div className="border w-[90%] h-full flex justify-between ">
          <div className="w-[40%]  border">
            <div className="w-72 border">
              <img className=" " src={Logo} alt="Logo" />
            </div>
            <div className="w-[471px] mt-[1rem]">
              <h1 className="text-[14px]">
                Fitness Space has helped lots of people lose weight and stay fit
                forever by encouraging simple lifestyle changes that help people
                make healthier decisions. Since, more than 10,000 users have
                lost weight the healthy way.
              </h1>
            </div>

            <div className=" mt-[2rem]">
              <h1 className="text-[14px]">Contact us</h1>
              <h1 className="text-[14px]">Info.fitspaceng.com</h1>
            </div>
          </div>

          <div className="w-[25%] border">
            <div className="">
              <h1 className="text-[14px] font-600">Locations</h1>
            </div>
            <div className="w-[50%] border mt-4">
              <h1 className="text-[14px] font-600">Lagos office:</h1>
              <h1 className="text-[14px]">
                No 2 Dolo Oyekan, Lekki, Lagos State.
              </h1>
            </div>
            <div className="w-[65%] border mt-4">
              <h1 className="text-[14px] font-600">Enugu office:</h1>
              <h1 className="text-[14px]">
                No 46 Kenneth Street, Besides Vance Hotels, Enugu,Enugu State.
              </h1>
            </div>
          </div>

          <div className="w-[15%] border">
            <div className="">
              <h1 className="text-[14px] font-600">Services</h1>
            </div>
            <div className="mt-4">
              <h1 className="text-[14px] mt-2"> Daily exercise</h1>
              <h1 className="text-[14px] mt-2"> Portion control</h1>
              <h1 className="text-[14px] mt-2"> Intermittent fasting</h1>
              <h1 className="text-[14px] mt-2"> Exercise</h1>
              <h1 className="text-[14px] mt-2"> Clean meals</h1>
            </div>
          </div>

          <div className="w-[15%] border">
            <div className="">
              <h1 className="text-[14px] font-600">Company</h1>
            </div>
            <div className="mt-4">
              <h1 className="text-[14px] mt-2 "> About </h1>
              <h1 className="text-[14px] mt-2 "> Faqs</h1>
              <h1 className="text-[14px] mt-2 "> Blog</h1>
            </div>
          </div>

          <div className="w-[15%] border">
            <div className="">
              <h1 className="text-[14px] font-600">Legal</h1>
            </div>
            <div className="mt-4">
              <h1 className="text-[14px] mt-2 ">Terms </h1>
              <h1 className="text-[14px] mt-2 ">Privacy</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#5A997D] mt-8"></div>
      <div className=" w-full h-full border mt-8">
        <div className="flex justify-end ">
          <div className=" w-[43%] border">
            <h1 className="text=[16px]">
              © 2022 Fitness space. All Rights Reserved.
            </h1>
          </div>
          <div className="flex w-[20%] border">
            <img
              className=" mr-4 w-[24px] h-[24px]"
              src={Instagram}
              alt="instagram"
            />
            <img
              className="mr-4 w-[24px] h-[24px]"
              src={Twitter}
              alt="twitter"
            />
            <img className=" w-[24px] h-[24px]" src={Youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
