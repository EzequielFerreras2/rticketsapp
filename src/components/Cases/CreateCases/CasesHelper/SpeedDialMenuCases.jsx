import React from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';



const SpeedDialMenuCases = ({updateList,setOpenCreateModal}) => {
    const actions = [
        { icon: <CachedTwoToneIcon />, name: 'Actualiza Lista', onclick: ()=>updateList()},
        { icon: <NoteAddTwoToneIcon />, name: 'Agregar Caso',onclick: ()=>setOpenCreateModal(true) }, 
      ];
  return (
    <Box sx={{ height:50, transform: 'translateZ(0px)', flexGrow: 1 }}>
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<ListTwoToneIcon />}
      direction={"left"}
      FabProps={{
        sx: {
          bgcolor: '#0d47a1',
          '&:hover': {
            bgcolor: '#1976d2',
          },
          width: 60, 
            height:60
        }
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onclick}
        />
      ))}
    </SpeedDial>
  </Box>
  )
}

export default SpeedDialMenuCases