import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSubCategoryStore } from '../../../../store/subcategory/useSubCategory';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import BasicButton from '../../../common/BasicButton/BasicButton';
import SubCategoryTable from './SubCategoryTable';
import CreateSubCategoryModal from './Modal/CreateSubCategoryModal';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';
import Swal from 'sweetalert2';
const SubCategory = () => {

  const {SubCategory,onGetSubCategory }= useSubCategoryStore();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  
  //Effects
  useEffect(() => {
    if(SubCategory.length===0)
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
  
  const addsubCategory = () =>{ setOpenCreateModal(true);}
  const upDateSubCategory =()=>{onGetSubCategory()}
  return (
    <div>
      <Box >
        <Grid container direction={"row"} justifyContent="flex-end" alignItems="center" sx={{height:'100%',}}>
          <Grid item  >
            <BasicButton
            name="Agregar"
            startIcons={<AddBoxTwoToneIcon/>}
            colors="#0d47a1"
            onClick={()=>addsubCategory()}
            />
            <BasicButton
              name="Actualizar"
              startIcons={<CachedTwoToneIcon/>}
              colors="#0276aa"
              onClick={()=> upDateSubCategory()}
              />
          </Grid >
        </Grid>
        
        <br/>
        <Grid>
          <SubCategoryTable subCategory={SubCategory}/>
        </Grid>
      </Box>
      <CreateSubCategoryModal
        open ={openCreateModal} 
        onClose={() => setOpenCreateModal(false)}
      />
    </div>
  )
}

export default SubCategory