import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Table, Button, Modal, Form, Row, Col, Tab, ListGroup } from 'react-bootstrap';

import StudentHeader from '../../components/header_footer/StudentHeader';
import Footer from '../../components/header_footer/Footer';

const CourseRegistration = () => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [teacher, setTeacher] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('your_api_endpoint_here');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleRegister = async () => {
    // Your code to post registration data to the server
    // This could involve sending selectedCourse, teacher, and time
    // to the server to handle the registration process
    alert('Đăng ký môn thành công');
    setTeacher('');
    setTime('');
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setTeacher('');
    setTime('');
    setShowModal(false);
  };

  const handleShowModal = () => {
    //setSelectedCourse(course);
    setShowModal(true);
  };

  return (
    <>
      <StudentHeader />
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#1">
        <Row style={{ marginTop: '2%' }}>
          <Col sm={3}>
            <ListGroup>
              <ListGroup.Item action href="#1">
                Đăng ký học phần
              </ListGroup.Item>
              <ListGroup.Item action href="#2">
                Chương trình đào tạo
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="#1">
                <h4>Chọn môn học đăng ký</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Tên môn học</th>
                      <th>Phòng học</th>
                      <th>Số lượng</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*courses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.room}</td>
              <td>{course.amount}</td>
              <td>
                <Button onClick={() => handleShowModal(course)}>Chọn</Button>
              </td>
            </tr>
          ))*/}
                    <tr>
                      <td>LTNC</td>
                      <td>413-H6</td>
                      <td>40</td>
                      <td>
                        <Button onClick={handleShowModal}>Chọn</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>ABC</td>
                      <td>101-H1</td>
                      <td>50</td>
                      <td>
                        <Button onClick={handleShowModal}>Chọn</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>XYZ</td>
                      <td>202-H2</td>
                      <td>60</td>
                      <td>
                        <Button onClick={handleShowModal}>Chọn</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <h4>Phiếu đăng ký</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã môn học</th>
                      <th>Tên môn học</th>
                      <th>Phòng học</th>
                      <th>Số lượng</th>
                      <th>Giảng viên</th>
                      <th>Giờ học</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>COxxxx</td>
                      <td>LTNC</td>
                      <td>413-H6</td>
                      <td>40</td>
                      <td>Mai Đức Trung</td>
                      <td>13:00-15:00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>COxxxx</td>
                      <td>ABC</td>
                      <td>101-H1</td>
                      <td>50</td>
                      <td>Tên Giảng Viên</td>
                      <td>hh:mm-hh:mm</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="#2">
                <h1>CHƯƠNG TRÌNH ĐÀO TẠO</h1>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Footer />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng ký môn ... {/*selectedCourse && selectedCourse.name*/}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTeacher">
              <Form.Label>Giảng viên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên giảng viên"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Giờ học</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập giờ học"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleRegister}>
            Đăng ký
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CourseRegistration;