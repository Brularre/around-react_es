import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onSubmit }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  }

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
            onChange={handleChange}
            value={values.email}
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
            onChange={handleChange}
            value={values.password}
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
