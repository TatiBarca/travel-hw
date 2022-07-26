import React from "react";
import './style.css';
import earth from '../Images/earth.png';

export const Navbar = () => {
    return(
        <div className="navbar">
            <img className="navImg" src={earth} alt="" />
            <a href="">my travel journal.</a>
        </div>
    )
}