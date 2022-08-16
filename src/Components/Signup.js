import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//Cors policy: Working in one local host and want to share data in another local host, then cors error is out.

const Signup = () => {

  const navigate = useNavigate();

  //getting data written by user
  const [user, setUser] = useState({
    name:"", email:"", phone:"", work:"", password:"", cpassword:""
  })
  
  let name, value;
  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
  }

  //posting data to database
  const PostData = async (e) => {
    e.preventDefault();
    const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch("/register",{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })
    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successful");
      console.log("Registration Successful");

      navigate.push("/login");
    }

  }

  return (
    <>
      <section className="singup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="Your Name"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs} placeholder="Your Email"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk"></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInputs} placeholder="Your Number"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow"></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={handleInputs} placeholder="Your Profession"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs} placeholder="Your Password"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password"></input>
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={PostData}></input>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="#" alt="register"></img>
              </figure>
              <Link to="/login" className="signup-image-link">I am already registered</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Signup;