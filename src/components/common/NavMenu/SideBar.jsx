import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainSideBarItems } from './consts/navbarItems';
import {useNavigate} from "react-router-dom";
import { Typography } from '@mui/material';


export default function SideMenu(props) {
  const navigate = useNavigate();
    const open = props.open;

  return (
    <div>
        <Divider />
        <List>
          {mainSideBarItems.filter(l=> l.hidden===false).map((item, index) => (
            <ListItem  key={item.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton  onClick={()=> navigate(item.route)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  
                }}
                
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    
                  }}

                  
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText  primary={<Typography variant='h6' >{item.label}</Typography>} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </div>
  );
}
