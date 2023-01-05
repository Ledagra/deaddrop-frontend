import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
//import FriendRequestListItem from './FriendRequestListItem';
import { fetchMessageList } from '../../Fetch/fetchMessageList';
import MessageIcon from '@mui/icons-material/Message';


export function CreateMessageList({username, sender}) {
  const [messageList, setMessageList] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const messageList = await fetchMessageList(username, sender);
      setMessageList(messageList);
      //convert friendRequests to array      
      
    }
    fetchData();
  }
  , [username, sender]);

  if (messageList == null) {
    return (
      <Box>
        <h1>Loading...</h1>
      </Box>
    );
  } else {

    return (

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <h1>New Messages</h1>
        {messageList.map((text) => (
          <ListItem>
            <ListItemText primary={text} />

          </ListItem>
        ))}
      </List>
    );
  }
}





// THIS CODE IS GOING TO NEED A EXPORT CREATEALLFRIENDS, CREATEPENDINGFRIENDS, CREATEADDNEWFRIENDS AND CREATEBLOCKEDFRIENDS
// AND THEN WE WILL HAVE TO IMPORT THEM INTO THE FRIENDS PAGE AND THEN RENDER THEM THERE

// WE WILL NEED TO MAKE BUTTONS FOR EACH OF THE FRIENDS AND THEN WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO ADD A FRIEND
// AND THEN WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO BLOCK A FRIEND

// WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO ADD A FRIEND

// WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO BLOCK A FRIEND
