import React from 'react'

export const Sbox = (props) => {
  return (
    <div>
        <div className='second-box'>
            <img className='second-box-img' src={props.src}></img>
            <p className='second-box-text'>{props.text}</p>
        </div>
    </div>
  )
}
