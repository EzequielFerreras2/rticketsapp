/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useCasesStore } from '../../../store/cases/useCasesStore';
import { Accordion, AccordionDetails, AccordionSummary,Grid, Typography } from '@mui/material';
import MenuFilter from './CasesHelper/MenuFilter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Swal from 'sweetalert2';
import SpeedDialMenuCases from './CasesHelper/SpeedDialMenuCases';
import CardPagination from './CasesHelper/CardPagination';
// import SelectCardPerPage from './CasesHelper/SelectCardPerPage';
import { useAtuhStore } from '../../../store/auth/useAuthStore';

import OpenCloseTab  from '../CreateCases/CasesHelper/OpenCloseTab'
import CreateCModal from './Modal/CreateCModal';

const CreateCases = () => {

const {AllCases, onGetCases,onGetCasesByUser,CasesByUser}= useCasesStore();

/* States and Var */
var acorColors ="#e0e0e0";
const{user}=useAtuhStore();
const rol = user.rol;
const id = user?.id;

const [cases, setCases] = useState([]);
const [openCases, setOpenCases] = useState([]);
const [closeCases, setCloseCases] = useState([]);
const clength=cases.length;
const [Caseslength, setCaseslength] = useState(clength);
const [currentPage, setCurrentPage] = useState(1);
const [cardPerPages, setCardPerPages] = useState(10);
const lastPostIndex = cardPerPages * currentPage;
const firstPostIndex = lastPostIndex - cardPerPages;
const currentOpenCard = openCases.slice(firstPostIndex,lastPostIndex);
const currentCloseCard = closeCases.slice(firstPostIndex,lastPostIndex);
const [openCreateModal, setOpenCreateModal] = useState(false);


/* Arrows Funtions */
    const filterbyDate = async(date) =>{
    if(rol==="Admin")
    {
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
    }
      else{
        const fbd = await CasesByUser.filter( res => res.openDate === date);
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
      }
    };



  const filterByUser=async(user)=>{
    if(user.type ==="Id"){
      if(rol === "Admin")
      {
        const fbu = await AllCases.filter( res => res.openCaseUser._id === user.value.search);
        if(fbu.length===0){
          
          Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: `No existen Casos Con el ID: ${user.value.search}`
          });
        }
        else{
          setCases(fbu);
        }
        
      }
      else{
        const fbu = await CasesByUser.filter( res => res.openCaseUser._id === user.value.search);

        if(fbu.length===0){

          Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: `No existen Casos Con el Id=D: ${user.value.search}`
          });

        }
        else{
          setCases(fbu);
        }
        
      }  
    }
    else{
      if(rol === "Admin"){

        const fbu = await AllCases.filter( res => res.openCaseUser.name === user.value.search);
        if(fbu.length===0){
          
          Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: `No existen Casos Con el Nombre: ${user.value.search}`
          });

        }
        else{
          setCases(fbu);
        }

      }
      else{
        const fbu = await CasesByUser.filter( res => res.openCaseUser.name === user.value.search);
        if(fbu.length===0){
          
          Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: `No existen Casos Con el Nombre: ${user.value.search}`
          });

        }
        else{
          setCases(fbu);
        }
      }
    }
  };

  const filterByPriority =async(prority)=>{
    if(rol === "Admin"){

      const fbp = await AllCases.filter( res => res.casesCategory.priority === prority);
      setCases(fbp);

    }
    else
    {
    const fbp = await CasesByUser.filter( res => res.casesCategory.priority === prority);
    setCases(fbp);
   }
  };


  const filterByStatus  =async(status)=>{
    if(rol==="Admin"){
      const fbs = await AllCases.filter( res => res.status === status);
      if(fbs.length===0){
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: `No existen Casos con Estatus: ${status}`
        });
      }
      else{
        setCases(fbs);
      }
    }
    else{

      const fbs = await CasesByUser.filter( res => res.status === status);
      if(fbs.length===0){
        
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: `No existen Casos con Estatus: ${status}`
        });
  
      }
      else{
        setCases(fbs);
      }
    }
  };


const filterByOpenStatus =async()=>{

  const fbp = await cases.filter( res => res.status==="Abierto"||res.status==="En Verificacion"||res.status==="En Espera");
  setOpenCases(fbp)
  setCaseslength(fbp.length)


};

const filterByCloseStatus =async()=>{

  const fbp = await cases.filter( res => res.status==="Cerrado" || res.status==="Cerrado Satisfactorio" ||res.status==="Cerrado Incorrecto" ||res.status==="Cerrado No Resuelto");
  setCloseCases(fbp);

};

  

  const clearCasesFilter=()=>{
    if(rol==="Admin")
    {
      setCases(AllCases);
      setCaseslength(AllCases.length)
    }
    else{
      setCases(CasesByUser);
      setCaseslength(CasesByUser.length)
    }
    
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

  // const handleChangeSelect = (event) => {
  //   setCardPerPages(event.target.value);
  // };

/*Effect */
  useEffect(() => {
    if(cases?.length===0)
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
    if(CasesByUser?.length===0)
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


  useEffect(() => {
    if(cardPerPages >= Caseslength && currentPage > 1){
      setCurrentPage(1);
      
    }
  }, [cardPerPages]);


  useEffect(() => {
    filterByOpenStatus();
    filterByCloseStatus();
  }, [cases]);

    return (
        <div>
            <br/>
            <h1>Casos</h1>
            <Grid container direction={"row"} justifyContent="flex-end" alignItems="center" sx={{height:'100%',}}>
                <Grid item  >
                  <SpeedDialMenuCases updateList={getCasesByRol} setOpenCreateModal={setOpenCreateModal}/>
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
                          <MenuFilter clearCasesFilter={clearCasesFilter} filterbyDate={filterbyDate} filterByUser={filterByUser} filterByPriority={filterByPriority} filterByStatus={filterByStatus}/>
                    </AccordionDetails>
                  </Accordion>
                  <br/>
              </Grid>
              <br/>
              
              
            </Grid>
            <Grid>
                {/* <Grid container direction={"row"} justifyContent="flex-end" alignItems="center">
                    <SelectCardPerPage handleChangeSelect= {handleChangeSelect} cardPerPages={cardPerPages}/>
                </Grid> */}
            </Grid>
            
            <br/>
            
                <OpenCloseTab getCasesByRol={getCasesByRol} setCaseslength={setCaseslength} openCases={currentOpenCard} closeCases={currentCloseCard}/>
                
           <br/>
           
           <Grid container direction={"row"} justifyContent="center" alignItems="center">
              <CardPagination Caseslength={Math.ceil(Caseslength / cardPerPages)} setCurrentPage={setCurrentPage}  />
            </Grid>
     
          <CreateCModal
          open ={openCreateModal} 
          onClose={() => setOpenCreateModal(false)}
          />
          
        
        </div>
    );
}

export default CreateCases;
