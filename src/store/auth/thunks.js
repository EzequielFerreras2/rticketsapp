import { login, logout, chekingCredentials } from './authSlice'

export const checkingAuthentication =() =>{
    return async( dispatch ) =>{
        dispatch(chekingCredentials());
    };
};