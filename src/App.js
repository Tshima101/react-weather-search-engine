import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Roodepoort" />
        <footer>
          Open-source code on{" "}
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            Github
          </a>
          , hosted on{" "}
          <a href="https://" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
