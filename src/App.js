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

function App() {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/DoctorMainPage" element={<DoctorMainPage />} />
				<Route path="/DoctorUploadImage/doc-upload-image" element={<DoctorUploadPage />} />
				<Route path="/UserAdminPage/doc-view-result" element={<DoctorViewResult />} />

			</Routes>
		</Router>
  );
}

export default App;
