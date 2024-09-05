import React from 'react'
import "./Header.css"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default Header