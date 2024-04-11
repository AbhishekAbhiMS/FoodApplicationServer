import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import LoginAction from '../../Redux/CheckLogin/LoginAction';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import InfoIcon from '@mui/icons-material/Info';
import logo from "../../images/logo2.svg"
export default function Headder() {
  let loggedin=useSelector(state=>state.login.loggedin)
  console.log(loggedin);
     const dispatch=useDispatch() 
  const [islogin,setislogin]=useState(!!localStorage.getItem("login"))
  console.log(localStorage.getItem("login"),"qqq");
  useEffect(()=>{
    setislogin(loggedin)
  },[loggedin])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    
    setAnchorEl(event.currentTarget);
  }
  const handellogout=()=>{
    localStorage.clear()
    dispatch(LoginAction())
    setAnchorEl(null);
  
    
  }
  const handleClose = (e) => {
    
    setAnchorEl(null);
    
  };
  
const ANavUnlisted = styled.ul`
width:80%;
  display: flex;
  alignItems:start;
  transform: skew(26deg);
  justify-content: flex-end;
margin:0px;

  a {
    text-decoration: none;
  }

  li {
    color: #ae275f;
    margin:0 2rem;
    font-size: 17px;
    font-weight:600;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      width:200px;
      border-bottom: 2px solid black;
    }
  }
`;
   return (
  //  <>
   
  //  <div className='main_nav_div1' ><div className='logo_part'><img height={'60px'} width={'60px'} src={image} style={{filter: 'grayscale(50%)'}} alt="logo" /></div> 
  //  <div className='maintrp1'>
  //     <div className='trappizoid1'>
      
      
  //     {islogin?<div className='trappizoid1_navitems_alogin'>
    
  //    <div className='navbar_listed_items1' ><NavLink to="/home" activeClassName="current" exact>
  //    <li  className='linkanimation'><a  className='linkunderline linkheadder' >Home</a></li>

  //     </NavLink>
  //     <NavLink to="/ourmenu" activeClassName="current" exact>
  //       <li  className='linkanimation'><a  className='linkunderline linkheadder' >OurMenu</a></li>

  //     </NavLink>
  //     <NavLink to="/order" activeClassName="current" exact>
  //             <li  className='linkanimation'><a  className='linkunderline linkheadder' >Orders</a></li>

  //     </NavLink></div>
  //     <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',justifyContent:'space-between' }}>
        
  //     <NavLink to="/cart" activeClassName="current" exact>
        
  //       <li  className='linkanimation'><a  className='linkunderline' style={{padding:'0px 9px 7px 10px '}} > <Badge color='primary' badgeContent={1} max={9}><ShoppingCartIcon /></Badge></a></li>

  //     </NavLink>
  //       <Tooltip title="Account settings">
  //         <IconButton
  //           onClick={handleClick}
  //           size="small"
  //           sx={{ ml: 2 }}
  //           aria-controls={open ? 'account-menu' : undefined}
  //           aria-haspopup="true"
  //           aria-expanded={open ? 'true' : undefined}
  //         >
  //           <li  className='linkanimation'><a  className='linkunderline' ><SettingsIcon/></a></li>
  //         </IconButton>
  //       </Tooltip>
  //     </Box>
  //     <Menu
  //       anchorEl={anchorEl}
  //       id="account-menu"
  //       open={open}
  //       onClose={handleClose}
  //       onClick={handleClose}
  //       PaperProps={{
  //         elevation: 0,
  //         sx: {
  //           overflow: 'visible',
  //           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
  //           mt: 1.5,
  //           '& .MuiAvatar-root': {
  //             width: 32,
  //             height: 32,
  //             ml: -0.5,
  //             mr: 1,
  //           },
  //           '&::before': {
  //             content: '""',
  //             display: 'block',
  //             position: 'absolute',
  //             top: 0,
  //             right: 14,
  //             width: 10,
  //             height: 10,
  //             bgcolor: 'background.paper',
  //             transform: 'translateY(-50%) rotate(45deg)',
  //             zIndex: 0,
  //           },
  //         },
  //       }}
  //       transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  //       anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  //     >
  //       <MenuItem onClick={handleClose}>
  //       <ListItemIcon> <Avatar fontSize="small"/></ListItemIcon> Profile
  //       </MenuItem>
  //       <NavLink to={'/aboutus'} style={{textDecoration:'none',color:'rgb(33 33 33)'}}> <MenuItem onClick={handleClose}>
  //       <ListItemIcon><InfoIcon fontSize="small" /> </ListItemIcon>About us
  //       </MenuItem></NavLink>
  //       <NavLink to={'/contactus'} style={{textDecoration:'none',color:'rgb(33 33 33)'}}> <MenuItem onClick={handleClose}>
         
  //         <ListItemIcon>
  //            <PhoneForwardedIcon fontSize="small" ></PhoneForwardedIcon>
  //         </ListItemIcon>
  //         Contact
  //       </MenuItem></NavLink>
  //       <Divider />
        
  //       <NavLink to={'/singin'} style={{textDecoration:'none',color:'red'}}>
  //       <MenuItem onClick={handellogout} >
  //         <ListItemIcon>
  //           <Logout fontSize="small" />
  //         </ListItemIcon>
  //           Logout
  //       </MenuItem></NavLink>
  //     </Menu>
   
    
  //     </div>:
  //   <div className='trappizoid1_navitems_blogin'>
  //   <ANavUnlisted>
  //     <NavLink to="/singin" activeClassName="current" exact>
  //     <li  className='linkanimation'><a className='linkunderline' >Signin</a></li>

  //     </NavLink>
  //     <NavLink to="/singup" activeClassName="current" exact>
  //        <li  className='linkanimation'><a style={{padding:" -5px 1px"}} className='linkunderline' >Signup</a></li>

  //     </NavLink>
  //   </ANavUnlisted>
  //     </div>}
    
    
    
  //   <div className='side' >
  //     </div> <div className='side11' >
  //       </div>
  //       </div>
  //       </div>
       
    
  //       </div>
  //       <div style={{width:'100%',position:'fixed',zIndex:20,top:'70px',backgroundColor:'white',
  //   height: '5px'}}></div>
  //       </>
  
  <div className='main_nav_div1'> <div className='side11' >
  <div className='nav_logo_name_position'> <img height={'85px'} width={'220px'} style={{marginTop:'-15px'}}  src={logo} alt="logo" />
  <span className='logo_name' style={{fontSize: '23px',paddingLeft:'18px',
fontWeight: '600',lineHeight:'18px',letterSpacing:'1px',
fontFamily: 'sans-serif'}}>Bachelor's Adda</span> </div></div> <div className='maintrp1'>
 <div className='trappizoid1'>{islogin?<div className='trappizoid1_navitems_alogin'>
    
    <div className='navbar_listed_items1' ><NavLink to="/home" activeClassName="current" exact>
    <li  className='linkanimation'><a  className='linkunderline linkheadder' >Home</a></li>

     </NavLink>
     <NavLink to="/ourmenu" activeClassName="current" exact>
       <li  className='linkanimation'><a  className='linkunderline linkheadder' >OurMenu</a></li>

     </NavLink>
     <NavLink to="/order" activeClassName="current" exact>
             <li  className='linkanimation'><a  className='linkunderline linkheadder' >Orders</a></li>

     </NavLink></div>
     <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',justifyContent:'space-between' }}>
       
     <NavLink to="/cart" activeClassName="current" exact>
       
       <li  className='linkanimation'><a  className='linkunderline' style={{padding:'0px 9px 7px 10px '}} > <Badge color='primary' badgeContent={1} max={9}><ShoppingCartIcon /></Badge></a></li>

     </NavLink>
       <Tooltip title="Account settings">
         <IconButton
           onClick={handleClick}
           size="small"
           sx={{ ml: 2 }}
           aria-controls={open ? 'account-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
         >
           <li  className='linkanimation'><a  className='linkunderline' ><SettingsIcon/></a></li>
         </IconButton>
       </Tooltip>
     </Box>
     <Menu
       anchorEl={anchorEl}
       id="account-menu"
       open={open}
       onClose={handleClose}
       onClick={handleClose}
       PaperProps={{
         elevation: 0,
         sx: {
           overflow: 'visible',
           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
           mt: 1.5,
           '& .MuiAvatar-root': {
             width: 32,
             height: 32,
             ml: -0.5,
             mr: 1,
           },
           '&::before': {
             content: '""',
             display: 'block',
             position: 'absolute',
             top: 0,
             right: 14,
             width: 10,
             height: 10,
             bgcolor: 'background.paper',
             transform: 'translateY(-50%) rotate(45deg)',
             zIndex: 0,
           },
         },
       }}
       transformOrigin={{ horizontal: 'right', vertical: 'top' }}
       anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
     >
       <MenuItem onClick={handleClose}>
       <ListItemIcon> <Avatar fontSize="small"/></ListItemIcon> Profile
       </MenuItem>
       <NavLink to={'/aboutus'} style={{textDecoration:'none',color:'rgb(33 33 33)'}}> <MenuItem onClick={handleClose}>
       <ListItemIcon><InfoIcon fontSize="small" /> </ListItemIcon>About us
       </MenuItem></NavLink>
       <NavLink to={'/contactus'} style={{textDecoration:'none',color:'rgb(33 33 33)'}}> <MenuItem onClick={handleClose}>
        
         <ListItemIcon>
            <PhoneForwardedIcon fontSize="small" ></PhoneForwardedIcon>
         </ListItemIcon>
         Contact
       </MenuItem></NavLink>
       <Divider />
       
       <NavLink to={'/singin'} style={{textDecoration:'none',color:'red'}}>
       <MenuItem onClick={handellogout} >
         <ListItemIcon>
           <Logout fontSize="small" />
         </ListItemIcon>
           Logout
       </MenuItem></NavLink>
     </Menu>
  
   
     </div>:
   <div className='trappizoid1_navitems_blogin'>
   <ANavUnlisted>
     <NavLink to="/singin" activeClassName="current" exact>
     <li  className='linkanimation'><a className='linkunderline' >Signin</a></li>

     </NavLink>
     <NavLink to="/singup" activeClassName="current" exact>
        <li  className='linkanimation'><a style={{padding:" -5px 1px"}} className='linkunderline' >Signup</a></li>

     </NavLink>
   </ANavUnlisted>
     </div>}</div>
   </div>
   <div style={{width:'100%',position:'fixed',zIndex:20,top:'72px',backgroundColor:'white',
    height: '12px'}}></div>
   </div>

    )
}









