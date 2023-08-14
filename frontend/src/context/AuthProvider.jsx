import React, { useState, useCallback, useMemo } from 'react';
import { AuthContext } from './context.js';

const AuthProvider = ({ children }) => {
  const savedUserData = JSON.parse(localStorage.getItem('userId'));
  const [user, setUser] = useState(savedUserData || null);

  const logIn = useCallback((userData) => {
    localStorage.setItem('userId', JSON.stringify(userData));
    setUser({ username: userData.username });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('userId');
    setUser(null);
  }, []);

  const getAuthHeader = useCallback(() => {
    const userId = JSON.parse(localStorage.getItem('userId'));
    if (userId && userId.token) {
      return { Authorization: `Bearer ${userId.token}` };
    }
    logOut();
    return {};
  }, [logOut]);

  const providedData = useMemo(
    () => ({
      logIn,
      logOut,
      getAuthHeader,
      user,
    }),
    [logIn, logOut, getAuthHeader, user],
  );

  return (
    <AuthContext.Provider value={providedData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
