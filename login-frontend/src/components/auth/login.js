import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    auth.login(email, password);
  };
  const handleClickChange = () => {
    
  }
  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <label>
          <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" id="login">Login</button>
      </form>
      <p>or doesn't have an account</p>
      <button id="change" onClick={handleClickChange}>Register</button>
    </div>
  );
}

export default Login;
