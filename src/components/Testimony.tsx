import React from "react";
import right from "../assets/images/rightbutton.png";
import left from "../assets/images/leftbutton.png";
import boy from "../assets/images/boy.jpg";
import arrow from "../assets/images/arrow-right.png";
import yellowimg from "../assets/images/yellow-img.png";

const Testimony = () => {
  return (
    <div>
      <div className="w-full h-full mt-[8rem]">
        <div className="w-full flex justify-center items-center">
          <div className="">
            <h1 className="text-center text-[36px]">
              Don’t just take our words for itme
            </h1>
            <p className="text-center text-[16px]">
              See what real shredders are saying about Fitness Space
            </p>
          </div>
        </div>

        <div>
          <div className="w-full justify-center items-center flex">
            <div className="w-[60%]  justify-center items-center flex">
              <img className="w-[5%] h-[10%]" src={left} alt="left" />
              <div className="w-full   flex justify-center items-center">
                <div className="bg-black w-[700px] rounded-xl">
                  <div className=" flex justify-center items-center  mt-8">
                    <img
                      src={boy}
                      alt="boy"
                      className="w-24 h-24 rounded-full object-cover  border-2"
                    ></img>
                  </div>
                  <div className="flex justify-center items-center   mt-8">
                    <p className="text-white text-[16px] text-center w-[65%] font-[400]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Curabitur vitae nunc sed velit dignissim. Porta
                      lorem mollis aliquam ut porttitor leo a diam sollicitudin.
                      Nunc sed blandit libero volutpat sed cras ornare. Sagittis
                      aliquam malesuada bibendum arcu vitae elementum curabitur.{" "}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-white text-[20px] text-[600] text-center mt-8">
                      Harriet
                    </h1>
                  </div>
                </div>
              </div>
              <img className="w-[5%] h-[10%]" src={right} alt="right" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  flex mt-[4rem] ">
        <div className="w-[60%]   bg-[#011B33] flex justify-center item-center">
          <div className=" w-[70%] my-[4rem] ">
            <h1 className="text-[48px] text-white  w-[80%] mt-[4rem]">
              Meet the Shredder of the month
            </h1>
            <p className="text-[16px] w-[68%] text-white ] mt-[3rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Curabitur vitae nunc sed velit dignissim. Porta lorem mollis
              aliquam ut porttitor leo a diam sollicitudin.{" "}
            </p>
            <button className="flex  items-center my-4 py-4 px-4 border border-slategray rounded-xl  bg-Darkblue w-[168px] ] mt-[3rem]">
              <div className="w-[80%]">
                <h1 className="text-[16px] text-white font-[600]">Read more</h1>
              </div>
              <div className="w-[24%]">
                <img className="" src={arrow} alt="arrow" />
              </div>
            </button>
          </div>
        </div>
        <div className=" w-[40%]">
          <div className="">
            <img className="" src={yellowimg} alt="yellowimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
