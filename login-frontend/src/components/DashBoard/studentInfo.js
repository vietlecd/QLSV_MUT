import React, { useState } from 'react';
function StudentInfo(props){
  const handleClickChange = () => {
    props.handleClickChange('StudentInfo');
  };
  return(
    <div>
      <div class="smallbox">
        <p>Persional Infomation</p>
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
          <p style="font-weight: bold">#Full Name</p>
          <p>SV000000</p>
          <p style="font-weight: bold">#Student ID</p>
          <p>None</p>
          <p style="font-weight: bold">#Sex</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Class</p>
          <p>SV000000</p>
          <p style="font-weight: bold">#Major</p>
          <p>None</p>
          <p style="font-weight: bold">#Faculty</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Identity Card Number</p>
          <p>SV000000</p>
          <p style="font-weight: bold">#Date of issue of identity card</p>
          <p>None</p>
          <p style="font-weight: bold">#Place of issue of identity card</p>
          <p>None</p>
        </div>
      </div>
      <div class="smallbox">
        <p>Address Infomation</p>
      </div>
      <div style="height: 15vh; display: flex">
        <div class="data_box" style="margin-left: 4vh">
          <p style="font-weight: bold">#Address</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Telephone Number</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#University Email</p>
          <p>None</p>
        </div>
        <div class="data_box">
          <p style="font-weight: bold">#Other email</p>
          <p>None</p>
        </div>
      </div>
    </div>
  );
}