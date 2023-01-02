// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "../pages/index.css";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import AddPlacePopup from "./AddPlacePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import DeleteCardPopup from "./DeleteCardPopup.js";
import ImagePopup from "./ImagePopup.js";

import { api } from "../utils/api.js";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [isCardPopupOpen, setCardPopupOpen] = useState(false);
  const [isDeleteCardOpen, openDeleteCard] = useState(false);
  const [isAddPlaceOpen, openAddPlace] = useState(false);
  const [isEditProfileOpen, openEditProfile] = useState(false);
  const [isAvatarOpen, openEditAvatar] = useState(false);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleUpdateUser({ name, about }) {
    api.setUserInfo({ name, about });
    setCurrentUser({ name, about });
    closeAllPopups();
  }

  function handleUpdateAvatar(avatar) {
    api.setAvatar(avatar);
    setCurrentUser({ avatar });
    closeAllPopups();
  }

  function handleAddPlace(name, link) {
    api.addCard(name, link).then((newCard) => {
      setCards([newCard, ...cards]);
    });
    closeAllPopups();
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
    setCardPopupOpen(true);
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id);
    closeAllPopups();
  }

  function openDeleteCardPopup(card) {
    setSelectedCard(card);
    openDeleteCard(true);
  }
  function openAddPlacePopup() {
    openAddPlace(true);
  }
  function openEditProfilePopup() {
    openEditProfile(true);
  }
  function openAvatarPopup() {
    openEditAvatar(true);
  }

  function closeAllPopups() {
    setSelectedCard("");
    setCardPopupOpen(false);
    openDeleteCard(false);
    openAddPlace(false);
    openEditProfile(false);
    openEditAvatar(false);
  }

  useEffect(() => {
    api.getCards().then((cardList) => setCards(cardList));
  }, [cards]);

  useEffect(() => {
    api.getUser().then((res) => setCurrentUser(res));
  }, []);

  return (
    <>
      <div>
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
          <Main
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onDeleteCardClick={openDeleteCardPopup}
            onAddPlaceClick={openAddPlacePopup}
            onEditProfileClick={openEditProfilePopup}
            onEditAvatarClick={openAvatarPopup}
          />
          <ImagePopup
            isOpen={isCardPopupOpen}
            onClose={closeAllPopups}
            card={selectedCard}
          />
          <DeleteCardPopup
            isOpen={isDeleteCardOpen}
            onClose={closeAllPopups}
            card={selectedCard}
            onCardDeleteSubmit={handleCardDelete}
          />
          <AddPlacePopup
            isOpen={isAddPlaceOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlace}
          />
          <EditProfilePopup
            isOpen={isEditProfileOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isAvatarOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
        </CurrentUserContext.Provider>
        <Footer />
      </div>
    </>
  );
}

export default App;
