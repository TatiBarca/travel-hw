import React from "react";
import './style.css';


export const Cards = (props) => {
    return (
        <div className="about">
<div>
<img className="aboutImg" src={props.img} alt="" />

</div>
            <div className="aboutDesc">
                <div className="aboutMap">
                    <img className="icon" src={props.map} alt="" />
                    <p className="aboutCountry">{props.country}</p>
                    <a className="mapText" href={props.link}>View on Google Maps</a>
                </div>
                <p className="aboutTitle">{props.title}</p>
                <span className="aboutDate">{props.date}</span>
                <p>{props.description}</p>
            </div>
        </div>
    )

    
};
