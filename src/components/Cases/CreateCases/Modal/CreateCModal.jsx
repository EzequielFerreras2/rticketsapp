
import React, { useEffect, useMemo, useState } from 'react'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BasicModal from '../../../common/BasicModal/BasicModal';
import { useCateoryStore } from '../../../../store/category/useCategoryStore';
import { useSubCategoryStore } from '../../../../store/subcategory/useSubCategory';
import { useCategoryCasesStore } from '../../../../store/CategoryCases/useCategoryCasesStore';
import { useCasesStore } from '../../../../store/cases/useCasesStore';
import { useAtuhStore } from '../../../../store/auth/useAuthStore';

const CreateCModal = ({open,onClose}) => {
    const {Category,ongetCategory}=useCateoryStore();
    const {SubCategoryByCategory,onGetSubCategoryByCategory} =useSubCategoryStore();
    const {CategoryCasesBySubCategory,onGetCategoryCasesBySubCategory}= useCategoryCasesStore();
    const {user}=useAtuhStore();
    const {onCreateCases}= useCasesStore();
    

    const [categoryS, setCateogryS] = useState("")
    const handleSelectCategoryChange = (event) => {setCateogryS(event.target.value); setSubCateogryS(""); setCateogryCaseS("")};

    const [subCategoryS, setSubCateogryS] = useState("")
    const handleSelectSubCategoryChange = (event) => {setSubCateogryS(event.target.value); setCateogryCaseS("")};

    const [categoryCaseS, setCateogryCaseS] = useState("")
    const handleSelectCategoryCaseChange = (event) => {setCateogryCaseS(event.target.value); };

    const isDisableSubCategory= useMemo( ()=> SubCategoryByCategory?.length === 0  , [SubCategoryByCategory]);
    const isDisableCategoryCase= useMemo( ()=> CategoryCasesBySubCategory?.length === 0, [CategoryCasesBySubCategory]);

   

    useEffect(() => {
        ongetCategory();
    }, []);

    useEffect(() => {
            onGetSubCategoryByCategory(categoryS);
    }, [categoryS]);

    useEffect(() => {
            onGetCategoryCasesBySubCategory(subCategoryS);
    }, [subCategoryS]);


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
        category: Yup.string().required('Campo requerido'),
        subCategory: Yup.string().required('Campo requerido'),
        categoryCases: Yup.string().required('Campo requerido'),
        details: Yup.string().required('Campo requerido').max(140,"La Descripcion no puede tener mas de 140 caracteres."),  
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
        data.openUser= user.id;
        onCreateCases(data);
        reset();
        setCateogryCaseS("");
        setCateogryS("");
        setSubCateogryS("");
        onClose();

      
    };

    const getContent =()=>(
    <Box sx={modalStyles.inputFields}>
            <Typography>
                Tipo de Caso:
            </Typography>
            <br/>
        <Grid container spacing={3}>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                            <InputLabel id="category">Categoria</InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                value={categoryS}
                                {...register("category")}
                                label="Categoria"
                                onChange={handleSelectCategoryChange}
                                error={errors.category ? true : false}
                                helperText={errors.category?.message}  
                            >
                            {
                                Category?.map((category)=>{
                                return (
                                    <MenuItem key={category.id} value={category.id} >{category.category} </MenuItem>
                                );
                                })
                                
                            }; 
                            </Select>
                        </FormControl>
                </Grid>

                <Grid item xs={4}>
                <FormControl fullWidth>
                            <InputLabel id="subCategory">SubCategoria</InputLabel>
                            <Select

                                labelId="subCategory"
                                id="subCategory"
                                value={subCategoryS}
                                {...register("subCategory")}
                                label="Sub Categoria"
                                onChange={handleSelectSubCategoryChange}
                                error={errors.subCategory ? true : false}
                                helperText={errors.subCategory?.message}
                                disabled={isDisableSubCategory}
                            >
                            {
                                SubCategoryByCategory?.map((subCategory)=>{
                                return (
                                    <MenuItem key={subCategory.id} value={subCategory.id}>{subCategory.subcategory} </MenuItem>
                                );
                                })
                                
                            }; 
                            </Select>
                        </FormControl>
                </Grid>
                
                <Grid item xs={4}>
                <FormControl fullWidth>
                            <InputLabel id="categoryCases">Tipo Caso </InputLabel>
                            <Select

                                labelId="categoryCases"
                                id="categoryCases"
                                value={categoryCaseS}
                                {...register("categoryCases")}
                                label="Categoria"
                                onChange={handleSelectCategoryCaseChange}
                                error={errors.categoryCases ? true : false}
                                helperText={errors.categoryCases?.message}
                                disabled={isDisableCategoryCase}
                            >
                            {
                                CategoryCasesBySubCategory?.map((categoryCase)=>{
                                return (
                                    <MenuItem key={categoryCase.id} value={categoryCase.id} >{categoryCase.title} </MenuItem>
                                );
                                })
                                
                            }; 
                            </Select>
                        </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
               <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="multiline"
                    label="Descripcion del Caso."
                    multiline
                    rows={4}
                    {...register("details")}
                    error={errors.details ? true : false}
                    helperText={errors.details?.message}
                    />
                      {/* <Alert variant="filled" severity="info">
                        Maximo 140 carateres en la Descripcion.
                     </Alert>  */}
               </Grid>
              
    
            </Grid>

    </Box>
    );
  return (
    <BasicModal
    open={open}
    onClose={onClose}
    title="Crear Caso"
    subTitle=""
    content={getContent()}
    onSubmit={handleSubmit(saveChanges)}
    name="Agregar Caso"
    colors="#43a047"
    startIcons={<AddBoxTwoToneIcon/>}
    />
  )
}

export default CreateCModal