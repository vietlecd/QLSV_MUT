import React, { createContext, useState } from 'react';
import * as authService from '../services/authServices';
import './authContext.css'
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);
      if (data) {
        setUser(data);
        return data;
      } else {
        // Xử lý trường hợp không nhận được dữ liệu từ phản hồi
        console.error('Không nhận được dữ liệu từ phản hồi khi đăng nhập');
        return null; // Hoặc trả về giá trị mặc định khác
      }
    } catch (error) {
      // Xử lý lỗi từ phản hồi
      console.error('Lỗi khi gọi hàm login:', error);
      return null; // Hoặc trả về giá trị mặc định khác
    }
  };
  
  const value = { user, login};
  const auth = <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  return auth;
}