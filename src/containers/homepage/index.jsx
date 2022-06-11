import React, { useState } from "react";
import styled from "styled-components";
import { SocialMedia } from "../../components/footer/socialMedia/socialMedia";
import { ServicesSection } from "./servicesSection";
import { Header } from "./header";
import { Link } from "react-scroll";
import { cityData } from "./../../data/cityName";
import human1 from "../../images/humans/humanGo.png";
import human2 from "../../images/humans/humanHere.png";
import human3 from "../../images/humans/humanStay.png";
import thinking from "../../images/v2/Header/Navbar/thinking.png";
import arriving from "../../images/v2/Header/Navbar/box.png";
import here from "../../images/v2/Header/Navbar/sagrada_white.png";
import travaux from "../../images/travaux.png";
import { t } from "i18next";
import { StickyHeader } from "../../components/stickyHeader/stickyHeader";
import "./index.css";

const PageContainer = styled.div`
  min-width: 100%;
  height: calc(100% - 80px);
  max-width: '100%';
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const yellow = {
  minHeight: "51vw",
  minWidth: "100%",
  paddingTop: "1vw",
  paddingBottom: "8vw",
  background: "#FCCB56",
};

const blue = {
  maxWidth: "100vw",
  maxHeight: "100%",
  background: "white",
  padding: "3% 2% 60px",
};

const red = {
  minHeight: "51vw",
  minWidth: "100%",
  paddingTop: "1vw",
  paddingBottom: "8vw",
  background: "#FC6C54",
};

const text = {
  verticalAlign: "middle",
  textAlign: "center",
  position: "relative",
  paddingTop: "5vw",
  marginBottom: "-5vw",
  fontFamily: "'Nunito', sans-serif",
  fontSize: "30px",
};

const textSmall = {
  verticalAlign: "middle",
  textAlign: "center",
  position: "relative",
  paddingTop: "5vw",
  marginBottom: "-2vw",
  fontFamily: "'Nunito', sans-serif",
  fontSize: "18px",
};

const imgStyle = {
  width: "100%",
  display: "block",
  margin: "auto",
};

function Homepage(props) {
  var contentStyle = {};

  var buttonStyle = {
    backgroundPosition: "center",
    transition: "background 0.8s",
    borderRadius: "10px",
    border: "0px solid",
    padding: "10px",
    borderColor: "rgba(40, 61, 71, 0.09)",
    display: "block",
    margin: "0 auto",
    height: "60px",
  };

  var buttonBCNStyle = {
    backgroundPosition: "center",
    transition: "background 0.8s",
    borderRadius: "10px",
    border: "0px solid",
    padding: "10px",
    borderColor: "rgba(40, 61, 71, 0.09)",
    display: "block",
    transform: "translateY(-2.5px)",
    height: "60px",
  };
  var headerNavbarContainerStyle = {
    position: "fixed",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "82px",
    zIndex: 3,
    bottom: 0,
    background: "#FC9254",
    boxShadow: "rgb(0 0 0) 20px 15px 25px",
    borderRadius: "15px 15px 0 0",
    padding: "0px 0px 0px 0px",
  };

  if (props.format !== "l") {
    contentStyle = {
      marginBottom: "76px",
    };
  }

  const [city, setCity] = useState(cityData.find((cityItem) => cityItem.name === "Paris"));
  const [destination, setDestination] = useState(cityData.find((cityItem) => cityItem.name === "Strasbourg"));
  const [origin, setOrigin] = useState(cityData.find((cityItem) => cityItem.name === "Paris"));

  const cityChange = (data) => {
    setCity(data);
  };

  const destinationChange = (data) => {
    setDestination(data);
  };

  const originChange = (data) => {
    setOrigin(data);
  }

  return (
    <>
    <StickyHeader lngChange={props.lngChange} format={props.format}/>
      {props.format === "s" && (
        <>
          <div style={headerNavbarContainerStyle}>
            <Link activeClass="active" to="weather" spy={true} style={{ display: "block" }}>
              <img style={buttonStyle} src={thinking} alt="logo" />
            </Link>
            <Link activeClass="active" to="part2" spy={true} style={{ display: "block" }}>
              <img style={buttonStyle} src={city.logo} alt="logo" />
            </Link>
            <Link activeClass="active" to="part3" spy={true} style={{ display: "block" }}>
              <img style={buttonBCNStyle} src={arriving} alt="logo" />
            </Link>
            <Link activeClass="active" to="part4" spy={true} style={{ display: "block" }}>
              <img style={buttonBCNStyle} src={here} alt="logo" />
            </Link>
          </div>

        </>)}
      {/* <PageContainer style={contentStyle}> */}
        <Header 
          onChange={cityChange} 
          city={city} 
          onDestinationChange={destinationChange} 
          destination={destination} 
          onOriginChange={originChange}
          origin={origin}
          lngChange={props.lngChange} format={props.format} orientation={props.orientation} />
        <ServicesSection name="weather" city={city} format={props.format} />
        <div id="part2" style={blue}>
          <div className="travauxContainer">
            <img src={travaux} className="travaux" />
            <p className="travauxTxt">
              Cette partie du site est en cours de construction
              <br />
              Revenez plus tard !
            </p>
          </div>
        </div>
        <SocialMedia lng={props.lng} />
      {/* </PageContainer> */}
    </>
  );
}

export default Homepage;
