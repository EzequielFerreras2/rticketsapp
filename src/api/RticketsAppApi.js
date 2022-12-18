import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const {API_URL} = getEnvVariables();

const rTicketsApi = axios.create({

  baseURL:'http://localhost:4001/api'

}); 


export default rTicketsApi; 