// import React, { Fragment, useState } from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// // import logo from 'https://img.icons8.com/bubbles/344/amazon-alexa-logo.png';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Paper from '@mui/material/Paper';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   mixins: {
//     toolbar: {
//       minHeight: 60,
//     },
//   },
// });

// const styles = {
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//     marginBottom: '3em',
//     [theme.breakpoints.down('md')]: {
//       marginBottom: '2em',
//     },
//     [theme.breakpoints.down('xs')]: {
//       marginBottom: '1.25em',
//     },
//   },
//   logo: {
//     height: '8em',
//     [theme.breakpoints.down('md')]: {
//       height: '7em',
//     },
//     [theme.breakpoints.down('xs')]: {
//       height: '5.5em',
//     },
//   },
//   logoContainer: {
//     padding: 0,
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//   },
//   tabs: {
//     marginLeft: 'auto',
//     '& .MuiButtonBase-root.MuiTab-root': {
//       fontSize: 20,
//     },
//     '& .Mui-selected': {
//       backgroundColor: '#fce0a2',
//       color: '#000',
//       opacity: 0.7,
//       borderRadius: 2,
//     },
//   },
//   tab: {
//     ...theme.typography.tab,
//     minWidth: 10,
//     marginLeft: '25px',
//     color: 'white',
//   },

