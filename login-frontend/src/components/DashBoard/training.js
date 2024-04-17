import React, { useState } from 'react';
function Training(props){
  const handleClickChange = () => {
    props.handleClickChange('Training');
  };
  return(
    <div>
      <div style="padding: 10px">
        <i style="font-weight: bold"
          >Last updated time: dd/mm/yyyy realtime</i
        >
      </div>
      <div class="smallbox">
        <p>Training Infomation</p>
      </div>
      <div style="height: 35vh; display: flex">
        <div class="data_box" style="margin-left: 4vh">
          <div style="text-align: center">
            <img
              src="./../icon/humanIcon.svg"
              alt="avatar"
              style="padding: 3vh; background-color: rgb(204, 203, 203)"
            />
          </div>
          <p style="font-weight: bold">
            Last profile photo update time: ___
          </p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Year of Admission</p>
          <p>SV000000</p>
          <p style="font-weight: bold">#Training Time</p>
          <p>None</p>
          <p style="font-weight: bold">#Education Program</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Status</p>
          <p>None</p>
          <p style="font-weight: bold">#Expected number of semesters</p>
          <p>None</p>
          <p style="font-weight: bold">#Maximum Number of Semesters</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Cumulative Academic Credits</p>
          <p>None</p>
          <p style="font-weight: bold">#GPA</p>
          <p>None</p>
        </div>
      </div>
      <div class="smallbox">
        <p>Graduate Infomation</p>
      </div>
      <div style="height: 15vh; display: flex">
        <div class="data_box" style="margin-left: 4vh">
          <p style="font-weight: bold">#Major</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Expected Graduation Date</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Decision Number</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Decision Day</p>
          <p>None</p>
        </div>
      </div>
    </div>
  );
}