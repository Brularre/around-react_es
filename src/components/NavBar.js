import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./styles/NavBar.css";

function NavBar(props) {
  const history = useHistory();
  function signOut() {
    localStorage.removeItem("jwt");
    props.handleLogout();
    history.push("/login");
  }

  console.log(props);

  return (
    <nav className="navbar">
      <NavLink
        exact
        className="navbar__item"
        activeClassName="navbar__item_active"
        to="/login"
      >
        Ingresar
      </NavLink>

      <button onClick={signOut} className="menu__item menu__button">
        Cerrar sesión
      </button>
    </nav>
  );
}

export default NavBar;
