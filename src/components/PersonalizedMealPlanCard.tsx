import React from "react";

const PersonalizedMealPlanCard = ({
  plan,
  title,
  star,
  startitle,
  hightitle,
  cir,
  lowtitle,
  glutentitle,
  clock,
  minstitle,
  caltitle,
  servstitle,
  cil,
}: {
  plan: string;
  title: string;
  star: string;
  startitle: string;
  hightitle: string;
  cir: string;
  lowtitle: string;
  glutentitle: string;
  clock: string;
  minstitle: string;
  caltitle: string;
  servstitle: string;
  cil: string;
}) => {
  return (
    <div>
      <div>
        <div className="w-[95%]">
          <img className="w-[100%] h-[50%]" src={plan} alt="plan" />
        </div>
        <div className="px-4">
          <h1 className="font-medium text-[#1E1E1E] font-Ubuntu  w-[90%] text-[14px]">
            {title}
          </h1>
          <div>
            <div className="flex   items-center mt-2">
              <img className="w-[20%] h-[8%]" src={star} alt="star" />
              <p className="text-[10px]">{startitle}</p>
            </div>
            <div className="flex items-center mt-2">
              <p className=" mr-2 font-Nunito Sans text-[10px]  text-[#0A110E]">
                {hightitle}
              </p>

              <div className="flex items-center  mr-2 ">
                <img className="" src={cir} alt="cir" />
                <p className=" font-Nunito Sans text-[10px]  text-[#0A110E]">
                  {lowtitle}
                </p>
              </div>

              <div className="flex items-center  ">
                <img className="" src={cir} alt="cir" />
                <p className=" font-Nunito Sans text-[10px]  text-[#0A110E]">
                  {glutentitle}
                </p>
              </div>
            </div>
            <div className="flex   items-center mt-2">
              <div className="flex   items-center mr-2">
                <img className="w-3 h-3" src={clock} alt="clock" />
                <p className=" font-Nunito Sans text-[8px]  text-[#0A110E]">
                  {minstitle}
                </p>
              </div>
              <div className="flex   items-center mr-2">
                <img className="w-3 h-3" src={cil} alt="cil" />
                <p className=" font-Nunito Sans text-[8px]  text-[#0A110E]">
                  {caltitle}
                </p>
              </div>
              <div>
                <p className=" font-Nunito Sans text-[8px]  text-[#0A110E]">
                  {servstitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedMealPlanCard;
