import React, { useState } from "react";
import cookie from "../../../images/cookie.png";
import "./autoSlide.css";

export function NoCookie(props) {
  const [display, setDisplay] = useState("chatBot");

  const handleChange = () => {
    setDisplay(null);
  };
  if (!display) return null;
  return (
    <div className="chatBot">
      <img className="cookie" src={cookie} alt="img"/>
      <p className="cookieText">Ce site n'utilise pas de Cookies (à moins que...)</p>
      <button className="cookieButton" onClick={handleChange}>
        OK
      </button>
    </div>
  );
}
