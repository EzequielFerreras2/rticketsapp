import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import { getCategory } from './categorySlice';

export const useCateoryStore =()=> {

    const { Category } =  useSelector( state => state.category );
    const dispatch = useDispatch();

    const ongetCateory =async() =>{

        try {
            const {data} = await rticketsApp.get('/cases/category');
            const {category} = data;
            
            dispatch(getCategory(category));
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

    const onCreateCateory = async(val)=>{
    
    };

    const onUpdateCateory = async(val)=>{
    
    };

    const onDeleteCateory = async(val)=>{
        
    };

    return{
        //Propieties
        Category,
        //Methos
        ongetCateory,
        onCreateCateory,
        onUpdateCateory,
        onDeleteCateory,
    };
}