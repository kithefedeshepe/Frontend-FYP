import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DoctorViewResult.css'; // Import your CSS file

function DoctorViewResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const rid = location.state?.rid; // Get the passed 'rid' from the location state
  const [reportDetails, setReportDetails] = useState({
    patient_id: '',
    patient_first_name: '',
    patient_last_name: '',
    patient_gender: '',
    patient_age: '',
    description: '',
    status: '',
    xray_image: '',
    heatmap_image: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const reportId = rid || localStorage.getItem('selectedReportId');

    if (!token) {
      // Redirect to login if there's no token
      navigate('/', { replace: true });
    } else if (reportId) {
      // Fetch report details if the token exists
      fetchReportDetails(reportId, token);
    } else {
      alert('No report selected.');
      navigate('/DoctorMainPage');
    }
  }, [navigate, rid]);


  const fetchReportDetails = async (reportId, token) => {
    try {
      const response = await axios.get(`http://43.134.34.32:8000/api/doctor/getReport/${reportId}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setReportDetails(response.data);
      setComment(response.data.description);
    } catch (error) {
      console.error("Error fetching report details: ", error);
      if (error.response && error.response.status === 401) {
        // Token might be invalid, clear it and redirect to login
        localStorage.removeItem('token');
        navigate('/login', { replace: true });
      }
    }
  };

  // Assuming you have base64 strings for the X-ray image and heatmap image
  const xrayImageDataUrl = `data:image/jpeg;base64,${reportDetails.xray_image}`;
  const heatmapImageDataUrl = `data:image/jpeg;base64,${reportDetails.heatmap_image}`;

  //const { image } = location.state;
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value); // Update the comment state, not reportDetails
  };

  const handleCommentSubmit = async () => {
    // Check if the comment has been changed
    if (comment.trim() === '') {
      alert('Comment cannot be empty.'); // Alert the user if the comment is empty
      return; // Exit the function early if no comment is provided
    }
    
    // Check if the comment is unchanged
    if (comment === reportDetails.description) {
      alert('No changes to save.'); // Alert the user that there are no changes
      return; // Exit the function early if there are no changes
    }
  
    // If the comment is changed, proceed to submit it
    try {
      const reportId = rid || localStorage.getItem('selectedReportId');
      const response = await axios.put(`http://43.134.34.32:8000/api/doctor/updateReport/${reportId}/`, {
        description: comment // Send the updated comment
      });
      
      // Handle the response accordingly
      if (response.status === 200) {
        alert('Comment updated successfully!');
        navigate('/DoctorMainPage'); // Navigate to the main page after successful submission
        localStorage.removeItem('selectedReportId');
      } else {
        // Handle any other HTTP status codes as needed
        alert('Failed to update the comment. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting the updated comment: ", error);
      alert('Error submitting the updated comment. Please try again.'); // Provide feedback to the user
    }
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

  const logout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Navigate to the home page, replacing the current entry in the history stack
    navigate('/', { replace: true });
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
                class="dropdown-content-option">
                  <a onClick={logout}>Logout</a>
              </div>

            </div>

        </div>

          <div class="view-report-content-box">
            <b>COVID 19 X-Ray analysis report</b>
          </div>

          <div class="view-report-id-row">
            <div class="id-margin">Patient ID :</div>
            <input class="id-input-space"type="text" id="patientID" name="patientID" value={reportDetails?.patient_id || ''} />
            <div className='for-alignment'></div>
            <div className='for-alignment'></div>
            <div className='for-alignment'></div>
          </div>

          <div class="view-report-name-row">
            <div class="id-margin">First Name :</div>
            <input class="id-input-space"type="text" id="patientFirstName" name="patientFirstName" value={reportDetails?.patient_first_name|| ''} />
            <div class="id-margin">Last Name :</div>
            <input class="id-input-space"type="text" id="patientLastName" name="patientLastName" value={reportDetails?.patient_last_name|| ''} />
          </div>

          <div class="view-report-name-row">
            <div class="id-margin">Gender :</div>
            <input class="id-input-space"type="text" id="patientGender" name="patientGender" value={reportDetails?.patient_gender|| ''} />
            <div class="id-margin">Age :</div>
            <input class="id-input-space"type="text" id="patientAge" name="patientAge" value={reportDetails?.patient_age|| ''} />
          </div>

          <div class="view-report-last-row">
            <div class="id-margin">Diagnosis :</div>
            <input class="view-report-negative-checkbox"type="checkbox" id="covidNegative" name="covidNegative" value="NEGATIVE" checked={reportDetails.status === 'Normal'} disabled/>
            <div class="view-report-checkbox-font"><b>Negative</b></div>
            <input class="view-report-positive-checkbox"type="checkbox" id="covidPositive" name="covidPositive" value="COVID" checked={reportDetails.status === 'COVID'} disabled/>
            <div class="view-report-checkbox-font"><b>Positive</b></div>
            <input class="view-report-positive-checkbox" type="checkbox" id="viralPneumonia" name="viralPneumonia" value="VIRAL PNUEMONIA" checked={reportDetails.status === 'Viral Pneumonia'} disabled/>
            <div class="view-report-checkbox-font"><b>Viral Pneumonia</b></div>
          </div>
          
          <div className='label-container'>
            <label className="image-box-label-2">Image Uploaded</label>
            <label className="image-box-label">Anomaly areas</label>
          </div>
          <div className='images-box'>
            <div className="image-container">
              <img src={xrayImageDataUrl} className='original-image' alt="X-Ray Image" />
            </div>
            <div className="image-container">
              <img src={heatmapImageDataUrl} className='anomaly-image' alt="Heatmap Image" />
            </div>
          </div>

          {/* comment segment */}
          <label className="view-report-comment-label">Comments for patient :</label>
          <textarea 
            className="view-report-comment-box" 
            value={comment} // Use the comment state here
            onChange={handleCommentChange}> // Update the comment state when the textarea changes
          </textarea>
          <div className="view-report-submit-container">
            <button className="view-report-submit-button" onClick={handleCommentSubmit}>Submit</button>
          </div>

        </div>
      </body>
    </html>
  );
}

export default DoctorViewResult;