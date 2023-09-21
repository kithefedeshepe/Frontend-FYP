import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './DoctorMainPage.css'; // Import your CSS file

function DoctorMainPage() {

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
    <div className="doctor-main-page">
      <div className="navbar-D">
      <div className="dropdown">
      <button className="dropbtn">Menu <i className="fa fa-caret-down"></i></button>
        <div className="dropdown-content">
          <Link to="/DoctorMainPage">Home</Link>
          <Link to="/DoctorUploadPage">Upload</Link>
        </div>
      </div>
        <div className="header">COVID-19 Imaging System</div>
        <div className="drName">Dr Johnny</div>
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
      
     
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
            <div className="filter-dropdown">
                <select>
                <option value="option1">Report ID</option>
                <option value="option2">Patient ID</option>
                <option value="option3">Patient name</option>
                <option value="option4">Date created</option>
                <option value="option5">status</option>
                </select>
            </div>
      </div>
    
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
                <th>Report ID</th>
                <th>Patient ID</th>
                <th>Patient name</th>
                <th>Email</th>
                <th>Date created</th>
                <th>Status</th>
                <th>Date reviewed</th>
                <th>Visibility</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>RID123</td>
            <td>PID123</td>
            <td>Jane Doe</td>
            <td>janedoe@email.com</td>
            <td>19/9/23</td>
            <td>Negative</td>
            <td>19/9/23</td>
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

export default DoctorMainPage;
