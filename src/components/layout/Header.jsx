import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="container flex felx-row items-center gap-16">
                <div className="logo"> 
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                  <img src={logo} alt="" />
                </NavLink>
                    
                </div>
                <ul className='flex list-none flex-row gap-8'>
                  <NavLink to="/neos" className={({ isActive }) => isActive ? "active" : ""}>
                    <li className='text-2xl'>NEOs</li>
                  </NavLink>
                  <li className='text-2xl'>MARS</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header