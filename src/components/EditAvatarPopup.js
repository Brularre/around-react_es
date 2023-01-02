import { useState, useContext, useEffect, useRef } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState("");
  const inputRef = useRef(avatar);

  function handleAvatarChange(evt) {
    setAvatar(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(inputRef.current.value);
  }

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  return (
    <div
      className={`popup ${isOpen ? "popup_active" : ""}`}
      id="popup__edit-avatar"
    >
      <form
        className="popup__form"
        name="popup__edit-avatar"
        onSubmit={handleSubmit}
        noValidate
      >
        <button
          type="button"
          onClick={onClose}
          className="popup__close-btn"
        ></button>
        <h2 className="popup__form-title">Cambiar Foto de Perfil</h2>
        <div className="popup__input-container">
          <input
            type="url"
            name="profile-avatar"
            id="profile-avatar"
            className="popup__input"
            placeholder="Enlace a imagen"
            required
            ref={inputRef}
            onChange={handleAvatarChange}
          />
          <span className="popup__error-profile-avatar"></span>
        </div>
        <button type="submit" className="popup__submit-btn">
          Guardar
        </button>
      </form>
    </div>
  );
}
