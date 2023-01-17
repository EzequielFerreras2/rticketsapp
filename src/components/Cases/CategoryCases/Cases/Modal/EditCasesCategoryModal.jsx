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
import{ priorityList} from '../../../../../helpers/List/priority';
import { useCategoryCasesStore } from '../../../../../store/CategoryCases/useCategoryCasesStore';


const EditCasesCategoryModal = ({open,onClose,getCategoryCases}) => {


    const{Category}= useCateoryStore();
    const {SubCategory}= useSubCategoryStore()
    const {onUpdateCategoryCases} = useCategoryCasesStore();

    const [categoryS, setCateogryS] = useState("");
    const [subCategoryS, setSubCateogryS] = useState("");
    const [priorityS, setPriorityS] = useState("");

    const handleSelectCategoryChange = (event) => {setCateogryS(event.target.value);};
    const handleSelectSubCategoryChange = (event) => {setSubCateogryS(event.target.value);};
    const handleSelectPriorityChange = (event) => {setPriorityS(event.target.value);};

    const CasesCa = async(data) =>{
        const SubCate = await data;
        if(SubCate !== undefined)
        {
            setValue('title',getCategoryCases.title);
            setCateogryS(getCategoryCases.category._id);
            setSubCateogryS(getCategoryCases.subcategory._id);
            setPriorityS(getCategoryCases.priority);
            setValue('description',getCategoryCases.description);
        };
      };
  

    useEffect(() => {
      
        
        CasesCa(getCategoryCases)

    }, [getCategoryCases]);

            const validationSchema = Yup.object().shape({
                title: Yup.string().required('Campo requerido'),
                category: Yup.string().required('Campo requerido'),
                subcategory: Yup.string().required('Campo requerido'),
                priority: Yup.string().required('Campo requerido'),
                description: Yup.string().required('Campo requerido') 
            });

            //useForm
            const {
                register,
                handleSubmit,
                reset,
                setValue,
                formState: { errors },
            } = useForm({
                resolver: yupResolver(validationSchema)
            });

            const saveChanges = (data) => {
                data.id=getCategoryCases.id 
                onUpdateCategoryCases(data);
                reset();
                onClose();
                setCateogryS("");
                setSubCateogryS("");
                setPriorityS("");
                
            };

    const getContent= () =>(
        <Grid container direction="row" sx={{mb:5}}  spacing={2}>
            <Grid item xs={12 }>   
            <TextField
                        fullWidth="true"
                        id="title"
                        label="Titulo"
                        {...register('title')}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
            </Grid>
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
                                Category.map((category)=>{
                                return (
                                    <MenuItem key={category.id} value={category.id} >{category.category} </MenuItem>
                                );
                                })
                                
                            }; 
                            </Select>
                        </FormControl>
                        <br/>
                        
                     </Grid>
                
                      <Grid  item xs={6}>

                      <FormControl fullWidth>
                            <InputLabel id="subcategory">Sub Categoria</InputLabel>
                            <Select
                                
                                labelId="subcategory"
                                id="subcategory"
                                value={subCategoryS}
                                {...register("subcategory")}
                                label="Sub Categoria"
                                onChange={handleSelectSubCategoryChange}
                                error={!!errors.company}
                                
                            >
                            {
                                SubCategory.map((subcategory)=>{
                                return (
                                    <MenuItem  key={subcategory.id} value={subcategory.id}>{subcategory.subcategory} </MenuItem>
                                );
                                })
                                
                            }; 
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid  item xs={6}>

                      <FormControl fullWidth>
                            <InputLabel id="priority">Prioridad</InputLabel>
                            <Select
                                
                                labelId="priority"
                                id="priority"
                                value={priorityS}
                                {...register("priority")}
                                label="Prioridad"
                                onChange={handleSelectPriorityChange}
                                error={!!errors.priority}
                                
                            >
                            {
                                priorityList.map((PriorityList)=>{
                                return (
                                    <MenuItem  key={PriorityList} value={PriorityList}>{PriorityList} </MenuItem>
                                );
                                })
                                
                            }; 
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12 }>   
            <TextField
                        fullWidth="true"
                        id="despription"
                        label="Descripcion"
                        multiline
                        maxRows={4}
                        {...register('description')}
                        error={!!errors.description}
                        helperText={errors.desription?.message}
                    />
            </Grid>
                    
        </Grid>
    );
    


  return (
    <div>
        <BasicModal
        open={open}
        onClose={onClose}
        title="Editar Categoria de Caso"
        subTitle=""
        content={getContent()}
        onSubmit={handleSubmit(saveChanges)}
        name="Editar Categoria de Caso"
        colors="#43a047"
        startIcons={<AddBoxTwoToneIcon/>}
    />
    </div>
  )
}

export default EditCasesCategoryModal