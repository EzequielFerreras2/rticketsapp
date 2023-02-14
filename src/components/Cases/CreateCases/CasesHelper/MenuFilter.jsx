import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchByDate from './SearchByDate';
import SearchByUser from './SearchByUser';
import SearchByPriority from './SearchByPriority';
import SearchByStatus from './SearchByStatus';

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
  const {filterbyDate,clearCasesFilter,filterByUser,filterByPriority,filterByStatus}= props;
  const rol = localStorage.getItem("rol");
  
  const handleChange = (event, newValue) => 
  {setValue(newValue);};

 



  return (
    <Box sx={{ width: '100%' }}  >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab onClick={()=>clearCasesFilter()} label="Fecha" {...a11yProps(0)} />
          {
          rol==="Admin"?
          <Tab onClick={()=>clearCasesFilter()}  label="Usuario" {...a11yProps(1)} />
          :
          <div></div>
          }  
          <Tab onClick={()=>clearCasesFilter()} label="Prioridad" {...a11yProps(2)} />
          <Tab onClick={()=>clearCasesFilter()} label="Estatus" {...a11yProps(3)} />
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
                  <SearchByUser clearCasesFilter={clearCasesFilter} filterByUser={filterByUser}/>
              </TabPanel>:
              <div>
              </div>
          } 
      {/*Buscar Por Usuario*/}

      {/*Buscar Por Prioridad */}
            <TabPanel value={value} index={2}>
              <SearchByPriority filterByPriority={filterByPriority} clearCasesFilter={clearCasesFilter}/>
            </TabPanel>
      {/*Buscar Por Prioridad */}

    {/*Buscar Por Status */}
    <TabPanel value={value} index={3}>
          <SearchByStatus clearCasesFilter={clearCasesFilter} filterByStatus={filterByStatus}/>
    </TabPanel>
    {/*Buscar Por Status */}
    </Box>
  );
}