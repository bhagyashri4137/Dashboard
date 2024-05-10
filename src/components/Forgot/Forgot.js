import React from "react";
import '../Forgot/Forgot.css'
const Forgot = () => {
  return (
    <div class=" container-fluid forgotPassword-body">
      <div class="forgotPassword-form transbox">
        <div class="forgot-logo">
          <img src="https://mattaforex.com/assets/images/logo.png" alt="" />
        </div>
        <div class="forgotPassword-headings">
          <h1>Forgot Password?</h1>
          <a href="Home.html">Home |</a>
          <a href="Login.html">Login</a>
        </div>
        <form>
          <div>
            <div class="form-group f1">
                <div>
              <label class="text-start">Username</label>
              </div>
              <input
                type="email"
                class="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
