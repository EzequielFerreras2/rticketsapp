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

             console.log(Account)

            dispatch(getUsers(Account));

            
        } catch ({response}) {

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



    return{

        //Propieties
        account,
       

        //Methos
        onGetUsers
    };

}