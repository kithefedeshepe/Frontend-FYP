import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Login, homepage
import HomePage from "./HomePage/HomePage";
import LoginPage from "./logPage/LoginPage";

//DoctorMainPage
import DoctorMainPage from "./DoctorMainPage/DoctorMainPage";

//DoctorUploadPage
import DoctorUploadPage from "./DoctorUploadPage/DoctorUploadPage";

//DoctorViewResult
import DoctorViewResult from "./DoctorViewResult/DoctorViewResult";

function App() {
  return (
    <Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<HomePage />} />

        //doctor
				<Route path="/DoctorMainPage" element={<DoctorMainPage />} />
				<Route path="/DoctorUploadImage/doc-upload-image" element={<DoctorUploadPage />} />
				<Route path="/UserAdminPage/doc-view-result" element={<DoctorViewResult />} />

			</Routes>
		</Router>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> new folders added
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
