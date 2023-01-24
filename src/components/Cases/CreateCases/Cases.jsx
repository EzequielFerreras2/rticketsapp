import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicButton from '../../common/BasicButton/BasicButton';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Grid } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Cases = () => {
    return (
        <div>
             <Card  sx={{ minWidth: 275,backgroundColor: "#eeeeee" }}>
                <CardContent>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={2}>
                            <Grid container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center" >
                                        <Avatar  sx={{mt:7,bgcolor:"#b2102f",width: 80, height: 80 }}>
                                            <ReportProblemIcon />
                                        </Avatar>
                            </Grid>
                        </Grid>
                    
                    <Grid item xs={8}>
                                
                                <Grid item xs={6}>
                                    <Accordion sx={{mt:2,mb:2 ,backgroundColor: "#e0e0e0" }}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography><b>Usuario:</b> Ezequiel Ferreras</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>

                                <Typography sx={{ fontSize: 20 }}  gutterBottom>
                                  <b>Caso:</b> asdfasdfasdfasdfasdfasdfasdfasdfa
                                </Typography>
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Sub-Categoria:</b> asdfasdfasdfasdfasdfasdfasdfasdfa
                                </Typography>
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Categoria:</b> asdfasdfasdfasdfasdfasdfasdfasdfa
                                </Typography>
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Prioridad:</b> asdfasdfasdfasdfasdfasdfasdfasdfa
                                </Typography>

                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Prioridad:</b> asdfasdfasdfasdfasdfasdfasdfasdfa
                                </Typography>

                                <Grid item xs={6}>
                                    <Accordion sx={{mt:2 ,backgroundColor: "#e0e0e0" }}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography>Detalles</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                                 
                    </Grid>
                    <Grid item xs={2} >
                        <Grid container
                            sx={{mt:2}}
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center" >
                            <BasicButton
                                heights={200}
                                onClick={()=> console.log("Edit")}
                                startIcons={<ModeEditTwoToneIcon/>}
                                colors={"#0d47a1"}
                        
                                />
                                <BasicButton
                                heights={200}
                                onClick={()=> console.log("Edit")}
                                startIcons={<DeleteTwoToneIcon/>}
                                colors={"#b2102f"}
                            
                                />
                        </Grid>
                    
                    </Grid>
                    
                    
                    </Grid>
                        
                    
                </CardContent>

                
                

            </Card>
            <br/>
           
        </div>
    );
}

export default Cases;
