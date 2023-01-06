import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import SyncLockTwoToneIcon from '@mui/icons-material/SyncLockTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';


const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'category', headerName: 'Categoria', width: 250 },
    { field: 'Acciones',width: 150,
          renderCell:(rowValue) =>{
              return(
                  <>
                    <IconButton
                      color='primary'
                      aria-label="Editar Usuario" 
                      component="label" 
                    //   onClick={() => openEdit(rowValue)} 
                    >
                      <ModeEditTwoToneIcon/>
                    </IconButton>
                    <IconButton 
                      color="error" 
                      aria-label="Borrar Usuario" 
                      component="label"
                    //   onClick={() => openDelete(rowValue)} 
                    >
                      <DeleteTwoToneIcon />
                    </IconButton>
                  </>
                  
              )
          }
      }
  ];

const CategoryTable = ({Category}) => {

  return (
    <div style={{marginTop:2, height:400, width: '100%' }}>
    <DataGrid
        rows={Category}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}

export default CategoryTable