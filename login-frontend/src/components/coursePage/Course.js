import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

import Header from './../header_footer/Header';
import Footer from './../header_footer/Footer';

function Course() {
  const course_bg = 'http://i.ibb.co/GVRnWJC/course-bg.jpg';
  
  return (
    <>
      <Header />
      <div style={{ height: '80vh', backgroundImage: `url(${course_bg})`, backgroundSize: 'cover', backgroundPositionX: 'center', backgroundRepeat: 'noRepeat', border: '1px solid' }}>
        <div style={{ marginTop: '0%', marginRight: 'auto', marginBottom: '0%', marginLeft: '15%', width: '50%', paddingTop: '2%', border: 'none' }}>
          <h1>CHĂM CHỈ DỄ DÀNG THÀNH CÔNG</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Course;