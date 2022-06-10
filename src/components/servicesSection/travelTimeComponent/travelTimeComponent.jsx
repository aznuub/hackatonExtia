import React, { useState, useEffect } from "react";
import { t } from "i18next";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { travelData } from "./utilitiesData.js";
import pieton from "../../../images/travelTime/Pieton.png";
import scoot from "../../../images/travelTime/scoot.png";
import transport from "../../../images/travelTime/transport.png";
import trott from "../../../images/travelTime/trott.png";
import bike from "../../../images/travelTime/velo.png";
import car from "../../../images/travelTime/taxi.png";

import pietonW from "../../../images/travelTime/pietonW.png";
import scootW from "../../../images/travelTime/scootW.png";
import transportW from "../../../images/travelTime/transportW.png";
import trottW from "../../../images/travelTime/trottW.png";
import bikeW from "../../../images/travelTime/bikeW.png";
import carW from "../../../images/travelTime/carW.png";

import mapTravel from "../../../images/map/MapVierge.png";

import CityItemMenu from "./cityItemMenu";
import { MapBox } from "../mapBox/mapBox";
import { travelTimes, handleTravel, getImg } from "../../../data/cityName";

import "./travelTimeComponent.css";

function Card(props) {
  const src = props.src;
  const travelTime = props.travelTime;
  const alt = props.alt;

  travelPicto = {
    width: "48px",
  };

  var travelCardHover = {
    padding: "4px",
    width: "26%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "initial",
    margin: "auto",
    height: "75px",
    boxShadow: "rgb(0 0 0 / 15%) 0px 15px 25px",
    borderRadius: "15px",
    backgroundColor: "#FC9254",
    transition: "all 0.3s ease-in",
  };

  var travelCard = {
    padding: "4px",
    width: "26%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "initial",
    margin: "auto",
    height: "75px",
    backgroundColor: "white",
    boxShadow: "rgb(0 0 0 / 15%) 0px 15px 25px",
    borderRadius: "15px",
    transition: "all 0.3s ease-in",
  };

  var travelPicto = {
    width: "48px",
  };

  switch (props.format) {
    case "m":
      travelCard.margin = "auto";
      break;
    case "s":
      travelPicto.width = "32px";
      travelCard.justifyContent = "space-evenly";
      travelCard.margin = "auto";
      travelCard.width = "26%";
      travelCard.marginBottom = "5px";
      travelCard.marginTop = "5px";
      break;
    default:
      break;
  }
  return (
    <div
      style={props.hover ? travelCardHover : travelCard}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      value={props.value}
      onClick={props.onChange}
    >
      <div className="cardContainer" value={props.value}>
        <img alt={alt} style={travelPicto} src={src} value={props.value} />
        <span className={props.hover ? "travelTimeHover" : "travelTime"} value={props.value}>
          {travelTime}
        </span>
      </div>
    </div>
  );
}

