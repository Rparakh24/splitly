import React from 'react'
import { Sbox } from "./Sbox";
import Money from "../images/Money.jpeg";
import equal3 from "../images/equal3.jpeg";
import rewards from "../images/rewards.jpeg";
export const Second = () => {
  return (
    <div>
        <div className="second">
            <p className="second-head">Begin you splitting <br/> journey now!</p>
            <div className="second-box-cover">
                <Sbox src={Money} text="Split all your expenses."/>
                <div className="vline"></div>
                <Sbox src={equal3} text="Equalize all lendings."/>
                <div className="vline"></div>
                <Sbox src={rewards} text="Win exciting coupons."/>
            </div>
</div>
    </div>
  )
}
