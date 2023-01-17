import React from 'react'
import Logo from '../assets/images/Logo.png'

function NavBar() {
  return (
    <div>
        <div className='flex flex-row justify-between bg-smoke-white border '>
        <div>
        <img src={Logo} alt="Logo" />
        </div>
        <div>
            <h4 className='flex flex-row justify-between'>Why Fitness-Space</h4>
            <h4>Stories</h4>
            <h4>Learn</h4>
            <h4>Faqs</h4>
        </div>
        <div>
            <h4>Get started</h4>
        </div>
        </div>
    </div>
  )
}

export default NavBar