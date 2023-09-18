//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Login, homepage
import HomePage from "./HomePage/HomePage";
//DoctorMainPage
import DoctorMainPage from "./DoctorMainPage/DoctorMainPage";
//DoctorUploadPage
import DoctorUploadPage from "./DoctorUploadPage/DoctorUploadPage";
//DoctorViewResult
import DoctorViewResult from "./DoctorViewResult/DoctorViewResult";
//PatientViewReport
import PatientViewReport from "./PatientViewReport/PatientViewReport";
//PatientMainPage
import PatientMainPage from "./PatientMainPage/PatientMainPage";

function App() {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/DoctorMainPage" element={<DoctorMainPage />} />
				<Route path="/DoctorUploadImage" element={<DoctorUploadPage />} />
				<Route path="/DoctorViewResult" element={<DoctorViewResult />} />
				<Route path="/PatientMainPage" element={<PatientMainPage />} />
				<Route path="/PatientViewReport" element={<PatientViewReport />} />
			</Routes>
		</Router>
  );
}

export default App;
