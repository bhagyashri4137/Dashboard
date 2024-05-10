import React from 'react'
import '../Fund/Fund.css'

const FundReceivedHistory = () => {
  return (
    <div className="main-content">
    <div className="section-box">
      <h3>Fund / Fund Received History</h3>
      <div className="center-content p-3 w-100">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 table-content p-4 w-100">
            <h3 className="w-100 text-center">Fund Received History</h3>
            <div className="table-container table-responsive">
              <table id="FundRequestTable" className="align-middle w-100">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>User ID</th>
                    <th>User Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>4/22/2024 12:37:02 PM</td>
                    <td>29</td>
                    <td>MTF319999</td>
                    <td>Ajay Borade</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>4/22/2024 12:37:02 PM</td>
                    <td>29</td>
                    <td>MTF319999</td>
                    <td>pravin shukla</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>4/22/2024 12:37:02 PM</td>
                    <td>29</td>
                    <td>MTF319999</td>
                    <td>pravin shukla</td>
                  </tr>
                                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
     
  )
}

export default FundReceivedHistory