import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "../Dashboard/Dashboard.css";
// import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";
import Index1 from "../Index/Index1";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ViewProfile from "../Profile/ViewProfile";
import ChangePassword from "../Profile/ChangePassword";
import WalletAddress from "../Profile/WalletAddress";
import DirectTeam from "../MyNetwork/DirectTeam";
import DownlineTeam from '../MyNetwork/DownlineTeam'
import TopUp from "../TopUp/TopUp";
import TopUpHistory from "../TopUp/TopUpHistory";
import FundRequest from "../Fund/FundRequest";
import FundRequestHistory from "../Fund/FundRequestHistory";
import FundTransfer from "../Fund/FundTransfer";
import FundTransferHistory from "../Fund/FundTransferHistory";
import FundReceivedHistory from "../Fund/FundReceivedHistory";
import MainToFundWallet from "../Fund/MainToFundWallet";
import MainToFundHistory from "../Fund/MainToFundHistory";
import DirectIncome from "../MyIncome/DirectIncome";
import CashbackIncome from "../MyIncome/CashbackIncome";
import MatchingClosingIncome from "../MyIncome/MatchingClosingIncome";
import AwardAndReward from "../MyIncome/AwardAndReward";
import CMCClubIncome from "../MyIncome/CMCClubIncome";
import Withdrawl from "../Withdrawl/Withdrawl";
import WithdrawlHistory from "../Withdrawl/WithdrawlHistory";
import MatchingIncome from "../MyIncome/MatchingIncome";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  const { value = "Dashboard"} = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="header">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
          <MenuIcon className="menuIcon h-30 w-30" />
          </IconButton>
          <div className="user-icon">
            <div className="row">
              <div className="col">
                <h1>
                  <i className="bi bi-person-circle text-white h-35 w-35"></i>
                </h1>
              </div>
              <div className="col c-name">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Profile
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="#">
                      My Profile
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography> */}
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className="Logo">
          <img
            src="https://mattaforex.com/Dashboard/img/logo-light.png"
            alt="logo"
            className="main-logo"
          />
          <IconButton onClick={handleDrawerClose} className="IconButton">
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Sidebar />
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        {value==='Dashboard' && <Index1/>}

        {value==='ViewProfile' && <ViewProfile/>}
        {value==='ChangePassword' && <ChangePassword/>}
        {value==='WalletAddress' && <WalletAddress/>}
        {value==='DirectTeam' && <DirectTeam/>}
        {value==='DownlineTeam' && <DownlineTeam/>}
        {value==='TopUp' && <TopUp/>}
        {value==='TopUpHistory' && <TopUpHistory/>}
        {value==='FundRequest' && <FundRequest/>}
        {value==='FundRequestHistory' && <FundRequestHistory/>}
        {value==='FundTransfer' && <FundTransfer/>}
        {value==='FundTransferHistory' &&<FundTransferHistory/>}
        {value==='FundReceivedHistory' && <FundReceivedHistory/>}
        {value==='MainToFundWallet' && <MainToFundWallet/>}
        {value==='MainToFundHistory' && <MainToFundHistory/>}
        {value==='DirectIncome' && <DirectIncome/>}
        {value==='CashbackIncome' && <CashbackIncome/>}
        {value==='MatchngIncome' && <MatchingIncome/>}
        {value==='MatchingClosingIncome' && <MatchingClosingIncome/>}
        {value==='AwardAndReward' && <AwardAndReward />}
        {value==='CMCClubIncome' && <CMCClubIncome/>}
        {value==='Withdrawl'&& <Withdrawl/>}
        {value==='WithdrawlHistory' && <WithdrawlHistory/>}
        <Footer/>
      </Main>
    </Box>
  );
}
