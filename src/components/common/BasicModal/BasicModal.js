import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalStyles } from './styles';
import Button from '@mui/material/Button';


const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit,name,variant,colors,startIcons }) => {

    
    return (
        <Modal open={open} onClose={onClose} >
            <Box sx={modalStyles.wrapper}>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    {title}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {subTitle}
                </Typography>
                {content}
                <Box sx={modalStyles.buttons}>
                    
                    <Button
                        variant='outlined'
                        onClick={onSubmit}
                        startIcon={startIcons}
                        size="medium"  
                        sx={{ color: "white", backgroundColor: `${colors}`}}
                    >
                        {name}
                    </Button>
                    <Button onClick={onClose} variant='outlined' size="medium"  sx={{ color: "white", backgroundColor: 'Red'}} >Cancel</Button>
                    
                </Box>
            </Box>
        </Modal>
    )
}

export default BasicModal
