import React from 'react';
import { HBox } from "./HBox";
import split from "../images/split.jpeg";
export const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="hero-flex">
                <p className="hero-text">Splitting expenses with <br/> your friends now <br/> made <span>easy!</span></p>
                <img src={split} className="hero-img"></img>
            </div>
            <div className="hero-box">
                <HBox cost="12000" user="Manan" />
                <HBox cost="15000" user="Ronit"/>
            </div>
        </div>
    </div>
  )
}
