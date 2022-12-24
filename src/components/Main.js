import { useEffect, useState } from "react";
import Card from "./Card.js";
import avatarPlaceholder from "../images/profile_avatar_placeholder.jpg";
import { api } from "../utils/api.js";

export default function Main({
  onCardClick,
  onAddPlaceClick,
  onEditProfileClick,
  onEditAvatarClick,
}) {
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState("Loading...");
  const [userAbout, setAbout] = useState("Please Wait");
  const [userAvatar, setAvatar] = useState(avatarPlaceholder);

  useEffect(() => {
    api.getUser().then(({ name, about, avatar }) => {
      setUserName(name);
      setAbout(about);
      setAvatar(avatar);
    });
  }, []);

  useEffect(() => {
    api.getCards().then((cardList) => setCards(cardList));
  }, []);

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
          <Card cardData={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </main>
    </>
  );
}
