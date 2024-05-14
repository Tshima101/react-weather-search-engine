import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Roodepoort" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Tshima101"
              target="_blank"
              rel="noreferrer"
            >
              Tshimangadzo Lambani
            </a>{" "}
            and is on{" "}
            <a
              href="https://github.com/Tshima101/react-weather-search-engine"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a href="https://.netlify.app" target="_blank" rel="noreferrer">
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
