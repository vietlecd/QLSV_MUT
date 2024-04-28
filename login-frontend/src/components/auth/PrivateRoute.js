import { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const redirectUrl = '/';
  const token = sessionStorage.getItem('jwtToken');
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