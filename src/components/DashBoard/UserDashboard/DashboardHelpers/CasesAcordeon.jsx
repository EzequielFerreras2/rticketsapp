import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import { GridExpandMoreIcon } from '@mui/x-data-grid'
import moment from 'moment';
import { useAtuhStore } from '../../../../store/auth/useAuthStore';


const CasesAcordeon = ({Cases}) => {
   
const sliceCases = Cases?.slice(0,5);
const {user}=useAtuhStore();
const rol = user.rol;

  return (
    <div>
        {
            sliceCases?.map( (res) =>{
                const minCasesID= res.id?.slice(-7);
                var statusChange = false;
                var acorColors ="#e0e0e0";
                if(res.status==="Cerrado" || res.status==="Cerrado Satisfactorio" ||res.status==="Cerrado Incorrecto" ||res.status==="Cerrado No Resuelto" || res.status==="En Verificacion")
              {
                statusChange=true;
              }


           return(
            <Accordion key={res?.id}  sx={{mt:2,mb:2 ,backgroundColor: "#eeeeee" }}>
                <AccordionSummary
                expandIcon={<GridExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography sx={{ fontSize: 16 }}><b>Caso: {minCasesID}</b> </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{ fontSize: 24 }}  gutterBottom>
                                  <b>{res.casesCategory.title}</b> .
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
                                    <b>Soporte Asignado:</b> {res.closeCaseUser.name}.
                                  </Typography>
                                  :<div></div>
                                }
                                {
                                  res.status ==="En Verificacion"?
                                  <div></div>
                                  :
                                  <Typography sx={{ fontSize: 16 }}  gutterBottom>
                                  <b>Fecha de Cierre:</b> {  statusChange===false || res.closeDate === null ?  <span>Caso Status: <b>{res.status}</b> Aun Sin Fecha de Cierre.</span> :res.closeDate}
                                  </Typography>

                                }
                                  
                        
                                <Grid key={res.id}  item xs={6}>
                                   { 
                                   rol==="Admin"? 
                                   <Accordion key={res.openCaseUser._id}  sx={{mt:2,mb:2 ,backgroundColor: acorColors }}>
                                            <AccordionSummary
                                            expandIcon={<GridExpandMoreIcon />}
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
                                        expandIcon={<GridExpandMoreIcon />}
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
                                            expandIcon={<GridExpandMoreIcon />}
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
                </AccordionDetails>
            </Accordion>      
           )
            }
            )
        }                              
    </div>
  )
}

export default CasesAcordeon