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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

const SearchByUser = ({filterByUser,clearCasesFilter}) => {
    const [valueRadio, setValueRadio] = useState('');
    const user = {type:"",value:""}

    const handleRadioChange = (event) => {
        setValueRadio(event.target.value);
      };

    const searchByUser=(data)=>{
          
        if(valueRadio==="id")
        {
            user.type="Id"
            user.value=data;
            filterByUser(user);
            
        }
        else{
            user.type="Name"
            user.value=data;
            filterByUser(user);
        }
        
    };


    
    const validationSchema = Yup.object().shape({
      search: Yup.string().required('Campo requerido'),
  });
  

  

  //useForm
  const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
  } = useForm({
      resolver: yupResolver(validationSchema)
  });



  return (
    <div>
      <form onSubmit={handleSubmit(searchByUser)}>
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
        <TextField {...register("search")}  id="outlined-basic" label={`Buscar por: ${valueRadio}`} variant="outlined" />
    </Grid>
    
    <Grid sx={{mt:2}}
                direction="row"
                justifyContent="flex-end"
                alignItems="center" 
            >
                    <BasicButton
                    type="submit"
                   
                    name={"Buscar"}
                    startIcons={<PlagiarismTwoToneIcon/>}
                    colors={"#0d47a1"}
                    
                    />

                    <BasicButton
                    name={"Limpiar"}
                    onClick={()=>clearCasesFilter()}
                    startIcons={<BackspaceTwoToneIcon/>}
                    colors={"#90caf9"}
                    
                    />
            </Grid>
          </form>
    </div>
  )
}

export default SearchByUser