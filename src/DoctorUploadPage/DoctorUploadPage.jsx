import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DoctorUploadPage.css'; // Import your CSS file

function DoctorUploadPage() {
  //const [reports, setReports] = useState([]); // Initialize an empty array for reports
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const navigate = useNavigate()
  
  // Function to handle file input change
  const handleImageChange = (event) =>
  {

    const file = event.target.files[0]; // Get the selected file
    if (file)
    {

      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
      setSelectedImage(imageUrl); // Set the selected image URL in state

    }
    
  };

  const handleSubmit = (event) =>
  {
    
    event.preventDefault(); // Prevent the default form submission behavior

    // Access form data and selected image URL
    const formData = new FormData(event.target);
    const selectedImageURL = formData.get('selectedImage');
    // Now you can access formData to send it to your server or perform other actions
    console.log('Form Data:', formData);
    console.log('Selected Image URL:', selectedImageURL);

  };

  const checkNULL = (e) =>
  {
    e.preventDefault();
    //insert var to set boolean for if it is a xray image
    //var isLung = ...;
    if (selectedImage == null /*|| isLung == false */ )
    {
      if (selectedImage == null)
      {
        alert("Please upload an image!");
      }
      /*
      if (isLung == false)
      {
        alert("This is not a lung X-Ray!");
      }
      */
    }else if (document.getElementById("patientID").value == "")
    {
      alert("Please fill in all fields!");
    }else{
      setTimeout
      (() =>{
        document.getElementById("view-button").style.display="block";
      }, 1000
      );
  
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

  const logout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Navigate to the home page, replacing the current entry in the history stack
    navigate('/', { replace: true });
  };

  return (
    <html>
      <body className = "body">
        <div className="doctor-upload-page">
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
                {/* <Link to="#">Profile</Link> */}
                <div onClick={logout}>Logout</div>
              </div>
            </div>

          </div>

          {/* ADD ON HERE */}
          <div className="upload-content-box">

            {/* Left Box for Uploading Images */}
            <div className="upload-box">

              <h2 className="upload-title">Upload X-ray</h2>
                <div>
                    <input className='custom-file-upload'type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                  {/* Display the selected image */}
                  {selectedImage
                  && (
                      <img
                      className='selectedImage'
                      src={selectedImage}
                      alt="Selected X-ray"/>
                      )
                  }

            </div>
            
            {/* Right Box for Entering Patient Information */}
            <div className="right-box">
              <h2 className="info-title">Patient Information</h2>
              <form onSubmit={handleSubmit}>
                <div className='info-row'>
                  <label className='lable-info' htmlFor="patientID">ID :</label>
                  <input className='input-info' type="text" id="patientID" name="patientID" />
                </div>
                   {/* Right Box for Entering Patient Information 
                <div className='info-row'>
                  <label className='lable-info' htmlFor="patientName">First Name :</label>
                  <input className='input-info' type="text" id="p-firstName" name="patientName" />
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="patientName">Last Name :</label>
                  <input className='input-info' type="text" id="p-lastName" name="patientName" />
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="patientGender">Gender :</label>
                  <select className='input-info' id="patientGender" name="patientGender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                  </select>
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="patientAge">Age :</label>
                  <input className='input-info' type="number" id="patientAge" name="patientAge" />
                </div>
                */}

                {/* Add a hidden input to include the selected image URL in the form */}
                <input type="hidden" name="selectedImage" value={selectedImage || ''} />
                <div className="button-container">
                    <button className="analyze-button" onClick={checkNULL}>Analyze Image</button>
                </div>

                <div className="button-container">
                <Link className="view_result_link"
                  to={"/DoctorViewResult"}
                  state={{image: selectedImage}}>
                    <button id="view-button" className="view-button">View Results</button>
                </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
export default DoctorUploadPage;