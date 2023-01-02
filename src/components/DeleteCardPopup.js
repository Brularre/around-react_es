export default function DeleteCardPopup({
  isOpen,
  onClose,
  card,
  onCardDeleteSubmit,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onCardDeleteSubmit(card);
  }
  return (
    <div
      className={`popup ${isOpen ? "popup_active" : ""}`}
      id="popup__delete-card"
    >
      <form
        className="popup__form"
        name="popup__delete-card"
        onSubmit={handleSubmit}
        noValidate
      >
        <button
          type="button"
          onClick={onClose}
          className="popup__close-btn"
        ></button>
        <h2 className="popup__form-title">¿Estás seguro/a?</h2>

        <button type="submit" className="popup__submit-btn">
          Sí
        </button>
      </form>
    </div>
  );
}
