import { Button, IconButton, Menu, Typography } from '@mui/material';
import React, {useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EditCasesCategoryModal from '../Modal/EditCasesCategoryModal';
import DeleteCasesCategoryModal from '../Modal/DeleteCasesCategoryModal';

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
        { field: 'title', headerName: 'Titulo', width: 350 },
        { field: 'subcategory',valueFormatter: (params) => params.value.subcategory, headerName: 'Sub-Categoria', width: 200 },
        { field: 'category', valueFormatter: (params) => params.value.category, headerName: 'Categoria', width: 150},
        { field: 'priority',width: 150,headerName: 'Priority',
        
              renderCell:(rowValue) =>{
                var color;
                if(rowValue.row.priority ==="Alta"){color="#b71c1c"}
                if(rowValue.row.priority ==="Media"){color="#ffc107"}
                if(rowValue.row.priority ==="Baja"){color="#357a38"}

                  return(
                      <>
                         <Typography  sx={{pl:1, wordWrap:true ,width: 250 , color:color}}>
                                  <b><PriorityHighIcon/>{rowValue.row.priority}<PriorityHighIcon/></b>
                         </Typography> 
                      </>
                      
                  )
              }
          },   
        { field: 'Descripcion',width: 130,
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
      <EditCasesCategoryModal
        open ={openEditModal} 
        onClose={() => setOpenEditModal(false)}
        getCategoryCases={getCategoryCases} 
    />
     
    <DeleteCasesCategoryModal
        open ={openDeleteModal} 
        onClose={() => setOpenDeleteModal(false)}
        getCategoryCases={getCategoryCases} 
    />
      </div>
  )
}

export default CategoryCasesTable