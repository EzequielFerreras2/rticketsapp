import { Alert, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSubCategoryStore } from '../../../../../store/subcategory/useSubCategory';
import BasicModal from '../../../../common/BasicModal/BasicModal';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteSubCategoryModal = ({open,onClose,getSubCategory}) => {

  const {onDeleteSubCategory}=useSubCategoryStore();
  const [subCategories, setSubCategories] = useState({});

  const subCa = async(data) =>{
    const SubCate = await data;
    if(SubCate !== undefined)
    {
      setSubCategories(SubCate);
    };
  };

  useEffect(() => {
 
  subCa(getSubCategory);

  }, [getSubCategory])

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
            <p><b>id:</b> {subCategories.id}</p>
              <p><b>Sub Categoria:</b> {subCategories.subcategory}</p>
              {/* <p key={subCategories.category._id}><b>Categoria:</b> {subCategories.category.category}</p> */}
            </Alert>  
        </Stack>
        </Grid>
      </Grid>

    
  </>

);

const onDelete =(data)=>{
  onDeleteSubCategory(data);
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
            onSubmit={()=>onDelete(subCategories)}
            name="Eliminar"
            colors="#ab003c"
            startIcons={<DeleteIcon />}
            />
    </div>
  )
}

export default DeleteSubCategoryModal