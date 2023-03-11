import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import BasicModal from '../../../../common/BasicModal/BasicModal'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { useAccountStore } from '../../../../../store/accounts/useAccountStore';
import {rolList} from '../../../../../helpers/List/rolList'
import {companyList,departamentList} from '../../../../../helpers/List/compAndDepartList'


const EditModall = ({open, onClose, getAccount}) => {

    //Enviar update
    const {onUdateUsers} = useAccountStore();

    // estados De la aplicacion
    const [rol, setRol] = useState("")
    const [company, setCompany] = useState("")
    const [departament, setDepartament] = useState("")
  
        
    //estilo Modal
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


    //validaciones de Cambo
    const validationSchema = Yup.object().shape({
            
        name: Yup.string().required('Campo requerido').max(120, 'Nombre muy largo'),
        email: Yup.string().required('Campo requerido').max(60, 'Nombre muy largo'),
        departament: Yup.string().required('Campo requerido').max(60, 'Nombre muy largo'),
        rol: Yup.string().required('Campo requerido').max(60, 'Nombre muy largo'),
        company: Yup.string().required('Campo requerido').max(60, 'Nombre muy largo'),
            
            
    });

    //Carga de datos desde la tabla.
    const account = async(data) =>{

        const acc = await data;

        if(acc?.length !== 0)
        {
            setValue("name", data.name)
            setValue("email", data.email)
            setRol(acc.rol)
            setCompany(acc.company)
            setDepartament(acc.departament)
        }   
    };

    //cargar Datos Desde La Tabla

    useEffect(() => {
        account(getAccount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    //useFrom
    const {
            register,
            handleSubmit,
            setValue,
            formState: { errors },
    } = useForm({resolver: yupResolver(validationSchema)});

    //cargar info de los desde el select
    
    const handleSelectRolChange = (event) => {setRol(event.target.value);};
    const handleSelectDepartamentChange = (event) => {setDepartament(event.target.value);};
    const handleSelectCompanyChange = (event) => {setCompany(event.target.value);};

    const saveChanges =(data) =>{
        
        setValue("departament", data.departament)
        setValue("company", data.company)
        data.id= getAccount.id;
        // data.password = getAccount.password
        onUdateUsers(data);
        onClose();

    };

    const getContent = () => (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box sx={modalStyles.inputFields}>
                    <TextField
                        
                        id="name"
                        label="Nombre"
                        {...register('name')}
                        
                        
                    />
                    <TextField
                       
                        id="email"
                        label="Email"
                        {...register('email')}
                        
                        
                    />
                    
                    <FormControl fullWidth>
                    <InputLabel id="rol">Rol</InputLabel>
                    <Select

                        labelId="rol"
                        id="rol"
                        value={rol}
                        {...register("rol")}
                        label="Rol"
                        onChange={handleSelectRolChange}
                        error={!!errors.company}
                        
                    >
                    {
                        rolList.map((rol)=>{
                          return (
                            <MenuItem key={rol} value={rol}>{rol} </MenuItem>
                          );
                          })
                          
                    }; 
                    
                    </Select>
                  </FormControl>
                    
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={modalStyles.inputFields}>
                <FormControl fullWidth>
                    <InputLabel id="company">Compañia</InputLabel>
                    <Select
                      labelId="company"
                      id="company"
                      value={company}
                      {...register("company")}
                      label="Compañia"
                      onChange={handleSelectCompanyChange}
                      error={!!errors.company}
                     
                    >
                      {
                        companyList.map((company)=>{
                          return (
                            <MenuItem key={company} value={company}>{company} </MenuItem>
                          );
                          })
                          
                          };
                      
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="departament">Departamento</InputLabel>
                    <Select
                      labelId="departament"
                     
                      id="departament"
                      value={departament}
                      {...register("departament")}
                      label="departament"
                      onChange={handleSelectDepartamentChange}
                      error={!!errors.departament}
                      
                    >
                      {
                        departamentList.map((departament)=>{
                          return (
                            <MenuItem key={departament} value={departament}>{departament}</MenuItem>
                          );
                          })
                        };
                      
                    </Select>
                  </FormControl>
                </Box>
            </Grid>
        </Grid>
        
    );



  return (
    <div>
        <BasicModal
        open={open}
        onClose={onClose}
        title="Editar Usuario"
        subTitle=""
        content={getContent()}
        onSubmit={handleSubmit(saveChanges)}
        name="Editar"
 
        colors="#43a047"
        />
        
    </div>
  )
}

export default EditModall