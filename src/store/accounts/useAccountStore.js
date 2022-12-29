import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import { getUsers } from './accountSlice';



export const useAccountStore =()=> {

    const { account  } =  useSelector( state => state.account );
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

    }

const onUdateUsers = async(data)=>{

 try {

    const {Account}= await rticketsApp.put(`/account/${data.id}`,data);

    console.log(Account);
    
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




    dispatch(getUsers(account));

}

    return{

        //Propieties
        account,
       

        //Methos
        onGetUsers,
        onUdateUsers
    };

}