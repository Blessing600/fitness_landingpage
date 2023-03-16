import React from "react";
import food1 from "../assets/images/Articles-img1.png";
import arrow from "../assets/images/arrowblack.png";
export const ArticlesCard = ({
  title,
  title2,
  arrow,
  food1,
}: {
  title: string;
  title2: string;
  arrow: any;
  food1: any;
}) => {
  return (
    <div>
      <div className=" h-full w-full flex justify-center items-center bg-green-500">
        <div className="w-[270px] h-[232px] rounded overflow-hidden shadow-lg bg-red-800">
          <div className=" ">
            <img
              src={food1}
              alt="food1"
              className="w-[270px] h-[130px] object-fill"
            ></img>
          </div>
          <div className="w-full  border">
            <h1 className="border"> {title}</h1>
            <div className="flex justify-between  border mt-6">
              <div className="border">
                <p className=""> {title2}</p>
              </div>
              <div className="w-[24%] border">
                <img className="" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
