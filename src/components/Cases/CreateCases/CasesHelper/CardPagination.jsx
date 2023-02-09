import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CardPagination = ({Caseslength, setCurrentPage}) => {

const handleChanges =(e,p)=>{
    setCurrentPage(p);
  
}

  return (
    <div>
        <Stack spacing={2}>
          <Pagination count={Caseslength} color="primary" onChange={handleChanges} />
        </Stack>
    </div>
  )
}

export default CardPagination