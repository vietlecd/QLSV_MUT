import React from 'react'; // Use React for functional components
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function StudentInfo(props) {
  return (
    <div className="student-info"> {/* Use a more specific class name */}
      <div className="smallbox">
        <p>Personal Information</p>
      </div>
      <div className="data-container" style={{ display: 'flex' }}> {/* Combined styles */}
        <div className="data-box" style={{ marginLeft: '4vh' }}>
          <div style={{ textAlign: 'center' }}>
            <i class="fa-regular fa-id-badge fa-8x"></i>
          </div>
          <p style={{ fontWeight: 'bold' }}>
            Last profile photo update time: ___
          </p>
        </div>
        <div className="data-box col-3x">
          <p style={{ fontWeight: 'bold' }}>#Full Name</p>
          <p>SV000000</p>
          <p style={{ fontWeight: 'bold' }}>#Student ID</p>
          <p>None</p>
          <p style={{ fontWeight: 'bold' }}>#Sex</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Class</p>
          <p>SV000000</p>
          <p style={{ fontWeight: 'bold' }}>#Major</p>
          <p>None</p>
          <p style={{ fontWeight: 'bold' }}>#Faculty</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Identity Card Number</p>
          <p>SV000000</p>
          <p style={{ fontWeight: 'bold' }}>#Date of issue of identity card</p>
          <p>None</p>
          <p style={{ fontWeight: 'bold' }}>#Place of issue of identity card</p>
          <p>None</p>
        </div>
      </div>
      <div className="smallbox">
        <p>Address Information</p>
      </div>
      <div className="data-container" style={{ display: 'flex' }}>
        <div className="data-box" style={{ marginLeft: '4vh' }}>
          <p style={{ fontWeight: 'bold' }}>#Address</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Telephone Number</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#University Email</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Other Email</p>
          <p>None</p>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
