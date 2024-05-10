import React, { useState} from 'react'
import '../Login/Login.css'
import {Navigate } from 'react-router-dom'

const Login = (props) => {

  const[isLoggedIn,setIsLoggedIn] = useState(false);
  

  const handleLogin = () => {
    // Perform login logic here, such as making an API request
    // to authenticate the user
    // For demo purposes, let's assume the user is authenticated
    setIsLoggedIn(true);
  };

  // useEffect(()=>{
  //   setIsLoggedIn(true);
  // },[]);

  if(isLoggedIn){
    return <Navigate to="/Dashboard"/>
  }
  else{
   
  return (
    <div className=" container-fluid login-body">
        <div className="login-form transbox">
        <div className="login-logo">
            <img src="https://mattaforex.com/assets/images/logo.png" alt=""/>
        </div>
        <div className="login-headings">
        <h2>Login</h2>
      </div>
        <form>
          <div className='form-input'>
            <div className="form-group f1">
              <div>
              <label className="text-start">Username</label>
              </div>
              <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/> 
            </div>
            <div className="form-group f1">
              <div>
              <label className="text-start">Password</label>
              </div>
              <input type="password" className="form-control " id="exampleInputPassword1"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label>Remember me</label>        
              </div>
          </div>
          <button onClick={handleLogin}className="btn">Login</button>
          </form>
        </div>
    </div>
  
  )
  }
}

export default Login