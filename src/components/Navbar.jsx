import React from 'react'
import DButton from "./DButton";
import logo from "/Users/ronitparakh/splitly/src/images/logo.png";
export const Navbar = () => {
  return (
    <div>
        <navbar>
                    <div className="logo">
                        <img src={logo} className="logo" alt="logo"/>
                    </div>
                    <div className="navbar">
                        <ul className="nav">
                            <li className="nav-items">Home</li>
                            <li className="nav-items">About</li>
                            <li className="nav-items">USP</li>
                            <li className="nav-items">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <DButton/>
                    </div>
                </navbar>
        <div className='hline'></div>
    </div>
  )
}