//   hamburgerMenuIcon: {
//     height: '50px',
//     width: '50px',
//   },
//   menuIconContainer: {
//     marginLeft: 'auto',
//     color: 'white',
//     '&:hover': {
//       opacity: 1,
//     },
//   },
//   appbar: {
//     zIndex: theme.zIndex.modal + 1,
//   },
// };

// const DesktopNavigation = () => {
//   const [value, setValue] = useState(0);
// const [islogin,setislogin]=useState(!!localStorage.getItem('login'))

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <Tabs
//       value={value}
//       onChange={handleChange}
//       aria-label="nav tabs example"
//       sx={styles.tabs}
//     >
//       {islogin?<><Tab sx={styles.tab} label="Home" component={Link} to="/" />
//       <Tab sx={styles.tab} label="About us" component={Link} to="/about" />
//       <Tab sx={styles.tab} label="Contact us" component={Link} to="/contact" />
//       <Tab sx={styles.tab} label="logout" component={Button} onClick={()=>{
//         localStorage.clear()
//         setislogin(!!localStorage.getItem("login"))
//       }} /></>:<>
//       <Tab sx={styles.tab} label="Signin" component={Link} to="/about" />
//       <Tab sx={styles.tab} label="Signup" component={Link} to="/contact" /></>}
//     </Tabs>
//   );
// };

