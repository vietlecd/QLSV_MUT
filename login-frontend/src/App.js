import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FirstPage from './pages/FirstPage';
import AuthPage from './pages/authPage';
import StudentDashBoard from './pages/StudentDashboard';
import Course from './components/coursePage/Course';
import Course1 from './components/coursePage/Course1';
import TeacherDashBoard from './pages/TeacherDashBoard';

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
        <Route path='/teacher/login' element={<AuthPage />} />
        <Route path='/student/login' element={<AuthPage />} />
        <Route path='/admin/login' element={<AuthPage />} />
        <Route path='/teacher/changepassword' element={<AuthPage />} />
        <Route path='/student/changepassword' element={<AuthPage />} />
        <Route path='/admin/changepassword' element={<AuthPage />} />

        <Route path='/teacher/dashboard' element={< TeacherDashBoard/>} />
        <Route path='/student/dashboard' element={< StudentDashBoard/>} />
        <Route path='/admin/dashboard' element={< StudentDashBoard/>} />
        <Route path='/course' element={<Course />} />
        <Route path='/course1' element={<Course1 />} />
      </Routes>
    </Router>
  );
}

export default App;
