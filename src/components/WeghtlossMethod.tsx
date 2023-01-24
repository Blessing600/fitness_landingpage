import React from 'react'
import  WeightImage from '../assets/images/Weightloss-img1.png';

const WeghtlossMethod = () => {
  return (
    <div className='w-full h-full  px-12 my-14'>
       <div className='w-full h-full my-14 text-center '>
       <h1 className='font-medium text-[#1E1E1E] font-Ubuntu text-[30px]'>Weight loss demystified in 4, simple ways</h1>
        <p className=' text-[#1E1E1E] font-Ubuntu text-[12px]'>Our science-backed weight methods ensure you lose weight the healthy way.
         </p>
       </div>
       <div className=' flex justify-center border items-center bg-red-500 w-full h-full'>
       
        <div className='bg-green-500 '>
        <h1 className='border  text-[#CCCCCC] font-Nunito Sans  text-[25px] w-[10%]' >01</h1>
        <img className='backgroundImage:url(${{Weightloss-img1.png})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" '></img>
             {/* <img className="border w-[50%] h-[80%] mx-auto"  src={WeightImage} alt="Logo"/> */}
             </div>
        
        <div className='border bg-yellow-500 w-[25%]'>
            <h1 className='mb-6 font-medium text-[#1E1E1E] font-Ubuntu text-[25px]'>Healthy meals</h1>
       <div className=''> <p className='leading-7 text-[#1E1E1E] font-Ubuntu text-[15px]'>Healthy food is the middle point between staying healthy or not. Depending on the type of food you consume, your health will either improve or deteriorate. Our meals ensures the former is achieved. Effortlessly.</p></div></div>
       </div>
    </div>
  )
}

export default WeghtlossMethod