import React, { useEffect, useState } from 'react'
import BasicModal from '../../../../common/BasicModal/BasicModal'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useCateoryStore } from '../../../../../store/category/useCategoryStore';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';

const EditCategoryModal = ({open,onClose,getCategory}) => {

const {onUpdateCategory }= useCateoryStore();
const [category, setCategory] = useState({}); 

    //Estilo del Modal
    const modalStyles = {
        inputFields: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiFormControl-root': {
                marginBottom: '20px',
            },
        },
    };

    useEffect(() => {
        if (open){
          setCategory(getCategory);
        };
    
      }, [open,getCategory])
      
      useEffect(() => {
       
        setValue('category', category.category)
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [category]);
    
    const validationSchema = Yup.object().shape({
        category: Yup.string().required('Campo requerido')  
    });
    
    //useForm
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    


    const saveChanges = (data) => {
        data.id=category.id;
        onUpdateCategory(data);
        onClose();
    };
    
    
    const getContent =()=>(
    
        <Grid container spacing={2}>
               
                <Grid item xs={6}>
                    <Box sx={modalStyles.inputFields}>
                        <TextField
                            id="category"
                            label="Categoria"
                            {...register('category')}
                            error={!!errors.category}
                            helperText={errors.category?.message}
                        />
                        
                    </Box>
                </Grid>
            </Grid>
    );
    
      return (
        <div>
    
        <BasicModal
        open={open}
        onClose={onClose}
        title="Editar Categoria"
        subTitle=""
        content={getContent()}
        onSubmit={handleSubmit(saveChanges)}
        name="Actualizar"
        colors="#43a047"
        startIcons={<ModeEditTwoToneIcon/>}
        />
        </div>
      )
}

export default EditCategoryModal