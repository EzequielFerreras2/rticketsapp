import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {useCateoryStore} from '../../../../store/category/useCategoryStore';
import BasicButton from '../../../common/BasicButton/BasicButton';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import CategoryTable from './CategoryTable';
import CreateCategoryModal from './Modal/CreateCategoryModal';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';

const Category = () => {

//States
const {Category,ongetCategory }= useCateoryStore();
const [category, setCategory] = useState([]);
const [openCreateModal, setOpenCreateModal] = useState(false);

//Effects
useEffect(() => { setCategory(Category);}, [Category]);

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