// const MobileNavigation = () => {
//   const [openDrawer, setOpenDrawer] = React.useState(false);

//   const iOS =
//     typeof navigator !== 'undefined' &&
//     /iPad|iPhone|iPod/.test(navigator.userAgent);

//   return (
//     <React.Fragment>
//       <SwipeableDrawer
//         disableBackdropTransition={!iOS}
//         disableDiscovery={iOS}
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//         onOpen={() => setOpenDrawer(true)}
//       >
//         <Box sx={styles.toolbarMargin} />
//         <Paper>
//         <List disablePadding>
//          {localStorage.getItem('login')?
//             <ListItem
//               divider
//               button
//               component={Link}
//               to='/home'
//               onClick={() => setOpenDrawer(false)}
//             >
//               <ListItemText disableTypography>Home</ListItemText>
//             </ListItem>:null}
//             <ListItem
//               divider
//               button
//               component={Link}
//               to="/about"
//               onClick={() => setOpenDrawer(false)}
//             >
//               <ListItemText disableTypography>About us</ListItemText>
//             </ListItem>
//             <ListItem
//               divider
//               button
//               component={Link}
//               to="/contact"
//               onClick={() => setOpenDrawer(false)}
//             >
//               <ListItemText disableTypography>Contact us</ListItemText>
//             </ListItem>
//           </List>
//         </Paper>
//       </SwipeableDrawer>
//       <IconButton
//         sx={styles.menuIconContainer}
//         onClick={() => setOpenDrawer(!openDrawer)}
//         disableRipple
//       >
//         <MenuIcon sx={styles.hamburgerMenuIcon} />
//       </IconButton>
//     </React.Fragment>
//   );
// };

// const Header = () => {
//   const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Fragment>
//       <AppBar
//         position="fixed"
//         sx={styles.appbar}
//         color="secondary"
//         elevation={9}
//       >
//         <Toolbar disableGutters={true}>
//           <Button
//             disableRipple
//             component={Link}
           
//             sx={styles.logoContainer}
//           >
//             <Box alt="company logo" />
//             LOGO
//           </Button>
//           {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
//         </Toolbar>
//       </AppBar>
//     </Fragment>
//   );
// };

// export default Header;
