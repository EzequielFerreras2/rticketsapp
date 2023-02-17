import { Card, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import photo from '../../../img/contru.jpg'

const UserDashboard = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Typography variant='h1' sx={{color:'black'}}>
                DashBoard
            </Typography>
            <Box>
               <Grid
               container
               direction="row"
               justifyContent="center"
               alignItems="center"
               >
                    <Grid item>
                        <img src={photo} alt="photoa" height={600}/>
                    </Grid>
               </Grid>
            </Box>
        </div>
    );
}

export default UserDashboard;
