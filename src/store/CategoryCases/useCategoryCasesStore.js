import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import { getCategoryCases } from './categoryCasesSlice';

export const useCategoryCasesStore =()=> {

    const { CategoryCases } =  useSelector( state => state.CategoryCases );
    const dispatch = useDispatch();

    const onGetCategoryCases =async() =>{

        try {
            const {data} = await rticketsApp.get('/cases/casescategory');
            const {categoryCases} = data;
            dispatch(getCategoryCases(categoryCases));
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

    const onCreateCategoryCases = async(val)=>{
    
    };

    const onUpdateCategoryCases = async(val)=>{
    
    };

    const onDeleteCategoryCases = async(val)=>{
        
    };

    return{
        //Propieties
        CategoryCases,
        //Methos
        onGetCategoryCases,
        onCreateCategoryCases,
        onUpdateCategoryCases,
        onDeleteCategoryCases,
    };
}