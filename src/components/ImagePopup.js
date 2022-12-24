export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`} id="popup__image">
      <button
        type="button"
        className="popup__close-btn"
        onClick={onClose}
      ></button>
      <img
        src={card.link}
        alt={`Imagen de ${card.name}`}
        className="popup__image"
      />
      <h3 className="popup__image-caption">{card.name}</h3>
    </div>
  );
}
