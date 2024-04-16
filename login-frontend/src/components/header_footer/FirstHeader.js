import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  const [notifications, setNotifications] = useState([]);

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      right: 6,
      top: 10,
      border: "2px solid",
      padding: "0 4px",
    },
  }));
  return (
    <>
      <Navbar style={{ display: 'flex' }}>
        <img style={{ width: '15%' }} src={'https://i.ibb.co/CMwkBmw/lSgDz8N.png'} alt="logo" />
        <div style={{ marginLeft: '62%', width: '10%' }}>
          <Dropdown className="ms-2 me-2">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-notifications"
              className="d-flex align-items-center"
            >
              <span
                style={{
                  color: "#324552",
                  fontSize: 16.26,
                  fontFamily: "Work Sans",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <StyledBadge className="me-2" badgeContent={notifications.length} color="primary">
                  <NotificationsIcon color="action" />
                </StyledBadge>
                Thông báo
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="py-0" align="end" style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', right: 'auto' }}>
              {/* <Dropdown.Header>Notifications</Dropdown.Header> */}
              {notifications.map((notification, index) => (
                <Dropdown.Item key={index}>{notification}</Dropdown.Item>
              ))}
              {notifications.length === 0 && (
                <Dropdown.Item disabled>No notifications</Dropdown.Item>
              )}
              {/* <Dropdown.Divider />
              <Dropdown.Item onClick={handleClearNotifications}>
                Clear Notifications
              </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div style={{ marginLeft: '2%', width: '10%', backgroundColor: 'gainsboro', borderRadius: '50%', textAlign: 'center' }}>
          <p style={{ padding: '15% 0%', marginTop: '1rem' }}>TÊN VIẾT TẮT</p>
        </div>
      </Navbar>
    </>
  )
}

export default Header;