import { makeStyles } from "@mui/styles";
import drawerImage from "../../assets/images/bg.png";
import theme from "../../Theme/Theme";
const drawerWidth = 320;
const drawerWidth2 = 360;
export const useStyles = makeStyles({

  downloadTypo: {
    fontSize: '12px',
    color: '#A2A3A5',
    fontFamily: 'Inter !important'
  },
  spanC: {
    padding: "0 8px",
    background: "#1C97FD",
    borderRadius: "5px"
  },
  Notification: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    margin: "20px auto",
    color: "white",
    background: "rgba(255,255,255 ,0.2)",
    padding: "10px 18px",
    width: "80%",
    cursor: "pointer"

  },
  AppTypo: {
    fontSize: '20px',
    color: '#161A1D',
    fontFamily: 'Inter !important'
  },
  mobDrawer: {
    width: "100%",
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: "100%",
      boxSizing: 'border-box',
      backgroundImage: `url(${drawerImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    marginTop: '0px',
    width: drawerWidth,
    '&::-webkit-scrollbar': {
      width: '5px!important',
    },
    '&::-webkit-scrollbar-thumb': {
      width: '0.5px !important',
      background: '#1C97FD',
      borderRadius: '5px',
    },

    [theme.breakpoints.up('xl')]: {
      height: '100vh',
      width: 380
    },


  },

  drawerPaper2: {
    width: drawerWidth2,

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingBottom: "0px"
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },

  drawerCss: {
    backgroundImage: `url(${drawerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  menuList: {
    color: '#fff',
    fontSize: '18px',
    lineHeight: '65px',
    paddingLeft: '10px',
    fontFamily: 'inter',
  },
  appBox: {
    margin: "6px 35px 6px 35px",
    padding: "5px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    borderRadius: '20px'
  },
  listItem: {
    borderRadius: '10px',
    fontFamily: 'inter',
    textAlign: 'center',
    width: '264px',
    height: '66px',
    top: '232px',
    left: '32px',
    background: "transparent",
    '&:hover': {
      background: 'rgba(28, 151, 253, 1)',
    },
  },
  
})