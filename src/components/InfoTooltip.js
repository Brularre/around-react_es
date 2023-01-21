import { useState } from "react";
import tooltipSuccess from "../images/info-tooltip__success.svg";
import tooltipFail from "../images/info-tooltip__fail.svg";

export default function InfoTooltip(props) {
  const [message, setMessage] = useState("¡Éxito! Ya registramos tu cuenta.");

  return (
    <div
      className={`info-tooltip ${props.isOpen ? "info-tooltip_active" : ""}`}
      id="info-tooltip"
    >
      <button
        type="button"
        onClick={props.onClose}
        className="info-tooltip__close-btn"
      ></button>
      <img
        src={tooltipSuccess}
        alt="Registro exitoso"
        className="info-tooltip__icon"
      />
      <h2 className="info-tooltip__text">{message}</h2>
    </div>
  );
}
