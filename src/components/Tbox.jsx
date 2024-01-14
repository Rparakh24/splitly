import React from 'react'

export const Tbox = (props) => {
  return (
    <div>
        <div class="card">
            <img className="third-box-img" src={props.src}></img>
            <p className='third-box-head'>{props.head}</p>
            <p className='third-box-text'>{props.text}</p>
        </div>

    </div>
  )
}
