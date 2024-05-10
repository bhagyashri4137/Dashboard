import React from "react";
import "../Fund/Fund.css";
const FundRequest = () => {
  return (
    <>
    <div className="main">
    <div id="main-content">
      <div className="section-box">
        <h3>Fund / Fund Request</h3>
        <div className="center-content p-3 w-100">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 table-content p-4">
              <h3 className="w-100 text-center">Fund Request</h3>
              <form action="" className="form">
                <div className="form-group mb-3">
                  <label htmlFor="amount">Amount (USDT)</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="amount"
                    id="amount"
                    placeholder="Amount"
                    required
                  />

                  <p className="msg">
                    Note:<span className="errorField">
                        {' '}This Address only For USDT</span
                    >
                  </p>
                </div>
                <div className="form-group mb-3">
                  <img
                    id="barcode"
                    src="https://api.qrserver.com/v1/create-qr-code/?data=TTM6G6WovR2goEtnqD3JDVne3U88ySpJPp&size=150x150"
                    alt="scanner"
                  />
                  <p className="msg">
                    Address:<span className="successField"
                      >{' '}TTM6G6WovR2goEtnqD3JDVne3U88ySpJPp</span
                    >
                  </p>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="transactionSlip">Transaction Slip</label>
                  <input
                    type="file"
                    className="form-control mt-2 bg-light text-dark"
                    name="transactionSlip"
                    id="transactionSlip"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="transactionNo">Transaction No.</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="transactionNo"
                    id="transactionNo"
                    placeholder="Transaction ID"
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
};

export default FundRequest;
