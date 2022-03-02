import React, { useState } from "react";
import "./style.scss";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Page from "../Page";
import Title from "../Title";
import { useAuthentication } from "../AuthenticationProvider";

export default function Login() {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hooks
  const { login } = useAuthentication();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Input Handlers
  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Click Handler
  const handleLoginClick = () => {
    if (email && password) {
      login(email);
      navigate(from, { replace: true });
    }
  };

  return (
    <div class="container">
      <div class="container__form">
        <form class="form">
          <input
            type="email"
            placeholder="email"
            className="email__input"
            name="email__input"
            value={email}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password__input"
            className="password__input"
            value={password}
            onChange={handlePasswordChange}
          />

          <button onClick={handleLoginClick}>login</button>
          <p class="input__message">
            No account?
            <Link to="/signup"> Get one here!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const { onLogin } = useAuthentication();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLoginClick = () => {
//     if (username && password) {
//       onLogin({
//         username,
//         password: btoa(password),
//       });

//       // Send users back to the page they tried to visit when they were
//       // redirected to the login page. Use { replace: true } so we don't create
//       // another entry in the history stack for the login page.  This means that
//       // when they get to the protected page and click the back button, they
//       // won't end up back on the login page, which is also really nice for the
//       // user experience.
//       navigate(from, { replace: true });
//     }
//   };

//   return (
//     <Page>
//       <Title>Login</Title>
//       <div className="control">
//         <label for="username">Username</label>
//         <input type="text" onChange={handleUsernameChange} value={username} />
//       </div>
//       <div className="control">
//         <label for="password">Password </label>
//         <input
//           type="password"
//           onChange={handlePasswordChange}
//           value={password}
//         />
//       </div>
//       <div className="control">
//         <button className="button" onClick={handleLoginClick}>
//           Log in
//         </button>
//       </div>
//     </Page>
//   );
// };

// export default Login;
