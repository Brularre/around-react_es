export default function Card({ cardData, onCardClick }) {
  function handleClick() {
    onCardClick(cardData);
  }
  return (
    <div className="elements__card">
      <button type="button" className="elements__del-btn"></button>
      <img
        src={cardData.link}
        alt={`Fotografía de ${cardData.name}`}
        className="elements__image"
        onClick={handleClick}
      />
      <div className="elements__name-box">
        <h2 className="elements__name">{cardData.name}</h2>
        <div className="elements__like-box">
          <button type="submit" className="elements__like-btn"></button>
          <div className="elements__like-number">{cardData.likes.length}</div>
        </div>
      </div>
    </div>
  );
}
