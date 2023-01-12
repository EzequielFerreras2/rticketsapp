import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import BasicButton from '../../../common/BasicButton/BasicButton';
import { useCategoryCasesStore } from '../../../../store/CategoryCases/useCategoryCasesStore';
import CategoryCasesTable from './Table/CategoryCasesTable';
import CollapsibleTable from './Table/TableAccordion';


const CasesCategory = () => {

  const {CategoryCases}= useCategoryCasesStore();
  const [categoryCases, setCategoryCases] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  
  //Effects
  useEffect(() => { setCategoryCases(CategoryCases);}, [CategoryCases]);
  
  
  const addCategoryCases = () =>{
    setOpenCreateModal(true);
  }


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
            </Grid >
          </Grid>
          
          <br/>
          <Grid>
            <CategoryCasesTable CasesCategory={categoryCases}/>
            {/* <CollapsibleTable/> */}
          </Grid>
        </Box>
        
      </div>
  )
}

export default CasesCategory