import React from 'react'
import '../Profile/WalletAddress.css'
const WalletAddress = () => {
  return (
    <div className="container-fluid WalletAddress">
    <h2>Profile/Add Wallet Details</h2>
    <div className="row">
        <div className="col-sm">
         </div>
        <div className="col-sm">
            <div className="form-div">
                <form>
                    <div>
                    <h2 className="heading">Add Wallet</h2>
                    </div>
                    <div className="mb-3">
                        <div>
                            <label htmlFor="SelectCurrency" className="form-label">Select Currency</label>
                        </div>
                        <input type="text" placeholder="Select Currency" className="form-control" id="SelectCurrency"/>
                    </div>
                    <div className="mb-3">
                        <div>
                            <label htmlFor="SelectCurrency" className="form-label">Select Currency</label>
                        </div>
                        <input type="text" placeholder="Select USDT address" className="form-control" id="USDTaddress"/>
                    </div>
                    <button type="submit" className="btn btn-primary ">Submit</button>
                </form>
            </div>
        </div>
        <div className="col-sm">
        </div>
    </div>
</div>

  )
}

export default WalletAddress