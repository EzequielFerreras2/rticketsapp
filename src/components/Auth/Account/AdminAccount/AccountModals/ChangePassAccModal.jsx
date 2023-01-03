import { FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import BasicModal from '../../../../common/BasicModal/BasicModal'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { useAccountStore } from '../../../../../store/accounts/useAccountStore';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ChangePassAccModal = ({open, onClose, getAccount}) => {

    //update Data
    const {changePassword} = useAccountStore();

    //password visibility Control
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {event.preventDefault();};

    //Valores
    const [values, setValues] = useState([]);

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

    //validaciones formulario
    const validationSchema = Yup.object().shape({
        password: Yup.string().required('Campo requerido').min(8, 'La contraseña debe ser mayor a 8 Caracteres')
        .max(36, 'La contraseña debe ser menor a 36 Caracteres'),
        confPassword: Yup.string().required('Campo requerido').min(8, 'La contraseña debe ser mayor a 8 Caracteres')
        .max(36, 'La contraseña debe ser menor a 36 Caracteres').oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales'),
          
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
        if(data.password !== data.confPassword)
        {
               
        }
        else
        {
            setValue("name", getAccount.name);
            setValue("email", getAccount.email);
            setValue("departament", getAccount.departament);
            setValue("company", getAccount.company);
            data.id= getAccount.id;
            data.rol=getAccount.rol;
            changePassword(data);
            reset();
            onClose();
        }
    };


    useEffect(() => {
        if (open){
            setValues(getAccount);
        } 
    }, [open]);


    const getContent = () => (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box sx={modalStyles.inputFields}>
                    <TextField
                        disabled
                        id="name"
                        label="Nombre"
                        {...register('name')}
                        value={values.name}
                        variant="standard"
                    />
                    <TextField
                        disabled
                        id="email"
                        label="Email"
                        {...register('email')}
                        value={values.email}
                        variant="standard"
                    />
                    <h4>Cambiar Contraseña</h4>
                    

                    <FormControl  variant="outlined">
                        <InputLabel htmlFor="Password">Password</InputLabel>
                        <OutlinedInput
                            placeholder="Password"
                            name="Password"
                            label="Password"
                            {...register('password')}
                            error={errors.password ? true : false}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                        </FormControl>

                        <FormControl  variant="outlined">
                            <InputLabel htmlFor="Password">Conf. Password</InputLabel>
                            <OutlinedInput
                                placeholder="Conf. Password"
                                name="confPassword"
                                label="confPassword"
                                {...register('confPassword')}
                                error={errors.confPassword ? true : false}
                                helperText={errors.confPassword?.message}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={modalStyles.inputFields}>
                    <TextField
                        disabled
                        id="departament"
                        label="Departamento"
                        {...register('departament')}
                        value={values.departament}
                        variant="standard"
                        color="success"
                       
                    />
                    <TextField
                        disabled
                        id="company"
                        label="Compañia"
                        {...register('company')}
                        value={values.company}
                        variant="standard"
                        color="success"
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
    title="Cambiar Contraseña"
    subTitle=""
    content={getContent()}
    onSubmit={handleSubmit(saveChanges)}/>

</div>
    
  )
}

export default ChangePassAccModal