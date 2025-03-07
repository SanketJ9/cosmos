import React from 'react'

const Button = (props) => {

  return (
    <div className='flex'>
    <button className={(props.extraClass) + (props.align === 'left' ? " mr-auto" : 
        props.align === 'right' ? " ml-auto" :  
        props.align === 'center' ? " mx-auto" :
        null) + ' text-primary hover:text-zinc-900 hover:bg-slate-200  border border-3 fomt-bold border-zinc-50 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-zinc-200 font-bold rounded-xl text-xl px-8 py-4 text-center '}>
        <p>{props.cta}</p>
    </button>
    </div>
  )
}

export default Button
