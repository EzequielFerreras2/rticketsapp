import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import SyncLockTwoToneIcon from '@mui/icons-material/SyncLockTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ChangePassAccModal from './AccountModals/ChangePassAccModal';

const AmdAccTable = ({Account,onUdateUsers}) => {
  const [openChangePassModal, setOpenChangePassModal] = useState(false);
  const [getAccount, setGetAccount] = useState([]);

  const getAcc = (rowValue) =>{
    setGetAccount(rowValue.row)
    setOpenChangePassModal(true)
  };

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Nombre', width: 200 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'rol', headerName: 'Rol', width: 130 },
        { field: 'departament', headerName: 'Departamento', width: 200 },
        { field: 'company', headerName: 'Compañia', width: 200 },
        { field: 'Acciones',width: 150,
              renderCell:(rowValue) =>{
                  return(
                      <>
                        <IconButton
                          color='primary'
                          aria-label="Cambiar Contraseña" 
                          component="label" 
                          onClick={() => getAcc(rowValue)} 
                        >
                          <SyncLockTwoToneIcon/>
                        </IconButton>
                        <IconButton 
                        color="error" 
                        aria-label="Borrar Usuario" 
                        component="label"
                        >
                          <DeleteTwoToneIcon />
                        </IconButton>
                      </>
                      
                  )
              }
          }
      ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={Account}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
       
      />

      <ChangePassAccModal 
      open ={openChangePassModal} 
      onClose={() => setOpenChangePassModal(false)}  
      getAccount={getAccount}
     
      />
    </div>

    
  )
}

export default AmdAccTable