import React, { useState, useEffect } from 'react'; 
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function HomePage() {
  //for DEMO only
  const navigate = useNavigate(); // Initialize navigate for routing
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Clear localStorage items on component mount
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('selectedReportId');
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if username or password is empty
    if (!username || !password) {
      alert('Please enter both username and password');
      return; // Exit the function if fields are empty
    }
    try {
      const response = await Axios.post('https://43.134.34.32.nip.io/api/login/', {
        username,
        password,
      });
      
      if (response.status === 200) {
        //console.log(response.data);

        // Extract the token from the response
        const token = response.data.token;
        // Store the token in localStorage
        localStorage.setItem('token', token);
        //console.log('Token:', token);
        //console.log(`Token ${localStorage.getItem('token')}`);
        
        // USER AUTHENTICATION
        const userResponse = await Axios.get('https://43.134.34.32.nip.io/api/userdetail/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        // Successful login
        //console.log(localStorage.getItem('token'));
        //console.log(userResponse.data.role);
        if (userResponse.data.role === 'doctor') {
          navigate('/DoctorMainPage'); // Redirect to the Doctor Page
        } else if (userResponse.data.role === 'patient') {
          navigate('/PatientMainPage'); // Redirect to the Patient Page
        } else {
          //console.log(userResponse.data);
          alert('Invalid username or password');
        }
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      alert('Wrong Username or Password please re-enter');
      console.error(error);
    }

  };

  return (

    <div className="homepage">
      <main>
        <h2 className="h2">WELCOME</h2>
        <section className="login-container">
          <div className="left-box">
            {/* Content for the left box */}
          </div>
          <form className="login-form">
            <p>COVID-19 Imaging Recognition System</p>
            <input
              type="text"
              className="login-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleLogin} className="login-button">
              Login
            </button>
            <label className="create-account-label">No account? Create one below.</label>

            <div className="create-button-container">
              <Link className="view_result_link"
                to={"/CreateAccountPage"}>
                  <button id="create-button" className="create-account-button">Create account</button>
              </Link>
            </div>


          </form>
        </section>
      </main>
    </div>


  );
}

export default HomePage;
