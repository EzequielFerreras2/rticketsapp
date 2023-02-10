import { Alert, Grid, Stack } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import BasicModal from '../../../common/BasicModal/BasicModal';
import { useCasesStore } from '../../../../store/cases/useCasesStore';


const DeleteCasesModal = ({open,onClose}) => {

    const {Case,onDeleteCase} =useCasesStore();

    const onDelete =(data)=>{

        onDeleteCase(data);
        onClose();

    };
    const getContent= () =>(
  
        <>
            <Grid container spacing={1} 
            justifyContent="center"
            alignItems="center"
            >
              <Grid item xs={8}>
              <Stack sx={{ m:2, width: '100%' }} spacing={2}>
                  <Alert severity="error"><h2>!Estas Seguro que deseas eliminar el Caso!</h2></Alert>
              </Stack>
              </Grid>
            </Grid>
      
          
        </>
      
      );
      
  return (
    <div>
    <BasicModal
        open={open}
        onClose={onClose}
        content={getContent()}
        onSubmit={()=>onDelete(Case)}
        name="Eliminar"
        colors="#ab003c"
        startIcons={<DeleteIcon />}
        />
</div>
  )
}

export default DeleteCasesModal