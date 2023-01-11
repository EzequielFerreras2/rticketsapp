import { IconButton } from '@mui/material';
import React, {useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import EditSubCategoryModal from './Modal/EditSubCategoryModal';
import DeleteSubCategoryModal from './Modal/DeleteSubCategoryModal';



const SubCategoryTable = ({subCategory}) => {

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [getSubCategory, setGetSubCategory] = useState({});
  
  const openEdit = (rowValue) =>{
      setGetSubCategory(rowValue.row);
      setOpenEditModal(true);
  };
  
  const openDelete = (rowValue) =>{
 
      setGetSubCategory(rowValue);
      setOpenDeleteModal(true);
  };
  

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
                          
                          onClick={() => openEdit(rowValue)} 
                        >
                          <ModeEditTwoToneIcon/>
                        </IconButton>
                        <IconButton 
                          color="error" 
                          aria-label="Borrar Usuario" 
                          component="label"
                          onClick={() => openDelete(rowValue.row)} 
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
        rows={subCategory}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
      <EditSubCategoryModal
        open ={openEditModal} 
        onClose={() => setOpenEditModal(false)}
        getSubCategory={getSubCategory} 
    />
    <DeleteSubCategoryModal
        open ={openDeleteModal} 
        onClose={() => setOpenDeleteModal(false)}
        getSubCategory={getSubCategory} 
    />
      </div>
  )
}

export default SubCategoryTable