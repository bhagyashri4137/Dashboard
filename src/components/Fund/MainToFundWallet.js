import React from 'react'
import '../Fund/Fund.css'

const MainToFundWallet = () => {
  return (
    <>
    <div className="main">
    <div id="main-content">
      <div className="section-box">
        <h3>Fund Transfer from Income</h3>
        <div className="center-content p-3 w-100">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 table-content p-4">
              <h3 className="w-100 text-center">Fund Transfer from Income</h3>
              <div className='FT-fromIncome'>
                <h3>810</h3>
              </div>
              <form action="" className="form-FundWallet">
                <div className="form-group mb-3">
                  <div>
                  <label htmlFor="amount">Amount</label>
                  </div>
                  <input
                    type="number"
                    className="form-control mt-2"
                    name="amount"
                    id="amount"
                    placeholder="Amount"
                    required
                  />
               </div>     
                
                <div className="form-group mb-3">
                  <label for="transactionNo">Enter Transaction Password</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="transactionPass"
                    id="transactionPass"
                    placeholder="Transaction Password"
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
       </>
       
  )
}

export default MainToFundWallet