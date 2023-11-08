import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './PatientMainPage.css'; // Import your CSS file

function PatientMainPage() {
  const [reports, setReports] = useState([]); // Initialize an empty array for reports
  const navigate = useNavigate();
  let timeout;

  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      console.log(localStorage.getItem('token'));
      if (token) {
        try {
          const response = await axios.get('http://3.135.235.143:8000/api/patient/report/', {
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
  
  const handleReportClick = (rid) => {
    // Store the rid in localStorage before navigating
    localStorage.setItem('selectedReportId', rid);
    // Navigate to DoctorViewResult
    navigate('/PatientViewReport');
  };

  const handleMouseEnter = () =>
  {

    clearTimeout(timeout);
    const dropdownContent = document.querySelector(".dropdown-content-menu_P");
    dropdownContent.style.display = "block";
    dropdownContent.classList.remove('hidden');

  };

  const handleMouseLeave = () =>
  {

    const dropdownContent = document.querySelector(".dropdown-content-menu_P");
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

    const dropdownContent = document.querySelector(".dropdown-content-menu_P");
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
    const dropdownContent = document.querySelector(".dropdown-content-option_P");
    dropdownContent.style.display = "block";
    dropdownContent.classList.remove('hidden');

  };

  const optionButtonHandleMouseLeave = () =>
  {

    const dropdownContent = document.querySelector(".dropdown-content-option_P");
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

    const dropdownContent = document.querySelector(".dropdown-content-option_P");
    const timeout = setTimeout(() => {
    dropdownContent.classList.add('hidden');
    }, 200); // Adjust the delay time (1 second = 1000 milliseconds)
    setTimeout(() => {
      dropdownContent.style.display = "none";
    }, 500); // 1000 milliseconds = 1 second
    
  };


  return (
  <html>
    <body className='body'>
      <div className="patient-main-page">
        <div className="navbar-P">

          <div class="dropdown">
            <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            class="menu_button_P">
            </button>
            <div
            onMouseEnter={contentHandleMouseEnter}
            onMouseLeave={contentHandleMouseLeave} 
            class="dropdown-content-menu_P">
              <Link to="/PatientMainPage">Home</Link>
            </div>
          </div>

          <div className="header">COVID-19 Imaging System</div>
          <div className="drName"></div>

          <div class="dropdown">
            <button
            onMouseEnter={optionButtonHandleMouseEnter}
            onMouseLeave={optionButtonHandleMouseLeave}
            class="options_button_P">
            </button>
            <div
            onMouseEnter={optionHandleMouseEnter}
            onMouseLeave={optionHandleMouseLeave}
            class="dropdown-content-option_P">
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
                  <th>Doctor Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(report => (
                <tr key={report.rid}>
                  <td>{report.rid}</td>
                  <td>{report.doctor_name}</td>
                  <td>{report.email}</td>
                  <td>{report.status}</td>
                  <td>
                    <div className='action_cell'>
                      <div className='action-button-container'>
                        <Link id="action_link" className="view_result_link"
                          onClick={() => handleReportClick(report.rid)}
                          to={"/PatientViewReport"}>
                            <button
                              id={`view-report-${report.rid}`} 
                              title={report.visibility ? "View report" : "Report not available"}
                              className={report.visibility ? "view-button-P" : "not-available"}
                              disabled={!report.visibility} // Button is disabled if report.visibility is false
                            >
                              {report.visibility ? "" : ""}
                            </button>
                        </Link>
                      </div>
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

export default PatientMainPage;