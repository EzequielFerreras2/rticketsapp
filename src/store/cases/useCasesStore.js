import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import {getCase,getCases,getCasesByUser} from '../cases/casesSlice'

export const useCasesStore = () => {

    const { Case,Cases,CasesByUser } =  useSelector( state => state.cases );
    const dispatch = useDispatch();

    const onGetCases =async() =>{

        try {
            const {data} = await rticketsApp.get('/cases');
            const {Cases} = data;
            console.log(data)
            dispatch(getCases(Cases));
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

  return {

     //Propieties
     Case,
     Cases,
     CasesByUser,
     //Methos
     onGetCases,
    
  };
}

 