import React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import Cases from './Cases';

const CreateCases = () => {



    return (
        <div>
            <br/>
            <h1>Casos</h1>
           <Cases/>
           <br/>
                <Box sx={{ mt:15, transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <SpeedDial
                        ariaLabel="SpeedDial"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon openIcon={<NoteAddTwoToneIcon />} />}
                        onClick={()=>console.log("CLieck")}
                        FabProps={{
                            sx: {
                              bgcolor: '#0d47a1',
                              '&:hover': {
                                bgcolor: '#1976d2',
                              },
                              width: 80, 
                                height: 80
                            }
                          }}
                    >
                    </SpeedDial>
                </Box>
        </div>
    );
}

export default CreateCases;
