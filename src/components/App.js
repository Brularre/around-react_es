// import logo from './logo.svg';
import "../pages/index.css";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import {
  deleteCardProps,
  addPlaceProps,
  editProfileProps,
  editAvatarProps,
} from "../utils/constants.js";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Footer />
        <PopupWithForm {...deleteCardProps} />
        <PopupWithForm {...addPlaceProps} />
        <PopupWithForm {...editProfileProps} />
        <PopupWithForm {...editAvatarProps} />
      </div>
    </>
  );
}

export default App;
