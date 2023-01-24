import React from 'react';
import Logo from '../assets/images/Logo.png';
import  Mark from '../assets/images/mark.png';
import NavBarCards from './NavBarCards';

const NavBarCardsPros: Array <{title: string}> = [
  {title: "Why Fitness Space"},
  {title: "Stories"},
  {title: "Learn"}, 
  {title: "Faqs"},
];

function NavBar() {
  return (
    <>
    <nav className="drop-shadow-md  bg-smoke-white  px-12 py-2 flex justify-between  w-full   items-center">
    <div className=" items-center py-2">
      <img className=" " src={Logo} alt="Logo"/>
    </div>
    <div className=" w-[37%]  flex items-center justify-between">
      <div className="flex items-center ">
        {NavBarCardsPros.map((item, index) => {
          return <NavBarCards key={index} title={item.title} />;
        })}
      </div>

      <div className=" w-[117px] h-[50px] bg-dark-green rounded flex  justify-center items-center ">
        <a href="#" className=" text-1rem text-smoke-white text-center ">
          Get started
        </a>
      </div>
    </div>
  </nav>
  
  </>
  );
}

export default NavBar;