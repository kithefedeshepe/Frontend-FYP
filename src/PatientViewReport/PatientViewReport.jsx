import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './PatientViewReport.css'; // Import your CSS file

function PatientViewReport() {

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

    // Add state variable to store the comment
    const [comment, setComment] = useState('');

    // Function to handle the comment input change
    const handleCommentSubmit = (event) => {
      setComment(event.target.value);
    };

    let timeout;
  
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

    const printDiv = () =>
    {
      var printContents = document.getElementById('print-content').innerHTML;
      var w=window.open();
      w.document.write(printContents);
      w.print();
      w.close();
    };
  return (
  <html>
    <body className='body'>
    <div className="patient-view-report">
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
      <div className="drName">Jane Doe</div>

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

      {/* ADD ON HERE */}
      <div id="print-content">
        <div class="patient_view-report-content-box">
              <b>COVID 19 X-Ray analysis report</b>
            </div>

            <div class="patient_view-report-id-row">
              <div class="id-margin">Patient ID :</div>
              <input class="id-input-space"type="text" id="patientID" name="patientD" value="000001" />
              <div className='for-alignment'></div>
              <div className='for-alignment'></div>
              <div className='for-alignment'></div>
            </div>

            <div class="patient_view-report-name-row">
              <div class="id-margin">First Name :</div>
              <input class="id-input-space"type="text" id="patientFirstName" name="patientFirstName" value="Jack" />
              <div class="id-margin">Last Name :</div>
              <input class="id-input-space"type="text" id="patientLastName" name="patientLastName" value="Daniels" />
            </div>

            <div class="patient_view-report-name-row">
              <div class="id-margin">Gender :</div>
              <input class="id-input-space"type="text" id="patientGender" name="patientGender" value="M" />
              <div class="id-margin">Age :</div>
              <input class="id-input-space"type="text" id="patientAge" name="patientAge" value="69" />
            </div>

            <div class="patient_view-report-id-row">
              <div class="id-margin">Doctor ID :</div>
              <input class="id-input-space"type="text" id="doctorID" name="doctorID" value="000001" />
              <div className='for-alignment'></div>
              <div className='for-alignment'></div>
              <div className='for-alignment'></div>
            </div>

            <div class="patient_view-report-name-row">
              <div class="id-margin">First Name :</div>
              <input class="id-input-space"type="text" id="doctorFirstName" name="doctorFirstName" value="Jack" />
              <div class="id-margin">Last Name :</div>
              <input class="id-input-space"type="text" id="doctorLastName" name="doctorLastName" value="Daniels" />
            </div>

            <div class="patient_view-report-last-row">
              <div class="id-margin">Diagnosis :</div>
              <input class="view-report-negative-checkbox"type="checkbox" id="covidNegative" name="covidNegative" value="Negative" disabled/>
              <div class="view-report-checkbox-font"><b>Negative</b></div>
              <input class="view-report-positive-checkbox"type="checkbox" id="covidPositive" name="covidPositive" value="Positive" checked disabled/>
              <div class="view-report-checkbox-font"><b>Positive</b></div>
            </div>
            
            {/* comment segment */}
            <label className="patient-view-report-comment-label">Doctor's comment: </label>
            <textarea className="doctor_comment"></textarea>
          </div>

          <div className="patient-view-report-submit-container">
            <div className='patient-submit-comment-container'>
              <button className="patient-view-report-submit-button" onClick={printDiv} >Print and Save</button>
            </div>
          </div>

        </div>
    </body>
  </html>

  );
}

export default PatientViewReport;