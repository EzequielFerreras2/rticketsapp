import React, { useEffect, useState } from 'react'
import BasicModal from '../../../../common/BasicModal/BasicModal'
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {  Grid} from '@mui/material';
import { useCateoryStore } from '../../../../../store/category/useCategoryStore';

const DeleteCategoryModal = ({open,onClose,getCategory}) => {

    const {onDeleteCategory}=useCateoryStore();
    const [category, setCategory] = useState({});

    useEffect(() => {
        if (open){
          setCategory(getCategory);
        };
    
      }, [open,getCategory])
      
    
    const getContent= () =>(
    
      <>
          <Grid container spacing={1} 
          justifyContent="center"
          alignItems="center"
          >
            <Grid item xs={8}>
            <Stack sx={{ m:2, width: '100%' }} spacing={2}>
                <Alert severity="warning"><h2>!Estas Seguro que deseas eliminar la categoria!</h2></Alert>
                <Alert severity="error">
                  <p><b>Categoria:</b> {category.category}</p>
                </Alert>  
            </Stack>
            </Grid>
          </Grid>
    
        
      </>
    
    );
    
    const onDelete =(data)=>{
        onDeleteCategory(data);
      onClose();
    };

  return (
    <div>
        <BasicModal
            open={open}
            onClose={onClose}
            title="Eliminar Categoria"
            subTitle=""
            content={getContent()}
            onSubmit={()=>onDelete(category)}
            name="Eliminar"
            colors="#ab003c"
            startIcons={<DeleteIcon />}
            />
    </div>
  )
}

export default DeleteCategoryModal