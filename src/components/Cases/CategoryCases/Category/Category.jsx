import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {useCateoryStore} from '../../../../store/category/useCategoryStore';
import BasicButton from '../../../common/BasicButton/BasicButton';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import CategoryTable from './CategoryTable';

const Category = () => {

//States
const {Category }= useCateoryStore();
const [category, setCategory] = useState([]);
const [openCreateModal, setOpenCreateModal] = useState(false);

//Effects
useEffect(() => { setCategory(Category);}, [Category]);

  const addCategory = () =>{

    console.log("addCategory");
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
    </div>
  )
}

export default Category