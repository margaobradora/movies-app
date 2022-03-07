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

// // ANA

// import React, { useContext, useEffect, useState } from 'react';

// export const AuthenticationContext = React.createContext();

// const AuthenticationProvider = ({ children }) => {
// 	const [authData, setAuthData] = useState({});

// 	useEffect(() => {
// 		getLoggedUser();
// 	}, []);

// 	const login = data => {
// 		setAuthData({ data });
// 	};

// 	const logout = () => {
// 		setAuthData('');
// 	};

// 	async function getLoggedUser() {
// 		const response = await fetch(`http://localhost:4000/api/auth/getuser`, {
// 			method: 'GET',
// 			credentials: 'include',
// 			headers: {
// 				Accept: 'application/json',
// 			},
// 		});

// 		try {
// 			const data = await response.json();
// 			login(data);
// 		} catch {
// 			return null;
// 		}
// 	}

// 	const value = {
// 		authData,
// 		login,
// 		logout,
// 	};

// 	return (
// 		<AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
// 	);
// };

// export const useAuthentication = () => {
// 	return useContext(AuthenticationContext);
// };

// export default AuthenticationProvider;
