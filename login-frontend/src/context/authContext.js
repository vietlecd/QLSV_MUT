import React, { createContext, useState } from 'react';
import * as authService from '../services/authServices';
import './authContext.css'
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);
      if (data && data.token) {
        sessionStorage.setItem('jwtToken', data.token);
        setUser(data);
        return data;
      } else {
        console.error('No data or token received on login');
        return null; 
      }
    } catch (error) {
      console.error('Error during login:', error);
      return null;
    }
  };
  
  const value = { user, login};
  const auth = <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  return auth;
}