import React from 'react';
import './PatientMainPage.css'; // Import your CSS file

function PatientMainPage() {
  return (
    <div className="patient-main-page">
      <div className="navbar-P">
        <div className="menu-button">Menu</div>
        <div className="header-text">COVID-19 Imaging System</div>
        <div className="right-text">Patient name</div>
        <div className="dropdown-button">Dropdown</div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
            <div className="filter-dropdown">
                <select>
                <option value="">Filters</option>
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
                <th>Doctor name</th>
                <th>Email</th>
                <th>Date created</th>
                <th>status</th>
                <th>Due date</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* 11 rows */}
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
                <td>Data 7</td>
                
            </tr>
            <tr>
                {/* Add more rows with similar structure */}
            </tr>
            </tbody>
        </table>
    </div>
    </div>
  );
}

export default PatientMainPage;