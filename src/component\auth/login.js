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

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
