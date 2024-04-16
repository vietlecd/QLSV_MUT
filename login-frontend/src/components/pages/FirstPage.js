import React, { useState, useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FirstHeader from '../header_footer/FirstHeader';
import FirstFooter from '../header_footer/FirstFooter';
//import './FirstPage.css';

const slide1 = 'https://i.ibb.co/RbNBFv1/8ktXyJ-n.jpg';

function FirstPage() {
  return (
    <>
      <FirstHeader />
      <div style={{backgroundImage: `url(${slide1})`, backgroundSize: 'cover', backgroundPositionX: 'center', backgroundRepeat: 'noRepeat' }}>
        <div style={{ marginTop: '0%', marginRight: '50%', marginBottom: '0%', marginLeft: '22%', width: '28%', padding: '0%', border: 'none', }}>
          <h2 style={{ color: '#fff', fontSize: '1.5em' }}>
            CHƯƠNG TRÌNH CHẤT LƯỢNG VỚI ĐA DẠNG NGÀNH
          </h2>
          <div style={{ marginTop: '1%', marginRight: '35%', marginBottom: '1%', marginLeft: '10%', width: '55%', padding: '0%', borderColor: '#ebff00', borderStyle: 'solid', borderWidth: '1px', borderRadius: '20px' }}>
            <h3 style={{ color: '#ebff00', textAlign: 'center', marginBlockStart: '3px', marginBlockEnd: '3px', fontSize: '1.17em' }}>
              Training Program
            </h3>
          </div>
        </div>
        <div style={{ marginTop: '0%', marginRight: '0%', marginBottom: '0%', marginLeft: '0%', width: '100%', padding: '0%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
          <Link to={'/teacher'} style={{ marginTop: '70%', marginRight: '0%', marginBottom: '0%', marginLeft: '60%', width: '40%', height: '45%', padding: '0%', backgroundColor: '#9ff5f5', textAlign: 'center', textDecorationLine: 'none' }}>
            <h3 style={{ color: '#2909a7', textAlign: 'center', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
              TEACHER
            </h3>
            <i class="fa-solid fa-person-chalkboard fa-md fa-5x"></i>
          </Link>
          <Link to={'/student'} style={{ marginTop: '70%', marginRight: '0%', marginBottom: '0%', marginLeft: '30%', width: '40%', height: '45%', padding: '0%', backgroundColor: '#9ff5f5', textAlign: 'center', textDecorationLine: 'none' }}>
            <h3 style={{ color: '#2909a7', textAlign: 'center', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
              STUDENT
            </h3>
            <i class="fa-solid fa-person-chalkboard fa-md fa-5x"></i>
          </Link>
          <Link to={'/admin'} style={{ marginTop: '70%', marginRight: '0%', marginBottom: '0%', marginLeft: '0%', width: '40%', height: '45%', padding: '0%', backgroundColor: '#9ff5f5', textAlign: 'center', textDecorationLine: 'none' }}>
            <h3 style={{ color: '#2909a7', textAlign: 'center', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
              ADMIN
            </h3>
            <i class="fa-solid fa-person-chalkboard fa-md fa-5x"></i>
          </Link>
        </div>
      </div>
      <FirstFooter />
    </>
  )
}

export default FirstPage;
