import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicButton from '../../common/BasicButton/BasicButton';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {Accordion, AccordionDetails, AccordionSummary, Avatar, ButtonGroup, Grid } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubtitlesOffTwoToneIcon from '@mui/icons-material/SubtitlesOffTwoTone';
import moment from 'moment/moment';
import { useAtuhStore } from '../../../store/auth/useAuthStore';

const Cases = ({AllCases}) => {
const {user}=useAtuhStore();
const rol = user.rol;

    return (
        <div>
          {
            AllCases.map( (res) =>{
              var color ="#eeeeee";
              var superIconsColor="#e0e0e0";
              var acorColors ="#e0e0e0";

              if(res.casesCategory.priority==="Alta"){ superIconsColor="#b2102f"; };
              if(res.casesCategory.priority==="Media"){ superIconsColor="#ffb300"};
              if(res.casesCategory.priority==="Baja"){ superIconsColor="#27632a"};

              return(
                <div>
                  <Card key={res.id}  sx={{ minWidth: 275,backgroundColor: color }}>
                <CardContent>
                    <Grid sx={{mt:2}}  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid   item xs={2}>
                            <Grid  container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center" >
                                        <Avatar   sx={{mt:10,bgcolor: superIconsColor ,width: 80, height: 80 }}>
                                            <ReportProblemIcon />
                                        </Avatar>
                                <Typography sx={{mt:1, fontSize: 16 }}  gutterBottom>
                                  Prioridad: <b>{res.casesCategory.priority}.</b>
                                </Typography>
                            </Grid>
                        </Grid>
                    <Grid item xs={8}>
                                <Typography sx={{ fontSize: 24 }}  gutterBottom>
                                  <b>Caso:</b> {res.casesCategory.title}.
                                </Typography>
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Estatus:</b> {res.status}.
                                </Typography>
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Fecha de Apertura:</b> {moment(res.openDate).format('L')}.
                                </Typography>
                                {/* <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Dias Desde La Apertura:</b> {moment(res.openDate).fromNow()}.
                                </Typography> */}
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Fecha de Cierre:</b> {res.closeDate === null?  <span>Caso Status: <b>{res.status}</b> Aun Sin Fecha de Cierre.</span> :res.closeDate}
                                </Typography>
                                <Grid key={res.id}  item xs={6}>
                                   { 
                                   rol==="Admin"? 
                                   <Accordion key={res.openCaseUser._id}  sx={{mt:2,mb:2 ,backgroundColor: acorColors }}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <Typography sx={{ fontSize: 20 }}><b>Usuario:</b> {res.openCaseUser.name}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                              {
                                                rol === "Admin"?
                                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                                <b>Id:</b> {res.openCaseUser._id}
                                              </Typography>
                                              :<div></div>
                                              }
                                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                                  <b>Email:</b> {res.openCaseUser.email}
                                                </Typography>
                                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                                  <b>Departamento:</b> {res.openCaseUser.departament}.
                                                </Typography>
                                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                                  <b>Compañia:</b> {res.openCaseUser.company}.
                                                </Typography>

                                            </AccordionDetails>
                                        </Accordion>
                                        :
                                        <div></div>
                                        }
                                    <Accordion sx={{mt:2 ,backgroundColor:acorColors  }}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography><b>Detalles Del Caso:</b></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            {res.details}.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                    </Grid>
                      <Grid item xs={2} >
                          <Grid container
                              sx={{mt:2}}
                              direction="column"
                              justifyContent="flex-end"
                              alignItems="flex-end" >
                                <Grid   item xs={12} >
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                    <b>Opciones del caso:</b>
                                </Typography>
                                <Accordion sx={{mt:2 ,backgroundColor:acorColors  }}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >    
                                        <Typography><b>Opciones:</b></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <ButtonGroup size="large" aria-label="large button group">
                                        <BasicButton
                                          name={"Editar"}
                                          size="large"
                                          onClick={()=> console.log(res.id)}
                                          startIcons={<ModeEditTwoToneIcon/>}
                                          colors={"#0d47a1"}
                                          />
                                          <BasicButton
                                          name={"Eliminar"}
                                          size="large"
                                          onClick={()=> console.log("Edit")}
                                          startIcons={<DeleteTwoToneIcon/>}
                                          colors={"#b2102f"}
                                          />
                                        </ButtonGroup>
                                        </AccordionDetails>
                                    </Accordion>
                                    {
                                      rol==="Admin"?
                                      <Accordion sx={{mt:2 ,backgroundColor:acorColors  }}>
                                              <AccordionSummary
                                              expandIcon={<ExpandMoreIcon />}
                                              aria-controls="panel1a-content"
                                              id="panel1a-header"
                                              >
                                              <Typography><b>Opciones De Administrador:</b></Typography>
                                              </AccordionSummary>
                                              <AccordionDetails>
                                                <BasicButton
                                                name={"Cerrar Caso"}
                                                onClick={()=> console.log(res.id)}
                                                startIcons={<SubtitlesOffTwoToneIcon/>}
                                                colors={"#0d47a1"}
                                                />
                                              </AccordionDetails>
                                          </Accordion>
                                      :<ddiv></ddiv>
                                    }
                                </Grid>
                          </Grid>
                      </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br/>
                </div>
              ) })}
        </div>
    );
}

export default Cases;
