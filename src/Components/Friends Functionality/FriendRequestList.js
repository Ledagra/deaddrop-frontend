import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import FriendRequestListItem from './FriendRequestListItem';
import { fetchFriendRequestList } from '../../Fetch/fetchFriendRequestList';


export function CreateFriendRequestList({user}) {
  const [username, setUsername] = React.useState(user);
  const [friendRequests, setFriendRequests] = React.useState(null);


  //return result from fetchFriendRequestList
  React.useEffect(() => {
    async function fetchData() {
      const friendRequests = await fetchFriendRequestList(username);
      setFriendRequests(friendRequests);
      //convert friendRequests to array      
      console.log(friendRequests);
      
    }
    fetchData();
  }
  , [username]);

  if (friendRequests == null) {
    return (
      <Box>
        <h1>Loading...</h1>
      </Box>
    );
  } else {
    //{friendRequests.at(0)}

    //create a FriendRequestListItem for each friend request in friendRequests
    //return a list of FriendRequestListItems
    
    return (

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <h1>Friend Requests</h1>
        {friendRequests.map((friendRequest) => (
          <ListItem>
            <ListItemText primary={friendRequest} />
              <Button variant="contained">
                <CheckIcon />
              </Button>
            <Button variant="contained">
              <ClearIcon />
            </Button>
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
