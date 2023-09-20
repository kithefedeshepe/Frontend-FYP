import React, { useState, useEffect } from 'react';
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
            <a href="/DoctorMainPage">Home</a>
            <a href="/DoctorUploadPage">Upload</a>
            <a href="/DoctorViewResult">View Result</a>
          </div>
        </div>
        <div className="header">COVID-19 Imaging System</div>
        <div className="drName">Dr Johnny</div>
        <div class="dropdown">
          <button class="dropbtn">Options
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Profile</a>
            <a href="/">Logout</a>
          </div>
        </div>
      </div>
      {/* ADD ON HERE */}

    </div>
  );
}

export default DoctorViewResult;