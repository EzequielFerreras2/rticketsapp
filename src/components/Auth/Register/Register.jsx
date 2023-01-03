import { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'
import logosss from '../../../img/2.png'
import { useAtuhStore } from '../../../store/auth/useAuthStore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {companyList,departamentList} from '../../../helpers/List/compAndDepartList'




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <a color="inherit" href='https://www.linkedin.com/in/ezequiel-ferreras-a20619134'>
        {"RticketsApp"}
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required().max(60),
    company: yup.string().required().max(60),
    departament: yup.string().required().max(60),
    password: yup.string().min(8).max(32).required(),
    confPassword: yup.string().min(8).max(32).required(),
  });
  
  const{status,startRegister}=useAtuhStore();
  const isAuthenticating = useMemo( ()=> status ==='checking', [status]);
  const [company, setCompany] = useState("")
  const [departament, setDepartament] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSelectChange = (event) => {
    setCompany(event.target.value);
  };
 
  const  handledepartamentChange = (event) => {
    setDepartament(event.target.value);
  };



  const onSubmit = (data) => {
   
    if( data.password !== data.confPassword)
    {

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error...',
        text: 'Las contraseñas deben ser iguales!',
     
      })
    }

    else
    {

      startRegister(data)
      
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logosss} alt="Logo" height={100}/>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >

                <TextField
                 {...register("name")}
                  name="name"
                  fullWidth
                  id="name"
                  label="Nombre Completo"
                  autoFocus
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  {...register("email")}
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  name="email"
                  autoComplete="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
              
                  <FormControl fullWidth>
                    <InputLabel id="company">Compañia</InputLabel>
                    <Select
                      labelId="company"
                      id="company"
                      value={company}
                      {...register("company")}
                      label="Compañia"
                      onChange={handleSelectChange}
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
                
              </Grid>
              <Grid item xs={12}>
              
                  <FormControl fullWidth>
                    <InputLabel id="departament">Departamento</InputLabel>
                    <Select
                      labelId="departament"
                     
                      id="departament"
                      value={departament}
                      {...register("departament")}
                      label="departament"
                      onChange={handledepartamentChange}
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
                
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  {...register("password")}
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register("confPassword")}
                  required
                  fullWidth
                  name="confPassword"
                  label="confirmar Contraseña"
                  type="Password"
                  id="confPassword"
                  error={!!errors.confPassword}
                  helperText={errors.confPassword?.message}
                />
                
              </Grid>
              
            </Grid>
            <Button
              disabled={isAuthenticating}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/login' variant="body2">
                  Ya tienes Cuenta? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}