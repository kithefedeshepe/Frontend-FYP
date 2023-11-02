import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './DoctorMainPage.css'; // Import your CSS file

function DoctorMainPage() {

  const [reports, setReports] = useState([]); // Initialize an empty array for reports

  let timeout;

  const handleMouseEnter = () =>
  {
  
    clearTimeout(timeout);
    const dropdownContent = document.querySelector(".dropdown-content-menu");
    dropdownContent.style.display = "block";
    dropdownContent.classList.remove('hidden');
  
  };
  
  const handleMouseLeave = () =>
  {
  
    const dropdownContent = document.querySelector(".dropdown-content-menu");
    timeout = setTimeout(() => {
      dropdownContent.classList.add('hidden');
      setTimeout(() => {
        dropdownContent.style.display = "none";
      }, 300); // 1000 milliseconds = 1 second
    },200); // Adjust the delay time (1 second = 1000 milliseconds)
  };
  
  const contentHandleMouseEnter = () =>
  {
  
    clearTimeout(timeout);
  
  };
  
  const contentHandleMouseLeave = () =>
  {
  
    const dropdownContent = document.querySelector(".dropdown-content-menu");
    const timeout = setTimeout(() => {
    dropdownContent.classList.add('hidden');
    }, 200); // Adjust the delay time (1 second = 1000 milliseconds)
    setTimeout(() => {
      dropdownContent.style.display = "none";
    }, 500); // 1000 milliseconds = 1 second
      
  };
  
  const optionButtonHandleMouseEnter = () =>
  {
  
    clearTimeout(timeout);
    const dropdownContent = document.querySelector(".dropdown-content-option");
    dropdownContent.style.display = "block";
    dropdownContent.classList.remove('hidden');
  
  };
  
  const optionButtonHandleMouseLeave = () =>
  {
  
    const dropdownContent = document.querySelector(".dropdown-content-option");
    timeout = setTimeout(() => {
      dropdownContent.classList.add('hidden');
      setTimeout(() => {
        dropdownContent.style.display = "none";
      }, 300); // 1000 milliseconds = 1 second
    },200); // Adjust the delay time (1 second = 1000 milliseconds)
  
  };
  
    const optionHandleMouseEnter = () =>
    {
  
      clearTimeout(timeout);
  
    };
  
  const optionHandleMouseLeave = () =>
  {
  
    const dropdownContent = document.querySelector(".dropdown-content-option");
    const timeout = setTimeout(() => {
    dropdownContent.classList.add('hidden');
    }, 200); // Adjust the delay time (1 second = 1000 milliseconds)
    setTimeout(() => {
      dropdownContent.style.display = "none";
    }, 500); // 1000 milliseconds = 1 second
      
  };
  
  const updateAvailability = () =>
  {
    var checkbox = document.getElementById('release-checkbox');
    if (checkbox.checked == true)
    {
      alert("Checkbox is clicked");
      //replace code here to update the availability of the report
    };
    if (checkbox.checked == false)
    {
      alert("Checkbox is unclicked");
      //replace code here to update the availability of the report
    }
  };

  return (
    <html>
      <body className='body'>
        <div className="doctor-main-page">
          <div className="navbar-D">

            <div class="dropdown">
              <button 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              class="menu_button">
              </button>
            <div
              onMouseEnter={contentHandleMouseEnter}
              onMouseLeave={contentHandleMouseLeave} 
              class="dropdown-content-menu">
              <Link to="/DoctorMainPage">Home</Link>
              <Link to="/DoctorUploadPage">Upload</Link>
            </div>
          </div> 

        <div className="header">COVID-19 Imaging System</div>
        <div className="drName">Dr Johnny</div>

        <div class="dropdown">
          <button
          onMouseEnter={optionButtonHandleMouseEnter}
          onMouseLeave={optionButtonHandleMouseLeave}
          class="options_button">
          </button>
          <div
          onMouseEnter={optionHandleMouseEnter}
          onMouseLeave={optionHandleMouseLeave}
          class="dropdown-content-option">
            {/* <Link to="#">Profile</Link> */}
            <Link to="/">Logout</Link>
          </div>
        </div>

      </div>
      
    
      <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                  <th>Report ID</th>
                  <th>Doctor ID</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Edit/View</th>
                  <th>Release</th>
                  
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>RID123</td>
              <td>Johnny signs</td>
              <td>johnnysigns@email.com</td>
              <td>Negative</td>
              <td>
                <div className='action_cell'>
                  <div className='action-button-container'>
                    <Link id="action_link" className="view_result_link"
                      to={"/DoctorViewReport"}>
                        <button id="edit-report-button" title="Edit comment" className="edit-report-button"></button>
                    </Link>
                  </div>
                </div>
              </td>
              <td>
              <div className='action-button-container'>
                <input id = "release-checkbox" className="availability-input" onClick={updateAvailability} type="checkbox"></input>
              </div>
              </td>
            </tr>

              {reports.map(report => (
                <tr key={report.id}>
                  <td>{report.reportId}</td>
                  <td>{report.patientId}</td>
                  <td>{report.patientName}</td>
                  <td>{report.email}</td>
                  <td>{report.dateCreated}</td>
                  <td>{report.status}</td>
                  <td>{report.dateReviewed}</td>
                  <td>{report.visibility}</td>
                  <td>{/* Your additional data fields here */}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  </body>
</html>
  );
}

export default DoctorMainPage;
