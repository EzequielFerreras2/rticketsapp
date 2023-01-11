import {useSelector,useDispatch} from 'react-redux'

export const useCategoryCasesStore =()=> {

    const { CategoryCases } =  useSelector( state => state.CategoryCases );
    const dispatch = useDispatch();

    const onGetCategoryCases =async() =>{
            
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