import React, { useEffect, useState } from 'react';
import BasicModal from '../../../../common/BasicModal/BasicModal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useCateoryStore } from '../../../../../store/category/useCategoryStore';
import { useSubCategoryStore } from '../../../../../store/subcategory/useSubCategory';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';

const EditSubCategoryModal = ({open,onClose,getSubCategory}) => {

  //Estado desde el Store
  const{Category}= useCateoryStore();
  const {onUpdateSubCategory}= useSubCategoryStore();

  //Estados Locales
  const [categoryS, setCategoryS] = useState("");
  const [category, setCategory] = useState([]);
  const [getSubCategories, setGetSubCategories] = useState({});

  //Manejo Cambios Select
  const handleSelectCategoryChange = (event) => {setCategoryS(event.target.value);};

  //Validacion YUp
  const validationSchema = Yup.object().shape({
    subcategory: Yup.string().required('Campo requerido'),  
  });

  //useForm
  const {register,handleSubmit,setValue,reset,formState: { errors }} = useForm({resolver: yupResolver(validationSchema)});

  //Carga de datos desde la tabla.
  const subCa = async(data) =>{
    const SubCate = await data;
    if(SubCate !== undefined)
    {
      setValue("subcategory",SubCate.subcategory);
      setCategoryS(SubCate.category._id);
    };
  };

  //Actualizar Estatdos de la Aplicacion
  useEffect(() => {setCategory(Category)}, [Category]);
  useEffect(() => {setGetSubCategories(getSubCategory);}, [getSubCategory]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {subCa(getSubCategories);}, [getSubCategories]);

  //Actualizar Cambios
  const saveChanges = (data) => { 
  if (data.category === '')
  {
    data.category = getSubCategories.category._id;
  }
    data.id= getSubCategories.id;
    onUpdateSubCategory(data);
    reset();
    onClose();
    subCa(getSubCategories);
  };

  //Contenido Modal
  const getContent= () =>(
    <Grid container direction="row" sx={{mb:5}}  spacing={2}>
            <Grid  item xs={6}>
                <FormControl fullWidth>
                        <InputLabel id="category">Categoria</InputLabel>
                        <Select
                            selected
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
                    fullWidth={true}
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
          title="Editar SubCategoria"
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

export default EditSubCategoryModal