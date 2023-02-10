import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import { getCategoryCases, getCategoryBySubCategory } from './categoryCasesSlice';

export const useCategoryCasesStore =()=> {

    const { CategoryCases,CategoryCasesBySubCategory } =  useSelector( state => state.categoryCases );
    const dispatch = useDispatch();

    const onGetCategoryCases =async() =>{

        try {
            const {data} = await rticketsApp.get('/cases/casescategory');
            const {CasesCategory} = data;
            
            dispatch(getCategoryCases(CasesCategory));
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

    const onfindCategoryCases =async(val) =>{

        try {
            const {data} = await rticketsApp.get(`/cases/casescategory/${val.category}/${val.subcategory}`);
            const {CasesCategory} = data;
            dispatch(getCategoryCases(CasesCategory));
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

    const onGetCategoryCasesByCategory =async(val) =>{

        try {
            const {data} = await rticketsApp.get(`/cases/casescategory/bycategory/${val}`);
            const {CasesCategory} = data;
            dispatch(getCategoryCases(CasesCategory));
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

    const onGetCategoryCasesBySubCategory =async(val) =>{
    
        try {
            const {data} = await rticketsApp.get(`/cases/casescategory/bysubcategory/${val}`);
            const {CasesCategory} = data;
            dispatch( getCategoryBySubCategory(CasesCategory));
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

        try {
            const {data} = await rticketsApp.post(`/cases/casescategory/${val.category}/${val.subcategory}`,val);
            if (data.ok === true)
            {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Categoria de Caso Creada.',
                showConfirmButton: false,
                timer: 2000,
                
            })
            }
            onGetCategoryCases();   
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

    const onUpdateCategoryCases = async(val)=>{

        try {
            const {data} = await rticketsApp.put(`/cases/casescategory/${val.id}/${val.category}/${val.subcategory}`,val);
            if (data.ok === true)
            {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Categoria de Caso Actualizada.',
                showConfirmButton: false,
                timer: 2000,
                
            })
            }
            onGetCategoryCases();   
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

    const onDeleteCategoryCases = async(val)=>{

        try {
            const {data} = await rticketsApp.delete(`/cases/casescategory/${val.id}`);
            if (data.ok === true)
            {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Categoria de Caso Eliminada.',
                showConfirmButton: false,
                timer: 2000,
                
            })
            }
            onGetCategoryCases();   
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
        CategoryCases,
        CategoryCasesBySubCategory,
        //Methos
        onGetCategoryCases,
        onfindCategoryCases,
        onGetCategoryCasesByCategory,
        onGetCategoryCasesBySubCategory,
        onCreateCategoryCases,
        onUpdateCategoryCases,
        onDeleteCategoryCases,
    };
}