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
      {/* ADD ON HERE */}

    </div>
  );
}

export default DoctorViewResult;