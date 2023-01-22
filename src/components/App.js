/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import InfoTooltip from "./InfoTooltip";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import DeleteCardPopup from "./DeleteCardPopup";
import ImagePopup from "./ImagePopup";
import ProtectedRoute from "./ProtectedRoute";
import api from "../utils/api";
import * as auth from "../utils/auth";
import avatarPlaceholder from "../images/profile_avatar_placeholder.jpg";
import "../index.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [cards, setCards] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const history = useHistory();

  // Get Current User and Cards

  useEffect(() => {
    api
      .getCards()
      .then((cardList) => setCards(cardList))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api.getUser().then((res) => {
      setCurrentUser({
        ...currentUser,
        name: res.name,
        about: res.about,
        avatar: res.avatar,
        id: res._id,
      });
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        auth
          .getAuthorizedUserData(jwt)
          .then((res) => {
            if (res) {
              setUserEmail(res.data.email);
              setIsLoggedIn(true);
              history.push("/");
            }
          })
          .catch((err) => console.log(err));
      }
    }
  }, [isLoggedIn]);

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
    setCurrentUser({ ...currentUser, userAvatar });
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
  const [isInfoTooltipOpen, openInfo] = useState(false);

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

  function openInfoTooltip() {
    openInfo(true);
  }

  function closeAllPopups() {
    setSelectedCard("");
    setCardPopupOpen(false);
    openDeleteCard(false);
    openAddPlace(false);
    openEditProfile(false);
    openEditAvatar(false);
    openInfo(false);
  }

  // Login, Register and Logout

  function handleLogout() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    history.push("/login");
  }

  function handleLogin(userValues) {
    auth
      .authorize(userValues)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          history.push("/");
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        openInfoTooltip(true);
        console.log(err);
      });
  }

  function handleRegister(userData) {
    auth
      .register(userData)
      .then((user) => {
        if (user.data._id) {
          setIsSuccess(true);
          history.push("/signin");
        } else {
          setIsSuccess(false);
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        openInfoTooltip(true);
      });
  }

  return (
    <>
      <AppContext.Provider
        value={{ currentUser: currentUser, isLogged: isLoggedIn }}
      >
        <Header onLogout={handleLogout} userEmail={userEmail} />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          isSuccess={isSuccess}
        />

        <Switch>
          <Route path="/signup">
            <Register onSubmit={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login onSubmit={handleLogin} />
          </Route>
          <ProtectedRoute isLoggedIn={isLoggedIn} path="/">
            <Main
              cards={cards}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onDeleteCardClick={openDeleteCardPopup}
              onAddPlaceClick={openAddPlacePopup}
              onEditProfileClick={openEditProfilePopup}
              onEditAvatarClick={openAvatarPopup}
            />
            <Footer />
          </ProtectedRoute>
        </Switch>
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
      </AppContext.Provider>
    </>
  );
}

export default App;
