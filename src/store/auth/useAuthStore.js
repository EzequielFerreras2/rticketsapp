
import {useSelector,useDispatch} from 'react-redux'
import  rticketsApp from '../../api/RticketsAppApi'

export const useAtuhStore = () =>{


    const {status, user,errorMessage } =  useSelector( state => state );
    const dispatch = useDispatch();

    const startLogin = async({email,password}) =>{

        try {

            const resp = await rticketsApp.post('/auth/login',{email,password})
            console.log({resp});
            
        } catch (error) {

            console.log({error});
            
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