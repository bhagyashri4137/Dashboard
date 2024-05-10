import React from 'react'
import '../Error/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div id="container" className="error-page container-fluid">
    <div className="row">
        <div className="col-sm-2">
        </div>
        <div className="col-sm error-div ">
            <img src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png" alt=''/>
            <div>
            <h3>Please enter correct credentials @_@ </h3>
            </div>
            <div>
                <Link className='text-white fs-5 fw-bold' to='/Login'>Back to Login</Link>
            </div>
        </div>
    </div>
    <div className="col-sm-2">
    </div>
</div>


  )
}

export default Error