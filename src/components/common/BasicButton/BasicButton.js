import { Button } from '@mui/material'
import React from 'react'

const BasicButton = ({onClick,startIcons,colors,name,heights,mt,mb,mr,ml,type}) => {
  return (
    <Button
        type={type}
        variant='outlined'
        onClick={onClick}
        startIcon={startIcons}
        size="medium"  
        sx={{ color: "white", backgroundColor: `${colors}`, height:heights ,mt:mt,mb:mb,mr:mr,ml:ml}}
        >
        {name}
    </Button>
  )
}

export default BasicButton