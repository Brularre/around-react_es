import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as auth from "../auth.js";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      // handle invalid entries appropriately
      return;
    }
    auth
      .authorize(email, password)
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
      })
      .catch(console.log);
  };
  return (
    <div className="form">
      <h2 className="form__title">Iniciar Sesión</h2>
      <form
        onSubmit={handleSubmit}
        className="form__element"
        name="form__login-form"
        id="form__login-form"
      >
        <div className="form__input-container">
          <input
            type="text"
            name="email"
            id="email"
            className="form__input"
            placeholder="Email"
            minLength="2"
            maxLength="40"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {/* <span className="form__error-email"></span> */}
          <input
            type="password"
            name="password"
            id="password"
            className="form__input"
            placeholder="Contraseña"
            minLength="2"
            maxLength="12"
            required
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <span className="form__error-password"></span> */}
        </div>
        <div className="form__button-container">
          <button type="submit" className="form__button">
            Iniciar Sesión
          </button>
          <p>
            <Link to="/register" className="form__link">
              ¿No tienes cuenta aún? ¡Registrate aquí!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
