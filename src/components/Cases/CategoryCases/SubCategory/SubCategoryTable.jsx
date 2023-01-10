import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';



const SubCategoryTable = ({subCategory}) => {

   

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'subcategory', headerName: 'Sub-Categoria', width: 250 },
        { field: 'category', valueFormatter: (params) => params.value.category, headerName: 'Categoria', width: 250 },
        { field: 'Acciones',width: 150,
              renderCell:(rowValue) =>{
                  return(
                      <>
                        <IconButton
                          color='primary'
                          aria-label="Editar Usuario" 
                          component="label" 
                          onClick={() => prueba(rowValue.row)}
                        //   onClick={() => openEdit(rowValue)} 
                        >
                          <ModeEditTwoToneIcon/>
                        </IconButton>
                        <IconButton 
                          color="error" 
                          aria-label="Borrar Usuario" 
                          component="label"
                        //   onClick={() => openDelete(rowValue.row)} 
                        >
                          <DeleteTwoToneIcon />
                        </IconButton>
                      </>
                      
                  )
              }
          }
      ];

const prueba =(data)=>{

    console.log(data.category)

}

  return (
    <div style={{marginTop:2, height:400, width: '100%' }}>
    <DataGrid
        rows={subCategory}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
      </div>
  )
}

export default SubCategoryTable