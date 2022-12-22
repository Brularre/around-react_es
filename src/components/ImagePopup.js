import cardPlaceholder from "../images/elements_image_placeholder.svg";

export default function ImagePopup() {
  return (
    <div className="popup" id="popup__image">
      <button type="button" className="popup__close-btn"></button>
      <img
        src={cardPlaceholder}
        alt="Imagen del popup"
        className="popup__image"
      />
      <h3 className="popup__image-caption">Título del popup</h3>
    </div>
  );
}
