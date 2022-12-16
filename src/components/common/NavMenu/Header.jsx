import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideBar from './SideBar';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Avatar, Button } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { grey } from '@mui/material/colors';


const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const Header = () => {
const theme = useTheme();
const [open, setOpen] = React.useState(false);

const [anchorEl, setAnchorEl] = React.useState(null);



const status ='authenticated'
const rol='admin'





const [openAccountModal,setOpenAccountModal]=React.useState(false);



  
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccount =() =>{

    setOpenAccountModal(true);
    handleClose();

  }
  

  const handleLogout = () =>{
    
    // logout();
    // navigate('/login')
    console.log("LogOut")
    // window.location.reload();



  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
        <div>
        <AppBar  style={{ background: '#0d47a1' }} open={open}>
        <Toolbar variant="regular">
          <IconButton
           
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              borderRadius: "8px",
              border:"2px",
              backgroundColor: '#1976d2'
            }}
            size="large"
           
          >
            <MenuOpenIcon/>
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
            RticketsApp
          </Typography>
          
          

            <div>
              {status ==='authenticated' ?
              <>
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={openMenu}
                color="inherit"
                startIcon={status ==='authenticated' ? <Avatar sx={{marginRight: 1}}>U</Avatar>:<SupervisorAccountIcon/> }
                
              >
                User

              </Button>
              
              
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    
                  >
            
                    <MenuItem onClick={()=>handleAccount()} style={{ textDecoration: 'none' , color: 'black'}}><AccountBoxIcon/> Mi Cuenta</MenuItem>
                    
                    {
                      rol==='admin'
                      ?
                       <div>
                       <MenuItem   style={{ textDecoration: 'none' , color: 'black'}}><SupervisorAccountIcon/> Administrar Cuentas</MenuItem>
                       </div>
                      :
                       <div></div>
                    }
                    
                    <MenuItem onClick={handleLogout} style={{ textDecoration: 'none' , color: 'black'}} ><LogoutIcon/> Logout</MenuItem>
                    
                  </Menu>
              </>     
                 :null}

            </div>

            

       
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <h3>aaa</h3>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       <SideBar open={open}/>
       <DrawerHeader />
      </Drawer>

          
      </div>
    );
  };
  export default Header;
  