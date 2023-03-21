/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

import { useAtuhStore } from '../../../store/auth/useAuthStore';
import { useCasesStore } from '../../../store/cases/useCasesStore';
import CasesAcordeon from './DashboardHelpers/CasesAcordeon';
import {calculateDate} from '../../../helpers/calculateDate'
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

const {CasesByUser, onGetCasesByUser}= useCasesStore();
const {user}=useAtuhStore();
const navigate = useNavigate();

const casesV = CasesByUser?.filter( res => calculateDate(res?.openDate) <=5 && res.status ==="En Verificacion");
const casesO = CasesByUser?.filter( res => calculateDate(res?.openDate) <=5 && res.status ==="Abierto");
const casesC = CasesByUser?.filter( res => calculateDate(res?.openDate) <=5 && res.status ==="Cerrado Satisfactorio");

console.log(casesC?.length)
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
               
               spacing={2}
               >
                    <Grid item xs={1} md={6}>
                        <Card sx={{ minWidth: 275,background: "#e3f2fd"  }}>
                            <CardContent>
                                <br/>
                                <Typography variant="h5" component="div">
                                    Casos Abiertos Recientes
                                </Typography>
                                <br/>
                                {
                                    casesO?.length === 0?
                                    <h1>No hay casos Abiertos.</h1>
                                    :
                                    <CasesAcordeon Cases={casesO}/>
                                }
                                
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={()=>navigate("/cases/createcases")}>Ver Mas</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={1} md={6}>
                    <Card sx={{ minWidth: 275 ,background: "#e3f2fd"}}>
                            <CardContent>
                                <br/>
                                <Typography variant="h5" comp2onent="div">
                                    Casos en proceso
                                </Typography>
                                <br/>
                                {
                                    casesV?.length === 0?
                                    <h1>No hay casos en Verificacion.</h1>
                                    :
                                    <CasesAcordeon Cases={casesV}/>
                                }
                               
                                
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={()=>navigate("/cases/createcases")}>Ver Mas</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={1} md={6}>
                    <Card sx={{ minWidth: 275 ,background: "#e3f2fd"}}>
                            <CardContent>
                                <br/>
                                <Typography variant="h5" comp2onent="div">
                                    Casos Cerrados o Resueltos Recientes
                                </Typography>
                                <br/>
                                {
                                    casesC?.length === 0?
                                    <h1>No hay casos Cerrado.</h1>
                                    :
                                    <CasesAcordeon Cases={casesC}/>
                                }
                                
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={()=>navigate("/cases/createcases")}>Ver Mas</Button>
                            </CardActions>
                        </Card>
                    </Grid>
               </Grid>
            </Box>
        </div>
    );
}

export default UserDashboard;
