import { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('jwtToken');
  const path = window.location.pathname.split('/');
  const redirectUrl = '/' + path[1] + '/login';
  useEffect(() => {
    if(!token){
      navigate(redirectUrl, {replace: true });
    }
  }, []);
  return(
    <Outlet/>
  )
}

export default PrivateRoutes