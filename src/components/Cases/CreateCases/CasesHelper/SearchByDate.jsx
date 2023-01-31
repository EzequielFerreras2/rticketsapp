import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment';
import BackspaceTwoToneIcon from '@mui/icons-material/BackspaceTwoTone';
import PlagiarismTwoToneIcon from '@mui/icons-material/PlagiarismTwoTone';
import BasicButton from '../../../common/BasicButton/BasicButton';

const SearchByDate = ({ filterbyDate, clearCasesFilter}) => {
    const [valueDate, setValueDate] = React.useState(null);

    const clearDate =()=>
  {setValueDate(null);clearCasesFilter();};

  const handleChangeDate = (newValue) => 
  {var time;time=moment(newValue.$d).format('L');setValueDate(time); };

  const searchByDate =()=>{

    filterbyDate(valueDate);
  };




  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Fecha De Creacion"
                    value={valueDate}
                    onChange={(newValue) => handleChangeDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                    />
            </LocalizationProvider>
            <Grid sx={{mt:2}}
                 
            >
                    <BasicButton
                    ml={2}
                    name={"Buscar"}
                    startIcons={<PlagiarismTwoToneIcon/>}
                    colors={"#0d47a1"}
                    onClick={()=>searchByDate()}
                    />

                    <BasicButton
                    name={"Limpiar"}
                    startIcons={<BackspaceTwoToneIcon/>}
                    colors={"#90caf9"}
                    onClick={()=>clearDate()}
                    />
            </Grid>
    </div>
  )
}

export default SearchByDate