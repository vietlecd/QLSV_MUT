import React, { useState } from 'react';
import StudentInfo from './studentInfo';
import Training from './studentTraining';
import './StudentDashboard.css';

function DataTable() {
  const [currentView, setCurrentView] = useState('StudentInfo');

  const handleNavigation = (viewName) => {
    setCurrentView(viewName);
  };

  return (
    <div className="student-dashboard">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img className="logo" src="https://i.ibb.co/CMwkBmw/lSgDz8N.png" alt="logo" />
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Nguyen Van A - SVxxxxx</a>
          </li>
          <li className="nav-item">
            <i className="fa fa-solid fa-bell fa-lg fa-3x"></i>
          </li>
          <li className="nav-item">Logout</li>
        </ul>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 leftBody">
            <ul className="nav flex-column">
              <li className="nav-item" style={{ paddingTop: '2rem' }}>
                <i className="fas fa-solid fa-home fa-md fa-2x"></i> Home
              </li>
              <li className="nav-item" style={{ paddingTop: '2rem' }}>
                <i className="fas fa-regular fa-id-badge fa-md fa-2x"></i> Student
              </li>
              <li className="nav-item" style={{ paddingTop: '2rem' }}>
                <i className="fa fa-solid fa-book fa-md fa-2x"></i> Course
              </li>
              <li className="nav-item" style={{ paddingTop: '2rem' }}>
                <i className="fa fa-solid fa-question fa-md fa-2x"></i> Assistant
              </li>
            </ul>
          </div>

          <div className="col-md-10 rightBody">
            <div className="dataTable mx-auto">
              <div className="navigation">
                <nav>
                  <a
                    href="#"
                    onClick={() => handleNavigation('StudentInfo')}
                    id="info"
                    style={{ fontWeight: 'bold', borderTop: '3px solid blue' }}
                  >
                    Student Information
                  </a>
                  <a
                    href="#"
                    onClick={() => handleNavigation('Training')}
                    style={{ fontWeight: 'bold' }}
                  >
                    Training Information
                  </a>
                </nav>
              </div>
              <div style={{ padding: '10px' }}>
                <i style={{ fontWeight: 'bold' }}>Last updated time: dd/mm/yyyy realtime</i>
              </div>
              {currentView === 'StudentInfo' && <StudentInfo />}
              {currentView === 'Training' && <Training />}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center foot">
        <p style={{ paddingTop: '2vh', margin: 0 }}>
          Copyright &copy; 2024 | All rights reserved
        </p>
        <p style={{ padding: '1vh', margin: 0 }}>
          Mọi thắc mắc vui lòng liên hệ email: info@mut.edu.vn
        </p>
      </div>
    </div>
  );
}

export default DataTable;
