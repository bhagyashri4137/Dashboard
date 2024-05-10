import React from 'react'
import '../MyIncome/MyIncome.css'
const DirectIncome = () => {
  return (
    <div className="main-content">
    <div className ="section-box">
      <h3>Report / Direct Income</h3>
      <div className ="center-content p-3 w-100">
        <div className ="row d-flex justify-content-center">
          <div className ="col-lg-6 table-content p-4 w-100">
            <h3 className ="w-100 text-center">Direct Income</h3>
            <div className ="table-container table-responsive">
              <table id="FundRequestTable" className ="align-middle w-100">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Date</th>
                    <th>From User ID</th>
                    <th>From User Name</th>
                    <th>Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>4/29/2024 7:52:17 PM</td>
                    <td>MTF966651</td>
                    <td>Ganesh</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>4/29/2024 11:52:17 PM</td>
                    <td>MTF966651</td>
                    <td>Chiku</td>
                    <td>15</td>
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

export default DirectIncome