/* PROPS OBJECTS */

const deleteCardProps = {
  name: "popup__delete-card",
  title: "¿Estás seguro/a?",
  submit: "Sí",
};

const addPlaceProps = {
  name: "popup__add-form",
  title: "Nuevo Lugar",
  submit: "Crea",
  inputs: (
    <>
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
    </>
  ),
};

const editProfileProps = {
  name: "popup__edit-profile",
  title: "Editar Perfil",
  submit: "Guardar",
  inputs: (
    <>
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
    </>
  ),
};

const editAvatarProps = {
  name: "popup__edit-avatar",
  title: "Cambiar Foto de Perfil",
  submit: "Guardar",
  inputs: (
    <>
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
    </>
  ),
};

export { deleteCardProps, addPlaceProps, editProfileProps, editAvatarProps };
