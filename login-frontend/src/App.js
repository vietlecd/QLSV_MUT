import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FirstPage from './pages/FirstPage';
import AuthPage from './pages/authPage';
import StudentDashBoard from './pages/dashboardPage/StudentDashboard';
import Course from './pages/coursePage/Course';
import Course1 from './pages/coursePage/Course1';
import CourseRegistration from './pages/coursePage/CourseRegistration';
import TeacherDashBoard from './pages/dashboardPage/TeacherDashBoard';

function App() {
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
        <Route path='/courseRegistration' element={<CourseRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
