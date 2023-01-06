import { useContext } from "react";
import Card from "./Card.js";

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
  const currentUser = useContext(CurrentUserContext);

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
            src={currentUser.avatar}
            alt="Imagen de perfil del usuario"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <span>
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              onClick={onEditProfileClick}
              className="profile__edit-btn"
            ></button>
          </span>
          <p className="profile__about">{currentUser.about}</p>
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
