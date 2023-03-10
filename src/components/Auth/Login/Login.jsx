import {useMemo} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// import { startGoogleSingIn, startLogi } from '../../../store/slices/auth';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logosss from '../../../img/2.png'

import {useAtuhStore} from '../../../store/auth/useAuthStore'

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

export default function Login({setNavbar}) {

const{startLogin,status}=useAtuhStore();
const isAuthenticating = useMemo( ()=> status ==='checking', [status]);
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
 
});

const { register, handleSubmit, formState: { errors },  } = useForm({
  resolver: yupResolver(schema),
});

const onSubmit=({email,password})=>{
  startLogin({email,password});
};



  return (
    
<ThemeProvider theme={theme}>

    <Box style={{position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}
    display="flex"justifyContent="center"alignItems="center" >

      <Grid container justify = "center" component="main" sx={{ height: '55vh', width: '120vh' }}>
              <CssBaseline />
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: 'url(https://9to5mac.com/wp-content/uploads/sites/6/2018/06/mojave-night.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                    <img src={logosss} alt="Logo" height={100}/>
                  <Typography component="h1" variant="h5">
                    LogIn
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate  sx={{ mt: 1 }}>
                        <TextField
                          margin="normal"
                          fullWidth
                          id="email"
                          {...register("email")}
                          label="Correo Electronico"
                          name="email" 
                          autoComplete="email"
                          error={errors.email ? true : false}
                          helperText={errors.email?.message}
                          
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          {...register("password")}
                          name="password"
                          label="Contraseña"
                          type="password"
                          id="password"
                          error={errors.password ? true : false}
                          helperText={errors.password?.message}
                        />
                        
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          style={{ background: '#0d47a1' }}
                          disabled={isAuthenticating}
                        >
                          LogIn
                        </Button>
                    <Grid container>
                      
                      <Grid item>
                        <Link  to='/register'  variant="body2">
                          {"No tienes cuenta? Registrate"}
                        </Link>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                    
                  </Box>
                  
                </Box>
              </Grid>
            </Grid>
    </Box>
      
  </ThemeProvider>
    
    
  );
}