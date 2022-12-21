import avatarPlaceholder from "../images/profile_avatar_placeholder.jpg";

export default function Main() {
  return (
    <>
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <div className="profile__avatar-overlay">
            <div className="profile__avatar-edit-icon"></div>
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
            <button type="button" className="profile__edit-btn"></button>
          </span>
          <p className="profile__about"></p>
        </div>
        <button type="button" className="profile__add-btn"></button>
      </section>
      <main className="elements"></main>
    </>
  );
}
