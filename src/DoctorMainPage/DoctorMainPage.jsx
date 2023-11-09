import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './DoctorMainPage.css'; // Import your CSS file

function DoctorMainPage() {

  const navigate = useNavigate();
  const [reports, setReports] = useState([]); // Initialize an empty array for reports
  let timeout;

  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      console.log(localStorage.getItem('token'));
      if (token) {
        try {
          const response = await axios.get('https://3.135.235.143.nip.io/api/doctor/report/', {
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
        //alert('Error: Missing session token')
        navigate('/');
      }
    };
    fetchReports();
  }, []);

  const handleReportClick = (rid) => {
    // Store the rid in localStorage before navigating
    localStorage.setItem('selectedReportId', rid);
    // Navigate to DoctorViewResult
    navigate('/DoctorViewResult');
  };

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
  
  //KIV
  const updateAvailability = async (rid, currentVisibility) => {
    const newVisibility = !currentVisibility;
    const token = localStorage.getItem('token');
  
    // update the UI to reflect the user's action immediately
    setReports(prevReports => prevReports.map(report => 
      report.rid === rid ? { ...report, visibility: newVisibility } : report
    ));
  
    try {
      // Then attempt to update the server
      console.log(`https://3.135.235.143.nip.io/api/report/${rid}/`);
      await axios.put(`https://3.135.235.143.nip.io/api/report/${rid}/`, {
        visibility: newVisibility
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error("Error updating report visibility: ", error);
      // If the server update fails, revert the change in the UI
      setReports(prevReports => prevReports.map(report => 
        report.rid === rid ? { ...report, visibility: currentVisibility } : report
      ));
      // Optionally, inform the user that the update failed
      alert('Failed to update visibility. Please try again.');
    }
  };

  const logout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Navigate to the home page, replacing the current entry in the history stack
    navigate('/', { replace: true });
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
        <div className="drName"></div>

        <div class="dropdown">
          <button
          onMouseEnter={optionButtonHandleMouseEnter}
          onMouseLeave={optionButtonHandleMouseLeave}
          class="options_button">
          </button>
          <div
          onMouseEnter={optionHandleMouseEnter}
          onMouseLeave={optionHandleMouseLeave}
          class="dropdown-content-option" onClick={logout}>
            {/*TO REMOVE AND REPLACE WITH REAL LOGOUT BACKEND*/}
            <a onClick={logout}>Logout</a>
          </div>
        </div>
      </div>
      
      {/*DASHBOARD*/}
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
                      <Link
                        to="/DoctorViewResult"
                        onClick={() => handleReportClick(report.rid)}
                      >
                        <button id="edit-report-button" title="Edit comment" className="edit-report-button"></button>
                      </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='action-button-container'>
                      <input
                        id={`release-checkbox-${report.rid}`}
                        className="availability-input"
                        type="checkbox"
                        checked={report.visibility} 
                        onChange={() => updateAvailability(report.rid, report.visibility)}>
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
