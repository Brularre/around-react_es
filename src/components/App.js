import avatarPlaceholder from "../images/profile_avatar_placeholder.jpg";
import { useState, useEffect } from "react";
import "../index.css";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import AddPlacePopup from "./AddPlacePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import DeleteCardPopup from "./DeleteCardPopup.js";
import ImagePopup from "./ImagePopup.js";

import api from "../utils/api.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState("");
  const [cards, setCards] = useState([]);

  // Get Current User and Cards

  useEffect(() => {
    api.getCards().then((cardList) => setCards(cardList));
  }, []);

  useEffect(() => {
    api.getUser().then((res) => setCurrentUser(res));
  }, []);

  // Add Place Popup Logic

  const [placeName, setPlaceName] = useState("");
  const [placeLink, setPlaceLink] = useState("");

  function handlePlaceChange(evt) {
    setPlaceName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setPlaceLink(evt.target.value);
  }

  function handleAddPlace(evt) {
    evt.preventDefault();
    api.addCard(placeName, placeLink).then((newCard) => {
      setCards([newCard, ...cards]);
    });
    closeAllPopups();
  }

  // Edit Profile Logic

  const [name, setName] = useState("Loading...");
  const [about, setAbout] = useState("Please Wait");
  const [avatar, setAvatar] = useState(avatarPlaceholder);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleAboutChange(evt) {
    setAbout(evt.target.value);
  }

  function handleAvatarChange(evt) {
    setAvatar(evt.target.value);
  }

  function handleUpdateUser(evt) {
    evt.preventDefault();
    api.setUserInfo({ name, about });
    setCurrentUser({ name, about });
    closeAllPopups();
  }

  function handleUpdateAvatar(userAvatar) {
    api.setAvatar(userAvatar);
    setCurrentUser({ userAvatar });
    closeAllPopups();
  }

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  // Card Element Logic
  function handleCardClick(card) {
    setSelectedCard(card);
    setCardPopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id);
    setCards(cards.filter((item) => item._id !== card._id));
    closeAllPopups();
  }

  // Open and close Popups

  const [isCardPopupOpen, setCardPopupOpen] = useState(false);
  const [isDeleteCardOpen, openDeleteCard] = useState(false);
  const [isAddPlaceOpen, openAddPlace] = useState(false);
  const [isEditProfileOpen, openEditProfile] = useState(false);
  const [isAvatarOpen, openEditAvatar] = useState(false);

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
            onPlaceChange={handlePlaceChange}
            onLinkChange={handleLinkChange}
          />
          <EditProfilePopup
            isOpen={isEditProfileOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            onNameChange={handleNameChange}
            onAboutChange={handleAboutChange}
            name={name}
            about={about}
          />
          <EditAvatarPopup
            isOpen={isAvatarOpen}
            onClose={closeAllPopups}
            avatar={avatar}
            onUpdateAvatar={handleUpdateAvatar}
            onAvatarChange={handleAvatarChange}
          />
        </CurrentUserContext.Provider>
        <Footer />
      </div>
    </>
  );
}

export default App;
