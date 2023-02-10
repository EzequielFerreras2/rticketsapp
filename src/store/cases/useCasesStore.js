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

  const onGetCasesById =async(Cases) =>{

    try {
        dispatch(getCase(Cases));
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

  const onCreateCases = async(val)=>{

    console.log("store")
    console.log(val);

    try {
        const {data} = await rticketsApp.post(`/cases/${val.openUser}/${val.categoryCases}`,val);
        if (data.ok === true)
        {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Caso Creado.',
            showConfirmButton: false,
            timer: 2500,
            
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
        
        
};

const onDeleteCase =async(val) =>{

  try {
    const {data} = await rticketsApp.delete(`/cases/${val.id}`);
      if (data.ok === true)
        {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Caso Eliminado.',
            showConfirmButton: false,
            timer: 2500,
            
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
      
};

  return {

     //Propieties
     Case,
     AllCases,
     CasesByUser,
    
     //Methos
     onGetCases,
     onGetCasesByUser,
     onCreateCases,
     onGetCasesById,
     onDeleteCase
    
  };
}

 