import { useState } from "react";
import couple from "../../../images/lifeStyle/couple.png";
import family from "../../../images/lifeStyle/famille.png";
import solo from "../../../images/lifeStyle/flat.png";
import roommate from "../../../images/lifeStyle/coloc.png";
import beer from "../../../images/lifeStyle/beer.png";
import cutlery from "../../../images/lifeStyle/restaurant.png";
import { t } from "i18next";
import "./lifeCost.css";
import backArrow from "../../../images/back.png";

function handleSrc(lifeStyle) {
  return lifeStyle === 0 ? solo : lifeStyle < 2 ? couple : lifeStyle === 2 ? roommate : lifeStyle > 2 ? family : roommate;
}

function handleLifeCost(lifeStyle, city) {
  if (lifeStyle === '1') {
    return city.priceFlat.individual + "€";
  }
  if (lifeStyle === '2') {
    return city.priceFlat.roomate + "€";
  }
  if (lifeStyle === '3') {
    return city.priceFlat.family + "€";
  }
}

function handleLifeCostArrival(lifeStyle, destination) {
  return lifeStyle < 2
    ? destination.priceFlat.individual + "€"
    : lifeStyle === 2
    ? destination.priceFlat.roomate + "€"
    : lifeStyle > 2
    ? destination.priceFlat.family + "€"
    : destination.priceFlat.roomate + "€";
}

function Card(props) {
  const logo = props.logo;
  const city = props.city;
  const destination = props.destination;
  const priceCity = props.priceCity;
  const priceArrival = props.priceArrival;
  const handleChange = props.handleChange;

  return (
    <div className="lifeCostCard">
      <div className="topContainer">
        <img alt="iconCard" src={logo} className="iconCard" />
        <span className="averagePrice">{props.averagePrice}<sup style={{all: "initial", verticalAlign: "super"}}>**</sup></span>
      </div>
      <div className="citiesPricesContainer">
        <div className="bottomContainer">
          <span className="city">{city.code}</span>
          <span className="city">/</span>
          <span className="city">{destination.code}</span>
        </div>
        <div className="bottomContainer">
          <span className="currentPrice">{priceCity}</span>
          <span className="currentPrice"></span>
          <span className="currentPrice">{priceArrival}</span>
        </div>
      </div>
      {handleChange && (
        <button className="backArrowBtn" onClick={handleChange}>
          <img src={backArrow} className="backArrow" alt="img"/>
        </button>
      )}
    </div>
  );
}

function CardLifeStyle(props) {
  return (
    <div className="lifeCostCard">
      <div className="topContainer">
        <img alt="iconCard" src={props.logo} className="iconCard" />
        <span className="averagePrice">{t("averagePriceAppartement")}<sup style={{all: "initial", verticalAlign: "super"}}>**</sup></span>
      </div>
      <div className="citiesPricesContainer" style={{ marginTop: "24px", marginBottom: "auto" }}>
        <button type="submit" onClick={props.handleChange} className="livingButton" value={2}>
          {t("roommate")}
        </button>
        <button type="submit" onClick={props.handleChange} className="livingButton" value={1}>
          {t("alone")}
        </button>
        <button type="submit" onClick={props.handleChange} className="livingButton" value={3}>
          {t("family")}
        </button>
      </div>
    </div>
  );
}

export function LifeCost(props) {
  const [lifeStyle, setLifeStyle] = useState(0);
  const city = props.city;
  const destination = props.destination;
  const appartementPrice =
    lifeStyle < 2
      ? t("averagePriceAppartementCouple")
      : lifeStyle === 2
      ? t("averagePriceAppartementCouple")
      : lifeStyle > 2
      ? t("averagePriceAppartementFamily")
      : t("averagePriceAppartementFlatsharing");
  const handleChange = (event) => {
    setLifeStyle(event.target.value);
  };
  return (
    <div className="cardsComponent">
      <Card
        logo={beer}
        city={city}
        destination={destination}
        cityPicto={destination.logo}
        priceCity={city.beerPrice + "€"}
        priceArrival={destination.beerPrice + "€"}
        averagePrice={t("averagePriceBeer")}
      />
      <Card
        logo={cutlery}
        city={city}
        destination={destination}
        cityPicto={destination.logo}
        priceCity={city.restaurantPrice + "€"}
        priceArrival={destination.restaurantPrice + "€"}
        averagePrice={t("averagePriceFood")}
      />
      {lifeStyle > 0 ? (
        <Card
          logo={handleSrc(lifeStyle)}
          city={city}
          destination={destination}
          cityPicto={destination.logo}
          priceCity={handleLifeCost(lifeStyle, city)}
          priceArrival={handleLifeCostArrival(lifeStyle, destination)}
          handleChange={handleChange}
          averagePrice={appartementPrice}
        />
      ) : (
        <CardLifeStyle handleChange={handleChange} logo={solo} />
      )}
    </div>
  );
}
