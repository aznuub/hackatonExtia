import { useState, useEffect } from "react";
import thinking from "../../../images/v2/Header/Navbar/thinking.png";
import tour from "../../../images/v2/Header/Navbar/tour.png";
import arrive from "../../../images/v2/Header/Navbar/box.png";
import here from "../../../images/v2/Header/Navbar/sagrada_white.png";

import thinkingO from "../../../images/v2/Header/Navbar/think_o.png";
import tourO from "../../../images/v2/Header/Navbar/tour_o.png";
import arriveO from "../../../images/v2/Header/Navbar/box_o.png";
import hereO from "../../../images/v2/Header/Navbar/sagrada_o.png";
import { Link } from "react-scroll";
import extiaLogo from "../../../images/ExtiaLogo.svg";
import extiaLogoWhite from "../../../images/Extialogoblanc.svg";

import "./scroller.css";

const fixedStyleNav = {
  position: "fixed",
  top: "50vh",
  transform: 'translateY(-10vh)',
  left: "2vw",
  zIndex: "1",
  width: "100px",
  height: "auto",
  maxHeight: "128px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const orangeNavbar = {
  border: "0px solid",
  borderRadius: "30px",
  backgroundColor: "#FC9254",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "-webkit-center",
  padding: "1%",
  position: "relative",
  top: "0%",
  boxShadow: "-3px 10px 25px rgba(0, 0, 0, 0.25)",
  transition: "all 200ms ease-in-out 0ms",
};

const whiteNavbar = {
  border: "0px solid",
  borderRadius: "30px",
  backgroundColor: "white",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "-webkit-center",
  padding: "1%",
  boxShadow: "-3px 10px 25px rgba(0, 0, 0, 0.25)",
  transition: "all 200ms ease-in-out 0ms",
};

export function Scroller(props) {

  const [cityPicto, setCityPicto] = useState(props.city);
  const [destination, setDestination] = useState(props.destination);
  const [origin, setOrigin] = useState(props.origin);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    };
  }, []);

  useEffect(() => {
    setCityPicto(props.city);
  }, [props.city]);

  useEffect(() => {
    setOrigin(props.origin);
  }, [props.origin]);

  useEffect(() => {
    setDestination(props.destination);
  }, [props.destination]);

  return (
    <>
    <div style={fixedStyleNav}>
      <nav style={scrollY > 0.74 * window.innerHeight ? whiteNavbar : orangeNavbar}>
        <Link activeClass="active" to="weather" spy={true}>
          <img className="button" src={scrollY > 0.74 * window.innerHeight ? thinkingO : thinking} alt="logo" />
        </Link>
        <Link activeClass="active" to="part2" spy={true}>
          <img className="buttonSagrada" src={scrollY > 0.74 * window.innerHeight ? origin.logo_o : origin.logo} alt="logo" />
        </Link>
        <Link activeClass="active" to="part3" spy={true}>
          <img className="button" src={scrollY > 0.74 * window.innerHeight ? arriveO : arrive} alt="logo" />
        </Link>
        <Link activeClass="active" to="part4" spy={true}>
          <img className="buttonSagrada" src={scrollY > 0.74 * window.innerHeight ? destination.logo_o : destination.logo} alt="logo" />
        </Link>
      </nav>
    </div>
    </>
  );
}
