import React from 'react'
import '../MyIncome/MyIncome.css'
const AwardAndReward = () => {
  return (
    <div className="main-content">
    <div className ="section-box">
      <h3>Award and Reward</h3>
      <div className ="center-content p-3 w-100">
        <div className ="row d-flex justify-content-center">
          <div className ="col-lg-6 table-content p-4 w-100">
            <h3 className ="w-100 text-center">Award And Reward</h3>
            <div className ="table-container table-responsive">
              <table id="FundRequestTable" className ="align-middle w-100">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>4/4/2024 7:52:17 AM</td>
                    <td>50</td>
                    <td>0.25</td>
                  </tr>    
                  <tr>
                    <td>1</td>
                    <td>4/29/2024 11:52:17 AM</td>
                    <td>51</td>
                    <td>0.25</td>
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

export default AwardAndReward