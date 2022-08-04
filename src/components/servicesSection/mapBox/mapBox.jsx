import React, { useRef, useState, useEffect } from "react";
import "./mapBox.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapIcons from "../../../images/map/separateIcons/mapIcons";

// Token from .env file
const mapBoxToken = process.env.REACT_APP_MAPBOX_TOKEN;

mapboxgl.accessToken = mapBoxToken;

export function MapBox(props) {
  const destination = props.destination;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(destination.gpsPosition.lat);
  const [lng, setLng] = useState(destination.gpsPosition.lon);
  const [zoom, setZoom] = useState(9);
  const [isLoaded, setLoaded] = useState(false);
  const [arePointsGathered, setPointsGathered] = useState(false);

  const [geoJson, setGeoJson] = useState([]);

  function centerMap(features = null) {
    if (geoJson.length === 0 && !features) return;
    features = geoJson.length ? geoJson : features;
    var markers = Array.from(document.getElementsByClassName("marker"));
    var markersToHide = markers.filter(
      (marker) =>
        !marker.classList.contains(props.place) &&
        !marker.classList.contains(props.arrivedPlace)
    );
    for (var m of markers) {
      m.style.display = "block";
    }
    for (var j of markersToHide) {
      j.style.display = "none";
    }

    var featurePlace = features.find((f) => f.properties.name === props.place);
    var featureArrivedPlace = features.find(
      (f) => f.properties.name === props.arrivedPlace
    );
    var featurePlaceCoordinates = featurePlace.geometry.coordinates;
    var featureArrivedPlaceCoordinates =
      featureArrivedPlace.geometry.coordinates;

    var bounds = new mapboxgl.LngLatBounds([
      featurePlaceCoordinates,
      featureArrivedPlaceCoordinates,
    ]);
    map.current.fitBounds(bounds, { padding: 50 });
  }

  useEffect(() => {
    setLat(destination.gpsPosition.lat);
    setLng(destination.gpsPosition.lon);
    setLoaded(false);
    setPointsGathered(false);
  }, [destination.gpsPosition.lat, destination.gpsPosition.lon]);

  useEffect(() => {
    if (!map.current || isLoaded) return;
    map.current.flyTo({
      center: [lng, lat],
    });
    setLoaded(true);
  }, [props.format, lng, lat]);
  // *!
  useEffect(() => {
    if (!map.current) {
      // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mbenkraouda/cl0hwunol001u15p1erz8bof3",
        center: [lng, lat],
        zoom: zoom,
        maxZoom: 15,
        interactive: true,
      });

      fetch(
        `https://api.mapbox.com/datasets/v1/${destination.dataset.creator}/${destination.dataset.id}/features?access_token=${destination.dataset.token}`
      ).then(async (res) => {
        if (res.ok) {
          var json = await res.json();
          if (json.features) {
            setGeoJson(json.features);
          } else return;
          for (const feature of json.features) {
            var el = document.createElement("div");
            el.className = "marker " + feature.properties.name;
            if (!(feature.properties.name in MapIcons)) {
              el.insertAdjacentHTML(
                "afterbegin",
                '<svg display="block" height="32.800000000000004px" width="21.6px" viewBox="0 0 27 41"><defs><radialGradient id="shadowGradient"><stop offset="10%" stop-opacity="0.4"></stop><stop offset="100%" stop-opacity="0.05"></stop></radialGradient></defs><ellipse cx="13.5" cy="34.8" rx="10.5" ry="5.25" fill="url(#shadowGradient)"></ellipse><path fill="#ffffff" d="M27,13.5C27,19.07 20.25,27 14.75,34.5C14.02,35.5 12.98,35.5 12.25,34.5C6.75,27 0,19.22 0,13.5C0,6.04 6.04,0 13.5,0C20.96,0 27,6.04 27,13.5Z"></path><path opacity="0.25" d="M13.5,0C6.04,0 0,6.04 0,13.5C0,19.22 6.75,27 12.25,34.5C13,35.52 14.02,35.5 14.75,34.5C20.25,27 27,19.07 27,13.5C27,6.04 20.96,0 13.5,0ZM13.5,1C20.42,1 26,6.58 26,13.5C26,15.9 24.5,19.18 22.22,22.74C19.95,26.3 16.71,30.14 13.94,33.91C13.74,34.18 13.61,34.32 13.5,34.44C13.39,34.32 13.26,34.18 13.06,33.91C10.28,30.13 7.41,26.31 5.02,22.77C2.62,19.23 1,15.95 1,13.5C1,6.58 6.58,1 13.5,1Z"></path><circle fill="white" cx="13.5" cy="13.5" r="5.5"></circle></svg>'
              );
            } else {
              el.style.backgroundImage = `url('${
                MapIcons[feature.properties.name]
              }')`;
            }
            new mapboxgl.Marker(el)
              .setLngLat(feature.geometry.coordinates)
              .addTo(map.current);
          }
          map.current.resize();
          centerMap(json.features);
        }
      }).catch(async (err) => {
        console.log("It's allright : ", err)
      });
    }
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(destination.gpsPosition.lon);
      setLat(destination.gpsPosition.lat);
      setZoom(map.current.getZoom());
    });
  });

  useEffect(() => {
    centerMap();
  }, [props.place, props.arrivedPlace]);

  return (
    <div className="map">
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
}
