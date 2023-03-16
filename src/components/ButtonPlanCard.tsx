import React from "react";

const ButtonPlanCard = ({ title }: { title: string }) => {
  return (
    <div>
      {" "}
      <button className=" font-medium text-[12px] min-w-[9%] py-[7px] px-[15px] border  border-[#0A110E] rounded-full font-Nunito Sans   text-[#0A110E] mr-4">
        {title}
      </button>
    </div>
  );
};

export default ButtonPlanCard;
