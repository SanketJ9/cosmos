import React from 'react'
import "./Neo.css"
import { FaArrowRight } from "react-icons/fa";


const Neocard = (props) => {
  return (
    <>
        {/* {props.neos.near_earth_objects.map((neos,neoIndex) => ( */}
            <div className="neo-card p-6 rounded-xl border-zinc-800 m-1 border-2 bg-zinc-950 cursor-pointer" key={props.index}>
                <div className="nickname pb-1">
                    <p className='text-3xl'>{props.neo.name_limited}</p>
                </div>
                <div className="name pb-3">
                    <p className='text-lg'>{props.neo.name}</p>
                </div>
                <div className="hazardous pb-2">
                    <p className='text-xl'>{props.neo.is_potentially_hazardous_asteroid ? <span className='text-red-400'>You aint Safe !!!</span> : <span className='text-green-400'>You are Safe !</span>}</p>
                </div>
                <div className="neo-size flex flex-row justify-between">
                    <p className='text-xl'>Diameter: {Math.floor(props.neo.estimated_diameter.kilometers.estimated_diameter_min)} To {Math.floor(props.neo.estimated_diameter.kilometers.estimated_diameter_max)} KM</p>
                    <div className='button-cont flex justify-end'>
                     <FaArrowRight className='text-xl text-zinc-400'/>
                    </div>
                </div>
                
            </div>
        {/* ))} */}
        
    </>
  )
}

export default Neocard

