import React, { useContext, useState } from "react";

const AuthenticationContext = React.createContext("");

const AuthenticationProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  const onLogin = (value) => setAuthData(value);

  const onLogout = () => setAuthData({});

  const value = {
    authData,
    onLogin,
    onLogout,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;

export const useAuthentication = () => useContext(AuthenticationContext);
