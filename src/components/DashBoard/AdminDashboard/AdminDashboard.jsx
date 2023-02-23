/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import TotalCasesCharts from './Charts/TotalCasesCharts';
import InfoIcon from '@mui/icons-material/Info';
import DaysOfCases from './Charts/DaysOfCases';
import { useCasesStore } from '../../../store/cases/useCasesStore';

const AdminDashboard = () => {

    const {onGetCases}=useCasesStore();

 const [CasesCount, setCasesCount] = useState({});
    const iconSize= 19;


useEffect(() => {
   onGetCases()
}, []);


    return (
        <div>
            <br/>
            <br/>
            <Typography variant='h3'>DashBoard</Typography>
            <br/>
            <Grid container
            spacing={2}>
                <Grid container spacing={2} justifyContent="space-evenly"  item xs={3} md={6}  direction="row">
                    <Grid item xs={1} md={6} sx={{}}>
                        <Card sx={{ minWidth: 275 ,  background: "#eeeeee"}}>
                        <CardContent>
                        <Typography sx={{ fontSize: 18,color:"white"}} color="white" gutterBottom>
                                Casos Abiertos:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5">
                                   <b>{CasesCount.OpenCases} </b>.
                            </Typography>
                            <Typography sx={{ fontSize: 18,color:"white" }} color="white" gutterBottom>
                                En Verificacion:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5" >
                                <b>{CasesCount.verificateCases}</b>.
                            </Typography>
                            <Typography sx={{ fontSize: 18, color:"white" }} color="white" gutterBottom>
                                Cerrados Satisfactorios:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5" >
                                <b>{CasesCount.CloseSasCases}</b>.
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid> 
                    <Grid item xs={1} md={6}>
                        <Card sx={{ minWidth: 275 ,  background: "#eeeeee"}}>
                        <CardContent>
                        {CasesCount.HpriorityCases >= 20 ? <Alert variant="filled"  sx={{mb:2}} severity="warning"><b>Muchos casos de alta prioridad en la cola!!</b></Alert>:<div></div>}
                        <Typography sx={{ fontSize: 18,color:"white"}} color="white" gutterBottom>
                                <span><InfoIcon sx={{ fontSize: iconSize, color:"#b2102f" }}/></span> Casos Priodad Alta :
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5">
                                   <b>{CasesCount.HpriorityCases}</b>. 
                                   
                            </Typography>
                            
                            <Typography sx={{ fontSize: 18,color:"white" }} color="white" gutterBottom>
                            <span><InfoIcon sx={{ fontSize: iconSize, color:"#ffb300" }}/></span> Casos Prioridad Media :
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5" >
                                <b>{CasesCount.MpriorityCases}</b>.
                            </Typography>
                            <Typography sx={{ fontSize: 18, color:"white" }} color="white" gutterBottom>
                            <span><InfoIcon sx={{ fontSize: iconSize, color:"#27632a" }}/></span> Casos Prioridad Baja:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="h5" >
                                <b>{CasesCount.LpriorityCases}</b>.
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid> 
                    <Grid item xs={3} md={12}>
                        <Card sx={{ minWidth: 275 ,  background: "#eeeeee"}}>
                        <CardContent>
                        <Typography sx={{ fontSize: 22  }} color="text.secondary" gutterBottom>
                                    Dias De Casos
                            </Typography>
                            <Box width={"100%"} height={250}>
                                <DaysOfCases/>
                            </Box>
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
                                    <Box width={730} height={536}>
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
