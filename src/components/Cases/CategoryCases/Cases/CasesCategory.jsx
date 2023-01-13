import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import BasicButton from '../../../common/BasicButton/BasicButton';
import { useCategoryCasesStore } from '../../../../store/CategoryCases/useCategoryCasesStore';
import CategoryCasesTable from './Table/CategoryCasesTable';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';


const CasesCategory = () => {

  const {CategoryCases,onGetCategoryCases}= useCategoryCasesStore();
  const [categoryCases, setCategoryCases] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  
  //Effects
  useEffect(() => { setCategoryCases(CategoryCases);}, [CategoryCases]);

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
            <CategoryCasesTable CasesCategory={categoryCases}/>
            {/* <CollapsibleTable/> */}
          </Grid>
        </Box>
        
      </div>
  )
}

export default CasesCategory