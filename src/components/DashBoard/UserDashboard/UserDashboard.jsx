/* eslint-disable react-hooks/exhaustive-deps */
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

import { useAtuhStore } from '../../../store/auth/useAuthStore';
import { useCasesStore } from '../../../store/cases/useCasesStore';
import CasesAcordeon from './DashboardHelpers/CasesAcordeon';

const UserDashboard = () => {

const {CasesByUser, onGetCasesByUser}= useCasesStore();
const {user}=useAtuhStore();

useEffect(() => {
    onGetCasesByUser(user.id);
}, []);
    
    return (
        <div>
            <br/>
            <br/>
         
            <Typography variant='h1' sx={{color:'black'}}>
                DashBoard
            </Typography>
            <br/>
            <Box>
               <Grid
               container
               direction="row"
               justifyContent="center"
               alignItems="center"
               spacing={2}
               >
                    <Grid item xs={1} md={6}>
                        <Card sx={{ minWidth: 275,background: "#eeeeee" }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                Casos Resueltos Recientes
                                </Typography>
                                <CasesAcordeon Cases={CasesByUser}/>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={1} md={6}>
                    <Card sx={{ minWidth: 275 ,background: "#eeeeee"}}>
                            <CardContent>
                                <Typography variant="h5" comp2onent="div">
                                    Casos en proceso
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                                </Typography>
                                <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={1} md={6}>
                    <Card sx={{ minWidth: 275 ,background: "#eeeeee"}}>
                            <CardContent>
                                <Typography variant="h5" comp2onent="div">
                                    Casos Cerrados
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                                </Typography>
                                <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Grid>
               </Grid>
            </Box>
        </div>
    );
}

export default UserDashboard;
