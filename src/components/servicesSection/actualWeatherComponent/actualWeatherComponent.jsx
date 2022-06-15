import React, { useEffect, useState } from "react";
import sun from "../../../images/carousel/sunny.png";
import cloud from "../../../images/carousel/sun.png";
import rain from "../../../images/carousel/rain.png";
import clear from "../../../images/carousel/sunny.png";
import snow from "../../../images/carousel/rain.png";
import drizzle from "../../../images/carousel/rain.png";
import thunderstorm from "../../../images/carousel/rain.png";
import atmosphere from "../../../images/carousel/rain.png";
import { t } from "i18next";

import "./actualWeatherComponent.css";

const getWeather = async (city) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiPath = `${process.env.REACT_APP_API_PATH}${city}&appid=${apiKey}`;
  const api_call = await fetch(apiPath).then((response) => response.json());
  return api_call;
};

function getPictoWeather(weather) {
  if (weather === "Clouds") return cloud;
  else if (weather === "Clear") return clear;
  else if (weather === "Rain") return rain;
  else if (weather === "Sun") return sun;
  else if (weather === "Snow") return snow;
  else if (weather === "Thunderstorm") return thunderstorm;
  else if (weather === "Atmosphere") return atmosphere;
  else if (weather === "Drizzle") return drizzle;
  else if (weather === "Fog") return drizzle;
  return cloud;
}

function WeatherComponent(props) {
  const city = props.city;
  const weatherPic = props.src;
  const items = props.items;
  const format = props.format;

  var travelTimeCityStyle;
  var tempText;
  var celsiusText;
  var weatherPicStyle;
  var pictoTemperatureStyle;

  switch (format) {
    case "s":
      tempText = {
        fontFamily: "gotham",
        fontWeight: "bold",
        textSizeAdjust: "none",
        color: "#283D47",
        fontSize: "110%",
        textAlign: "center",
        marginTop: "2%",
      };

      celsiusText = {
        fontFamily: "gotham",
        fontWeight: "bold",
        textAlign: "center",
        color: "#283D47",
        width: "100%",
      };

      travelTimeCityStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "calc(50% - 12px)",
        zIndex: "1"
      };

      weatherPicStyle = {
        display: "block",
        width: "48px",
        height: "48px",
      };

      pictoTemperatureStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      };

      break;

    case "m":
      tempText = {
        fontFamily: "gotham",
        fontWeight: "bold",
        textSizeAdjust: "none",
        color: "#283D47",
        fontSize: "35px",
        textAlign: "center",
        marginBottom: "4%",
      };

      celsiusText = {
        fontFamily: "gotham",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "35px",
        color: "#283D47",
        width: "100%",
      };

      travelTimeCityStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "calc(50% - 12px)",
        padding: "12px",
        borderRadius: "30px",
        backgroundColor: "white",
      };

      weatherPicStyle = {
        display: "block",
        width: "84px",
        marginRight: "20px",
      };

      pictoTemperatureStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      };

      break;

    case "l":
      tempText = {
        fontFamily: "gotham",
        fontWeight: "bold",
        textSizeAdjust: "none",
        color: "#283D47",
        fontSize: "35px",
        textAlign: "center",
        marginBottom: "4%",
      };

      celsiusText = {
        fontFamily: "gotham",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "35px",
        color: "#283D47",
        width: "100%",
      };

      travelTimeCityStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "calc(50% - 12px)",
        padding: "12px",
        borderRadius: "30px",
        backgroundColor: "white",
      };

      weatherPicStyle = {
        display: "block",
        width: "84px",
        marginRight: "20px",
      };

      pictoTemperatureStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      };
      break;
      default:
        break;
  }

  return (
    <div style={travelTimeCityStyle}>
      <span style={tempText}>{city}</span>
      <div style={pictoTemperatureStyle}>
        <img alt="weather" src={weatherPic} style={weatherPicStyle}></img>
        <span style={celsiusText}>{items ? Math.round(items.main.temp - 273.15) : null} °C</span>
      </div>
    </div>
  );
}

export function ActualWeather(props) {
  const [weatherPic, setWeatherPic] = useState();
  const [weatherPicArrival, setWeatherPicArrival] = useState();
  const [items, setItems] = useState();
  const [weatherArrival, setWeatherArrival] = useState();

  const format = props.format;
  const city = props.city;
  const destination = props.destination;

  var CardStyle;
  var line;
  var weatherOfTheDayStyle;

  useEffect(() => {
    getWeather(destination.name).then((res) => {
      setWeatherArrival(res);
      setWeatherPicArrival(getPictoWeather(res.weather[0].main));
    });
    getWeather(city.name).then((res) => {
      setItems(res);
      setWeatherPic(getPictoWeather(res.weather[0].main));
    });
  }, [props.city, props.destination, destination.name, city.name]);

  switch (format) {
    case "s":
      CardStyle = {
        justifyContent: "space-around",
        borderRadius: "30px 30px 0px 0px",
        boxShadow: "rgb(0 0 0 / 15%) 0px 15px 25px",
        backgroundColor: "white",
        width: "100%",
        padding: "12px",
        height: "190px",
      };

      line = {
        width: "3px",
        backgroundColor: "#FC9254",
        height: "CardStyle.height",
        marginLeft: "2px",
        marginRight: "2px",
      };
      weatherOfTheDayStyle = {
        display: "flex",
        width: "100%",
        marginBottom: "6%",
        marginLeft: "6px",
      };
      break;
    case "m":
      CardStyle = {
        height: "367px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        verticalAlign: "middle",
        borderRadius: "30px 30px 0px 0px",
        boxShadow: "rgb(0 0 0 / 15%) 0px 15px 25px",
        backgroundColor: "white",
        width: "100%",
        padding: "0",
        marginBottom: "5px",
      };

      line = {
        width: "3px",
        backgroundColor: "#FC9254",
        height: "CardStyle.height",
      };
      weatherOfTheDayStyle = {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        marginBottom: "6%",
      };
      break;
    case "l":
      CardStyle = {
        height: "367px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        verticalAlign: "middle",
        borderRadius: "30px 30px 0px 0px",
        boxShadow: "rgb(0 0 0 / 15%) 0px 15px 25px",
        backgroundColor: "white",
        width: "100%",
        padding: "0",
        marginBottom: "5px",
      };

      line = {
        width: "3px",
        backgroundColor: "#FC9254",
        height: "CardStyle.height",
      };

      weatherOfTheDayStyle = {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: "6%",
      };
      break;
    default:
      break;
  }

  return (
    <div style={CardStyle}>
      <span className="weatherTitle">{t("weather of the day")}</span>
      <div style={weatherOfTheDayStyle}>
        <WeatherComponent city={t(`${city.name}`)} src={weatherPic} items={items} format={props.format} />
        <div style={line} />
        <WeatherComponent city={t(`${destination.name}`)} src={weatherPicArrival} items={weatherArrival} format={props.format} />
      </div>
    </div>
  );
}
