import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Second } from "./Second";
import { Tbox } from "./Tbox";
import track from "../images/track.jpeg";
import equal5 from "../images/equal5.jpeg";
import wallet from "../images/wallet.png";
function App(){
    return(
        <div className="container">
                <Navbar/>
                <Hero/>
                <Second/>
                <div className="third">
                    <p className="third-head">Our Key <span className="span-three">Features</span></p>
                    <div className="third-box-cover">
                        <Tbox src={track} head="Track your Expenses" text="Now tracking of your investments is made easy. Track all your payments using our app. You can add as many as expenditures that you do we are going to keep a track of everything"/>
                        <Tbox src={equal5} head="Equalize" text="Doing a group expenditure, you don't need to worry about tracking all there expenses. Even if you pay once for someone and they pay for you again we will balance it out for you."/>
                        <Tbox src={wallet} head="Create Multiple Wallets" text="You can make multiple group wallets with our app just with a click and we will keep all the hassle away from you"/>
                    </div>
                </div>
        </div>

    )
}

export default App;