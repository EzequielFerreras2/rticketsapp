import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import SyncLockTwoToneIcon from '@mui/icons-material/SyncLockTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ChangePassAccModal from './AccountModals/ChangePassAccModal';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import EditModal from './AccountModals/EditModal';
import DeleteAccModal from './AccountModals/DeleteAccModal';

const AmdAccTable = ({Account}) => {
  
  const [openChangePassModal, setOpenChangePassModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [getAccount, setGetAccount] = useState([]);


  const openChangePass = (rowValue) =>{
    setGetAccount(rowValue.row)
    setOpenChangePassModal(true)
  };

  const openEdit = (rowValue) =>{
    setGetAccount(rowValue.row)
    setOpenEditModal(true)
  };

  const openDelete = (rowValue) =>{
    setGetAccount(rowValue.row)
    setOpenDeleteModal(true)
  };

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Nombre', width: 250 },
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
                          onClick={() => openChangePass(rowValue) } 
                        >
                          <SyncLockTwoToneIcon/>
                        </IconButton>
                        <IconButton
                          color='primary'
                          aria-label="Editar Usuario" 
                          component="label" 
                          onClick={() => openEdit(rowValue)} 
                        >
                          <ModeEditTwoToneIcon/>
                        </IconButton>
                        <IconButton 
                          color="error" 
                          aria-label="Borrar Usuario" 
                          component="label"
                          onClick={() => openDelete(rowValue)} 
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
        pageSize={10}
        rowsPerPageOptions={[10]}
      />

      <ChangePassAccModal 
      open ={openChangePassModal} 
      onClose={() => setOpenChangePassModal(false)}  
      getAccount={getAccount}
      />

      <EditModal 
      open ={openEditModal} 
      onClose={() => setOpenEditModal(false)}  
      getAccount={getAccount}
      />

      <DeleteAccModal
      open ={openDeleteModal} 
      onClose={() => setOpenDeleteModal(false)}  
      getAccount={getAccount}
      />
      
    </div>

    
  )
}

export default AmdAccTable