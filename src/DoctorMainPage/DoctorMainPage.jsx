import React from 'react';
import './DoctorMainPage.css'; // Import your CSS file

function DoctorMainPage() {
  return (
    <div className="doctor-main-page">
      <div className="navbar-D">
        <div className="menu-button">Menu</div>
        <div className="header-text">COVID-19 Imaging System</div>
        <div className="right-text">Doctor name</div>
        <div className="dropdown-button">Dropdown</div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
            <div className="filter-dropdown">
                <select>
                <option value="">Filters</option>
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
                <th>status</th>
                <th>Date reviewed</th>
                <th>Visibility</th>
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
                <td>Data 8</td>
                <td>Data 9</td>
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

export default DoctorMainPage;
