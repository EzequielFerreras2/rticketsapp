import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import EditCategoryModal from './Modal/EditCategoryModal';
import DeleteCategoryModal from './Modal/DeleteCategoryModal';




const CategoryTable = ({Category}) => {

const [openEditModal, setOpenEditModal] = useState(false);
const [openDeleteModal, setOpenDeleteModal] = useState(false);
const [getCategory, setGetCategory] = useState({});

const openEdit = (rowValue) =>{
    setGetCategory(rowValue.row)
    setOpenEditModal(true)
};

const openDelete = (rowValue) =>{
    setGetCategory(rowValue.row)
    setOpenDeleteModal(true)
};

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
    <div style={{marginTop:2, height:400, width: '100%' }}>
    <DataGrid
        rows={Category}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    <EditCategoryModal
        open ={openEditModal} 
        onClose={() => setOpenEditModal(false)}
        getCategory={getCategory} 
    />
    <DeleteCategoryModal
        open ={openDeleteModal} 
        onClose={() => setOpenDeleteModal(false)}
        getCategory={getCategory} 
    />
    </div>
  )
}

export default CategoryTable