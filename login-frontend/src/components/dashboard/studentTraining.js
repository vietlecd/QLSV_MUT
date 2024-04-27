import React from 'react';

function Training(props) {
  return (
    <div className="training-info"> 
      <div className="smallbox">
        <p>Training Information</p>
      </div>
      <div className="data-container" style={{ display: 'flex' }}> 
        <div className="data-box" style={{ marginLeft: '4vh' }}>
          <div style={{ textAlign: 'center' }}>
            <i className="fa-regular fa-id-badge fa-8x"></i>
          </div>
          <p style={{ fontWeight: 'bold' }}>
            Last profile photo update time: ___
          </p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Year of Admission</p>
          <p>SV000000</p>
          <p style={{ fontWeight: 'bold' }}>#Training Time</p>
          <p>None</p>
          <p style={{ fontWeight: 'bold' }}>#Education Program</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Status</p>
          <p>None</p>
          <p style={{ fontWeight: 'bold' }}>#Expected number of semesters</p>
          <p>None</p>
          <p style={{ fontWeight: 'bold' }}>#Maximum Number of Semesters</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Cumulative Academic Credits</p>
          <p>None</p>
          <p style={{ fontWeight: 'bold' }}>#GPA</p>
          <p>None</p>
        </div>
      </div>
      <div className="smallbox">
        <p>Graduate Information</p>
      </div>
      <div className="data-container" style={{ display: 'flex' }}>
        <div className="data-box" style={{ marginLeft: '4vh' }}>
          <p style={{ fontWeight: 'bold' }}>#Major</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Expected Graduation Date</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Decision Number</p>
          <p>None</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Decision Day</p>
          <p>None</p>
        </div>
      </div>
    </div>
  );
}

export default Training;
