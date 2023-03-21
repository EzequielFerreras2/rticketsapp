
import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import { chekingCredentials, logIn, logOut } from './authSlice';


export const useAtuhStore = () =>{

    const {status, user, errorMessage } =  useSelector( state => state.auth );
    const dispatch = useDispatch();


    const startLogin = async({email,password}) =>{

        dispatch(chekingCredentials());

        try {

            const {data} = await rticketsApp.post('/auth/login',{email,password})
            localStorage.setItem('token', data.token);
            localStorage.setItem('rol',data.rol);
            localStorage.setItem('id',data.uid);
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

            console.log("Auth data");
            console.log(data);

            

            if(data.ok === false)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    showCloseButton: true,
                    text: `${data.msg}.!!!`,
                    
                  })
            };

            // dispatch(logOut(data.msg));

            
        }

    };

    const startRegister =async({name,email,password,departament,company}) =>{

        try {

            dispatch(chekingCredentials());
            const rol="User"
            const {data} = await rticketsApp.post('/auth/register',{name,email,password,departament,company,rol});

            localStorage.setItem('token', data.token);


            
            // localStorage.setItem('id',data.uid);
            // localStorage.setItem('rol',data.rol);
            // localStorage.setItem('token-init-date', new Date().getTime());
            // dispatch(

            //     logIn({
            //         id:data.uid,
            //         name:data.name,
            //         email:data.email,
            //         rol:data.rol,
            //         departament:data.departament,
            //         company:data.company
            //     }
            //     ));

        } catch ({response}) {

            const{data} = response;
            // dispatch(logOut(data.msg));

            if(data.ok === false)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `${data.msg}.!!!`,
                  })
            };

            
        }


    };


const checkToken = async() =>{

const token = localStorage.getItem('token');

if(!token)
{
    return dispatch(logOut('Token no Valido o Expirado'));

}
else{

    try {
        const {data} = await rticketsApp.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('rol',data.rol);
            localStorage.setItem('id',data.uid);
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
        localStorage.clear();
        dispatch(logOut(data.msg));
    }
}

};

const startLogOut =()=>{
    dispatch(logOut("Fin de la Secion"))
    localStorage.clear();
};
    return{

        //Propieties
        status,
        user,
        errorMessage,

        //Methos
        startLogin,
        startRegister,
        checkToken,
        startLogOut
    };


};