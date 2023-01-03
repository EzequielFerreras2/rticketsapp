import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import BasicModal from '../../../../common/BasicModal/BasicModal'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { useAccountStore } from '../../../../../store/accounts/useAccountStore';
import {rolList} from '../AccountModals/List/rolList'
import { Password } from '@mui/icons-material';


const EditAccModal = ({open, onClose, getAccount}) => {

    const [rol, setRol] = useState("")
    const [company, setCompany] = useState("")
    const [departament, setDepartament] = useState("")

    const {onUdateUsers} = useAccountStore();

    const [values, setValues] = useState([]);

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
        
        name: Yup.string().required('Campo requerido').max(120, 'Nombre muy largo'),
        email: Yup.string().required('Campo requerido').max(60, 'Nombre muy largo'),
        departament: Yup.string().required('Campo requerido').max(60, 'Nombre muy largo'),
        rol: Yup.string().required('Campo requerido').max(60, 'Nombre muy largo'),
        company: Yup.string().required('Campo requerido').max(60, 'Nombre muy largo'),
        
          
    });


 const account = async(data) =>{

    const acc = await data;

    if(acc.length === 0)
    {

        console.log("emty")
        
    }
    else{


        setValues(acc)
        setRol(acc.rol)
    }

    
 }


    useEffect(() => {
     
        account(getAccount);


    }, [open])


    // useEffect(() => {

    //     if(values.rol !== undefined || values !== [])
    //     {
    //         console.log(values)
    //     }
      
      
    // }, [values])
    
    

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const handleSelectChange = (event) => {
        setRol(event.target.value);
        
      };

      const saveChanges =(data) =>{

        data.password = getAccount.password
        console.log(data);

      }

    const getContent = () => (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box sx={modalStyles.inputFields}>
                    <TextField
                        
                        id="name"
                        label="Nombre"
                        {...register('name')}
                        value={values.name}
                        
                    />
                    <TextField
                       
                        id="email"
                        label="Email"
                        {...register('email')}
                        value={values.email}
                        
                    />
                    
                    <FormControl fullWidth>
                    <InputLabel id="rol">Rol</InputLabel>
                    <Select

                        labelId="rol"
                        id="rol"
                        value={rol}
                        {...register("rol")}
                        label="Rol"
                        onChange={handleSelectChange}
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
                    <TextField
                       
                        id="departament"
                        label="Departamento"
                        {...register('departament')}
                        value={values.departament}
                        
                       
                    />
                    <TextField
                     
                        id="company"
                        label="Compañia"
                        {...register('company')}
                        value={values.company}
                        
                    />
                </Box>
            </Grid>
        </Grid>
        
    );



  return (
    <div><BasicModal
    open={open}
    onClose={onClose}
    title="Cambiar Contraseña"
    subTitle=""
    content={getContent()}
    onSubmit={handleSubmit(saveChanges)}/></div>
  )
}

export default EditAccModal