import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

function NavBar({ onLogout, userEmail }) {
  const { isLogged } = useContext(AppContext);
  const currentPath = useLocation().pathname;
  const linkPath = currentPath === "/signup" ? "/signin" : "signup";
  const linkText = currentPath === "/signup" ? "Ingresar" : "Registro";

  return (
    <nav className="navbar">
      {!isLogged && (
        <NavLink
          exact
          className="navbar__item"
          activeClassName="navbar__item_active"
          to={linkPath}
        >
          {linkText}
        </NavLink>
      )}
      {isLogged && <p className="navbar__user">{userEmail}</p>}
      {isLogged && (
        <button onClick={onLogout} className="navbar__logout">
          Cerrar sesión
        </button>
      )}
    </nav>
  );
}

export default NavBar;
