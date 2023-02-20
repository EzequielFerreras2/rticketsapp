import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TotalCasesCharts from './Charts/TotalCasesCharts';

const AdminDashboard = () => {

 const [CasesCount, setCasesCount] = useState({});
    
    return (
        <div>
            <br/>
            <br/>
            <Typography variant='h3'>DashBoard</Typography>
            <br/>
            <Grid container
            spacing={2}>
                <Grid container  item xs={6} md={6} direction="row">
                    
                    <Grid sx={{mr:12}} item xs={6} md={3}>
                        <Card sx={{ minWidth: 275, color:"white", background: "#eeeeee" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18,color:"white"}} color="white" gutterBottom>
                                Casos Abiertos:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h4">
                                    {CasesCount.OpenCases}
                            </Typography>
                            
                        </CardContent>
                        </Card>
                    </Grid>
                    <br/>  
                    <Grid item sx={{mr:12}} xs={6} md={3}>
                        <Card sx={{ minWidth: 275 ,  background: "#eeeeee"}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18,  }} color="text.secondary" gutterBottom>
                                En Verificacion:
                                
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h4" >
                                {CasesCount.verificateCases}
                            </Typography>
                        </CardContent>
                        </Card>  
                    </Grid> 
                    
                    <Grid item xs={6} md={3}>
                        <Card sx={{ minWidth: 275 ,  background: "#eeeeee"}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18,  }} color="text.secondary" gutterBottom>
                                Casos Cerrados Satisfactorios:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h4" >
                                {CasesCount.CloseSasCases}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>  
                </Grid>
                <Grid item xs={6} md={6}>
                    <Card sx={{ minWidth: 275 , background:"#eeeeee" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 22  }} color="text.secondary" gutterBottom>
                                    Estadisticas de Casos
                            </Typography>
                            <Grid container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center">
                                <Grid item>
                                    <Box width={730} height={500}>
                                        <TotalCasesCharts setOpenCasesCount={setCasesCount}/>
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
