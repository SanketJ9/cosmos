import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="container flex felx-row items-center gap-16">
                <div className="logo"> 
                    <img src={logo} alt="" />
                </div>
                <ul className='flex list-none flex-row gap-8'>
                  <li className='text-2xl'>NEOs</li>
                  <li className='text-2xl'>MARS</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header