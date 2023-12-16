import React, { useState, useCallback, useRef } from "react";
import "./style.css";
import {
  SearchBox,
  ShowWeather,
  NotFoundWeather,
  DetailsWeather,
} from "./componentsWeatherApp";

export const WeatherApp = () => {
  const container = useRef<HTMLDivElement>(null);
  const weatherBox = useRef<HTMLDivElement>(null);
  const weatherDetails = useRef<HTMLDivElement>(null);
  const error404 = useRef<HTMLDivElement>(null);
  const [img, setImg] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [descricao, setDescricao] = useState("");
  const [humidade, setHumidade] = useState("");
  const [vento, setVento] = useState("");

  const handleGetWeather = useCallback((city: string) => {
    const APIKey = "ae498bef0546c4635b3e701226c9efcc";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    )
      .then((Response) => Response.json())
      .then((json) => {
        if (
          json.cod === "404" &&
          container.current &&
          weatherBox.current &&
          weatherDetails.current &&
          error404.current
        ) {
          container.current.style.height = "400px";
          weatherBox.current.style.display = "none";
          weatherDetails.current.style.display = "none";
          error404.current.style.display = "block";
          error404.current.classList.add("fadeIn");
          return;
        }
        if (error404.current) {
          console.log(json);
          error404.current.style.display = "none";
          error404.current.classList.remove("fadeIn");
        }
        switch (json.weather[0].main) {
          case "Clear":
            setImg("assets/img/clear.png");
            break;
          case "Rain":
            setImg("assets/img/rain.png");
            break;
          case "Snow":
            setImg("assets/img/mist.png");
            break;
          case "Clouds":
            setImg("assets/img/cloud.png");
            break;
          case "Haze":
            setImg("assets/img/storm.png");
            break;
          default:
            setImg("");
        }
        setTemperatura(json.main.temp.toString() + "°C");
        setDescricao(json.weather[0].description);
        setHumidade(json.main.humidity.toString() + "%");
        setVento(json.wind.speed.toString() + "Km/h");
        if (
          container.current &&
          weatherBox.current &&
          weatherDetails.current &&
          error404.current
        ) {
          weatherBox.current.style.display = "";
          weatherDetails.current.style.display = "";
          weatherBox.current.classList.add("fadeIn");
          container.current.style.height = "590px";
        }
      });
  }, []);

  return (
    <section className="body-weatherApp">
      <div ref={container} className="container-weatherApp">
        <SearchBox useApi={handleGetWeather} />
        <NotFoundWeather ref={error404} />
        <ShowWeather
          ref={weatherBox}
          pathImg={img}
          temperatura={temperatura}
          descricao={descricao}
        />
        <DetailsWeather
          ref={weatherDetails}
          humidade={humidade}
          vento={vento}
        />
      </div>
    </section>
  );
};
