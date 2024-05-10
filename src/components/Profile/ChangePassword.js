import React from 'react'
import '../Profile/ChangePassword.css'

const ChangePassword = () => {
  return (
    <div className="container-fluid ChangePassword">
    <h2>Profile/Change Password</h2>
    <div className="row">
        <div className="col-sm">
         </div>
        <div className="col-sm">
            <div className="form-div">
                <form>
                    <h2 className="heading">Change Password</h2>
                    <div className="mb-3">
                        <div>
                            <label htmlFor="OldPassword" className="form-label">Old Password</label>
                        </div>
                        <input type="password" placeholder="Old Password" className="form-control" id="OldPassword"/>
                    </div>
                    <div className="mb-3">
                        <div>
                            <label htmlFor="NewPassword" className="form-label">New Password</label>
                        </div>
                        <input type="password" placeholder="New Password" className="form-control" id="NewPassword"/>
                    </div>
                    <div className="mb-3">
                        <div>
                            <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                        </div>
                        <input type="password" placeholder="Confirm Password" className="form-control"
                            id="ConfirmPassword"/>
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

export default ChangePassword