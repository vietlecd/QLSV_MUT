import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  console.log('aaa');
  return useContext(AuthContext);
}
export function useRequireAuth() {
  const redirectUrl = '/student/login';
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken');
    console.log(token);
    if (!token) {
      navigate(redirectUrl);
    }
  }, [navigate, redirectUrl]);

  return auth;
}