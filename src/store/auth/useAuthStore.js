
import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import { chekingCredentials, clearErrorMessage, logIn, logOut } from './authSlice';


export const useAtuhStore = () =>{

    const {status, user,errorMessage } =  useSelector( state => state );
    const dispatch = useDispatch();

    const startLogin = async({email,password}) =>{

        dispatch(chekingCredentials());

        try {

            const {data} = await rticketsApp.post('/auth/login',{email,password})
            localStorage.setItem('token', data.token);
            localStorage.setItem('rol',data.rol);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(
            
                logIn({
                    id:data.uid,
                    name:data.name,
                    email:data.email,
                    rol:data.rol,
                    departament:data.departament,
                    company:data.company
                }
                ));
            
        } catch ({response}) {

            const{data} = response;

            console.log(data)

            dispatch(logOut(data.msg));

            if(data.ok === false)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `${data.msg}.!!!`,
                  })
            };

            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 1000);

            
        
            

            
        }

    };


    return{

        //Propieties
        status,
        user,
        errorMessage,

        //Methos
        startLogin
    };


};