import "./travelTimeComponent.css";
import React from "react";

export default function CityItemMenu(props) {
    return (
        <div className="cityItemMenu">
              {props.picture?
                <img   src={props.picture} width={30} height={30} alt="iconTravelTime"/>
                :
                <div className="emptyPictureItem"/>
              }
              <p className="cityItemText">{props.name}</p>
        </div>
    )
}