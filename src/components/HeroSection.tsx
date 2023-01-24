import React from 'react'
import  Mark from '../assets/images/mark.png';
import  Andriod from '../assets/images/andriod-Button.png';
import  Iphone from '../assets/images/iPhone-Button.png';
import  Hero from '../assets/images/Hero-img.png';
import HeroCard from './HeroCard';
import { title } from 'process';

const HeroCardProps: Array <{title: string; Mark:any;}> =[{title: "Clean and personalised meals", Mark : require('../assets/images/mark.png')},
{title: "Portion control", Mark : require('../assets/images/mark.png')},
{title: "Daily physical activities", Mark : require('../assets/images/mark.png')},
{title: "Intermittent Fasting", Mark : require('../assets/images/mark.png')},]

const HeroSection = () => {
  return (
    <div className='flex justify-between w-full h-full  px-12 my-14'>
    <div className='w-50 h-full   '>
    <div className=' w-[58%] mb-6'>
    <h1 className=' text-light-black font-Nunito Sans font-bold text-[2.8rem]'>A healthier way to lose weight and stay fit</h1></div>
    <div>
     {HeroCardProps.map((item, index) => {
        return(
            <HeroCard key={index}
            title={item.title}
            Mark={item.Mark} />
        )
     })}
    </div>
    <div className='flex justify-between w-[50%] h-full  items-center mt-[2rem] '>
    <div><img className=" w-42 h-12 " src={Andriod} alt=""/> </div>
   <div> <img className="w-42 h-12 " src={Iphone} alt=""/> </div>
    </div>
    </div>

    <div className='w-50 h-full'>
    <img className=" " src={Hero} alt=""/> 
    </div>
  </div>
  )
}

export default HeroSection