import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSubCategoryStore } from '../../../../store/subcategory/useSubCategory';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import BasicButton from '../../../common/BasicButton/BasicButton';
import SubCategoryTable from './SubCategoryTable';
import CreateSubCategoryModal from './Modal/CreateSubCategoryModal';

const SubCategory = () => {

  const {SubCategory }= useSubCategoryStore();
  const [subCategory, setSubCategory] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  
  //Effects
  useEffect(() => { setSubCategory(SubCategory);}, [SubCategory]);
  
  
  const addsubCategory = () =>{
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
            onClick={()=>addsubCategory()}
            />
          </Grid >
        </Grid>
        
        <br/>
        <Grid>
          <SubCategoryTable subCategory={subCategory}/>
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