export function TravelTimeComponent(props) {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);

  const handleChange = (event) => {
    setPlace(event.target.value);
    setTravelTime(handleTravel(arrivedPlace, place));
  };
  const handleSecondChange = (event) => {
    setArrivedPlace(event.target.value);
    setTravelTime(handleTravel(arrivedPlace, place));
  };

  const handleChangeTravel = (nb, vl, vit) => {
    const polution = calcPolution(nb, vl, vit)
    let value2 = 87 - polution * 10;
    value2 = value2 - polution * 15;
    value2 = value2.toString() + "%";
    setTravelPolution(polution);
    setCostTravel(value2);
  };

  function calcPolution(nb, vl, vit) {
    let value = ((vit * 60 * nb) / 1000) * vl;
    return value.toFixed(2);
  }

  const [place, setPlace] = useState("Extia");
  const [arrivedPlace, setArrivedPlace] = useState("Sagrada");
  const [travelTime, setTravelTime] = useState(travelTimes[0]);
  const [mapShow, setMapShow] = useState(mapTravel);
  const [travelPolution, setTravelPolution] = useState("0");
  const [costTravel, setCostTravel] = useState("0%");

  const styles = {
    travelTimeStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: props.format === "s" ? "100%" : "calc(50% - 12px)",
      padding: "12px",
      border: "0px solid rgba(255, 255, 255)",
      boxShadow: "rgb(0 0 0 / 15%) px 15px 25px",
      borderRadius: "30px",
    },
    selectStyle: {
      position: "relative",
      width: "100%",
      fontFamily: "Mont",
      fontWeight: "bold",
      height: "100%",
    },
    itemMenuStyle: {
      // height: "40px",
      fontFamily: "'Nunito', sans-serif",
    },
    travelPicto: {
      width: props.format === "s" ? "32px" : "48px",
    },
  };

  useEffect(() => {
    setTravelTime(handleTravel(arrivedPlace, place));
    setMapShow(getImg(arrivedPlace, place));
  }, [place, arrivedPlace]);
  return (
    <>
      <MapBox map={mapShow} place={place} arrivedPlace={arrivedPlace} format={props.format} />
      <div className="selectCard">
        <div className="startTravel">
          <Select style={styles.selectStyle} value={place} onChange={handleChange}>
            {travelData.map(({ value, name, picture }) => (
              <MenuItem value={value} style={styles.itemMenuStyle}>
                <CityItemMenu name={name} picture={picture} />
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="separator"></div>
        <div className="travelSelectContainer">
          <Select style={styles.selectStyle} value={arrivedPlace} onChange={handleSecondChange}>
            {travelData.map(({ value, name, picture }) => (
              <MenuItem value={value} style={styles.itemMenuStyle}>
                <CityItemMenu name={name} picture={picture} />
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="travelCardContainer">
        {console.log("travelTime = ", travelTime[5])}
        <Card
          format={props.format}
          src={hover1 ? pietonW : pieton}
          alt={"pieton"}
          travelTime={travelTime[2]}
          travelType={t("walk")}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
          hover={hover1}
          onChange={() => handleChangeTravel(parseFloat(travelTime[2]), 0, 0)}
        />
        <Card
          format={props.format}
          src={hover2 ? bikeW : bike}
          alt={"bike"}
          travelTime={travelTime[6]}
          travelType={t("bike")}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
          hover={hover2}
          onChange={() => handleChangeTravel(parseFloat(travelTime[6]), 0, 0)}
        />
        <Card
          format={props.format}
          src={hover3 ? trottW : trott}
          alt={"trott"}
          travelTime={travelTime[5]}
          travelType={t("trotinette")}
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
          hover={hover3}
          onChange={() => handleChangeTravel(parseFloat(travelTime[5]), 0.002, 3.3333)}
        />
        <Card
          format={props.format}
          src={hover4 ? scootW : scoot}
          alt={"scoot"}
          travelTime={travelTime[3]}
          travelType={t("scooter")}
          onMouseEnter={() => setHover4(true)}
          onMouseLeave={() => setHover4(false)}
          hover={hover4}
          onChange={() => handleChangeTravel(parseFloat(travelTime[3]), 0.062, 6.66667)}
        />
        <Card
          format={props.format}
          src={hover5 ? transportW : transport}
          alt={"transport"}
          travelTime={travelTime[4]}
          travelType={t("transport")}
          onMouseEnter={() => setHover5(true)}
          onMouseLeave={() => setHover5(false)}
          hover={hover5}
          onChange={() => handleChangeTravel(parseFloat(travelTime[4]), 0.0515, 11.66667)}
        />
        <Card
          format={props.format}
          src={hover6 ? carW : car}
          alt={"car"}
          travelTime={travelTime[7]}
          travelType={t("car")}
          onMouseEnter={() => setHover6(true)}
          onMouseLeave={() => setHover6(false)}
          hover={hover6}
          onChange={() => handleChangeTravel(parseFloat(travelTime[7]), 0.19, 9.72222)}
        />
      </div>
      <p className="barText">{t("travelTimeCO2")} {travelPolution} kgCO2e</p>
      <div className="barContainer">
        <div className="barColor1"></div>
        <div className="barColor2"></div>
        <div className="barColor3"></div>
        <div className="barColor4"></div>
        <div className="barColor5"></div>
        <div className="barColor6"></div>
        <div className="barColor7"></div>
      </div>
      <div style={{ margin: "auto", width: "90%", paddingLeft: costTravel, transition: "padding-left 0.1s ease-in-out 0s" }}>
        <div className="triangle"></div>
      </div>
    </>
  );
}
