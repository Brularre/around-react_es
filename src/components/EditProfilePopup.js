import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleAboutChange(evt) {
    setAbout(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ name, about });
  }

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  return (
    <div
      className={`popup ${isOpen ? "popup_active" : ""}`}
      id="popup__edit-profile"
    >
      <form
        className="popup__form"
        name="popup__edit-profile"
        onSubmit={handleSubmit}
        noValidate
      >
        <button
          type="button"
          onClick={onClose}
          className="popup__close-btn"
        ></button>
        <h2 className="popup__form-title">Editar Perfil</h2>
        <div className="popup__input-container">
          <input
            type="text"
            name="profile-name"
            id="profile-name"
            className="popup__input"
            placeholder="Tu nombre"
            minLength="2"
            maxLength="40"
            required
            onChange={handleNameChange}
            value={name || ""}
          />
          <span className="popup__error-profile-name"></span>
        </div>
        <div className="popup__input-container">
          <input
            type="text"
            name="profile-about"
            id="profile-about"
            className="popup__input"
            placeholder="Sobre ti"
            minLength="2"
            maxLength="200"
            required
            onChange={handleAboutChange}
            value={about || ""}
          />
          <span className="popup__error-profile-about"></span>
        </div>
        <button type="submit" className="popup__submit-btn">
          Guardar
        </button>
      </form>
    </div>
  );
}
