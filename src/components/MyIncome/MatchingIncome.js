import React from 'react'


const MatchingIncome = () => {
  return (
    <div className="main-content">
    <div className ="section-box">
      <h3>My Income / Matching Income</h3>
      <div className ="center-content p-3 w-100">
        <div className ="row d-flex justify-content-center">
          <div className ="col-lg-6 table-content p-4 w-100">
            <h3 className ="w-100 text-center">Matching Income</h3>
            <div className ="table-container table-responsive">
              <table id="FundRequestTable" className ="align-middle w-100">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Date</th>
                    <th>Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
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

export default MatchingIncome