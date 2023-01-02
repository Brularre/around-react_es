import { useEffect, useState, useContext } from "react";
import Card from "./Card.js";
import avatarPlaceholder from "../images/profile_avatar_placeholder.jpg";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Main({
  cards,
  onCardClick,
  onCardLike,
  onDeleteCardClick,
  onAddPlaceClick,
  onEditProfileClick,
  onEditAvatarClick,
}) {
  const [userName, setUserName] = useState("Loading...");
  const [userAbout, setAbout] = useState("Please Wait");
  const [userAvatar, setAvatar] = useState(avatarPlaceholder);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setUserName(currentUser.name);
    setAbout(currentUser.about);
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  return (
    <>
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <div className="profile__avatar-overlay">
            <div
              onClick={onEditAvatarClick}
              className="profile__avatar-edit-icon"
            ></div>
          </div>
          <img
            src={userAvatar}
            alt="Imagen de perfil del usuario"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <span>
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              onClick={onEditProfileClick}
              className="profile__edit-btn"
            ></button>
          </span>
          <p className="profile__about">{userAbout}</p>
        </div>
        <button
          type="button"
          onClick={onAddPlaceClick}
          className="profile__add-btn"
        ></button>
      </section>
      <main className="elements">
        {cards.map((card) => (
          <Card
            cardData={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onDeleteCardClick}
          />
        ))}
      </main>
    </>
  );
}
