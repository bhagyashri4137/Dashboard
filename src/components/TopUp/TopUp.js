import React from 'react'
import '../TopUp/TopUp.css'
const TopUp = () => {
  return (
    <div className="container-fluid TopUp">
    <h2>Top Up/ Top Up</h2>
    <div className="row">
        <div className="col-sm">
         </div>
        <div className="col-sm">
            <div className="form-div">
                <form>
                    <div>
                    <h2 className="heading">Top Up By Fund</h2>
                    </div>
                    <div>
                        <h3>Fund Balance: 7737</h3>
                    </div>
                    <div className="mb-3">
                        <div>
                            <label for="UserId" className="form-label">User ID</label>
                        </div>
                        <input type="text" placeholder="User ID" className="form-control" id="UserID"/>
                    </div>
                    <div className="mb-3">
                        <div>
                            <label for="Package" className="form-label">Select Currency</label>
                        </div>
                        <input type="text" placeholder="Package" className="form-control" id="Package"/>
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

export default TopUp