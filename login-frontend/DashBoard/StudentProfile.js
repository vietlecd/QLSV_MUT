import React, { useState } from 'react';
import StudentInfo from './studentInfo';
import Training from './training'
import './StudentProfile.css'

function DataTable(){
  const [currentView, setCurrentView] = useState('studentInfo');
  const handleClickChange = (newView) => {
      setCurrentView(newView);
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brad" href="#">
          <img class="logo" src="https://i.ibb.co/CMwkBmw/lSgDz8N.png" />
        </a>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Nguyen Van A - SVxxxxx</a>
          </li>
          <li class="nav-item">
            <i class="fa fa-solid fa-bell fa-lg fa-3x"></i>
          </li>
          <li class="nav-item">Logout</li>
        </ul>
      </nav> 
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 leftBody">
            <ul class="nav flex-column">
              <li class="nav-item" style="padding-top: 2rem;"><i class="fas fa-solid fa-home fa-md fa-2x"></i>
              Home
              </li>
              <li class="nav-item" style="padding-top: 2rem;"><i class="fas fa-regular fa-id-badge fa-md fa-2x"></i>
              Student</li>
              <li class="nav-item" style="padding-top: 2rem;"><i class="fa fa-solid fa-book fa-md fa-2x"></i>
              Course</li>
              <li class="nav-item" style="padding-top: 2rem;"><i class="fa fa-solid fa-question fa-md fa-2x"></i>
              Assistant</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-10 rightBody">
        <div class="dataTable mx-auto">
          <div class="navigation">
            <nav>
              <a href="#" onClick={() => setCurrentView = 'Training'} style="font-weight: bold">Training Infomation</a>
              <a href="#" onClick={() => setCurrentView = 'StudentInfo'} id="info" style="font-weight: bold; border-top: 3px solid blue"
                >Student Infomation</a>
            </nav>
          </div>
          <div style="padding: 10px">
            <i style="font-weight: bold"
              >Last updated time: dd/mm/yyyy realtime</i
            >
          </div>
          { currentView === 'studentInfo' ? (
            <div>
              <StudentInfo /> 
            </div>
          ) : (
            <div>
              <Training />
            </div>
          )
          }
        </div>
      </div>
      <div class="text-center foot">
        <p style="padding-top: 2vh; margin: 0">
          Copyright &copy; 2024| All rights reserved
        </p>
        <p style="padding: 1vh; margin: 0">
          Mọi thắc mắc vui lòng liên hệ email: info@mut.edu.vn
        </p>
      </div>
    </div>
  );
}