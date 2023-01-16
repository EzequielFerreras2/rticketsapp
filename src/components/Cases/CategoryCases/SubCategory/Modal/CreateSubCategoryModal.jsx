import React, { useEffect, useState } from 'react'
import BasicModal from '../../../../common/BasicModal/BasicModal'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useCateoryStore } from '../../../../../store/category/useCategoryStore';
import { useSubCategoryStore } from '../../../../../store/subcategory/useSubCategory';

const CreateSubCategoryModal = ({open,onClose}) => {

    const{Category}= useCateoryStore();
    const {onCreateSubCategory}= useSubCategoryStore();

    const [categoryS, setCateogryS] = useState("")
    const [category, setCategory] = useState([]);
    const handleSelectCategoryChange = (event) => {setCateogryS(event.target.value);};

useEffect(() => {
    setCategory(Category)
}, [Category]);

const validationSchema = Yup.object().shape({
    subcategory: Yup.string().required('Campo requerido')  
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
    onCreateSubCategory(data);
    reset();
    onClose();
    setCateogryS("")
    
};

const getContent= () =>(
    <Grid container direction="row" sx={{mb:5}}  spacing={2}>
            <Grid  item xs={6}>
                <FormControl fullWidth>
                        <InputLabel id="category">Categoria</InputLabel>
                        <Select

                            labelId="category"
                            id="category"
                            value={categoryS}
                            {...register("category")}
                            label="Categoria"
                            onChange={handleSelectCategoryChange}
                            error={!!errors.company}
                            
                        >
                        {
                            category.map((category)=>{
                            return (
                                <MenuItem key={category.id} value={category.id}>{category.category} </MenuItem>
                            );
                            })
                            
                        }; 
                        </Select>
                    </FormControl>
                 </Grid>
            
                  <Grid  item xs={6}>
                  <TextField
                    fullWidth="true"
                    id="subcategory"
                    label="Sub Categoria"
                    {...register('subcategory')}
                    error={!!errors.subcategory}
                    helperText={errors.subcategory?.message}
                />
                
                </Grid>
                
    </Grid>
);

  return (
    <div>
    <BasicModal
        open={open}
        onClose={onClose}
        title="Crear Sub Categoria"
        subTitle=""
        content={getContent()}
        onSubmit={handleSubmit(saveChanges)}
        name="Agregar SubCategoria"
        colors="#43a047"
        startIcons={<AddBoxTwoToneIcon/>}
    />
    </div>
  )
}

export default CreateSubCategoryModal