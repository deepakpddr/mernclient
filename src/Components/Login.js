import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import {UserContext} from "../App";

const Login = () => {

  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) =>
  {
    e.preventDefault();
    const res = await fetch('/signin', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email, password
      })
    })

    const data = res.json();
    if(res.status === 400 || !data)
    {
      window.alert("Inavlid Credentials");
    }else{
      dispatch({type:'USER', payload:true})   //payload: option k sath extra message
      window.alert("Login successful");
      navigate.push("/");
    }
  }


  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src="#" alt="login"></img>
              </figure>
              <Link to="/signup" className="signin-image-link">Create an account</Link>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form method="POST" className="register-form" id="register-form">

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>



                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </div>


                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="Login" onClick={loginUser}></input>
                </div>
              </form>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Login;