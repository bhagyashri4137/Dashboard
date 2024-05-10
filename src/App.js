import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ViewProfile from './components/Profile/ViewProfile';
// import ChangePassword from './components/Profile/ChangePassword'
// import WalletAddress from './components/Profile/WalletAddress';
// import DirectTeam from './components/MyNetwork/DirectTeam';
// import DownlineTeam from './components/MyNetwork/DownlineTeam';
// import TopUp from './components/TopUp/TopUp';
// import TopUpHistory from './components/TopUp/TopUpHistory';
// import FundRequest from './components/Fund/FundRequest';
// import FundRequestHistory from './components/Fund/FundRequestHistory';
// import FundTransfer from './components/Fund/FundTransfer'
// import FundTransferHistory from './components/Fund/FundTransferHistory';
// import FundReceivedHistory from './components/Fund/FundReceivedHistory';
// import MainToFundWallet from './components/Fund/MainToFundWallet';
// import MainToFundHistory from './components/Fund/MainToFundHistory';
// import AwardAndReward from './components/MyIncome/AwardAndReward';
// import CashbackIncome from './components/MyIncome/CashbackIncome';
// import CMCClubIncome from './components/MyIncome/CMCClubIncome';
// import DirectIncome from './components/MyIncome/DirectIncome';
// import MatchingClosingIncome from './components/MyIncome/MatchingClosingIncome';
// import MatchngIncome from './components/MyIncome/MatchingIncome';
// import Withdrawl from './components/Withdrawl/Withdrawl';
// import WithdrawlHistory from './components/Withdrawl/WithdrawlHistory';
import Login from './components/Login/Login.js';
import Logout from './components/Login/Logout.js';
import Success from './components/Success/Success.js';
import Error from './components/Error/Error.js';
import Register from './components/Register/Register.js';
import Forgot from './components/Forgot/Forgot.js';

function App() {
  
  return (
       <Router>
       <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/ViewProfile"  element={<Dashboard value='ViewProfile'/>}></Route>
        <Route path="/ChangePassword" element={<Dashboard value='ChangePassword'/>}></Route>
        <Route path="/WalletAddress" element={<Dashboard value='WalletAddress'/>}></Route>
        <Route path="/DirectTeam" element={<Dashboard value='DirectTeam'/>}></Route>
        <Route path="/DownlineTeam" element={<Dashboard value='DownlineTeam'/>}></Route>
        <Route path="/TopUp" element={<Dashboard value='TopUp'/>}></Route>
        <Route path="/TopUpHistory" element={<Dashboard value='TopUpHistory'/>}></Route>
        <Route path="/FundRequest" element={<Dashboard value='FundRequest'/>}></Route>
        <Route path="/FundRequestHistory" element={<Dashboard value='FundRequestHistory'/>}></Route>
        <Route path="/FundTransfer" element={<Dashboard value='FundTransfer'/>}></Route>
        <Route path="/FundTransferHistory" element={<Dashboard value='FundTransferHistory'/>}></Route>
        <Route path="/FundReceivedHistory" element={<Dashboard value='FundReceivedHistory'/>}></Route>
        <Route path="/MainToFundWallet" element={<Dashboard value='MainToFundWallet'/>}></Route>
        <Route path="/MainToFundHistory" element={<Dashboard value='MainToFundHistory'/>}></Route>
        <Route path='/DirectIncome' element={<Dashboard value='DirectIncome'/>}></Route>
        <Route path='/CashbackIncome' element={<Dashboard value='CashbackIncome'/>}></Route>
        <Route path='/MatchngIncome' element={<Dashboard value='MatchngIncome'/>}></Route>
        <Route path='/MatchingClosingIncome' element={<Dashboard value='MatchingClosingIncome'/>}></Route>
        <Route path='/AwardAndReward' element={<Dashboard value='AwardAndReward'/>}></Route>
        <Route path='/CMCClubIncome' element={<Dashboard value='CMCClubIncome'/>}></Route>
        <Route path='/Withdrawl' element={<Dashboard value='Withdrawl'/>}></Route> 
        <Route path='/WithdrawlHistory' element={<Dashboard value='WithdrawlHistory'/>}></Route>
        <Route path='/Logout' element={<Logout/>}></Route>
        <Route path='/Success' element={<Success/>}></Route>
        <Route path='/Error' element={<Error/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Forgot' element={<Forgot/>}></Route>
       </Routes> 
       </Router>
  );
}

export default App;
