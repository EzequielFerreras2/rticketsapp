import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ReasonCloseCasesList } from '../../../../helpers/List/ReasonCloseCases';
import { Grid} from '@mui/material';
import BasicButton from '../../../common/BasicButton/BasicButton';
import BackspaceTwoToneIcon from '@mui/icons-material/BackspaceTwoTone';
import PlagiarismTwoToneIcon from '@mui/icons-material/PlagiarismTwoTone';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const SearchByStatus = ({clearCasesFilter,filterByStatus}) => {


  const [statusS, setStatusS] = useState("");
    const handleSelectStatusChange = (event) => {setStatusS(event.target.value);};

    const filterStatus =()=>{

      filterByStatus(statusS);
  };
  
  const clearPriority =()=>{
  
      setStatusS("");
      clearCasesFilter();
  };
     

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl  sx={{ width:225}}>
                            <InputLabel id="status">Estatus</InputLabel>
                            <Select 
                                labelId="status"
                                id="status"
                                value={statusS}
                                label="Estatus"
                                onChange={handleSelectStatusChange}   
                            >
                            {
                                ReasonCloseCasesList.map((ReasonCloseCasesList)=>{
                                return (
                                    <MenuItem key={ReasonCloseCasesList} value={ReasonCloseCasesList}>{ReasonCloseCasesList} </MenuItem>
                                );
                                })
                                
                            }; 
                            </Select>
        </FormControl>

        <Grid sx={{mt:2}}
                 
                 >
                         <BasicButton
                         ml={1}
                         name={"Buscar"}
                         startIcons={<PlagiarismTwoToneIcon/>}
                         colors={"#0d47a1"}
                         onClick={()=>filterStatus()}
                         
                         />
     
                         <BasicButton
                         name={"Limpiar"}
                         startIcons={<BackspaceTwoToneIcon/>}
                         colors={"#90caf9"}
                         onClick={()=>clearPriority ()}
                         />
                 </Grid>
        <Stack sx={{ width: '100%',mt:4 }} spacing={2}>
        <Alert severity="info">
          <AlertTitle>Nota</AlertTitle>
          Casos cerrados filtrados por estatus aparacen en la casilla de cerrados.
        </Alert>
       </Stack>
      </Box>
    </div>
  )
}

export default SearchByStatus