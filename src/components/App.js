// import logo from './logo.svg';
import "../pages/index.css";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import cardPlaceholder from "../images/elements_image_placeholder.svg";

function App() {
  return (
    <>
      <div className="root">
        <Header />
        <Main />
        <Footer />

        <div className="popup" id="popup__image">
          <button type="button" className="popup__close-btn"></button>
          <img
            src={cardPlaceholder}
            alt="Imagen del popup"
            className="popup__image"
          />
          <h3 className="popup__image-caption">Título del popup</h3>
        </div>
        <div className="popup" id="popup__delete-card">
          <form className="popup__form" name="popup__delete-card" noValidate>
            <button type="button" className="popup__close-btn"></button>
            <h2 className="popup__form-title">¿Estás seguro/a?</h2>
            <button type="submit" className="popup__submit-btn">
              Sí
            </button>
          </form>
        </div>
        <div className="popup" id="popup__add-form">
          <form className="popup__form" name="popup__add-form" noValidate>
            <button type="button" className="popup__close-btn"></button>
            <h2 className="popup__form-title">Nuevo Lugar</h2>
            <div className="popup__input-container">
              <input
                type="text"
                name="place-name"
                id="place-name"
                className="popup__input"
                placeholder="Título"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__error-place-name"></span>
            </div>
            <div className="popup__input-container">
              <input
                type="url"
                name="place-link"
                id="place-link"
                className="popup__input"
                placeholder="Enlace a la imagen"
                required
              />
              <span className="popup__error-place-link"></span>
            </div>
            <button type="submit" className="popup__submit-btn">
              Crea
            </button>
          </form>
        </div>
        <div className="popup" id="popup__edit-profile">
          <form className="popup__form" name="popup__edit-profile" noValidate>
            <button type="button" className="popup__close-btn"></button>
            <h2 className="popup__form-title">Editar perfil</h2>
            <div className="popup__input-container">
              <input
                type="text"
                name="profile-name"
                id="profile-name"
                className="popup__input"
                placeholder="Tu nombre"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="popup__error-profile-name"></span>
            </div>
            <div className="popup__input-container">
              <input
                type="text"
                name="profile-about"
                id="profile-about"
                className="popup__input"
                placeholder="Sobre ti"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__error-profile-about"></span>
            </div>
            <button type="submit" className="popup__submit-btn">
              Guardar
            </button>
          </form>
        </div>
        <div className="popup" id="popup__edit-avatar">
          <form className="popup__form" name="popup__edit-avatar" noValidate>
            <button type="button" className="popup__close-btn"></button>
            <h2 className="popup__form-title">Cambiar foto de perfil</h2>
            <div className="popup__input-container">
              <input
                type="url"
                name="profile-avatar"
                id="profile-avatar"
                className="popup__input"
                placeholder="Enlace a imagen"
                required
              />
              <span className="popup__error-profile-avatar"></span>
            </div>
            <button type="submit" className="popup__submit-btn">
              Guardar
            </button>
          </form>
        </div>
      </div>

      <template id="template_cards">
        <div className="elements__card">
          <button type="button" className="elements__del-btn"></button>
          <img
            src={cardPlaceholder}
            alt="Fotografía en Web 'Around the US'"
            className="elements__image"
          />
          <div className="elements__name-box">
            <h2 className="elements__name">Nombre de Lugar</h2>
            <div className="elements__like-box">
              <button type="submit" className="elements__like-btn"></button>
              <div className="elements__like-number"></div>
            </div>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;
