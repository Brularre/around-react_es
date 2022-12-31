import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import cardImagePlaceholder from "../images/elements_image_placeholder.svg";

export default function Card({ cardData, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = cardData.owner._id === currentUser._id;
  const isLiked = cardData.likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `${
    !isOwn ? "elements__del-btn_disabled" : "elements__del-btn"
  }`;

  const likeButtonClassName = `elements__like-btn ${
    isLiked ? "elements__like-btn_active" : ""
  }`;

  function handleClick() {
    onCardClick(cardData);
  }

  return (
    <div className="elements__card">
      <button type="button" className={cardDeleteButtonClassName}></button>
      <img
        onError={({ currentTarget }) => {
          currentTarget.onError = null;
          currentTarget.src = cardImagePlaceholder;
        }}
        src={cardData.link}
        alt={`Fotografía de ${cardData.name}`}
        className="elements__image"
        onClick={handleClick}
      />
      <div className="elements__name-box">
        <h2 className="elements__name">{cardData.name}</h2>
        <div className="elements__like-box">
          <button type="submit" className={likeButtonClassName}></button>
          <div className="elements__like-number">{cardData.likes.length}</div>
        </div>
      </div>
    </div>
  );
}
