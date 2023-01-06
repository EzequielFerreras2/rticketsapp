import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import { getUsers, setUser } from './accountSlice';




export const useAccountStore =()=> {

    const { account,accounts } =  useSelector( state => state.account );
    const dispatch = useDispatch();

    const onGetUsers =async() =>{
        try {
            const {data} = await rticketsApp.get('/account');
            const {Account} = data;
            dispatch(getUsers(Account));
        } 
        catch ({response})
         {
            const{data} = response;
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

const onUdateUsers = async(val)=>{
 try {
    const {data} = await rticketsApp.put(`/account/updateacoount/${val.id}`,val);
    if (data.ok === true)
    {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Actualizado.',
            showConfirmButton: false,
            timer: 2000
          })
    }
    onGetUsers();
 } catch ({response})
 {
    const{data} = response;
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

    const changePassword = async(val)=>{
        try {
           const {data} = await rticketsApp.put(`/account/changepassword/${val.id}`,val);
           if (data.ok === true)
           {
               Swal.fire({
                   position: 'center',
                   icon: 'success',
                   title: 'Contraseña Actualizada.',
                   showConfirmButton: false,
                   timer: 2000
                 })
           }
           onGetUsers();
        } catch ({response})
        {
           const{data} = response;
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

    const onDeleteUsers = async(val)=>{
        try {
           const {data} = await rticketsApp.delete(`/account/${val.id}`,);
           if (data.ok === true)
           {
               Swal.fire({
                   position: 'center',
                   icon: 'success',
                   title: 'Usuario Eliminado.',
                   showConfirmButton: false,
                   timer: 2000
                 })
           }
           onGetUsers();
        } catch ({response})
        {
           const{data} = response;
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

       const setUsers=async(val)=>{

        const {data} = await rticketsApp.get(`/account/${val}`);
        const acc= data.Account;

        dispatch(setUser(acc));

        };

    return{

        //Propieties
        account,
        accounts,
       

        //Methos
        onGetUsers,
        onUdateUsers,
        changePassword,
        onDeleteUsers,
        setUsers
    };

}