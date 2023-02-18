import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TotalCasesCharts from './Charts/TotalCasesCharts';

const AdminDashboard = () => {
    return (
        <div>
            <br/>
            <br/>
            <Typography variant='h3'>DashBoard</Typography>
            
            <br/>
            <Grid container
            justifyContent="space-around"
            spacing={2}>
                <Grid item xs={6} md={6}>
                    
                <Card sx={{ minWidth: 275, color:"white", background: "linear-gradient(to left top, #0d47a1, #0f53ad, #125eba, #156ac6, #1976d2)" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18,color:"white"}} color="white" gutterBottom>
                           Casos Abiertos
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
                    <br/>  
                    <Card sx={{ minWidth: 275 ,  background: "linear-gradient(to left top, #0d47a1, #0f53ad, #125eba, #156ac6, #1976d2)"}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18,  }} color="text.secondary" gutterBottom>
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
                <Grid item xs={6} md={6}>
                    <Card sx={{ minWidth: 275 , background:"#eeeeee" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18  }} color="text.secondary" gutterBottom>
                                    Estadisticas de Casos
                            </Typography>
                            <Grid container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center">
                                <Grid item>
                                    <Box width={730} height={500}>
                                        <TotalCasesCharts/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default AdminDashboard;
