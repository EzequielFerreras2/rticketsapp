import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'
// import { startCreatingUserWithEmailPassword } from '../../../store/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import logosss from '../../../img/2.png'


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
    displayName: yup.string().required().max(60),
    password: yup.string().min(8).max(32).required(),
    confPassword: yup.string().min(8).max(32).required(),
  });
  
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector( (state) => state.auth)
  const isAuthenticating = React.useMemo( ()=> status ==='checking', [status]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navegate = useNavigate();

  const onClickRegister =()=>{

    navegate('login')

  }

  const onSubmit = (data) => {
   
    if( data.password === data.confPassword)
    {

      console.log(data)

    //   if(!!errorMessage){
    //     Swal.fire({
    //       position: 'center',
    //       icon: 'error',
    //       title: 'Error...',
    //       text: errorMessage,
        
    //     })
    //   }
    }

    else
    {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error...',
        text: 'Las contraseñas deben ser iguales!',
     
      })
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
                 {...register("displayName")}
                  name="displayName"
                  fullWidth
                  id="displayName"
                  label="Nombre Completo"
                  autoFocus
                  error={!!errors.displayName}
                  helperText={errors.displayName?.message}
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