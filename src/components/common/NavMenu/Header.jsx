import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideBar from './SideBar';
import Menu from "@mui/material/Menu";
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import logosss from '../../../img/2.png'
import { useAtuhStore } from '../../../store/auth/useAuthStore';



import Account from '../../Auth/Account/Account';


const drawerWidth = 250;

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
const {status,user}= useAtuhStore();
const letter= user.name?.charAt(0);
const openMenu = (event) => {setAnchorEl(event.currentTarget);};
const handleClose = () => {setAnchorEl(null);};
const handleDrawerOpen = () => {setOpen(true);};
const handleDrawerClose = () => {setOpen(false);};




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
                startIcon={
                status ==='authenticated' ? <Avatar alt={letter} sx={{marginRight: 1, color: "white", backgroundColor: '#1976d2'}}/>
                :<SupervisorAccountIcon/> }
                sx={{
                padding:"13px",
                borderRadius: "8px",
                border:"2px",
                }}
              >
                {user.name}

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
                    <Account handleClose={()=>handleClose()}/>
                    
                  </Menu>
              </>     
                 :null}

            </div>

            

       
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img src={logosss} alt="Logo" height={70}/>
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
  