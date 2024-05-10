import React from "react";
import "../Register/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" container-fluid Register-body">
      <div className="Register-form ">
        <div className="Register-logo">
          <img src="https://mattaforex.com/assets/images/logo.png" alt="" />
        </div>
        <div className="login-headings">
          <h1>Register</h1>
          <Link to="/Dashboard">Home | </Link>
          <Link to="/Login"> Login</Link>
        </div>
        <form>
          <div>

            <div className="form-group f1">
              <input
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Sponser ID"
              />
            </div>

            <div className="form-group f1">
              <input
                className="form-control "
                placeholder="Enter Sponser Name"
              />
            </div>

            <div className="form-group f1">
              <input className="form-control" placeholder="Enter Username" />
            </div>

            <div className="form-group f1">
              <input className="form-control " placeholder="Enter Email" />
            </div>

            <div className="form-group f1">
              <input
                className="form-control "
                placeholder="Enter Mobile Number"
              />
            </div>

            <div className="form-group f1">
              <select className="f1 text-muted">
                <option className="drop-down" disabled selected > Select Position</option>
                <option value="Left">Left</option>
                <option value="Right">Right</option>
              </select>
            </div>

            <div className="form-group f1">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>

            <div className="form-group f1">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Re-Password"
              />
            </div>

          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <div className="form-group py-3">
            <p>
              Already user?{" "}
              <Link className="text-white" to="/Login">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
