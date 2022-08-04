import { useState } from "react";
import { Dots } from "@brainhubeu/react-carousel";
import { t } from "i18next";
import "@brainhubeu/react-carousel/lib/style.css";
import sunPicto from "../../../images/carousel/sun.png";
import snowMan from "../../../images/carousel/snowMan.png";
import sunny from "../../../images/carousel/sunny.png";
import sunActive from "../../../images/carousel/sunButton.png";
import snowActive from "../../../images/carousel/snowButton.png";
import cloudActive from "../../../images/carousel/cloudButton.png";

import "./weatherCarousel.css";

function WeatherComponent(props) {
  const city = props.city;
  const destination = props.destination;
  const mainCity = destination.code;
  const mainCityDays = [
    destination.temperature.weatherCold + t("days/year"),
    destination.temperature.weatherMedium + t("days/year"),
    destination.temperature.weatherHot + t("days/year"),
  ];

  var secondBox;

  switch (props.format) {
    case "s":
      secondBox = {
        borderRadius: "30px",
        height: "initial",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 12px 0px 12px",
      };
      break;
    case "m":
    case "l":
      secondBox = {
        borderRadius: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
      };
      break;
    default:
      break;
  }
  return (
    <div style={secondBox}>
      <div className="cityBox">
        <img className="pictoCity" src={city.logo} alt="city" />
        <div
          style={{
            display: "flex",
            width: "55%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="align">{city.code}</span>
          <div className="align2">
            <span>
              {props.weatherValue === 1
                ? city.temperature.weatherMedium
                : props.weatherValue === 0
                ? city.temperature.weatherCold
                : city.temperature.weatherHot}
              {t("days/year")}
            </span>
          </div>
        </div>
      </div>
      <span className="weatherText">{props.weather}</span>
      <div className="cityBox2">
        <img className="pictoCity" src={destination.logo} alt="mainCity" />
        <div
          style={{
            display: "flex",
            width: "55%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="align">{mainCity}</span>
          <div className="align2">
            <span>{mainCityDays[props.weatherValue]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const WeatherCarousel = (props) => {
  const [value, setValue] = useState(1);
  const [img, setImg] = useState(sunny);
  const [weather, setWeather] = useState(1);
  const [cityDay, setCityDay] = useState("120");
  const [dots, setDots] = useState([
    <img alt="weatherPicto" className="carouselDots" src={snowMan} />,
    <img alt="weatherPicto" className="carouselDots" src={sunActive} />,
    <img alt="weatherPicto" className="carouselDots" src={sunPicto} />,
  ]);

  var boxStyle;

  switch (props.format) {
    case "s":
      boxStyle = {
        position: "relative",
        backgroundColor: "white",
        borderRadius: "0px 0px 30px 30px",
        width: "100%",
        marginTop: "-1px",
        height: "190px",
      };
      break;
    case "m":
    case "l":
      boxStyle = {
        position: "relative",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "0px 0px 30px 30px",
        boxShadow: "rgb(0 0 0 / 15%) 0px 15px 25px",
        width: "100%",
        height: "367px",
        paddingTop: "3%",
      };
      break;
    default:
      break;
  }

  const onChange = (newValue) => {
    setValue(newValue);
    if (newValue === 2) {
      setImg(sunny);
      setWeather(2);
      setCityDay("120");
      setDots([
        <img alt="weatherPicto" className="carouselDots" src={snowMan} />,
        <img alt="weatherPicto" className="carouselDots" src={sunPicto} />,
        <img alt="weatherPicto" className="carouselDots" src={sunActive} />,
      ]);
    } else if (newValue === 1) {
      setImg(sunPicto);
      setWeather(1);
      setCityDay("80");
      setDots([
        <img alt="weatherPicto" className="carouselDots" src={snowMan} />,
        <img alt="weatherPicto" className="carouselDots" src={cloudActive} />,
        <img alt="weatherPicto" className="carouselDots" src={sunny} />,
      ]);
    } else if (newValue === 0) {
      setImg(snowMan);
      setWeather(0);
      setCityDay("34");
      setDots([
        <img alt="weatherPicto" className="carouselDots" src={snowActive} />,
        <img alt="weatherPicto" className="carouselDots" src={sunPicto} />,
        <img alt="weatherPicto" className="carouselDots" src={sunny} />,
      ]);
    }
  };
  return (
    <div style={boxStyle}>
      <span className="comparisonTitle">
        {t("weather comparison")}
        <sup style={{ all: "initial", verticalAlign: "super" }}>*</sup>
      </span>
      <WeatherComponent
        format={props.format}
        city={props.city}
        destination={props.destination}
        img={img}
        weather={
          weather === 2
            ? t("weather>25")
            : weather === 1
            ? t("weather5-25")
            : t("weather<5")
        }
        mainCityDay={cityDay + t("days/year")}
        weatherValue={value}
      />
      <div>
        <Dots
          className="dots"
          value={value}
          onChange={onChange}
          thumbnails={dots}
        />
      </div>
    </div>
  );
};

export default WeatherCarousel;
