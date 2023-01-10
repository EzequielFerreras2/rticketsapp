import React from 'react'
import BasicModal from '../../../../common/BasicModal/BasicModal'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useCateoryStore } from '../../../../../store/category/useCategoryStore';


const CreateCategoryModal = ({open,onClose}) => {

const {onCreateCategory}= useCateoryStore();


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

const validationSchema = Yup.object().shape({
    category: Yup.string().required('Campo requerido')  
});

//useForm
const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
} = useForm({
    resolver: yupResolver(validationSchema)
});

const saveChanges = (data) => {
    onCreateCategory(data);
    reset();
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
    title="Crear Categoria"
    subTitle=""
    content={getContent()}
    onSubmit={handleSubmit(saveChanges)}
    name="Agregar Categoria"
    colors="#43a047"
    startIcons={<AddBoxTwoToneIcon/>}
    />
    </div>
  )
}

export default CreateCategoryModal