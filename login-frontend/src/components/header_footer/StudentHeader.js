import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, Row, Col } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';

function StudentHeader() {
  return (
    <>
      <Navbar expand="lg" style={{ borderBlockEnd: '1px solid' }}>
        <img style={{ width: '15%' }} src={'https://i.ibb.co/CMwkBmw/lSgDz8N.png'} alt="logo" />
        {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: '5%' }}>
          <Nav className="me-auto">
            <NavDropdown title="Các khóa học" id="basic-nav-dropdown" style={{ fontSize: '1.5em' }}>
              <NavDropdown.Item href="/course1">Khóa học của tôi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/courseRegistration" style={{ fontSize: '1.5em' }}>Đăng ký môn học</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <h4 style={{ marginTop: '0.5rem' }}>NGUYEN VAN A - MSSV</h4>
        </div>
        <Button style={{ marginLeft: '3%', color: 'black', backgroundColor: 'white', border: 'none' }}>
          <div style={{ marginLeft: '30%', marginRight: '30%', backgroundColor: 'blue', borderRadius: '50%' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5L12.59 6.41L14.17 8H6V10H14.17L12.59 11.58L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z" fill="white" />
            </svg>
          </div>
          <h6>Đăng xuất</h6>
        </Button>
      </Navbar>
    </>
  );
}

export default StudentHeader;