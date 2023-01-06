import React, { useEffect, useState } from 'react'
import BasicModal from '../../../../common/BasicModal/BasicModal'
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Grid} from '@mui/material';
import { useAccountStore } from '../../../../../store/accounts/useAccountStore';

const DeleteAccModal = ({open, onClose, getAccount}) => {

    //Eliminar
    const {onDeleteUsers} = useAccountStore();
    const [values, setValues] = useState({})

  useEffect(() => {
    if (open){
      setValues(getAccount);
    };

  }, [open,getAccount])
  

const getContent= () =>(

  <>
      <Grid container spacing={1} 
      justifyContent="center"
      alignItems="center"
      >
        <Grid item xs={8}>
        <Stack sx={{ m:2, width: '100%' }} spacing={2}>
            <Alert severity="warning"><h2>!Estas Seguro que deseas eliminar el usuario!</h2></Alert>
            <Alert severity="error">
              <p><b>Nombre:</b> {values.name}</p>
              <p><b>Email:</b> {values.email}</p>
              <p><b>Compañia:</b> {values.company}</p>
              <p><b>Departemento:</b> {values.departament}</p>
            </Alert>  
        </Stack>
        </Grid>
      </Grid>

    
  </>

);

const saveChanges =(data)=>{
  onDeleteUsers(data);
  onClose();
};

  return (
    <div>
       <BasicModal
        open={open}
        onClose={onClose}
        title="Eliminar Usuario"
        subTitle=""
        content={getContent()}
        onSubmit={()=>saveChanges(values)}
        name="Eliminar"
        colors="#b2102f"
        
        startIcons={<DeleteIcon />}
        />
        
    </div>
  )
}

export default DeleteAccModal