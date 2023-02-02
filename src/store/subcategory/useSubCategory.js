import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import {getSubCategory,getSubCategoryByCategory} from '../subcategory/subCategorySlice'

export const useSubCategoryStore =()=> {

    const { SubCategory, SubCategoryByCategory } =  useSelector( state => state.subCategory );
    const dispatch = useDispatch();

    const onGetSubCategory =async() =>{

        try {
            const {data} = await rticketsApp.get('/cases/subcategory');
            const {subCategory} = data;
            dispatch(getSubCategory(subCategory));
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
    const onGetSubCategoryByCategory =async(val) =>{
        
        try {
            const {data} = await rticketsApp.get(`/cases/subcategory/bycategory/${val}`);
            const {subCategory} = data;
            dispatch(getSubCategoryByCategory(subCategory));
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

        try {
            const {data} = await rticketsApp.post(`/cases/subcategory/${val.category}`,val);
            if (data.ok === true)
            {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'SubCategoria Creada.',
                showConfirmButton: false,
                timer: 2000,
            })
            }
            onGetSubCategory();  
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

    const onUpdateSubCategory = async(val)=>{

        try {
            const {data} = await rticketsApp.put(`/cases/subcategory/${val.id}/${val.category}`,val);
            if (data.ok === true)
            {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'SubCategoria Actualizada.',
                showConfirmButton: false,
                timer: 2000,
                
            })
            }
            onGetSubCategory();  
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

    const onDeleteSubCategory = async(val)=>{

        try {
            const {data} = await rticketsApp.delete(`/cases/subcategory/${val.id}`,val);
            if (data.ok === true)
            {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'SubCategoria Eliminada.',
                showConfirmButton: false,
                timer: 2000,
                
            })
            }
            onGetSubCategory();  
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

    return{
        //Propieties
        SubCategory,
        SubCategoryByCategory,
        //Methos
        onGetSubCategory,
        onGetSubCategoryByCategory,
        onCreateSubCategory,
        onUpdateSubCategory,
        onDeleteSubCategory,
    };
}