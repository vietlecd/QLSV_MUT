import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FirstPage from './pages/FirstPage';
import AuthPage from './pages/authPage';
import StudentDashBoard from './pages/StudentDashboard';
import Course from './components/coursePage/Course';
import Course1 from './components/coursePage/Course1';

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
        <Route path='/teacher/dashboard' element={< StudentDashBoard/>} />
        <Route path='/student/dashboard' element={< StudentDashBoard/>} />
        <Route path='/admin/dashboard' element={< StudentDashBoard/>} />
        <Route path='/course' element={<Course />} />
        <Route path='/course1' element={<Course1 />} />
      </Routes>
    </Router>
  );
}

export default App;
