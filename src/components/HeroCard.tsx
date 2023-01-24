import React from 'react'
import  Mark from '../assets/images/mark.png';
const HeroCard = ({title, Mark}:{title:string; Mark:any;}) => {
  return (
    <div className='flex items-center  w-[40%] leading-9'>
    <img className="w-3 h-3 mr-1 " src={Mark} alt="Logo"/> 
      <h2 className='text-light-black font-Inter text-[16px] font-medium'>{title}</h2>
  </div>
  )
}

export default HeroCard