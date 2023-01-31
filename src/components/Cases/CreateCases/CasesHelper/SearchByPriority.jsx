import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { priorityList } from '../../../../helpers/List/priority';
import { Grid} from '@mui/material';
import BasicButton from '../../../common/BasicButton/BasicButton';
import BackspaceTwoToneIcon from '@mui/icons-material/BackspaceTwoTone';
import PlagiarismTwoToneIcon from '@mui/icons-material/PlagiarismTwoTone';


const SearchByPriority = ({clearCasesFilter,filterByPriority}) => {
    const [priorityS, setPriorityS] = useState("");
    const handleSelectPriorityChange = (event) => {setPriorityS(event.target.value);};

const filterPriority =()=>{

    filterByPriority(priorityS);
};

const clearPriority =()=>{

    setPriorityS("");
    clearCasesFilter();
};
   
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl  sx={{ width:225}}>
                            <InputLabel id="priority">Prioridad</InputLabel>
                            <Select 
                                labelId="priority"
                                id="priority"
                                value={priorityS}
                                label="Prioridad"
                                onChange={handleSelectPriorityChange}   
                            >
                            {
                                priorityList.map((PriorityList)=>{
                                return (
                                    <MenuItem key={PriorityList} value={PriorityList}>{PriorityList} </MenuItem>
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
                         onClick={()=>filterPriority()}
                         
                         />
     
                         <BasicButton
                         name={"Limpiar"}
                         startIcons={<BackspaceTwoToneIcon/>}
                         colors={"#90caf9"}
                         onClick={()=>clearPriority ()}
                         />
                 </Grid>

      </Box>
    );
}

export default SearchByPriority