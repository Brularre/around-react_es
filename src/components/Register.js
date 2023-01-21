import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as auth from "../auth.js";

function Register() {
  // create necessary state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      /* with our onChange handlers keeping the state up-to-date, the submitted
        values are already stored in the appropriate variables. */
      auth
        .register(username, email, password)
        // returns { data: { _id: '...', email: '...' } }
        .then((res) => console.log(res))
        .catch(console.log);
    }
  };

  return (
    <div className="form">
      <h2 className="form__title">Registrarse</h2>
      <form
        onSubmit={handleSubmit}
        className="form__element"
        name="form__register-form"
        id="form__register-form"
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
            Regístrate
          </button>
          <p>
            <Link to="/register" className="form__link">
              ¿Ya tienes tu cuenta? ¡Ingresa aquí!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
