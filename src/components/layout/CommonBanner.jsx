import React from 'react'
import './stars.css'

const CommonBanner = (props) => {
  return (
    <>
        <div className='commonBanner pt-16'>
            <div className="stars-cont">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
            <div className="container">
                <div className="heading">
                    <h2 className='text-6xl'>{props.pageTitle}</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default CommonBanner
