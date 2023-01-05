import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function FriendRequestListItem({username, nickname}) {
    return (
        <ListItem>
        <ListItemAvatar>
            <Avatar>
            {nickname[0]}
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={nickname}
            secondary={username}
        />
        <Button variant="contained">
            <CheckIcon />
        </Button>
        <Button variant="contained">
            <ClearIcon />
        </Button>
        </ListItem>
    );
}