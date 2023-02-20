import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {useCateoryStore} from '../../../../store/category/useCategoryStore';
import BasicButton from '../../../common/BasicButton/BasicButton';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import CategoryTable from './CategoryTable';
import CreateCategoryModal from './Modal/CreateCategoryModal';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';
import Swal from 'sweetalert2';

const Category = () => {

//States
const {Category,ongetCategory }= useCateoryStore();
const [openCreateModal, setOpenCreateModal] = useState(false);


//Effects
useEffect(() => {
  if(Category.length===0)
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
}, [Category]);

  const addCategory = () =>{setOpenCreateModal(true);}
  const upDateCategory =()=>{ongetCategory()}

  return (
    <div>
      <Box >
        <Grid container direction={"row"} justifyContent="flex-end" alignItems="center" sx={{height:'100%',}}>
          <Grid item  >
            <BasicButton
            name="Agregar"
            startIcons={<AddBoxTwoToneIcon/>}
            colors="#0d47a1"
            onClick={()=>addCategory()}
            />
            <BasicButton
              name="Actualizar"
              startIcons={<CachedTwoToneIcon/>}
              colors="#0276aa"
              onClick={()=> upDateCategory()}
              />
          </Grid >
        </Grid>
        
        <br/>
        <Grid>
          <CategoryTable Category={Category}/>
        </Grid>
          
      </Box>

       {/*Modal*/}
      <CreateCategoryModal 
        open ={openCreateModal} 
        onClose={() => setOpenCreateModal(false)}
    />
    </div>
  )
}

export default Category