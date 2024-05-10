import { Link } from 'react-router-dom'
import '../Sidebar/Sidebar.css'
const Sidebar = () => {

  return (
   
    <div className="container-fluid sidebar">
        <div className="row">
        <div className="col-auto px-0 aside-navbar">
          <div
            id="sidebar"
            className="collapse collapse-horizontal show border-end"
          >
            <div
              id="sidebar-nav"
              className="list-group border-0 rounded-0 text-sm-start min-vh-100 sidebar-nav"
            >
              
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
              <div className="row">
                <div className="col userlogo-sidebar">
                  <h1>
                    <i className="bi bi-person-circle text-white h"></i>
                  </h1>
                </div>
                <div className="col c-name">
                  <h6 className="mb-0 text-white ">mattaforex</h6>
                  <h6 className="mb-0 text-white ">mattaforex</h6>
                </div>
              </div>

              {/* sidebar-menu */}
              
              <div className="text-white bg-white p-3 Dashboard-logout">
                <i className="bi bi-speedometer2 me-2"></i>
                <Link to='/Dashboard' className='text-white active'>Dashboard</Link>
              </div>
             

                {/* <!-- Profile --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#profile"
                      aria-expanded="true"
                      aria-controls="flush-headingOne"
                      data-bs-parent="#accordionFlushExample">
                      <i className="bi bi-laptop me-2"></i>
                      Profile
                    </button>
                  </h2>
                  <div
                    id="profile"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="text-white">
                        <li >
                           <Link to='/ViewProfile'>View Profile</Link> 
                        </li>
                        <li>
                        <Link to='/ChangePassword'>Change Password</Link> 
                        </li>
                        <li>
                        <Link to='/WalletAddress'>Wallet Address</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- my network --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#myNetwork"
                      aria-expanded="false"
                      aria-controls="myNetwork"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <i className="bi bi-snow3 me-2"></i>
                      My Network
                    </button>
                  </h2>
                  <div
                    id="myNetwork"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="text-white">
                        <li>
                        <Link to='/DirectTeam'>Direct Team</Link>
                        </li>
                        <li>
                        <Link to='/DownlineTeam'>Downline Team</Link>
                        </li>
                        <li>
                        <Link to='/TreeView'>Tree View</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- Top up --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#topUp"
                      aria-expanded="false"
                      aria-controls="topUP"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <i className="bi bi-keyboard"></i>
                      Top Up
                    </button>
                  </h2>
                  <div
                    id="topUp"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="text-white">
                        <li>
                        <Link to='/TopUP'>Top Up</Link>
                        </li>
                        <li>
                        <Link to='/TopUpHistory'>Top Up History</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- fund --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#fund"
                      aria-expanded="false"
                      aria-controls="fund"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <i className="bi bi-keyboard"></i>
                      Fund
                    </button>
                  </h2>
                  <div
                    id="fund"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="text-white">
                        <li>
                        <Link to='/FundRequest'>Fund Request</Link>
                        </li>
                        <li>
                        <Link to='/FundRequestHistory'>Fund Request History</Link>
                        </li>
                        <li>
                        <Link to='/FundTransfer'>Fund Transfer</Link>
                        </li>
                        <li>
                        <Link to='/FundTransferHistory'>Fund Transfer History</Link>
                        </li>
                        <li>
                        <Link to='/FundReceivedHistory'>Fund Received History</Link>
                        </li>
                        <li>
                        <Link to='/MainToFundWallet'>Main to fund Wallet</Link>
                        </li>
                        <li>
                        <Link to='/MainToFundHistory'>Main to fund History</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- my income --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#myIncome"
                      aria-expanded="false"
                      aria-controls="myIncome"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <i className="bi bi-wallet2"></i>
                      My Income
                    </button>
                  </h2>
                  <div
                    id="myIncome"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="text-white">
                        <li>
                        <Link to='/DirectIncome'>Direct Income</Link>
                        </li>
                        <li>
                        <Link to='/CashbackIncome'>Cashback Income</Link>
                        </li>
                        <li>
                        <Link to='/MatchngIncome'>Matching Income</Link>
                        </li>
                        <li>
                        <Link to='/MatchingClosingIncome'>Matching Closing Income</Link>
                        </li>
                        <li>
                        <Link to='/AwardAndReward'>Award and Reward</Link>
                        </li>
                        <li>
                        <Link to='/CMCClubIncome'>CMC Club Income</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- Withdrawl --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#withdrawl"
                      aria-expanded="false"
                      aria-controls="withdrawl"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <i className="bi bi-bar-chart"></i>
                      Withdrawl
                    </button>
                  </h2>
                  <div
                    id="withdrawl"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="text-white">
                        <li>
                        <Link to='/Withdrawl'>Withdrawl</Link>
                        </li>
                        <li>
                        <Link to='/WithdrawlHistory'>Withdrawl History</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-black bg-white p-3 Dashboard-logout text-white">
                <i className="bi bi-box-arrow-right"></i>
                <Link to='/Logout' className='text-white'>Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Sidebar