import React from 'react'
import '../MyIncome/CashbackIncome'
const CMCClubIncome = () => {
  return (
    <div className="main-content">
    <div className ="section-box">
      <h3>My Income / CMC Club Income</h3>
      <div className ="center-content p-3 w-100">
        <div className ="row d-flex justify-content-center">
          <div className ="col-lg-6 table-content p-4 w-100">
            <h3 className ="w-100 text-center">CMC Club Income</h3>
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
                    <td>1</td>
                    <td>4/30/2024 8:49:21AM</td>
                    <td>65</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>4/23/2024 8:50:17AM</td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>5/23/2024 8:50:17AM</td>
                    <td>68</td>
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

export default CMCClubIncome