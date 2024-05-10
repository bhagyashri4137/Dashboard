import React from 'react'
import { Link } from 'react-router-dom'
import '../Index/Index1.css'

const Index1 = () => {
  return (
    
    <main className='container-fluid index-class'>
    <div className="head-title">
      <div className="left">
        <h3 className='heading'>Welcome To Matta Forex</h3>
        <div className='Right-left-links'>
        <ul>
          <li>
            <p>Left Referral Link :{' '}
                <Link href="mattaforex.com/signup.asp?code=mattaforex&place=L">
                mattaforex.com/signup.asp?code=mattaforex&place=L
              </Link>
              <button type="button" className="btn btn-info">Copy Link</button>
            </p>
          </li>
          <li>
            <p>Right Referral Link :{' '}<Link href="mattaforex.com/signup.asp?code=mattaforex&place=R">
                mattaforex.com/signup.asp?code=mattaforex&place=R
              </Link>
              <button type="button" className="btn btn-info">Copy Link</button>
            </p>
          </li>
          </ul>
        </div>
      </div>
    </div>


    {/* <!-- small divs --> */}
    <ul className="box-info">
      <li>
        <i className="fa fa-line-chart text-primary" aria-hidden="true"></i>
        <span className="text text-white">
          <p className="text-">My Package</p>
          <h6>$ 50</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-bar-chart text-primary"></i>
        <span className="text text-white">
          <p className="text-">Direct Team</p>
          <h6>47</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-line-chart text-primary " aria-hidden="true"></i>
        <span className="text">
          <p>Direct Business</p>
          <h6>$ 26300</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-pie-chart text-primary"></i>
        <span className="text">
          <p>Total Team Business</p>
          <h6>27300</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-line-chart text-primary" aria-hidden="true"></i>
        <span className="text">
          <p>Total Left Business</p>
          <h6>27300</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-bar-chart text-primary"></i>
        <span className="text">
          <p>Total Right Business</p>
          <h6>0</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-area-chart text-primary"></i>
        <span className="text">
        <p>Cashback Income</p>
        <h6>$ 2/357 days left</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-pie-chart text-primary"></i>
        <span className="text">
          <p>Direct Income</p>
          <h6>$ 50</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-area-chart text-primary"></i>
        <span className="text">
          <p>Matching Income</p>
          <h6>$ 0</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-area-chart text-primary"></i>
        <span className="text">
          <p>Total Income</p>
          <h6>$ 693.25</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-bar-chart text-primary "></i>
        <span className="text">
        <p>Wallet Balance</p>
        <h6>$ 693.25</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-area-chart text-primary"></i>
        <span className="text">
          <p>Total Withdrawl</p>
          <h6>$ 0</h6>
        </span>
      </li>
      <li>
        <i className="fa fa-line-chart text-primary" aria-hidden="true"></i>
        <span className="text">
          <p> CMC Club Fund</p>
          <span>Monday to Monday distributed</span>
          <h6>$ 15</h6>
        </span>
      </li>
    </ul>

   {/* table data */}
   <div className="container">
    <div className="row table-data user-details">
    <div className="col-lg">
    <div className="order">
        <div className="head">
          <h3>Users Details</h3>
        </div>
        <table className='w-100'>
          <tbody>
            <tr>
              <th>
                Name
              </th>
              <td>mattaforex</td>
            </tr>
            <tr>
              <th>
                Email ID
              </th>
              <td>support@mattaforex</td>
            </tr>
            <tr>
              <th>
              Mobile
              </th>
              <td>0000000000</td>
            </tr>
            <tr>
              <th>
               Joining Date
              </th>
              <td>07/04/2024</td>
            </tr>
            <tr>
              <th>
                Activation Date              
                </th>
              <td>19Apr2024 8:27PM</td>
            </tr>
            <tr>
              <th>
                Sponser ID
              </th>
              <td>{''}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="col">
    <div className="CMC-achivers">
        <div className="head">
          <h3>CMC Achivers</h3>
        </div>
        <marquee width="100%" direction="up" height="50px">
         <div>mattaforex</div>
         <div>MTF996589</div>
         </marquee>              
        </div>
    </div>
  </div>
  </div>
  
   
      
      
        
     
    
    </main> 

  )
}

export default Index1