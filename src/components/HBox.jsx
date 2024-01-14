import React from 'react'
import person from '../images/person.png'
export const HBox = (props) => {
  return (
    <div>
            <div className='box'>
                <img src={person} className='user-img'></img>
                <div className='text-box'>
                    <p className='box-text-one'>Spent <span className='two'>{props.cost}</span></p>
                    <p className='box-text-two'>Paid by <span className='two'>{props.user}</span></p>
                </div>
            </div>
    </div>
  )
}
