import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {useCateoryStore} from '../../../../store/category/useCategoryStore';
import BasicButton from '../../../common/BasicButton/BasicButton';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import CategoryTable from './CategoryTable';
import CreateCategoryModal from './Modal/CreateCategoryModal';

const Category = () => {

//States
const {Category }= useCateoryStore();
const [category, setCategory] = useState([]);
const [openCreateModal, setOpenCreateModal] = useState(false);

//Effects
useEffect(() => { setCategory(Category);}, [Category]);

  const addCategory = () =>{

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
            onClick={()=>addCategory()}
            />
          </Grid >
        </Grid>
        
        <br/>
        <Grid>
          <CategoryTable Category={category}/>
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