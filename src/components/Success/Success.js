import React from 'react'
import '../Success/Success.css'

const Success = () => {
  return (
    <div className="success-page container-fluid">
    <div className="row">
        
        <div className="col-sm-8 success-div ">
            <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Check_mark_%28blue%29.svg/500px-Check_mark_%28blue%29.svg.png"/>
           <div>
                <h2>Registered Succesfully!</h2>
            </div>
            <div>
                <p className='text-white'>Welcome to our services</p>
            </div>
            <button>Ok</button>
        </div>
    </div>
    <div className="col-sm-4 info-div">
        <form className="table mt-3">
            <table className="table table-bordered border-white text-center ">
                <tr >
                    <th className='text-white'>User Id</th>
                    <th className='text-white'>Password</th>
                </tr>
                <tr>
                    <td className='text-white'>xx</td>
                    <td className='text-white'>xx</td>
                </tr>
            </table> 
        </form>
    </div>
</div>

  )
}

export default Success