import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import moment from 'moment';
import SearchByDate from './SearchByDate';
import SearchByUser from './SearchByUser';

function TabPanel(props) {
  const { children, value, index, ...other } = props;


    
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);
  const {filterbyDate,clearCasesFilter}= props;
  const rol = localStorage.getItem("rol");
  
  const handleChange = (event, newValue) => 
  {setValue(newValue);};

 



  return (
    <Box sx={{ width: '100%' }}  >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Fecha" {...a11yProps(0)} />
          {
          rol==="Admin"?
          <Tab label="Usuario" {...a11yProps(1)} />:
          <div></div>
           }   
          <Tab label="Prioridad" {...a11yProps(2)} />
        </Tabs>
      </Box> 
{/*Buscar Por Fecha De Creacion */}
        <TabPanel value={value} index={0}>
            <SearchByDate clearCasesFilter={clearCasesFilter}  filterbyDate={ filterbyDate}/>
        </TabPanel>
{/*Buscar Por Fecha De Creacion */}

{/*Buscar Por Usuario*/}
    {
        rol==="Admin"?
        <TabPanel value={value} index={1}>
            <SearchByUser/>
        </TabPanel>:
        <div>
        </div>
    } 
{/*Buscar Por Usuario*/}

{/*Buscar Por Prioridad */}
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
{/*Buscar Por Prioridad */}
    </Box>
  );
}