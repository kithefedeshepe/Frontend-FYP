import React, { useState, useEffect } from 'react';
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
  return (
    <div className="patient-view-report">
      <div className="navbar-P">
      <div class="dropdown">
          <button class="dropbtn">Menu
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <b href="/PatientMainPage">Home</b>
            <b href="/PatientViewReport">View Report</b>
          </div>
        </div>
        <div className="header">COVID-19 Imaging System</div>
        <div className="patientName">Jane Doe</div>
        <div class="dropdown">
          <button class="dropbtn">Options
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <b href="#">Profile</b>
            <b href="/">Logout</b>
          </div>
        </div>
      </div>
      {/* ADD ON HERE */}

    </div>
  );
}

export default PatientViewReport;