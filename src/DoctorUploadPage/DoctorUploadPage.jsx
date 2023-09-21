import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './DoctorUploadPage.css'; // Import your CSS file

function DoctorUploadPage() {
  const [reports, setReports] = useState([]); // Initialize an empty array for reports
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image

  // Function to handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
      setSelectedImage(imageUrl); // Set the selected image URL in state
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Access form data and selected image URL
    const formData = new FormData(event.target);
    const selectedImageURL = formData.get('selectedImage');
    formData.delete('selectedImage'); // Remove the hidden input from the form data
  
    // Now you can access formData to send it to your server or perform other actions
    console.log('Form Data:', formData);
    console.log('Selected Image URL:', selectedImageURL);
  };
  return (
    <div className="doctor-upload-page">
      <div className="navbar-D">
        <div class="dropdown">
          <button class="dropbtn">Menu
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
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
      {/* ADD ON HERE */}
      <div className="content-box">
        {/* Left Box for Uploading Images */}
        <div className="upload-box">
            <h2>Upload X-ray</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            
            {/* Display the selected image */}
            {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected X-ray"
            style={{ paddingTop: 15, maxWidth: '100%', maxHeight: '100%', display: 'block' }}
          />
        )}
        </div>
        
        {/* Right Box for Entering Patient Information */}
        <div className="right-box">
          <h2>Patient Information</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="patientID">Patient ID:</label>
            <input type="text" id="patientID" name="patientID" />

            <label htmlFor="patientName">Patient Name:</label>
            <input type="text" id="patientName" name="patientName" />

            <label htmlFor="patientGender">Gender:</label>
            <select id="patientGender" name="patientGender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label htmlFor="patientAge">Age:</label>
            <input type="number" id="patientAge" name="patientAge" />

            {/* Add a hidden input to include the selected image URL in the form */}
            <input type="hidden" name="selectedImage" value={selectedImage || ''} />

            <div className="button-container">
              <Link to="/DoctorViewResult" className="analyze-button">
                Analyze Image
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorUploadPage;