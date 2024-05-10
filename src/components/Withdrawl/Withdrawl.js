import React from 'react'


const Withdrawl = () => {
  return (
    <>
    <div className="main">
    <div id="main-content">
      <div className="section-box">
        <h3>Withdrawl / Withdrawl</h3>
        <div className="center-content p-3 w-100">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 table-content p-4">
              <h3 className="w-100 text-center">Withdrawl</h3>
              <form action="" className="form">
                <div className="form-group mb-3">
                    <p>Wallet Balance:{' '}810</p>
                  <label >Amount</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="Withdrawlamount"
                    id="Withdrawlamount"
                    placeholder="WithdrawlAmount"
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

export default Withdrawl