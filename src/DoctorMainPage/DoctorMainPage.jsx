import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './DoctorMainPage.css'; // Import your CSS file

function DoctorMainPage() {

  const [reports, setReports] = useState([]); // Initialize an empty array for reports
  let timeout;

  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      console.log(localStorage.getItem('token'));
      if (token) {
        try {
          const response = await axios.get('http://3.135.235.143:8000/api/doctor/report/', {
            headers: {
              'Authorization': `Bearer ${token}` // Use the token for authorization in the API call
            }
          });
          setReports(response.data); // Assuming response.data is an array of reports
        } catch (error) {
          console.error("Error fetching data: ", error);
          // Handle the error accordingly
        }
      } else {
        alert('Error: Missing session token')
      }
    };
    fetchReports();
  }, []);


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
  
  const updateAvailability = async (rid, currentVisibility) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.patch(`http://3.135.235.143:8000/api/doctor/report/${rid}`, {
        visibility: !currentVisibility // Toggle the current visibility status
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      // If the update is successful, reflect the change in the UI
      if (response.status === 200) {
        setReports(reports.map(report => 
          report.rid === rid ? { ...report, visibility: !currentVisibility } : report
        ));
      }
    } catch (error) {
      console.error("Error updating report visibility: ", error);
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
            {/*TO REMOVE AND REPLACE WITH REAL LOGOUT BACKEND*/}
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
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Edit/View</th>
                  <th>Release</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(report => (
                <tr key={report.rid}>
                  <td>{report.rid}</td>
                  <td>{report.patient_id}</td>
                  <td>{report.patient_name}</td>
                  <td>{report.email}</td>
                  <td>{report.status}</td>
                  <td>
                    <div className='action_cell'>
                      <div className='action-button-container'>
                        <Link id="action_link" className="view_result_link"
                          to={"/DoctorViewResult"}>
                            <button id="edit-report-button" title="Edit comment" className="edit-report-button"></button>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='action-button-container'>
                      <input id={`release-checkbox-${report.rid}`} className="availability-input" onChange={() => updateAvailability(report.rid, report.visibility)}
                       type="checkbox">
                      </input>
                    </div>
                  </td>
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
