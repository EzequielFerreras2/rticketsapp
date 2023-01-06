import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import { getCategory } from './categorySlice';

export const useCateoryStore =()=> {

    const { Category } =  useSelector( state => state.category );
    const dispatch = useDispatch();

    const ongetCategory =async() =>{

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

    const onCreateCategory = async(val)=>{

        try {
            const {data} = await rticketsApp.post('/cases/category',val);
            if (data.ok === true)
            {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Categoria Creada.',
                showConfirmButton: false,
                timer: 2000
            })
            }   
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
            
            dispatch(getCategory(Category));
    };

    const onUpdateCategory = async(val)=>{

        try {
            const {data} = await rticketsApp.put(`/cases/category/${val.id}`,val);
            if (data.ok === true)
            {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Categoria Actualizada.',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
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
    
        dispatch(getCategory(Category));
    };

    const onDeleteCategory = async(val)=>{
        try {
            const {data} = await rticketsApp.delete(`/cases/category/${val.id}`);
            if (data.ok === true)
            {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Categoria Eliminada.',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
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
    
        dispatch(getCategory(Category));
        
    };

    return{
        //Propieties
        Category,
        //Methos
        ongetCategory,
        onCreateCategory,
        onUpdateCategory,
        onDeleteCategory,
    };
}