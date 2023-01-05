import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button } from '@mui/material';
//import FriendRequestListItem from './FriendRequestListItem';
import { fetchFriendList } from '../../Fetch/fetchFriendList';
import MessageIcon from '@mui/icons-material/Message';
import { CreateMessageList } from './MessageList';


export default function FriendList({user}) {
  const [username, setUsername] = React.useState(user);
  const [friendList, setFriendList] = React.useState(null);
  const [sender, setSender] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const friendList = await fetchFriendList(username);
      setFriendList(friendList);
      console.log(friendList);
      
    }
    fetchData();
  }
  , [username]);

  const messageListHtml = (sender) => {
    if (sender != null) {
      return (
        <CreateMessageList sender={sender} username={username} />
      ) 
    }
  }


  if (friendList == null) {
    return (
      <Box>
        <h1>Loading...</h1>
      </Box>
    );
  } else {
    //{friendList.at(0)}

    //create a FriendRequestListItem for each friend request in friendRequests
    //return a list of FriendRequestListItems
    
    return (
        <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <h1>Friend List</h1>
          {friendList.map((friend) => (
            <ListItem>
              <ListItemText primary={friend} />
              <Button variant="contained"
                      onClick={ () => 
                        setSender(friend)
                      }>
                <MessageIcon />
              </Button>
            </ListItem>
        ))}
        </List>
        {messageListHtml(sender)} 
      </div>
    );
  }
}