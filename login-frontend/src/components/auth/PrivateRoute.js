import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext'; // Import AuthContext

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext); // Get authentication state
  const navigate = useNavigate(); // Use useNavigate hook
  if (!isAuthenticated) {
    navigate('/teacher/login');
    return null;
  }
  return <Component {...rest} />;
};

export default PrivateRoute;