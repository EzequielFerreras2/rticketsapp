import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectCardPerPage = ({cardPerPages,handleChangeSelect}) => {
   console.log(cardPerPages) 
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tamaño de pagina: </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cardPerPages}
          label="Age"
          onChange={handleChangeSelect}
        >
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectCardPerPage