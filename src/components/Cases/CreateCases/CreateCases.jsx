import React, { useEffect, useState } from 'react';
import Cases from './Cases';
import { useCasesStore } from '../../../store/cases/useCasesStore';
import { Accordion, AccordionDetails, AccordionSummary, Fab, Grid, Typography } from '@mui/material';
import MenuFilter from './CasesHelper/MenuFilter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Swal from 'sweetalert2';

import SpeedDialMenuCases from './CasesHelper/SpeedDialMenuCases';
import CardPagination from './CasesHelper/CardPagination';
import SelectCardPerPage from './CasesHelper/SelectCardPerPage';


const CreateCases = () => {

const {AllCases, onGetCases,onGetCasesByUser,CasesByUser}= useCasesStore();

/* States and Var */
var acorColors ="#e0e0e0";
const rol = localStorage.getItem("rol");
const id = localStorage.getItem("id");
const [cases, setCases] = useState([]);
const Caseslength = cases.length;
const [currentPage, setCurrentPage] = useState(1);
const [cardPerPages, setCardPerPages] = useState(5);
const lastPostIndex = cardPerPages * currentPage;
const firstPostIndex = lastPostIndex -cardPerPages;
const currentCard = cases.slice(firstPostIndex,lastPostIndex);




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

  const handleChangeSelect = (event) => {
    setCardPerPages(event.target.value);
  };
/*Effect */
  useEffect(() => {
    if(AllCases.length===0)
    {
      Swal.fire({
        title: `Loading...`,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        },})
    }
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
            <Grid container direction={"row"} justifyContent="flex-end" alignItems="center" sx={{height:'100%',}}>
                <Grid item  >
                  <SpeedDialMenuCases updateList={getCasesByRol}/>
                </Grid >
              </Grid>
            <Grid container spacing={1}>
            <Grid item xs={4}>
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
              </Grid>
              <br/>
              
              
            </Grid>
            <Grid>
            
            <Grid sx={{mt:3}} container direction={"row"} justifyContent="center" alignItems="center">
              <CardPagination Caseslength={Math.ceil(Caseslength / cardPerPages)} setCurrentPage={setCurrentPage} />
            </Grid>
            <Grid container direction={"row"} justifyContent="flex-end" alignItems="center">
                <SelectCardPerPage handleChangeSelect= {handleChangeSelect} cardPerPages={cardPerPages}/>
            </Grid>
            </Grid>
            
            <br/>
           <Cases AllCases={currentCard}/>
           <br/>
           
           <Grid container direction={"row"} justifyContent="center" alignItems="center">
              <CardPagination Caseslength={Math.ceil(Caseslength / cardPerPages)} setCurrentPage={setCurrentPage} />
            </Grid>
            
         
          
        </div>
    );
}

export default CreateCases;
