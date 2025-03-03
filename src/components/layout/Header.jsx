import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useLocation } from 'react-router-dom';

const Header = () => {

  const { pathname } = useLocation();
  return (
    <>
        <div className={"header " + (pathname === '/' ? "header-home" : "") }>
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
                  <NavLink to="/mars" className={({ isActive }) => isActive ? "active" : ""}>
                    <li className='text-2xl'>MARS</li>
                  </NavLink>
                  
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header