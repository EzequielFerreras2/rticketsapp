import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import {getCase,getCases,getCasesByUser} from '../cases/casesSlice'

export const useCasesStore = () => {

    const { Case,AllCases,CasesByUser } =  useSelector( state => state.cases );
    const dispatch = useDispatch();

    const onGetCases =async() =>{

        try {
            const {data} = await rticketsApp.get('/cases');
            const {Cases} = data;
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

    const onGetCasesByUser =async(id) =>{

      try {
          const {data} = await rticketsApp.get(`/cases/${id}`);
          const {Cases} = data;
          console.log(Cases);
          dispatch(getCasesByUser(Cases));
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
     AllCases,
     CasesByUser,
     //Methos
     onGetCases,
     onGetCasesByUser
    
  };
}

 