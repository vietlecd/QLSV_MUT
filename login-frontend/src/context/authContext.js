import React, { createContext, useState } from 'react';
import * as authService from '../services/authServices';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    setUser(data);
  };

  const register = async (name, email, password) => {
    const data = await authService.register(name, email, password);
    setUser(data);
  };

  const value = { user, login, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
