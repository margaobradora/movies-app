import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

import AuthenticationProvider from "./AuthenticationProvider";
function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <Router>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<Main />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
