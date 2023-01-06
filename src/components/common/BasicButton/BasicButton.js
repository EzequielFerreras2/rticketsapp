import { Button } from '@mui/material'
import React from 'react'

const BasicButton = ({onClick,startIcons,colors,name}) => {
  return (
    <Button
        variant='outlined'
        onClick={onClick}
        startIcon={startIcons}
        size="medium"  
        sx={{ color: "white", backgroundColor: `${colors}`}}
        >
        {name}
    </Button>
  )
}

export default BasicButton