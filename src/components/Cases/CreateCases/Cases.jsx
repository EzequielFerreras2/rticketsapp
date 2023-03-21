import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicButton from '../../common/BasicButton/BasicButton';
// import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Button, ButtonGroup, Grid } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import moment from 'moment/moment';
import { useAtuhStore } from '../../../store/auth/useAuthStore';
// import EditCasesModal from './Modal/EditCasesModal';
import { useCasesStore } from '../../../store/cases/useCasesStore';
import DeleteCasesModal from './Modal/DeleteCasesModal';
import CloseCasesModal from './Modal/CloseCasesModal';

const Cases = ({AllCases,getCasesByRol}) => {
  const{onGetCasesById}= useCasesStore();
const {user}=useAtuhStore();
const [actionName, setActionName] = useState("");
const rol = user.rol;



// const [openEditModal, setOpenEditModal] = useState(false);
const [openDeleteModal, setOpenDeleteModal] = useState(false);
const [openCloseCasesModal, setOpenCloseCasesModal] = useState(false);

// const openEdit =(a,b)=>{
//   onGetCasesById(a);
//   setOpenEditModal(b)
// };

const openDelete =(a,b)=>{

  onGetCasesById(a);
  setOpenDeleteModal(b)

};

const openCloseCases =(data,open,action)=>{
  setActionName(action);
  onGetCasesById(data);
  setOpenCloseCasesModal(open)
};;


    return (
        <div>
          {
            AllCases?.map( (res) =>{
              var color ="#eeeeee";
              var superIconsColor="#e0e0e0";
              var acorColors ="#e0e0e0";
              var statusChange = false;

              if(res.casesCategory.priority==="Alta"){ superIconsColor="#b2102f"; };
              if(res.casesCategory.priority==="Media"){ superIconsColor="#ffb300"};
              if(res.casesCategory.priority==="Baja"){ superIconsColor="#27632a"};

              if(res.status==="Cerrado" || res.status==="Cerrado Satisfactorio" ||res.status==="Cerrado Incorrecto" ||res.status==="Cerrado No Resuelto")
              {
                statusChange=true;
              }

              return(
                <div>
                  <Card key={res.id}  sx={{ minWidth: 275,backgroundColor: color }} >
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
                                  <b>{res.casesCategory.title}</b> .
                                </Typography>
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Caso #:</b> {res.id}
                                </Typography>
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Estatus:</b> {res.status}.
                                </Typography>
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Fecha de Apertura:</b> {moment(res.openDate).format('L')}.
                                </Typography>
                                {
                                  statusChange? 
                                    <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                    <b>Soporte:</b> {res.closeCaseUser.name}.
                                  </Typography>
                                  :<div></div>
                                }
  
                                  <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Fecha de Cierre:</b> {  statusChange===false || res.closeDate === null ?  <span>Caso Status: <b>{res.status}</b> Aun Sin Fecha de Cierre.</span> :res.closeDate}
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

                                    {
                                        statusChange? 
                                      <div></div>
                                      :
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
                                            {res.details}
                                        </Typography>
                                        </AccordionDetails>
                                      </Accordion>
                                    }
                                    { 
                                        statusChange|| res.status==="En Verificacion"||res.status==="En Espera"? 

                                            <Accordion key={res.openCaseUser._id}  sx={{mt:2,mb:2 ,backgroundColor: acorColors }}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <Typography sx={{ fontSize: 20 }}><b>Notas del Soporte:</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                             
                                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                                   {res.notesSuport}.
                                                </Typography>
                                                

                                            </AccordionDetails>
                                        </Accordion>
                                        :
                                        <div></div>
                                        }
                                </Grid>
                    </Grid>
                      <Grid item xs={2} >
                        
                          <Grid>
                              <Grid container
                              sx={{mt:2}}
                              direction="column"
                              justifyContent="flex-end"
                              alignItems="flex-end" >
                                <Grid   item xs={12} >
                                
                                {
                                   statusChange ===false ?
                                   <ButtonGroup orientation="vertical">
                                <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                    <b>Opciones del caso:</b>
                                </Typography>

                                         {/* <BasicButton
                                          name={"Editar"}
                                          size="large"
                                          onClick={()=> openEdit(res,true) }
                                          startIcons={<ModeEditTwoToneIcon/>}
                                          colors={"#0d47a1"}
                                          /> */}
                                          <BasicButton
                                          name={"Eliminar"}
                                          size="large"
                                          onClick={()=> openDelete(res,true)}
                                          startIcons={<DeleteTwoToneIcon/>}
                                          colors={"#b2102f"}
                                          />
                                </ButtonGroup>:
                                <div></div>
                                }
                                
                                
                                
                                
                                </Grid>

                                <Grid sx={{mt:16}}  item xs={12} >

                                  {rol==="Admin"?
                                  
                                  <ButtonGroup orientation="vertical">
                                    {
                                      statusChange === false?
                                      <Button
                                      key={res.id}
                                       variant='outlined'
                                       endIcon={<AssignmentTurnedInTwoToneIcon/> }
                                       size="medium"  
                                       sx={{ color: "white", backgroundColor: "#0d47a1", height:100}}
                                       onClick={()=>openCloseCases(res,true, res.status==="Abierto"? "Cerrar":"Cambiar estatus" )}
                                       >
                                        {res.status==="Abierto"? "Cerrar":"Cambiar estatus"} Caso
                                      </Button>
                                    :
                                    <Button
                                      key={res.id}
                                       variant='outlined'
                                       endIcon={<AssignmentTurnedInTwoToneIcon/> }
                                       size="medium"  
                                       sx={{ color: "white", backgroundColor: "#0d47a1", height:100}}
                                       onClick={()=>openCloseCases(res,true,"Reaperturar ")}
                                       >
                                        Reaperturar Caso
                                      </Button>
                                    }
                                    
                                    
                                  </ButtonGroup>
                                  
                                  :<div></div>

                                  }
                                
                                </Grid>
                          </Grid>
                        </Grid>
                        
                      </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br/>
                </div>
              ) })}
          {/* <EditCasesModal
          open ={openEditModal} 
          onClose={() => setOpenEditModal(false)}
     
          /> */}
          <DeleteCasesModal
          open ={openDeleteModal} 
          onClose={() => setOpenDeleteModal(false)}
          getCasesByRol={getCasesByRol}
          />
          <CloseCasesModal
           open ={openCloseCasesModal} 
           onClose={() => setOpenCloseCasesModal(false)}
           onOpen={()=> setOpenCloseCasesModal(true)}
           actionName={actionName}
           getCasesByRol={getCasesByRol}
          />
        </div>
    );
}

export default Cases;
