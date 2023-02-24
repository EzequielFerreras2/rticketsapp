import {Button, ButtonGroup,Grid,Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccountStore } from '../../../store/accounts/useAccountStore';
import { useAtuhStore } from '../../../store/auth/useAuthStore';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/system';

const Account = ({handleClose}) => {

    const {user,startLogOut} = useAtuhStore();
    const {account} = useAccountStore();
    const [Account, setAccount] = useState([]);
    const navigate = useNavigate();
    const letter= user.name?.charAt(0);

    const handleAdminAccount =() =>{navigate('/adminaccount');handleClose();};
    const handleCategoryCases =() =>{navigate('/cases/category');handleClose();};  
    const handleLogout = () =>{startLogOut();};

  useEffect(() => {
    setAccount(account)
  }, [account]);

  
   
    return (
        <div>
            <br/>
            
             <Box sx={{width:450}}>
              <Grid 
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                
              >
                <Grid item xs={3}>
                <Stack direction="row" justifyContent="center" spacing={2}>
                  <Avatar
                  alt={letter}
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 80, height: 80 ,color: "white", backgroundColor: '#0d47a1'}}
                  />
          
              
                  </Stack>
                
                </Grid>
                
                <Grid  item xs={3}>
                <Typography  sx={{textAlign:"center"}} variant="h5" >
                      {Account?.name}
                    </Typography>
                    <Typography sx={{textAlign:"center"}} variant="body2"   color="text.secondary">
                      {Account?.email}
                    </Typography>
                    <Typography sx={{textAlign:"center"}} variant="body2"  color="text.secondary">
                      {Account?.company}
                    </Typography>
                    <Typography sx={{textAlign:"center"}}  variant="body2"  color="text.secondary">
                      {Account?.departament}
                    </Typography>
                </Grid>

                    

                
                    <Grid sx={{m:1}} item xs={3}
              
                    >
                    {
                      user.rol==="Admin"?

                      <ButtonGroup variant="outlined"  >
                        <Button onClick={()=>handleAdminAccount()} 
                        variant="outlined" size="medium" startIcon={<PeopleAltTwoToneIcon />}  sx={{ color: "white", backgroundColor: '#0d47a1'}}>Administrar Cuentas
                        </Button>
                        <Button onClick={()=>handleCategoryCases()} 
                        variant="outlined"  size="medium" startIcon={<CategoryTwoToneIcon />}  sx={{ color: "white", backgroundColor: '#0d47a1'}}>Categorias de Casos
                        </Button>
                        
                      </ButtonGroup>
                      :
                      <div></div>
                    }
                    
                    
                    
                    </Grid>
                    <Grid item xs={3}>
                      <Button onClick={()=>handleLogout()} variant="outlined" size="medium" startIcon={<LogoutIcon />}  sx={{ color: "white", backgroundColor: 'Red',mt:1}}>LogOut</Button>
                    </Grid>
                  
                
                  
                </Grid>
             </Box>
             
                
              
        </div>
    );
}

export default Account;
