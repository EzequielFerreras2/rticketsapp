import { Button } from '@mui/material'
import React from 'react'

const BasicButton = ({onClick,startIcons,colors,name,heights}) => {
  return (
    <Button
        variant='outlined'
        onClick={onClick}
        startIcon={startIcons}
        size="medium"  
        sx={{ color: "white", backgroundColor: `${colors}`, height:heights}}
        >
        {name}
    </Button>
  )
}

export default BasicButton