export default function PopupWithForm({ name, title, inputs, submit }) {
  return (
    <div className="popup" id={name}>
      <form className="popup__form" name={name} noValidate>
        <button type="button" className="popup__close-btn"></button>
        <h2 className="popup__form-title">{title}</h2>
        {inputs}
        <button type="submit" className="popup__submit-btn">
          {submit}
        </button>
      </form>
    </div>
  );
}
