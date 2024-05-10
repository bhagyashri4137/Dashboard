import React from 'react'

const WithdrawlHistory = () => {
  return (
    <div className="main-content">
    <div class="section-box">
      <h3>Withdrawl/ Withdrawl History</h3>
      <div class="center-content p-3 w-100">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 table-content p-4 w-100">
            <h3 class="w-100 text-center">Withdrawl History</h3>
            <div class="table-container table-responsive">
              <table id="FundRequestTable" class="align-middle w-100">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Payment Amount</th>
                    <th>Paid Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                 
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

export default WithdrawlHistory