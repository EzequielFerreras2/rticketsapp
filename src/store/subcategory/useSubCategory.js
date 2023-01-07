import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import {getSubCategory} from '../subcategory/subCategorySlice'

export const useSubCategoryStore =()=> {

    const { SubCategory } =  useSelector( state => state.subCategory );
    const dispatch = useDispatch();

    const onGetSubCategory =async() =>{

        try {
            const {data} = await rticketsApp.get('/cases/subcategory');
            const {subcategory} = data;
            dispatch(getSubCategory(subcategory));
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

    const onCreateSubCategory = async(val)=>{
    
    };

    const onUpdateSubCategory = async(val)=>{
    
    };

    const onDeleteSubCategory = async(val)=>{
        
    };

    return{
        //Propieties
        SubCategory,
        //Methos
        onGetSubCategory,
        onCreateSubCategory,
        onUpdateSubCategory,
        onDeleteSubCategory,
    };
}