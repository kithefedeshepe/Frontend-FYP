import React, { useState } from 'react'; 
import './CreateAccountPage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function CreateAccountPage() {

  const [userType, setUserType] = useState(''); // 'doctor' or 'patient'
  const navigate = useNavigate();

    const doctor_checked = () =>{
        document.getElementById("patientCheckbox").checked = false;
        document.getElementById("spec-row").style.display = "flex";
        setUserType('doctor');
    };

    const patient_checked = () =>{
        document.getElementById("doctorCheckbox").checked = false;
        document.getElementById("spec-row").style.display = "none";
        setUserType('patient');
    };

    const checkAndSubmit = async (e) => {
        setUserType('patient');
        e.preventDefault(); 
        const fname = document.getElementById("p-firstName").value;
        const lname = document.getElementById("p-lastName").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm_password").value;
        const phone = document.getElementById("phone").value;
        const username = document.getElementById("username").value;
        const gender = document.getElementById("gender").value;
        //const if_doc_checked = document.getElementById("doctorCheckbox").checked;
        const if_pat_checked = userType;//KIV 
        const specialization = document.getElementById("specialization").value;

        /*if (!userType) {   //KIV
          alert('Please select a user type (Doctor or Patient)');
        } else*/ if (fname === '' || lname === '' || age === '' || email === '' || password === '') {
          alert('Please fill in all fields!');
        } else if (!/^[A-Za-z]+$/.test(fname) || !/^[A-Za-z]+$/.test(lname)) {
          alert('First name and last name should only contain alphabets!');
        } else if (password !== confirm_password) {
          alert('Password does not match!');
        } else if (userType === 'doctor' && specialization === '') {
          alert('Please fill in specialization field!');
        } else {
          try {
            if (userType === 'doctor') {
              console.log(userType);
              console.log(fname, lname, phone, gender, age, email, specialization);
              const docResponse = await Axios.post(`https://43.134.34.32.nip.io/api/signup/doctor/`, {
                username: username,
                password: password,
                profile:{
                  first_name: fname,
                  last_name: lname,
                  email: email,
                  phone_number: phone,
                  age: age,
                  gender: gender,
                  specialization: specialization
                }
              });
        
              if (docResponse.status === 201) {
                alert('Doctor account created successfully!');
                navigate('/');
              } else {
                alert('Error creating doctor account. Please try again later.');
              }
              
            } else if (userType === 'patient') {
              console.log(userType);
              const patResponse = await Axios.post(`https://43.134.34.32.nip.io/api/signup/patient/`, {
                username: username,
                password: password,
                profile:{
                  first_name: fname,
                  last_name: lname,
                  email: email,
                  phone_number: phone,
                  age: age,
                  gender: gender
                }
              });
        
              if (patResponse.status === 201) {
                alert('Patient account created successfully!');
                navigate('/');
              } else {
                alert('Error creating patient account. Please try again later.');
              }
            }
          } catch (error) {
            console.error('AxiosError:', error);
            alert('Account already exist');
          }
        }
    };

    const handlePhoneInput = (e) => {
      // Allow only numeric characters
      let inputValue = e.target.value.replace(/[^0-9]/g, '');
      // Limit to 10 digits
      inputValue = inputValue.slice(0, 10);
      e.target.value = inputValue;
    };

  return (
  
    <body className='body'>
    
    <div className="create-account-box">

        <h2 className="create-info-title">Your Information</h2>
            {/*<div className="role-box">
                <div className='role-font'>
                    <b>Doctor: </b>
                    <input className="role-check" onClick={doctor_checked} type="radio" id="doctorCheckbox" />

                </div>

                <div>
                    <b>Patient: </b>
                    <input className="role-check" onClick={patient_checked} type="radio" id="patientCheckbox"  />
                </div>
            </div>*/}

              <form >      
              
                <div className='info-row'>
                  <label className='lable-info' htmlFor="Firstname">First Name :</label>
                  <input className='input-info' type="text" id="p-firstName" name="patientName"  />
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="LastName">Last Name :</label>
                  <input className='input-info' type="text" id="p-lastName" name="patientName" />
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="gender">Gender :</label>
                  <select className='input-info' id="gender" name="gender" >
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                  </select>
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="age">Age :</label>
                  <input className='input-info' type="number" id="age" name="age" />
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="email">Email :</label>
                  <input className='input-info' id="email" name="email"/>
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="phone">Phone :</label>
                  <input
                    className='input-info'
                    id="phone"
                    name="phone"
                    type="tel"
                    pattern="[0-9]+"
                    maxLength="10"
                    onInput={handlePhoneInput}
                  />
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="username">Username :</label>
                  <input className='input-info' id="username" name="username"/>
                </div>

                <div className='info-row'>
                  <label className='lable-info' htmlFor="password">Password: </label>
                  <input className='input-info' type="password" id="password" name="password" />
                </div>
                <div className='info-row'>
                  <label className='lable-info' htmlFor="password">Confirm password: </label>
                  <input className='input-info' type="password" id="confirm_password" name="confirm_password" />
                </div>


                <div id="spec-row" className='spec-row'>
                    <label className='lable-info' htmlFor="specialization">Specilization: </label>
                  <input className='input-info'id="specialization" name="specialization" />
                </div>

                <div className="create-button-container2">

                    <button id="create-button" onClick={checkAndSubmit} className="create-account-button">Create account</button>
   
                </div>
            </form>


    </div>

  </body>


  );
}

export default CreateAccountPage;