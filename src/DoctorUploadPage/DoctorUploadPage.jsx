import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DoctorUploadPage.css'; 

function DoctorUploadPage() {
  //const [reports, setReports] = useState([]); // Initialize an empty array for reports
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const navigate = useNavigate()
  const [result, setResult] = useState(null);
  const [heatmap, setHeatmap] = useState(null);

  useEffect(() => {
    // Check for the presence of a token in local storage
    const token = localStorage.getItem('token');
    if (!token) {
      // If no token is found, navigate to the login page or any other page 
      navigate('/');
    }
  }, [navigate]);
  
  // Function to handle file input change only jpg allowed
  /*const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
  
    if (file) {
      if (file.type === "image/jpeg" || file.type === "image/jpg") {
        const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
        setSelectedImage(imageUrl); // Set the selected image URL in state
      } else {
        alert("Please upload a .jpg file.");
        
        // setSelectedImage(null);
      }
    }
  };*/

  //ALLOW ALL FORMAT
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
    
    //console.log('Form Data:', formData);
    //console.log('Selected Image URL:', selectedImageURL);
  };

  const analyzeIMG = async (e) => {
    e.preventDefault();
    if (selectedImage == null || document.getElementById("patientID").value === "") {
      if (selectedImage == null) {
        alert("Please upload an image!");
      }
      //console.log(selectedImage);
      if (document.getElementById("patientID").value === "") {
        alert("Please fill in patient ID!");
      }
    } else {
      try {
        // Convert the selected image to base64
        const base64Image = await convertImageToBase64(selectedImage);
  
        // Create a JSON object with the "image" key and the Base64 image data as the value
        const requestData = {
          image: base64Image,
        };
  
        // Check if the image is an X-ray using the new API
        const checkResponse = await axios.post('https://43.134.34.32.nip.io/api/lungClass/', requestData, {
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
        });
        //console.log('Check Response:', checkResponse.data.result);
        if (checkResponse.data.result === "lung") {
          // If the image is identified as an X-ray, proceed with the prediction API
          const response = await axios.post('https://43.134.34.32.nip.io/api/predict/', requestData, {
            headers: {
              'Content-Type': 'application/json', // Set the content type to JSON
            },
          });
  
          // Capture and store the response in the component state
          setResult(response.data.prediction); // Assuming the API response is a string
          // Store the heatmap_base64 in the heatmap state
          setHeatmap(response.data.heatmap_base64);
          
          //console.log(response.data);
          setTimeout(() => {
            document.getElementById("view-button").style.display = "block";
          }, 1000);
        } else {
          // If the image is not identified as an X-ray, prompt the user to select an X-ray image
          alert("Please select a Lung X-ray image.");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  

  let timeout;

  const createReport = async () => {
    if (selectedImage == null) {
      alert("Please upload an image!");
    } else {
      try {
        const imageBase64 = await convertImageToBase64(selectedImage);
  
        const xray_image = imageBase64;
        const patient_id = document.getElementById("patientID").value;
        const status = result;
        const heatmapData = heatmap; 
  
        //console.log(xray_image);
        //console.log(patient_id);
        //console.log(status);
        //console.log(heatmapData);
  
        const response = await axios.post('https://43.134.34.32.nip.io/api/doctor/createReport/', 
        {
          xray_image: xray_image,
          patient_id: patient_id,
          status: status,
          heatmap_image: heatmapData 
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          timeout: 60000,
        });
  
        const capturerid = response.data.rid;
        localStorage.setItem('selectedReportId', capturerid);
        //console.log('Create Report Response:', response.data);
        navigate('/DoctorViewResult');
      } catch (error) {
        console.error('Error:', error);
        alert("Please select a valid patient ID");
      }
    }
  };
  
  
// Function to convert an image URL to base64
async function convertImageToBase64(imageURL) {
  const response = await fetch(imageURL);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result.split(',')[1]; // Extract the Base64 data
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}


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
                <a onClick={logout}>Logout</a>
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
                
                <input type="hidden" name="selectedImage" value={selectedImage || ''} />
                <div className="button-container">
                    <button className="analyze-button" onClick={analyzeIMG}>Analyze Image</button>
                </div>
                
                <div className="button-container">
                  <button id="view-button" className="view-button" onClick={createReport}>Create Report</button>
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