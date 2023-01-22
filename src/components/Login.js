import { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    props.onSubmit({ email: values.email, password: values.password });
    setValues({ email: "", password: "" });
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
            onChange={handleChange}
            value={values.email}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="form__input"
            placeholder="Contraseña"
            minLength="2"
            maxLength="12"
            required
            value={values.password}
            onChange={handleChange}
          />
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
