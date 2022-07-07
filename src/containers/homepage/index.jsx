import React, { useState } from "react";
import { SocialMedia } from "../../components/footer/socialMedia/socialMedia";
import { ServicesSection } from "./servicesSection";
import { SettlementSection } from "./settlementSection";
import { SettleSection } from "../../components/SettleSection/settleSection";
import { Header } from "./header";
import { Link } from "react-scroll";
import { cityData } from "./../../data/cityName";
import thinking from "../../images/v2/Header/Navbar/thinking.png";
import arriving from "../../images/v2/Header/Navbar/box.png";
import travaux from "../../images/travaux.png";
import { StickyHeader } from "../../components/stickyHeader/stickyHeader";
import "./index.css";
import { height } from "@mui/system";

// const PageContainer = styled.div`
//   min-width: 100%;
//   height: calc(100% - 80px);
//   max-width: '100%';
//   display: flex;
//   flex-direction: column;
//   overflow-x: hidden;
// `;

// const yellow = {
//   minHeight: "51vw",
//   minWidth: "100%",
//   paddingTop: "1vw",
//   paddingBottom: "8vw",
//   background: "#FCCB56",
// };

const orange = "#fc9254"
const yellow = "#fccb56"
const blue = "#56c3c3"
const green = "#8dbc6a"
const red = "#FC6C54"

const mainBox = (color) => {
  return {  
    maxWidth: "100vw",
    height: "600px",
    background: color,
    padding: "24px 3% 24px 12%",
    display: "flex",
  }
}

const part2panelLeft = {
  width: "40%",
  height: "100%",
  border: "solid 5px red",
  margin: "auto",
}

const part2panelRight = {
  width: "60%",
  height: "100%",
  border: "solid 5px blue",
  margin: "auto",
}

const triplePack = {
  display: "flex"
}

const triplePackElem = {
  border: "solid 2px black",
  margin: "auto",
  height: "100px"
}

// const text = {
//   verticalAlign: "middle",
//   textAlign: "center",
//   position: "relative",
//   paddingTop: "5vw",
//   marginBottom: "-5vw",
//   fontFamily: "'Nunito', sans-serif",
//   fontSize: "30px",
// };

// const textSmall = {
//   verticalAlign: "middle",
//   textAlign: "center",
//   position: "relative",
//   paddingTop: "5vw",
//   marginBottom: "-2vw",
//   fontFamily: "'Nunito', sans-serif",
//   fontSize: "18px",
// };

// const imgStyle = {
//   width: "100%",
//   display: "block",
//   margin: "auto",
// };

function Homepage(props) {
  // eslint-disable-next-line no-unused-vars
  var contentStyle = {}; //eslint-disable-line

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
    // eslint-disable-next-line
    contentStyle = {
      marginBottom: "76px",
    };
  }

  const [city, setCity] = useState(cityData.find((cityItem) => cityItem.name === "Paris"));
  const [destination, setDestination] = useState(cityData.find((cityItem) => cityItem.name === "Lille"));
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
              <img style={buttonBCNStyle} src={destination.logo} alt="logo" />
            </Link>
          </div>

        </>)}
      {/* <PageContainer style={contentStyle}> */}
        <Header 
          onChange={cityChange} 
          city={city} 
          destination={destination} 
          origin={origin}
          destinationChange={destinationChange}
          originChange={originChange}
          lngChange={props.lngChange} format={props.format} orientation={props.orientation} />
        <div id="part1" style={mainBox(yellow)}>
          {/* <ServicesSection city={city} destination={destination} format={props.format} /> */}
        </div>
        <div id="part2" style={mainBox(blue)}>
          <div id="sidePanelLeft" style={part2panelLeft}>
            <div id="triplePack" style={triplePack}>
              <div id="pack" style={triplePackElem}>TripleOne</div>
              <div id="pack" style={triplePackElem}>TripleTwo</div>
              <div id="pack" style={triplePackElem}>TripleThree</div>
            </div>
          </div>
          <div id="sidePanelRight" style={part2panelRight}>
            Right Column
          </div>
        </div>
        <div id="part3" style={mainBox(green)}>
        <div className="travauxContainer">
            <img src={travaux} className="travaux" alt="none"/>
            <p className="travauxTxt">
              Cette partie du site est en cours de restructuration colorationelle.
              <br />
              Revenez quand j'ai envie, donc pas maintenant
            </p>
          </div>
        </div>
        {/* <SettlementSection name="settle" format={props.format} orientation={props.orientation} /> */}
        <SocialMedia lng={props.lng} />
      {/* </PageContainer> */}
    </>
  );
}

export default Homepage;
