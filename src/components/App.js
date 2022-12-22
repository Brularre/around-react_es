// import logo from './logo.svg';
import { useState } from "react";
import "../pages/index.css";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup.js";

import {
  deleteCardProps,
  addPlaceProps,
  editProfileProps,
  editAvatarProps,
} from "../utils/constants.js";

function App() {
  const [isDeleteCardOpen, openDeleteCard] = useState(false);
  const [isAddPlaceOpen, openAddPlace] = useState(false);
  const [isEditProfileOpen, openEditProfile] = useState(false);
  const [isAvatarOpen, openEditAvatar] = useState(false);

  const openDeleteCardPopup = () => {
    openDeleteCard(true);
  };
  const openAddPlacePopup = () => {
    openAddPlace(true);
  };
  const openEditProfilePopup = () => {
    openEditProfile(true);
  };
  const openAvatarPopup = () => {
    openEditAvatar(true);
  };

  return (
    <>
      <div>
        <Header />
        <Main
          onDeleteCardClick={openDeleteCardPopup}
          onAddPlaceClick={openAddPlacePopup}
          onEditProfileClick={openEditProfilePopup}
          onEditAvatarClick={openAvatarPopup}
        />
        <Footer />
        <ImagePopup />
        <PopupWithForm {...deleteCardProps} isOpen={isDeleteCardOpen} />
        <PopupWithForm {...addPlaceProps} isOpen={isAddPlaceOpen} />
        <PopupWithForm {...editProfileProps} isOpen={isEditProfileOpen} />
        <PopupWithForm {...editAvatarProps} isOpen={isAvatarOpen} />
      </div>
    </>
  );
}

export default App;
