import React from "react";
import "./style.css";

interface MyComponentProps {
  pathImg: string;
  temperatura: string;
  descricao: string;
}

export const ShowWeather = React.forwardRef<HTMLDivElement, MyComponentProps>(
  (props, ref) => {
    return (
      <div ref={ref} className="showWeather">
        <img src={props.pathImg} alt="Clima" title="Clima" />
        <p className="temperatura">{props.temperatura}</p>
        <p className="descricao">{props.descricao}</p>
      </div>
    );
  }
);
