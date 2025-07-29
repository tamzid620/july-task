'use client' ;
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { fontReddit } from '@/app/config/fontsProvider';
import AllBachesTabs from './Tabs/AllBachesTabs';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
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

export default function OnlineClassess() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={` ${fontReddit.weight} lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto md:px-3 px-2 `}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', fontWeight:'bold' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Baches" {...a11yProps(0)} />
          <Tab label="Class 11" {...a11yProps(1)} />
          <Tab label="Class 12" {...a11yProps(2)} />
          <Tab label="Dropper" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AllBachesTabs/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Class 11
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       Class 12
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Dropper
      </CustomTabPanel>
    </Box>
    </div>
  );
}
