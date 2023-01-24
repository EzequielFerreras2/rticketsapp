import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Category from './Category/Category';
import SubCategory from './SubCategory/SubCategory';
import CasesCategory from '../CategoryCases/Cases/CasesCategory';
import { useCategoryCasesStore } from '../../../store/CategoryCases/useCategoryCasesStore';
import { useSubCategoryStore } from '../../../store/subcategory/useSubCategory';
import { useCateoryStore } from '../../../store/category/useCategoryStore';

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
        <Box sx={{ p: 2 }}>
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

export default function BasicTabs() {

const [value, setValue] = React.useState(0);


const {onGetCategoryCases} = useCategoryCasesStore();
const {onGetSubCategory} = useSubCategoryStore();
const {ongetCategory} = useCateoryStore();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

React.useEffect(() => {
  ongetCategory();
    onGetSubCategory();
    onGetCategoryCases(); 
}, []);

  return (
    <>
    <br/>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Tabs">
          <Tab label="Categoria" {...a11yProps(0)} />
          <Tab label="Sub Categoria" {...a11yProps(1)} />
          <Tab label="Cases" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Category />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SubCategory/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CasesCategory/>
      </TabPanel>
    </Box>
    </>
    
  );
}