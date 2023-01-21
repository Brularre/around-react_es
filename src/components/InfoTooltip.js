// import React from "react";
// import { Link, withRouter } from "react-router-dom";
// import * as auth from "../auth.js";
// import "./styles/Login.css";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (!this.state.username || !this.state.password) {
//       return;
//     }
//     auth
//       .authorize(this.state.username, this.state.password)
//       .then((data) => {
//         if (data.jwt) {
//           this.setState({ email: "", password: "" }, () => {
//             this.props.handleLogin(data.user.en_cal_goal.calGoal);
//             this.props.history.push("/diary");
//           });
//         }
//       })
//       .catch((err) => console.log(err));
//   }

//   render() {
//     // <button
//     //   type="button"
//     //   onClick={onClose}
//     //   className="popup__close-btn"
//     // ></button>
//     return (
//       <div className="login">
//         <p className="login__welcome">¡Bienvenido de nuevo!</p>
//         <form onSubmit={this.handleSubmit} className="login__form">
//           <label htmlFor="username">Nombre de usuario:</label>
//           <input
//             required
//             id="username"
//             name="username"
//             type="text"
//             value={this.state.username}
//             onChange={this.handleChange}
//           />
//           <label htmlFor="password">Contraseña:</label>
//           <input
//             required
//             id="password"
//             name="password"
//             type="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//           <div className="login__button-container">
//             <button
//               type="submit"
//               onSubmit={this.handleSubmit}
//               className="login__link"
//             >
//               Inicia sesión
//             </button>
//           </div>
//         </form>

//         <div className="login__signup">
//           <p>¿Listo para comenzar el viaje?</p>
//           <Link to="/register" className="signup__link">
//             Iniciar sesión
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(Login);
