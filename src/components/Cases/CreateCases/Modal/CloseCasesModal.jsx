/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { Alert, AlertTitle, Card, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BasicModal from '../../../common/BasicModal/BasicModal';
import { ReasonCloseCasesList} from '../../../../helpers/List/ReasonCloseCases'
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import { useCasesStore } from '../../../../store/cases/useCasesStore';
import Swal from 'sweetalert2';
import { useAtuhStore } from '../../../../store/auth/useAuthStore';


const CloseCasesModal = ({open, onClose,onOpen,actionName }) => {

    const {Case,onCloseCases} = useCasesStore();
    const {user}= useAtuhStore();
    const [reasonS, setReasonS] = useState("")
    const handleSelectReasonChange = (event) => {setReasonS(event.target.value);};

    


        //Estilo del Modal
        const modalStyles = {
            inputFields: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                marginBottom: '15px',
                '.MuiFormControl-root': {
                    marginBottom: '20px',
                },
            },
        };

        const validationSchema = Yup.object().shape({
            status: Yup.string().required('Campo requerido'),
            notesSuport: Yup.string().required('Campo requerido').max(140,"Las notas no puede tener mas de 140 caracteres."),  
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
    
        const saveChanges = (data) => {

            data.openCaseUser= Case.openCaseUser._id;
            data.closeCaseUser= user.id
            data.casesCategory = Case.casesCategory._id;
            data.id =Case.id;

           

            onClose()
            Swal.fire({
                title: `Esta seguro que desea ${actionName} Caso.`,
                showDenyButton: true,
                confirmButtonText: `${actionName} Caso.`,
                denyButtonText: `No ${actionName} Caso.`,
              }).then((result) => {

                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Listo.',
                        showConfirmButton: false,
                        timer: 2500,   
                    })
                  onCloseCases(data);
                  reset();
                  setReasonS("");

                } else if (result.isDenied) {
                    
                    onOpen();
                }
              })
    
        };

useEffect(() => {
if(Case!==null){
    setValue("notesSuport", Case.notesSuport === null? "":Case.notesSuport);
    setReasonS(Case.status);
}  
}, [Case]);
  

    const getContent=()=>(
        <Box sx={modalStyles.inputFields}>
            <br/>
    {
        Case !== null?
            <div>
                <Grid container spacing={3}>

<Grid container
    direction="row"
    justifyContent="center"
    alignItems="center">

<Stack sx={{ width: '100%' }} spacing={3}>
    <Alert severity="info">
    <AlertTitle sx={{p:2}}>Caso #: <b>{Case.id}</b></AlertTitle>
 
 <Grid  
    container  
    direction="row"
    justifyContent="centar"
    alignItems="center"
    spacing={2}
    sx={{mb:2}}
    >

    

        <Grid item xs={6}>
            <Card sx={{p:3,backgroundColor:"#bbdefb"}}>
            <Typography><b>User Info:</b></Typography>
            <p><b>Usuario: </b>{Case.openCaseUser.name}</p>
            <p><b>Correo: </b>{Case.openCaseUser.email}</p>
            <p><b>Departamento: </b>{Case.openCaseUser.departament}</p>
            </Card>
            
        </Grid>
        <Grid  item xs={6}>
        <Card sx={{p:2,backgroundColor:"#bbdefb"}}>
            <Typography><b>Case Info:</b></Typography>
            <p><b>Estatus: </b>{Case.status}</p>
            <p><b>Titulo: </b>{Case.casesCategory.title}</p>
            <p><b>Priridad: </b>{Case.casesCategory.priority}</p>
            <p><b>Fecha De Apertura: </b>{Case.openDate}</p>
            </Card>
        </Grid>

    
    </Grid>

    </Alert>
    </Stack>


    </Grid>

    <Grid item xs={12}>
        <Typography variant="h5"><b>Opciones:</b></Typography>
        <br/>
        <FormControl fullWidth>
                <InputLabel id="status">Estatus {actionName} Caso</InputLabel>
                <Select
                    labelId="status"
                    id="status"
                    value={reasonS}
                    {...register("status")}
                    label="Estatus Del Cierre"
                    onChange={handleSelectReasonChange}
                    error={errors.status ? true : false}
                    helperText={errors.status?.message}  
                >
                {
                     ReasonCloseCasesList.map((reason)=>{
                    return (
                        <MenuItem key={reason} value={reason} >{reason} </MenuItem>
                    );
                    })
                    
                }; 
                </Select>
            </FormControl>
    </Grid>

</Grid> 

<Grid container spacing={4}>
   <Grid item xs={12}>
    <TextField
        fullWidth
        id="multiline"
        label="Notas Del Caso."
        multiline
        rows={4}
        {...register("notesSuport")}
        error={errors.notesSuport ? true : false}
        helperText={errors.notesSuport?.message}
        />
   </Grid>
</Grid>
            </div>
        :
        <div></div>
    }
    

</Box>
    );

  return (
    <BasicModal
    open={open}
    onClose={onClose}
    title={`${actionName} Caso`}
    content={getContent()}
    onSubmit={handleSubmit(saveChanges)}
    name={actionName}
    colors="#0d47a1"
    startIcons={<AssignmentTurnedInTwoToneIcon/>}
    />
  )
}

export default CloseCasesModal