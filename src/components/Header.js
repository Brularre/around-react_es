import mainLogo from "../images/main__logo.svg";
import NavBar from "./NavBar.js";

export default function Header({ onLogout, userEmail }) {
  return (
    <>
      <header className="header">
        <img
          src={mainLogo}
          alt="Logo de Around the US"
          className="header__logo"
        />
        <NavBar onLogout={onLogout} userEmail={userEmail} />
      </header>
    </>
  );
}
