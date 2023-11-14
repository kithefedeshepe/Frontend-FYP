import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PatientViewReport.css'; // Import your CSS file
import jsPDF from 'jspdf';

function PatientViewReport() {
  const navigate = useNavigate()
  const location = useLocation();
  const rid = location.state?.rid; // Get the passed 'rid' from the location state
  const [reportDetails, setReportDetails] = useState({
    patient_id: '',
    patient_first_name: '',
    patient_last_name: '',
    patient_gender: '',
    patient_age: '',
    doctor_id: '',
    doctor_first_name: '', //KIV
    doctor_last_name: '', //KIV
    description: '',
    status: '',
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
      navigate('/PatientMainPage');
    }
  }, [navigate, rid]);

  const fetchReportDetails = async (reportId, token) => {
    try {
      const response = await axios.get(`https://43.134.34.32.nip.io/api/patient/getReport/${reportId}/`, {
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

    const printDiv = () => {
      const pdf = new jsPDF();
    
      // Add content to the PDF
      pdf.text('COVID 19 X-Ray analysis report', 15, 15);
      
      pdf.text('Patient ID: ' + reportDetails.patient_id, 15, 30);
      pdf.text('First Name: ' + reportDetails.patient_first_name, 15, 45);
      pdf.text('Last Name: ' + reportDetails.patient_last_name, 15, 60);
      pdf.text('Gender: ' + reportDetails.patient_gender, 15, 75);
      pdf.text('Age: ' + reportDetails.patient_age, 15, 90);
      
      pdf.text('Doctor ID: ' + reportDetails.doctor_id, 15, 105);
      pdf.text('Doctor First Name: ' + reportDetails.doctor_first_name, 15, 120);
      pdf.text('Doctor Last Name: ' + reportDetails.doctor_last_name, 15, 135);
      
      // Set checkboxes based on the diagnosis status
      if (reportDetails.status === 'Normal') {
        pdf.text('Diagnosis: Negative', 15, 150);
      } else if (reportDetails.status === 'COVID') {
        pdf.text('Diagnosis: Positive', 15, 150);
      } else if (reportDetails.status === 'Viral Pneumonia') {
        pdf.text('Diagnosis: Viral Pneumonia', 15, 150);
      }
    
      pdf.text('Doctor\'s comment: ' + reportDetails.description, 15, 165);
      
      // Save the PDF
      pdf.save('example.pdf');
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
          <a onClick={logout}>Logout</a>
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
              <input class="id-input-space"type="text" id="patientID" name="patientD" value={reportDetails?.patient_id || ''} />
              <div className='for-alignment'></div>
              <div className='for-alignment'></div>
              <div className='for-alignment'></div>
            </div>

            <div class="patient_view-report-name-row">
              <div class="id-margin">First Name :</div>
              <input class="id-input-space"type="text" id="patientFirstName" name="patientFirstName" value={reportDetails?.patient_first_name|| ''} />
              <div class="id-margin">Last Name :</div>
              <input class="id-input-space"type="text" id="patientLastName" name="patientLastName" value={reportDetails?.patient_last_name|| ''} />
            </div>

            <div class="patient_view-report-name-row">
              <div class="id-margin">Gender :</div>
              <input class="id-input-space"type="text" id="patientGender" name="patientGender" value={reportDetails?.patient_gender|| ''} />
              <div class="id-margin">Age :</div>
              <input class="id-input-space"type="text" id="patientAge" name="patientAge" value={reportDetails?.patient_age|| ''} />
            </div>

            <div class="patient_view-report-id-row">
              <div class="id-margin">Doctor ID :</div>
              <input class="id-input-space"type="text" id="doctorID" name="doctorID" value={reportDetails?.doctor_id|| ''} />
              <div className='for-alignment'></div>
              <div className='for-alignment'></div>
              <div className='for-alignment'></div>
            </div>

            <div class="patient_view-report-name-row">
              <div class="id-margin">First Name :</div>
              <input class="id-input-space"type="text" id="doctorFirstName" name="doctorFirstName" value={reportDetails?.doctor_first_name|| ''} />
              <div class="id-margin">Last Name :</div>
              <input class="id-input-space"type="text" id="doctorLastName" name="doctorLastName" value={reportDetails?.doctor_last_name|| ''} />
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
            
            {/* comment segment */}
            <label className="patient-view-report-comment-label" >Doctor's comment: </label>
            <textarea className="doctor_comment" value={reportDetails?.description|| ''}></textarea>
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