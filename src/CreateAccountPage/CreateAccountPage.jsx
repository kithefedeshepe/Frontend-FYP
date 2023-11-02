import React, { useState } from 'react'; 
import './CreateAccountPage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CreateAccountPage() {

    const doctor_checked = () =>{
        document.getElementById("patientCheckbox").checked = false;
        document.getElementById("spec-row").style.display = "flex";
    };

    const patient_checked = () =>{
        document.getElementById("doctorCheckbox").checked = false;
        document.getElementById("spec-row").style.display = "none";
    };
    const navigate = useNavigate()
    const checkAndSubmit = (e) => {
        e.preventDefault(); 
        const fname = document.getElementById("p-firstName").value;
        const lname = document.getElementById("p-lastName").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm_password").value;
        const if_doc_checked = document.getElementById("doctorCheckbox").checked;
        const if_pat_checked = document.getElementById("patientCheckbox").checked;
        const spec_row = document.getElementById("specilization").value;
        if (if_doc_checked == false && if_pat_checked == false)
        {
            alert("Please fill in all fields!");

        }else if(fname == "" || lname == "" || age == "" || email == "" || password == "" || confirm_password == "")
        {
            alert("Please fill in all fields!");

        }else if (password !== confirm_password)
        {
             alert("Password do no match!");
        }else if (document.getElementById("doctorCheckbox").checked == true && spec_row == "")
        {
          alert("Please fill in all fields!");
        } else{
            //link here
            navigate('/');
        };
        
    };

  return (
  <html>
    <body className='body'>
    
    <div className="create-account-box">

        <h2 className="create-info-title">Your Information</h2>
            <div className="role-box">
                <div className='role-font'>
                    <b>Doctor: </b>
                    <input class="role-check" onClick={doctor_checked} type="radio" id="doctorCheckbox" />
                </div>

                <div>
                    <b>Patient: </b>
                    <input class="role-check" onClick={patient_checked} type="radio" id="patientCheckbox"  />
                </div>
            </div>

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
                      <option value="male">Male</option>
                      <option value="female">Female</option>
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
                  <label className='lable-info' htmlFor="password">Password: </label>
                  <input className='input-info' type="password" id="password" name="password" />
                </div>
                <div className='info-row'>
                  <label className='lable-info' htmlFor="password">Confirm password: </label>
                  <input className='input-info' type="password" id="confirm_password" name="confirm_password" />
                </div>


                <div id="spec-row" className='spec-row'>
                    <label className='lable-info' htmlFor="specilization">Specilization: </label>
                  <input className='input-info'id="specilization" name="specilization" />
                </div>

                <div className="create-button-container2">

                    <button id="create-button" onClick={checkAndSubmit} className="create-account-button">Create account</button>
   
                </div>
            </form>


    </div>

  </body>
</html>

  );
}

export default CreateAccountPage;