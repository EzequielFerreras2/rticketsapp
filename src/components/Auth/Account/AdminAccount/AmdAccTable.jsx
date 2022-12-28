import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const AmdAccTable = ({Account}) => {


    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Nombre', width: 200 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'rol', headerName: 'Rol', width: 130 },
        { field: 'departament', headerName: 'Departamento', width: 200 },
        { field: 'company', headerName: 'Compañia', width: 200 },
      ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={Account}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default AmdAccTable