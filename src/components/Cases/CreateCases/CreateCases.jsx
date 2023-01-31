import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import Cases from './Cases';
import { useCasesStore } from '../../../store/cases/useCasesStore';
import { Accordion, AccordionDetails, AccordionSummary, Fab, Typography } from '@mui/material';
import MenuFilter from './CasesHelper/MenuFilter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Swal from 'sweetalert2';



const CreateCases = () => {

const {AllCases, onGetCases,onGetCasesByUser,CasesByUser}= useCasesStore();
var acorColors ="#e0e0e0";
const rol = localStorage.getItem("rol");
const id = localStorage.getItem("id");
const [cases, setCases] = useState([]);


  /* Arrows Funtions */

const filterbyDate = async(date) =>{
  const fbd = await AllCases.filter( res => res.openDate === date);
  if(fbd.length===0){
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: `No existen Casos de la fecha ${date}`
    });
  }
  else{
    setCases(fbd);
  }
};

const filterByUser=async(user)=>{
  if(user.type ==="Id"){
    const fbu = await AllCases.filter( res => res.openCaseUser._id === user.value);
    setCases(fbu);
  }
  else{
    const fbu = await AllCases.filter( res => res.openCaseUser.name === user.value);
    setCases(fbu);
  }
};

const filterByPriority =async(prority)=>{

  const fbp = await AllCases.filter( res => res.casesCategory.priority === prority);

     setCases(fbp);
};

const clearCasesFilter=()=>{

  setCases(AllCases);

};



const getCasesByRol =()=>{

  if (rol === "Admin")
  {
    onGetCases();
  }
  else
  {
    onGetCasesByUser(id)
  }

};

useEffect(() => {
  getCasesByRol();
}, []);


useEffect(() => {
  setCases(AllCases);
}, [AllCases]);

useEffect(() => {
  setCases(CasesByUser);
}, [CasesByUser]);

    return (
        <div>
            <br/>
            <h1>Casos</h1>
            <Accordion  sx={{mt:2,mb:2 ,backgroundColor: acorColors }}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography sx={{ fontSize: 20 }}><b>Filtrar Por:</b></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                              <MenuFilter clearCasesFilter={clearCasesFilter} filterbyDate={filterbyDate} filterByUser={filterByUser} filterByPriority={filterByPriority}/>
                                        </AccordionDetails>
                                    </Accordion>
              
            <br/>
           <Cases AllCases={cases}/>
           <br/>
                <Box sx={{ mt:15, transform: 'translateZ(0px)', flexGrow: 1  ,}}>
                    <SpeedDial
                        ariaLabel="SpeedDial"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon openIcon={<NoteAddTwoToneIcon />} />}
                        onClick={()=>console.log("CLieck")}
                        FabProps={{
                            sx: {
                              bgcolor: '#0d47a1',
                              '&:hover': {
                                bgcolor: '#1976d2',
                              },
                              width: 80, 
                                height: 80
                            }
                          }}
                    >
                    </SpeedDial>
                </Box>

       
        </div>
    );
}

export default CreateCases;
