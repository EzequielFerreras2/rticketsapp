import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const SelectCardPerPage = ({cardPerPages,handleChangeSelect}) => {
   
  return (
    
     <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Tamaño Pag:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={cardPerPages}
        onChange={handleChangeSelect}
      >
        <FormControlLabel value={3} control={<Radio />} label="3" />
        <FormControlLabel value={5} control={<Radio />} label="5" />
        <FormControlLabel value={10} control={<Radio />} label="10" />
        <FormControlLabel value={25} control={<Radio />} label="25" />
        <FormControlLabel value={50} control={<Radio />} label="50" />
      </RadioGroup>
    </FormControl>
  )
}

export default SelectCardPerPage