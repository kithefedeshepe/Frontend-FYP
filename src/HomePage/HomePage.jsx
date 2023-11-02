import React, { useState } from 'react'; 
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function HomePage() {
  //for DEMO only
  const navigate = useNavigate(); // Initialize navigate for routing
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'doctor' && password === 'doctor') {
      navigate('/DoctorMainPage'); // Redirect to the Doctor Page
    } else if (username === 'patient' && password === 'patient') {
      navigate('/PatientMainPage'); // Redirect to the Patient Page
    } else {
      alert('Invalid username or password');
    }
  };

  return (
  <html>
    <body>
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


  </body>
</html>

  );
}

export default HomePage;
