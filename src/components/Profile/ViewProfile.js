import React from "react";
import "../Profile/ViewProfile.css";
const ViewProfile = () => {
  return (
    <>
      <div className="main-content">
        <div>
          <div className="container-fluid view_profile">
            <div className="row">
              <div className="table-div">
                <div> 
                  <div>
                    <h2 className="text-white">View Profile</h2>
                  </div>
                  <table>
                    <tbody>
                      <tr>
                        <th>Joining Date</th>
                        <td>07/04/2023</td>
                      </tr>
                      <tr>
                        <th>Activation Date</th>
                        <td>04/19/2024 8:27:41 PM</td>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <td>mattaforex</td>
                      </tr>
                      <tr>
                        <th>Sponser Id</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>Mobile No</th>
                        <td>00000000000</td>
                      </tr>
                      <tr>
                        <th>Email Id</th>
                        <td>support@mattaforex</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
