import React from "react";
import ReactDOM from "react-dom/client";
import { WeatherApp } from "./weatherApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);
reportWebVitals();
