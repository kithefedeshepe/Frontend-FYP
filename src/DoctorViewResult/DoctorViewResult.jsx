import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './DoctorViewResult.css'; // Import your CSS file

function DoctorViewResult() {
  const location = useLocation();
  //const { image } = location.state;
  const [comment, setComment] = useState('');
  const navigate = useNavigate()
    // Function to handle the comment input change
  const handleCommentSubmit = (event) =>
  {

    setComment(event.target.value);
    navigate('/DoctorMainPage');

  };

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

  const optionHandleMouseEnter = () => {
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

  return (
    <html>
      <body className = "body">
        <div className="doctor-view-result">
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
                  <Link to="/">Logout</Link>
              </div>

            </div>

        </div>

          <div class="view-report-content-box">
            <b>COVID 19 X-Ray analysis report</b>
          </div>

          <div class="view-report-id-row">
            <div class="id-margin">Patient ID :</div>
            <input class="id-input-space"type="text" id="patientID" name="patientD" value="000001" />
            <div className='for-alignment'></div>
            <div className='for-alignment'></div>
            <div className='for-alignment'></div>
          </div>

          <div class="view-report-name-row">
            <div class="id-margin">First Name :</div>
            <input class="id-input-space"type="text" id="patientFirstName" name="patientFirstName" value="Jack" />
            <div class="id-margin">Last Name :</div>
            <input class="id-input-space"type="text" id="patientLastName" name="patientLastName" value="Daniels" />
          </div>

          <div class="view-report-name-row">
            <div class="id-margin">Gender :</div>
            <input class="id-input-space"type="text" id="patientGender" name="patientGender" value="M" />
            <div class="id-margin">Age :</div>
            <input class="id-input-space"type="text" id="patientAge" name="patientAge" value="69" />
          </div>

          <div class="view-report-last-row">
            <div class="id-margin">Diagnosis :</div>
            <input class="view-report-negative-checkbox"type="checkbox" id="covidNegative" name="covidNegative" value="Negative" disabled/>
            <div class="view-report-checkbox-font"><b>Negative</b></div>
            <input class="view-report-positive-checkbox"type="checkbox" id="covidPositive" name="covidPositive" value="Positive" checked disabled/>
            <div class="view-report-checkbox-font"><b>Positive</b></div>
          </div>
          
          <div className='label-container'>
            <label className="image-box-label-2">Image Uploaded</label>
            <label className="image-box-label">Anomaly areas</label>
          </div>
          <div className='images-box'>
          {/*<div><img src={image}  className='original-image'></img></div>
            <div><img src={image}  className='anomaly-image'></img></div>*/}
          </div>

          {/* comment segment */}
          <label className="view-report-comment-label">Comments for patient :</label>
          <textarea className="view-report-comment-box"></textarea>
          <div className="view-report-submit-container">
            <button className="view-report-submit-button" onClick={handleCommentSubmit} >Submit</button>
          </div>

        </div>
      </body>
    </html>
  );
}

export default DoctorViewResult;