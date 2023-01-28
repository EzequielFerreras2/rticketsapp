import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid, TextField } from '@mui/material';
import BasicButton from '../../../common/BasicButton/BasicButton';
import BackspaceTwoToneIcon from '@mui/icons-material/BackspaceTwoTone';
import PlagiarismTwoToneIcon from '@mui/icons-material/PlagiarismTwoTone';

const SearchByUser = () => {
    const [valueRadio, setValueRadio] = useState('');

    const handleRadioChange = (event) => {
        setValueRadio(event.target.value);
      };

    const searchByUser=()=>{

        if(valueRadio==="id")
        {
            console.log("Buscar Por ID");
        }
        else{
            console.log("Buscar Por nombre");
        }
        
    };


  return (
    <div>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Buscar Usuario por:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={valueRadio}
          onChange={handleRadioChange}
      >
        <FormControlLabel value="id" control={<Radio />} label="Id" />
        <FormControlLabel value="name" control={<Radio />} label="Nombre" />
        
      </RadioGroup>
    </FormControl>
    <Grid>
        <TextField id="outlined-basic" label={`Buscar por: ${valueRadio}`} variant="outlined" />
    </Grid>
    
    <Grid sx={{mt:2}}
                direction="row"
                justifyContent="flex-end"
                alignItems="center" 
            >
                    <BasicButton
                    onClick={()=>searchByUser()}
                    name={"Buscar"}
                    startIcons={<PlagiarismTwoToneIcon/>}
                    colors={"#0d47a1"}
                    
                    />

                    <BasicButton
                    name={"Limpiar"}
                    startIcons={<BackspaceTwoToneIcon/>}
                    colors={"#90caf9"}
                    
                    />
            </Grid>
    </div>
  )
}

export default SearchByUser