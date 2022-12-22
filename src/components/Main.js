import avatarPlaceholder from "../images/profile_avatar_placeholder.jpg";
import cardPlaceholder from "../images/elements_image_placeholder.svg";

export default function Main() {
  function handleEditAvatarClick() {
    document.querySelector("#popup__edit-avatar").classList.add("popup_active");
  }

  function handleEditProfileClick() {
    document
      .querySelector("#popup__edit-profile")
      .classList.add("popup_active");
  }

  function handleAddPlaceClick() {
    document.querySelector("#popup__add-form").classList.add("popup_active");
  }

  return (
    <>
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <div className="profile__avatar-overlay">
            <div
              onClick={handleEditAvatarClick}
              className="profile__avatar-edit-icon"
            ></div>
          </div>
          <img
            src={avatarPlaceholder}
            alt="Imagen de perfil del usuario"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <span>
            <h1 className="profile__name">Loading...</h1>
            <button
              type="button"
              onClick={handleEditProfileClick}
              className="profile__edit-btn"
            ></button>
          </span>
          <p className="profile__about"></p>
        </div>
        <button
          type="button"
          onClick={handleAddPlaceClick}
          className="profile__add-btn"
        ></button>
      </section>
      <main className="elements"></main>

      <div className="popup" id="popup__image">
        <button type="button" className="popup__close-btn"></button>
        <img
          src={cardPlaceholder}
          alt="Imagen del popup"
          className="popup__image"
        />
        <h3 className="popup__image-caption">Título del popup</h3>
      </div>
    </>
  );
}
