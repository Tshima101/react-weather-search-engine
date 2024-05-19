import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul className="weather-today">
        <li>
          <img src={props.data.icon_url} alt={props.data.alt} />
        </li>
        <li className="temperature">
          {Math.round(props.data.temperature)}
          <span className="degrees"> °C</span>
        </li>
        <li className="description">{props.data.description}</li>
      </ul>
      <div className="wrapper">
        <div>
          <FontAwesomeIcon icon={faDroplet} className="icon" />
          <br />
          {props.data.humidity}%
        </div>
        <div>
          <FontAwesomeIcon icon={faWind} className="icon" />
          <br />
          {props.data.windspeed} m/s
        </div>
      </div>
    </div>
  );
}
