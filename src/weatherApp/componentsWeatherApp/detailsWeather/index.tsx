import React from "react";
import "./style.css";
import { FaWater, FaWind } from "react-icons/fa";

interface MyComponentProps {
  humidade: string;
  vento: string;
}

export const DetailsWeather = React.forwardRef<
  HTMLDivElement,
  MyComponentProps
>((props, ref) => {
  return (
    <div ref={ref} className="detaislWeather">
      <div className="humidade">
        <FaWater className="icons-details-weatherApp" />
        <div>
          <span>{props.humidade}</span>
          <p>Umidade</p>
        </div>
      </div>
      <div className="vento">
        <FaWind className="icons-details-weatherApp" />
        <div>
          <span>{props.vento}</span>
          <p>Veloc. Vento</p>
        </div>
      </div>
    </div>
  );
});
