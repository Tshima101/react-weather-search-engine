import React from "react";
import DisplayTemperature from "./DisplayTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul className="weather-today">
        <li>
          <img src={props.data.icon_url} alt={props.data.alt} />
        </li>
        <li className="temperature">
          <DisplayTemperature celsius={props.data.temperature} />
        </li>
        <li className="description">{props.data.description}</li>
      </ul>
    </div>
  );
}
