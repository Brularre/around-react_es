import mainLogo from "../images/main__logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={mainLogo}
        alt="Logo de Around the US"
        className="header__logo"
      />
    </header>
  );
}
