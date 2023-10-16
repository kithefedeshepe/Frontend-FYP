import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './PatientViewReport.css'; // Import your CSS file

function PatientViewReport() {

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

    // Add state variable to store the comment
    const [comment, setComment] = useState('');

    // Function to handle the comment input change
    const handleCommentSubmit = (event) => {
      setComment(event.target.value);
    };
  return (
    <div className="patient-view-report">
      <div className="navbar-P">
      <div class="dropdown">
          <button class="dropbtn">Menu
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/PatientMainPage">Home</Link>
            <Link to="/PatientViewReport">View Report</Link>
          </div>
        </div>
        <div className="header">COVID-19 Imaging System</div>
        <div className="patientName">Jane Doe</div>
        <div class="dropdown">
          <button class="dropbtn">Options
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            {/* <Link to="#">Profile</Link> */}
            <Link to="/">Logout</Link>
          </div>
        </div>
      </div>
      {/* ADD ON HERE */}
      <div class="content-box">
        <b>COVID 19 X-Ray analysis report</b>
      </div>
      <div class="row">
        <div class="id-margin">Patient ID :</div> <input class="input-margin"type="text" id="patientID" name="patientID" />
      </div>
      <div class="row">
        <div class="name-margin">
          First Name : <input class="input-margin"type="text" id="patientFirstName" name="patientFirstName"  />
        </div>
        <div class="name-margin">
          Last Name :<input class="input-margin"type="text" id="patientLastName" name="patientLastName"  />
        </div>
      </div>
      <div class="row">
        <div class="name-margin">
          Gender : <input class="gender-margin"type="text" id="patientGender" name="patientGender" />
        </div>
        <div class="name-margin">
          Age :<input class="age-margin"type="text" id="patientAge" name="patientAge"/>
        </div>
      </div>
      <div class="row">
        <div class="id-margin">Doctor ID :</div> <input class="input-margin"type="text" id="doctorID" name="doctorID" />
      </div>
      <div class="row">
        <div class="name-margin">
          First Name : <input class="input-margin"type="text" id="DfirstName" name="DfirstName" />
        </div>
        <div class="name-margin">
          Last Name :<input class="input-margin"type="text" id="DlastName" name="DlastName"/>
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
      
      <div className="button-container2">
        <button className="print-button2">Print</button>
      </div>

      {/* comment segment */}
      <label className="comment-label">Comments:</label>
      <textarea className="comment-box"></textarea>
      <div className="button-container3">
        <button className="submit-button2" onClick={handleCommentSubmit} >Submit</button>
      </div>

      
    </div>
  );
}

export default PatientViewReport;