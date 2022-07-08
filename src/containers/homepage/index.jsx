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
import { keyframes} from "styled-components";
import { borderRadius, height } from "@mui/system";

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

const mainBox = (color, size=600) => {
  return {  
    maxWidth: "100vw",
    height: `${size}px`,
    background: color,
    padding: "24px 3% 24px 12%",
    display: "flex",
    'border-radius': "25px",
    overflow: 'auto'
  }
}

const part2panelLeft = {
  width: "40%",
  height: "100%",
  'border-radius': "15px",
  margin: "auto",
}

const part2panelRight = {
  display: "flex",
  alignItems: "center",
  width: "60%",
  height: "100%",
  'border-radius': "15px",
  margin: "auto",
}

const triplePack = {
  display: "flex",
  'flex-wrap': 'wrap',
  height: "30%",
}

const triplePackElem = {
  border: `solid 4px ${green}`,
  margin: "auto",
  height: "60px",
  'min-width': 0,
}

const doubleColListMain = {
  height: "30%",
  border: `solid 4px ${yellow}`,
  borderRadius: "15px"
}

const doubleColListSecondary = {
  height: "40%",
  border: `solid 4px ${red}`,
  borderRadius: "15px"
}

const doubleColListTitle = {
  width: "100%",
  textAlign: "center",
  padding: '5px 2px 2px 5px',
  'font-size': "18px",
  'font-weight': "bold",
  'border-radius': '5px'
}

const doubleColList = {
  display: "flex",
  padding: "15px",
  overflow: "hidden",
  'flex-wrap': "wrap",
  width: "100%",
}

const doubleColListElem = {
  display: "flex",
  width: "50%",
}

const doubleColListElemIcon = {
  width: "20%",
}

const doubleColListElemText = {
  display: "flex",
  alignItems: "center",
  width: "80%",
  padding: "2px",
  'font-size': "13px",
  'font-weight': "bold"
}

const part3PanelLeft = {
  width: "50%",
  height: "100%",
  'border-radius': "35px",
  margin: "auto",
}

const part3PanelRight = {
  width: "50%",
  height: "100%",
  'border-radius': "15px",
  margin: "auto",
}

const part3PanelLeftLogo = {
  padding: "20px",
  height: "30%",
  'text-align': "center"
}

const part3PanelLeftLogoImage = {
  height: "100%",
  'border-radius': "12px"
}

const part3PanelLeftTubes = {
  display: "flex",
  'flex-direction': "column",
  height: "70%",
  padding: "0px 25px 0px 25px"
}

const tubeSize = 50;

const part3PanelLeftTubeElem = {
  width: "100%",
  height: `${tubeSize}px`,
  border: `solid 3px ${red}`,
  'text-align': "center",
  padding: "5px 12px 12px 5px",
  'margin-bottom': `${tubeSize*0.3}px`,
  'border-radius': "25px",
  'font-weight': "bold"
}

const part3PanelRightUpper = {
  height: "70%",
}

const part3PanelRightLower = {
  height: "30%",
}


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
        <div id="part1" style={mainBox(yellow, 1400)}>
          <ServicesSection city={city} destination={destination} format={props.format} />
        </div>
        <div id="part2" style={mainBox(blue, 800)}>
          <div id="sidePanelLeft" style={part2panelLeft}>
            <div id="triplePack" style={triplePack}>
              <div id="pack" style={triplePackElem}>TripleOne</div>
              <div id="pack" style={triplePackElem}>TripleTwo</div>
              <div id="pack" style={triplePackElem}>TripleThree</div>
            </div>
            <div id="doubleColListMain" style={doubleColListMain}>
              <div id="doubleColTitle" style={doubleColListTitle}>Nothing to see here</div>
              <div id="doubleColList" style={doubleColList}>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/aix.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Aix en provence</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/barcelone.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Barcelone</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bordeaux.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bordeaux</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div>
              </div>
            </div>
            <div id="doubleColListSecondary" style={doubleColListSecondary}>
              <div id="doubleColTitle" style={doubleColListTitle}>Nothing here either</div>
              <div id="doubleColList" style={doubleColList}>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/aix.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Aix en provence</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/barcelone.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Barcelone</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bordeaux.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bordeaux</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div>
                {/* <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div>
                <div id="doubleColListElem" style={doubleColListElem}>
                  <img id="doubleColListElemIcon1" style={doubleColListElemIcon} src="https://github.com/aznuub/hackatonExtia/blob/main/src/images/city/bruxelle.png?raw=true" />
                  <div id="doubleColListElemText1" style={doubleColListElemText}>Bruxelles</div>
                </div> */}
              </div>
            </div>
          </div>
          <div id="sidePanelRight" style={part2panelRight}>
            <img style={{width: "100%"}} src="https://c.tenor.com/ve60xH3hKrcAAAAC/no.gif" alt="nope" />
          </div>
        </div>
        <div id="part3" style={mainBox(green, 800)}>
          <div id="part3PanelLeft" style={part3PanelLeft}>
            <div id="part3PanelLeftLogo" style={part3PanelLeftLogo}>
              <img style={part3PanelLeftLogoImage} src="https://phantom-marca.unidadeditorial.es/a12ae8bfd4cbe2bbec80cc9c70ea6301/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/26/16535796722201.jpg"></img>
            </div>
            <div id="part3PanelLeftTubes" style={part3PanelLeftTubes}>
              <div id="part3PanelLeftTubeElem1" style={part3PanelLeftTubeElem}> Hello there</div>
              <div id="part3PanelLeftTubeElem2" style={part3PanelLeftTubeElem}> General Kenobi</div>
              <div id="part3PanelLeftTubeElem3" style={part3PanelLeftTubeElem}> You are a bold one</div>
              <div id="part3PanelLeftTubeElem4" style={part3PanelLeftTubeElem}> Not a prequel Quote</div>
              <div id="part3PanelLeftTubeElem3" style={part3PanelLeftTubeElem}> You are a bold one</div>
            </div>
          </div>
          <div id="part3PanelRight" style={part3PanelRight}>
            <div id="part3PanelRightUpper" style={part3PanelRightUpper}></div>
            <div id="part3PanelRightLower" style={part3PanelRightLower}></div>
          </div>
        </div>
        {/* <SettlementSection name="settle" format={props.format} orientation={props.orientation} /> */}
        <SocialMedia lng={props.lng} />
      {/* </PageContainer> */}
    </>
  );
}

export default Homepage;
