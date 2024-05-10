import React from 'react'
import '../Fund/Fund.css'
const FundTransfer = () => {
  return (
    <div className="main">
    <div id="main-content">
      <div className="section-box">
        <h3>Fund / Fund Transfer</h3>
        <div className="center-content p-3 w-100">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 table-content p-4">
              <h3 className="w-100 text-center">Fund Transfer</h3>
              <h4 className='fund-bal'>Fund Balance{" "}<span>7743</span></h4>
              <form action="" className="form-FundTransfer">
                <div className="form-group mb-3">
                  <label for="amount">Amount</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="amount"
                    id="amount"
                    placeholder="Amount"
                    required
                  />
                  </div>
                <div className="form-group mb-3">
                  <label htmlFor="transactionNo">User ID</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="transactionNo"
                    id="transactionNo"
                    placeholder="User ID"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
         </div>
         </div>
         </div>
      </div>
      </div>
     
  )
}

export default FundTransfer