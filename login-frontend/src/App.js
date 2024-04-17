import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FirstPage from './pages/pages/FirstPage';
import AuthPage from './pages/pages/authPage';
import { Login } from '@mui/icons-material';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.text();
    setMessage(data);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/teacher' element={<AuthPage />} />
        <Route path='/student' element={<AuthPage />} />
        <Route path='/admin' element={<AuthPage />} />
        <Route path='/teacher/dashboard' element={< AuthPage/>} />
        <Route path='/student/dashboard' element={< AuthPage/>} />
        <Route path='/admin/dashboard' element={< AuthPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
