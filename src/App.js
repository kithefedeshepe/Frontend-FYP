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

import CreateAccountPage from "./CreateAccountPage/CreateAccountPage";

function App() {
  return (
    <Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/DoctorMainPage" element={<DoctorMainPage />} />
			<Route path="/DoctorUploadPage" element={<DoctorUploadPage />} />
			<Route path="/DoctorViewResult" element={<DoctorViewResult />} />
			<Route path="/PatientMainPage" element={<PatientMainPage />} />
			<Route path="/PatientViewReport" element={<PatientViewReport />} />
			<Route path="/CreateAccountPage" element={<CreateAccountPage />} />
		</Routes>
	</Router>
  );
}

export default App;
