import { Alert, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSubCategoryStore } from '../../../../../store/subcategory/useSubCategory';
import BasicModal from '../../../../common/BasicModal/BasicModal';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCategoryCasesStore } from '../../../../../store/CategoryCases/useCategoryCasesStore';

const DeleteCasesCategoryModal = ({getCategoryCases,open,onClose}) => {

    const {onDeleteCategoryCases}= useCategoryCasesStore();
    
  const getContent= () =>(
  
    <>
        <Grid container spacing={1} 
        justifyContent="center"
        alignItems="center"
        >
          <Grid item xs={8}>
          <Stack sx={{ m:2, width: '100%' }} spacing={2}>
              <Alert severity="warning"><h2>!Estas Seguro que deseas eliminar la categoria de Caso!</h2></Alert>
              <Alert severity="error">
              <p><b>id:</b> {getCategoryCases.id}</p>
              <p><b>Titulo:</b> {getCategoryCases.title}</p>
              <p><b>Categoria:</b> {getCategoryCases.category.category}</p>
              <p><b>Sub Categoria:</b> {getCategoryCases.subcategory.subcategory}</p>
              <p><b>Prioridad:</b> {getCategoryCases.priority}</p>
              <p><b>Descripcion:</b> {getCategoryCases.description}</p>   
              </Alert>  
          </Stack>
          </Grid>
        </Grid>
  
      
    </>
  
  );
  
  const onDelete =(data)=>{
    onDeleteCategoryCases(data);
    onClose();
  };
  
  
  

  return (
    <div>
        <BasicModal
            open={open}
            onClose={onClose}
            title="Eliminar Categoria de Caso"
            subTitle=""
            content={getContent()}
            onSubmit={()=>onDelete(getCategoryCases)}
            name="Eliminar"
            colors="#ab003c"
            startIcons={<DeleteIcon />}
            />
    </div>
  )
}

export default DeleteCasesCategoryModal