import React, { useState } from 'react';
import StudentInfo from '../../components/dashboard/studentInfo';
import Training from '../../components/dashboard/studentTraining';
import Footer from '../../components/header_footer/Footer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useRequireAuth} from './../../hooks/useAuth';
import './Dashboard.css';

function DataTable() {
  const [currentView, setCurrentView] = useState('StudentInfo');

  const handleNavigation = (viewName) => {
    setCurrentView(viewName);
  };
  const [isOpen, setIsOpen] = useState(false);
  useRequireAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img className="logo" src="https://i.ibb.co/CMwkBmw/lSgDz8N.png" alt="logo" />
        </a>
        <ul className="navbar-nav ms-auto">
          <li style={{padding: '2vh'}}>
            <a className="nav-link" href="#">Nguyen Van A - SVxxxxx</a>
          </li>
          <li style={{padding: '2vh'}}>
            <i className="fa fa-solid fa-bell fa-lg fa-3x"></i>
            Logout
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 leftBody">
            <ul className="nav flex-column">
              <li className="nav-item" style={{padding: '0', marginTop: '2rem', cursor: 'pointer' }}>
                <a href='/' className='left_navbar'>
                    <i className="fas fa-solid fa-home fa-md fa-2x"></i> Home
                </a>
              </li>
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer'  }}>
                <i className="fas fa-regular fa-id-badge fa-md fa-2x"></i> Personal
              </li>
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)}>
                <i className="fa fa-solid fa-book fa-md fa-2x"></i>  Study
                <i className="fa-solid fa-angles-down"></i>
                {isOpen && (
                  <ul>                    
                    <li className="nav-item" style={{ paddingTop: '2rem' }}>
                      <Link to={'/course'} style={{ color: 'white', padding: '0' }}>Course</Link>
                    </li>
                    <li className="nav-item" style={{ paddingTop: '2rem' }}>
                      <Link to={'/courseRegistration'} style={{ color: 'white', padding: '0' }}>Course registration</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer'  }}>
                <i className="fa fa-solid fa-question fa-md fa-2x"></i> Assistant
              </li>
            </ul>
          </div>

          <div className="col-md-10 rightBody">
            <div className="dataTable mx-auto">
              <nav>
                <div className="navigation">
                  <a
                    onClick={() => handleNavigation('StudentInfo')}
                    style={{ fontWeight: 'bold'}}
                    className={currentView === 'StudentInfo' ? 'active top_navbar' : ' top_navbar'}
                  >
                    Student Information
                  </a>
                  <a
                    href="#"
                    onClick={() => handleNavigation('Training')}
                    style={{ fontWeight: 'bold' }}
                    className={currentView === 'Training' ? 'active top_navbar' : ' top_navbar'}
                  >
                    Training Information
                  </a>
                </div>
              </nav>
              <div style={{ padding: '10px' }}>
                <i style={{ fontWeight: 'bold' }}>Last updated time: dd/mm/yyyy realtime</i>
              </div>
              {currentView === 'StudentInfo' && <StudentInfo />}
              {currentView === 'Training' && <Training />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DataTable;
