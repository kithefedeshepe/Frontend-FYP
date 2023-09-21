import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './DoctorViewResult.css'; // Import your CSS file

function DoctorViewResult() {

  const [reports, setReports] = useState([]); // Initialize an empty array for reports
  // Use useEffect to fetch data when the component mounts
  /*  useEffect(() => {
      axios.get('')
        .then(response => {
          const data = response.data;
          setReports(data); // Update the state with fetched data
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);*/
  return (
    <div className="doctor-view-result">
      <div className="navbar-D">
        <div class="dropdown">
          <button class="dropbtn">Menu
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/DoctorMainPage">Home</Link>
            <Link to="/DoctorUploadPage">Upload</Link>
            <Link to="/DoctorViewResult">View Result</Link>
          </div>
        </div>
        <div className="header">COVID-19 Imaging System</div>
        <div className="drName">Dr Johnny</div>
        <div class="dropdown">
          <button class="dropbtn">Options
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="#">Profile</Link>
            <Link to="/">Logout</Link>
          </div>
        </div>
      </div>

      <div class="content-box">
        <b>COVID 19 X-Ray analysis report</b>
      </div>
      <div class="row">
        <div class="id-margin">Patient ID :</div> <input class="input-margin"type="text" id="patientID" name="patientID" value="000001" />
      </div>
      <div class="row">
        <div class="name-margin">
          First Name : <input class="input-margin"type="text" id="patientFirstName" name="patientFirstName" value="Jack" />
        </div>
        <div class="name-margin">
          Last Name :<input class="input-margin"type="text" id="patientLastName" name="patientLastName" value="Daniels" />
        </div>
      </div>
      <div class="row">
        <div class="name-margin">
          Gender : <input class="gender-margin"type="text" id="patientGender" name="patientGender" value="M" />
        </div>
        <div class="name-margin">
          Age :<input class="age-margin"type="text" id="patientAge" name="patientAge" value="25" />
        </div>
      </div>
      <div class="row">
        <div class="name-margin">
          <b>COVID Diagnosis</b> :
          <input class="negative-checkbox"type="checkbox" id="covidNegative" name="covidNegative" value="Negative" disabled/>
          <div class="checkbox-font"><b>Negative</b></div>
          <input class="positive-checkbox"type="checkbox" id="covidPositive" name="covidPositive" value="Positive" checked disabled/>
          <div class="checkbox-font"><b>Positive</b></div>
        </div>
        
      </div>
      
    </div>


  );
}

export default DoctorViewResult;