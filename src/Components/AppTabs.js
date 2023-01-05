import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MessageBox from './Anonymous Functionality/MessageBox.js';
// import TabPanel from '@mui/lab/TabPanel';

//Icons
import GlobeIcon from '@mui/icons-material/Public';
import FriendsIcon from '@mui/icons-material/People';
import AccountIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import CreateLoginForm from './Authentication/LoginForm.js';
import FriendList from './Friends Functionality/FriendList.js';
import { PersonAdd } from '@mui/icons-material';


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

export default function AppTabs() {
  const [value, setValue] = React.useState(0);
  //create state for user logged in
  const [username, setUser] = React.useState(null);
  const [nickname, setNickname] = React.useState(null);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pull_data = (data) => {
    setUser(data.username)
    setNickname(data.nickname)
  }

  return (

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'transparent' }}>
        <Tabs value={value} 
              borderColor="transparent"
              onChange={handleChange} 
              centered>
                
          <Tab label="Send Anonymously" 
            icon={<GlobeIcon />} {...a11yProps(0)} />

          <Tab label="Account" 
            icon={<AccountIcon />} {...a11yProps(1)} />   

          <Tab label="Friends" 
            icon={<FriendsIcon />} {...a11yProps(2)} 
            disabled={(username == null) ? "true" : "false"}/>

          <Tab label="Friend Requests" 
            icon={<PersonAddIcon />} {...a11yProps(3)} 
            disabled={(username == null) ? "true" : "false"}/>

        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <MessageBox />
      </TabPanel>

      <TabPanel value={value} index={1}>
        {(username == null) ? <CreateLoginForm func={pull_data} /> : <FriendList />}

      </TabPanel>

    </Box>
  );
}