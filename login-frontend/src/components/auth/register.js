import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  const handleRegister = async (event) => {
    event.preventDefault();
    auth.register(name, email, password);
  };
  const handleClickChange = () => {
    
  }

  return (
    <div className='register'>
      <form onSubmit={handleRegister}>
        <label>
          <input type="text" placeholder="Enter Username" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>      
      </form>
      <p>or already have an account</p>
      <button id="change" onClick={handleClickChange}>Sign in</button>
    </div>
  );
}

export default Register;
