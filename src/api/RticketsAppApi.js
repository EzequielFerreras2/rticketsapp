import axios from 'axios';
// import { getEnvVariables } from '../helpers/getEnvVariables';

// const {API_URL} = getEnvVariables();

const rTicketsApi = axios.create({

  baseURL:'http://localhost:4001/api',
  // baseURL:'https://rticketsapp-backend.herokuapp.com/api'


}); 


//Configurar inteceptores
rTicketsApi.interceptors.request.use( config =>{

config.headers={
  ...config.headers,
 'x-token':localStorage.getItem('token') 
}
  return config;
});

export default rTicketsApi; 