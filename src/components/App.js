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
  const [selectedCard, setSelectedCard] = useState("");
  const [isCardPopupOpen, setCardPopupOpen] = useState(false);
  const [isDeleteCardOpen, openDeleteCard] = useState(false);
  const [isAddPlaceOpen, openAddPlace] = useState(false);
  const [isEditProfileOpen, openEditProfile] = useState(false);
  const [isAvatarOpen, openEditAvatar] = useState(false);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    setCardPopupOpen(true);
  };

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

  const closeAllPopups = () => {
    setSelectedCard("");
    setCardPopupOpen(false);
    openDeleteCard(false);
    openAddPlace(false);
    openEditProfile(false);
    openEditAvatar(false);
  };

  return (
    <>
      <div>
        <Header />
        <Main
          onCardClick={handleCardClick}
          onDeleteCardClick={openDeleteCardPopup}
          onAddPlaceClick={openAddPlacePopup}
          onEditProfileClick={openEditProfilePopup}
          onEditAvatarClick={openAvatarPopup}
        />
        <Footer />
        <ImagePopup
          isOpen={isCardPopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />
        <PopupWithForm
          {...deleteCardProps}
          isOpen={isDeleteCardOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          {...addPlaceProps}
          isOpen={isAddPlaceOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          {...editProfileProps}
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          {...editAvatarProps}
          isOpen={isAvatarOpen}
          onClose={closeAllPopups}
        />
      </div>
    </>
  );
}

export default App;
