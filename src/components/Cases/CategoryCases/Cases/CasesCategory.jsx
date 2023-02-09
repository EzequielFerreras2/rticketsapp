import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import BasicButton from '../../../common/BasicButton/BasicButton';
import { useCategoryCasesStore } from '../../../../store/CategoryCases/useCategoryCasesStore';
import CategoryCasesTable from './Table/CategoryCasesTable';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';
import CreateCasesCategoryModal from './Modal/CreateCasesCategoryModal';
import Swal from 'sweetalert2';


const CasesCategory = () => {

  const {CategoryCases,onGetCategoryCases}= useCategoryCasesStore();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  
  //Effects
  useEffect(() => {
    if(CategoryCases.length===0)
    {
      Swal.fire({
        title: `Loading...`,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        },})
    }
    else{
      Swal.close();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  //update.
  const upDateCategoryCases =()=>{onGetCategoryCases();};
  const addCategoryCases = () =>{setOpenCreateModal(true);};

  return (
      <div>
          <Box >
          <Grid container direction={"row"} justifyContent="flex-end" alignItems="center" sx={{height:'100%',}}>
            <Grid item  >
              <BasicButton
              name="Agregar"
              startIcons={<AddBoxTwoToneIcon/>}
              colors="#0d47a1"
              onClick={()=> addCategoryCases()}
              />
              <BasicButton
              name="Actualizar"
              startIcons={<CachedTwoToneIcon/>}
              colors="#0276aa"
              onClick={()=> upDateCategoryCases()}
              />
            </Grid >
          </Grid>
          
          <br/>
          <Grid>
            <CategoryCasesTable CasesCategory={CategoryCases}/>
            {/* <CollapsibleTable/> */}
          </Grid>
        </Box>
        <CreateCasesCategoryModal
        open ={openCreateModal} 
        onClose={() => setOpenCreateModal(false)}
        />
      </div>
  )
}

export default CasesCategory