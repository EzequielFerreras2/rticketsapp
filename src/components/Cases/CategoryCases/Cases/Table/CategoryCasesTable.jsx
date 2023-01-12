import { Box, Button, Collapse, IconButton, Menu, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, {useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CategoryCasesTable = ({CasesCategory}) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [getCategoryCases, setGetCategoryCases] = useState({});
  const [details, setDetails] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event,rowValue) => {
    setDetails(rowValue.row.description);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const openEdit = (rowValue) =>{
    setGetCategoryCases(rowValue.row);
      setOpenEditModal(true);
  };
  
  const openDelete = (rowValue) =>{

    setGetCategoryCases(rowValue);
      setOpenDeleteModal(true);
  };
  

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'title', headerName: 'Titulo', width: 250 },
        { field: 'subcategory',valueFormatter: (params) => params.value.subcategory, headerName: 'Sub-Categoria', width: 100 },
        { field: 'category', valueFormatter: (params) => params.value.category, headerName: 'Categoria', width: 100},
        { field: 'priority', headerName: 'Prioridad', width: 100 },
        { field: 'Descripcion',width: 350,
              renderCell:(rowValue) =>{
                
                  return(
                      <>
                          <Button
                          
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={(event)=>handleClick(event,rowValue)}
                        >
                          Ver Descipcion
                          
                        </Button>
                        <Menu
                         
                          style={{ wordWrap:true ,width: 300}}
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                         <Typography sx={{pl:1, wordWrap:true ,width: 250}}>
                                  {details}
                         </Typography> 
                        </Menu>
                          
                      </>
                      
                  )
              }
          },
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
          },   
      ];
  return (
    <div style={{marginTop:2, height:400, width: '100%' }}>
    <DataGrid
        autoHeight
        rows={CasesCategory}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
      {/* <EditSubCategoryModal
        open ={openEditModal} 
        onClose={() => setOpenEditModal(false)}
        getSubCategory={getSubCategory} 
    />
    <DeleteSubCategoryModal
        open ={openDeleteModal} 
        onClose={() => setOpenDeleteModal(false)}
        getSubCategory={getSubCategory} 
    /> */}
      </div>
  )
}

export default CategoryCasesTable