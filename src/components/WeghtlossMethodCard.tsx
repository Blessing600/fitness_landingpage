import React from "react";

const WeghtlossMethodCard = ({
  num,
  WeightImage,
  title,
  Healthytext,
  portiontitle,
  portiontext,
  WeightImage2,
  num2,
}: {
  num: string;
  WeightImage: string;
  title: string;
  Healthytext: string;
  portiontitle: string;
  portiontext: string;
  WeightImage2: string;
  num2: string;
}) => {
  return (
    <div className="w-full h-full ">
      <div className="w-[50%]">
        <img
          className=" w-[570px] h-[510px] border"
          src={WeightImage}
          alt="WeightImage"
        />
      </div>
      <div className="w-[50%]"></div>
    </div>
  );
};

export default WeghtlossMethodCard;

{
  /* <div className=" flex w-full  justify-center ">
        <div className="mt-4 px-16 flex  bg-smoke-white justify-between w-[65%] rounded-lg drop-shadow-sm py-2">
          <div
            style={{
              width: "50vw",
              height: "42vh",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${WeightImage})`,
            }}
          >
            <h1 className="  text-[#CCCCCC] font-Nunito Sans  text-[25px] ">
              {num}
            </h1>
          </div>
          {/* <img className=" w-[45%]" src={WeightImage} alt="Logo" /> */
}

//     <div className="w-[85%] mt-6   ">
//       <h1 className="mb-6 font-medium text-[#1E1E1E] font-Ubuntu text-[25px]">
//         {title}
//       </h1>
//       <div>
//         {" "}
//         <p className="leading-7 text-[#1E1E1E] font-Ubuntu text-[13px] ">
//           {Healthytext}
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// <div className=" flex w-full  justify-center mt-6">
//   <div className="mt-4 px-16 flex  bg-smoke-white justify-center w-[65%] rounded-lg drop-shadow-sm py-2 ">
//     <div className="w-[80%] mt-4">
//       <h1 className="mb-6 font-medium text-[#1E1E1E] font-Ubuntu text-[25px]">
//         {portiontitle}
//       </h1>
//       <div>
//         {" "}
//         <p className="leading-7 text-[#1E1E1E] font-Ubuntu text-[13px] w-[85%]">
//           {portiontext}
//         </p>
//       </div>
//     </div>

//     <div
//       style={{
//         width: "30vw",
//         height: "42vh",
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundImage: `url(${WeightImage2})`,
//       }}
//     ></div>
//     <h1 className="  text-[#CCCCCC] font-Nunito Sans  text-[25px] ">
//       {num2}
//     </h1>
//   </div>
// </div>
