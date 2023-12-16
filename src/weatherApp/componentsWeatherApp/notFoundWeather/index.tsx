import React from "react";
import "./style.css";

export const NotFoundWeather = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <div className="notFound-weatherApp" ref={ref}>
        <img src="assets/img/404.png" alt="Erro404" title="Erro404" />
        <p>Oops! Localização inválida :/</p>
      </div>
    );
  }
);
