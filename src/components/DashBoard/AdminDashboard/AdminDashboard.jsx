import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TotalCasesCharts from './Charts/TotalCasesCharts';
import InfoIcon from '@mui/icons-material/Info';

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
                <Grid container spacing={2} justifyContent="space-evenly"  item xs={3} md={6}  direction="row">
                    
                    {/* <Grid sx={{mr:12}} item xs={6} md={3}>
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
                                Cerrados Satisfactorios:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h4" >
                                {CasesCount.CloseSasCases}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>   */}

                    <Grid item xs={1} md={6} sx={{}}>
                        <Card sx={{ minWidth: 275 ,  background: "#eeeeee"}}>
                        <CardContent>
                        <Typography sx={{ fontSize: 18,color:"white"}} color="white" gutterBottom>
                                Casos Abiertos:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5">
                                   <b>{CasesCount.OpenCases} </b> 
                            </Typography>
                            <Typography sx={{ fontSize: 18,color:"white" }} color="white" gutterBottom>
                                En Verificacion:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5" >
                                <b>{CasesCount.verificateCases}</b> 
                            </Typography>
                            <Typography sx={{ fontSize: 18, color:"white" }} color="white" gutterBottom>
                                Cerrados Satisfactorios:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5" >
                                <b>{CasesCount.CloseSasCases}</b>
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid> 
                    <Grid item xs={1} md={6}>
                        <Card sx={{ minWidth: 275 ,  background: "#eeeeee"}}>
                        <CardContent>
                        <Typography sx={{ fontSize: 18,color:"white"}} color="white" gutterBottom>
                                <span><InfoIcon sx={{ fontSize: 15, color:"#b2102f" }}/></span> Casos Priodad Alta :
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5">
                                   <b>{CasesCount.HpriorityCases}</b>
                            </Typography>
                            <Typography sx={{ fontSize: 18,color:"white" }} color="white" gutterBottom>
                            <span><InfoIcon sx={{ fontSize: 15, color:"#ffb300" }}/></span> Casos Prioridad Media :
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5" >
                                <b>{CasesCount.MpriorityCases}</b>
                            </Typography>
                            <Typography sx={{ fontSize: 18, color:"white" }} color="white" gutterBottom>
                            <span><InfoIcon sx={{ fontSize: 15, color:"#27632a" }}/></span> Casos Prioridad Baja:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5" >
                                <b>{CasesCount.LpriorityCases}</b>
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid> 
                    <Grid item xs={3} md={12}>
                        <Card sx={{ minWidth: 275 ,  background: "#eeeeee"}}>
                        <CardContent>
                        <Typography sx={{ fontSize: 18,color:"white"}} color="white" gutterBottom>
                                Casos Abiertos:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h4">
                                    {CasesCount.OpenCases}
                            </Typography>
                            <Typography sx={{ fontSize: 18,color:"white" }} color="white" gutterBottom>
                                En Verificacion:

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h4" >
                                {CasesCount.verificateCases}
                            </Typography>
                            <Typography sx={{ fontSize: 18, color:"white" }} color="white" gutterBottom>
                                Cerrados Satisfactorios:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h4" >
                                {CasesCount.CloseSasCases}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid> 
                      
                </Grid>
                <Grid item xs={1} md={6} >
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
                                    <Box width={730} height={510}>
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
