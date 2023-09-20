import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './PatientMainPage.css'; // Import your CSS file

function PatientMainPage() {
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
    <div className="patient-main-page">
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
            <Link to="#">Profile</Link>
            <Link to="/">Logout</Link>
          </div>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
            <div className="filter-dropdown">
                <select>
                <option value="option1">Report ID</option>
                <option value="option2">Doctor name</option>
                <option value="option3">Date created</option>
                <option value="option4">status</option>
                </select>
            </div>
      </div>
    
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
                <th>Report ID</th>
                <th>Doctor ID</th>
                <th>Email</th>
                <th>Date created</th>
                <th>Status</th>
                <th>Due date</th>
                <th>Visibility</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>RID123</td>
            <td>Johnny signs</td>
            <td>johnnysigns@email.com</td>
            <td>19/9/23</td>
            <td>Negative</td>
            <td>23/9/23</td>
            <td>Visibile</td>
            <td></td>
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
  );
}

export default PatientMainPage;